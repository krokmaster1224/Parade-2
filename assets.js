// ==========================================
// [조선힙스터 행렬악단 V3] 에셋 및 사운드 관리 파일 (assets.js)
// ==========================================

const GAME_ASSETS = {
    // 나중에 이미지를 깃허브에 올리신 후, useCustomImages를 true로 바꾸면 이미지가 적용됩니다.
    useCustomImages: false,
    images: {
        titleLogo: "./title_logo.png",
        buk: "./char_buk.png",
        kkwaeng: "./char_kkwaeng.png",
        gayageum: "./char_gayageum.png",
        haegeum: "./char_haegeum.png",
        taepyeongso: "./char_taepyeongso.png"
    },

    // 나중에 음원 파일(mp3/wav)을 깃허브에 올리신 후, useCustomAudio를 true로 바꾸면 실제 음원이 재생됩니다.
    // false일 때는 아래에 내장된 웹 신디사이저 소리가 정상적으로 재생됩니다.
    useCustomAudio: false,
    audioFiles: {
        buk: "./sound_buk.mp3",
        kkwaeng: "./sound_kkwaeng.mp3",
        gayageum: "./sound_gayageum.mp3",
        haegeum: "./sound_haegeum.mp3",
        taepyeongso: "./sound_taepyeongso.mp3"
    }
};

// ==========================================
// 내장 오디오 엔진 (커스텀 파일 적용 전까지 소리가 나도록 보장하는 시스템)
// ==========================================
class SoundEngine {
    constructor() {
        this.ctx = null;
        this.isPlaying = false;
        this.loopInterval = null;
        this.step = 0;
        this.bpm = 120; // 기본 템포
        this.rhythmMode = 'jajinmori'; // 기본 장단
        this.customAudioElements = {};
    }

    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContext();
        }
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }

        // 커스텀 오디오 모드일 경우 오디오 태그 미리 로드
        if (GAME_ASSETS.useCustomAudio) {
            for (const [key, path] of Object.entries(GAME_ASSETS.audioFiles)) {
                if (!this.customAudioElements[key]) {
                    const audio = new Audio(path);
                    audio.loop = true;
                    this.customAudioElements[key] = audio;
                }
            }
        }
    }

    startLoop(getActiveInstrumentsCallback) {
        this.init();
        this.stopLoop();
        this.isPlaying = true;
        this.step = 0;

        if (GAME_ASSETS.useCustomAudio) {
            // 커스텀 오디오 파일 재생 루프 동기화
            this.loopInterval = setInterval(() => {
                this.syncCustomAudio(getActiveInstrumentsCallback());
            }, 200);
        } else {
            // 기본 내장 웹 신디사이저 루프 (16분음표 간격 = 125ms)
            const stepTime = (60 / this.bpm) * 1000 / 4;
            this.loopInterval = setInterval(() => {
                const activeInsts = getActiveInstrumentsCallback();
                this.playSynthStep(this.step, activeInsts);
                this.step = (this.step + 1) % 16;
            }, stepTime);
        }
    }

    stopLoop() {
        this.isPlaying = false;
        if (this.loopInterval) {
            clearInterval(this.loopInterval);
            this.loopInterval = null;
        }
        if (GAME_ASSETS.useCustomAudio) {
            for (const audio of Object.values(this.customAudioElements)) {
                audio.pause();
                audio.currentTime = 0;
            }
        }
    }

    syncCustomAudio(activeKeys) {
        for (const [key, audio] of Object.entries(this.customAudioElements)) {
            if (activeKeys.includes(key)) {
                if (audio.paused && this.isPlaying) {
                    audio.play().catch(e => console.log(e));
                }
                audio.muted = false;
            } else {
                audio.muted = true;
            }
        }
    }

    // 얼씨구 추임새 효과음
    playChant() {
        this.init();
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.15);
        osc.frequency.exponentialRampToValueAtTime(660, now + 0.3);

        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.35);
    }

    // 내장 신디사이저 악기별 사운드 합성
    playSynthStep(step, activeKeys) {
        if (!this.ctx || activeKeys.length === 0) return;
        const now = this.ctx.currentTime;

        // 1. 북 (Buk) - 묵직한 로우 킥/탐 사운드
        if (activeKeys.includes('buk')) {
            if (step === 0 || step === 6 || step === 8 || step === 12) {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(step === 0 ? 110 : 85, now);
                osc.frequency.exponentialRampToValueAtTime(35, now + 0.2);
                gain.gain.setValueAtTime(0.5, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start(now);
                osc.stop(now + 0.25);
            }
        }

        // 2. 꽹과리 (Kkwaeng) - 금속성 하이톤 리듬
        if (activeKeys.includes('kkwaeng')) {
            if (step % 2 === 0 || step === 3 || step === 11 || step === 15) {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'square';
                osc.frequency.setValueAtTime(step % 4 === 0 ? 1200 : 950, now);
                gain.gain.setValueAtTime(0.12, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start(now);
                osc.stop(now + 0.08);
            }
        }

        // 3. 가야금 (Gayageum) - 펜타토닉 뜯는 현악음
        if (activeKeys.includes('gayageum')) {
            const notes = [261.63, 0, 311.13, 349.23, 392.00, 0, 466.16, 392.00, 523.25, 0, 392.00, 349.23, 311.13, 0, 261.63, 311.13];
            const freq = notes[step];
            if (freq > 0) {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(freq, now);
                gain.gain.setValueAtTime(0.25, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.22);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start(now);
                osc.stop(now + 0.22);
            }
        }

        // 4. 해금 (Haegeum) - 서정적이고 통통 튀는 활대 선율
        if (activeKeys.includes('haegeum')) {
            const notes = [0, 523.25, 0, 622.25, 698.46, 0, 783.99, 0, 698.46, 622.25, 0, 523.25, 0, 466.16, 523.25, 0];
            const freq = notes[step];
            if (freq > 0) {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(freq * 0.98, now);
                osc.frequency.linearRampToValueAtTime(freq, now + 0.08);
                gain.gain.setValueAtTime(0.12, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.18);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start(now);
                osc.stop(now + 0.18);
            }
        }

        // 5. 태평소 (Taepyeongso) - 강렬한 고음 리드 사운드
        if (activeKeys.includes('taepyeongso')) {
            if (step === 0 || step === 4 || step === 8 || step === 10 || step === 12) {
                const freqs = { 0: 783.99, 4: 932.33, 8: 1046.50, 10: 932.33, 12: 783.99 };
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(freqs[step], now);
                gain.gain.setValueAtTime(0.15, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start(now);
                osc.stop(now + 0.25);
            }
        }
    }
}

const soundEngine = new SoundEngine();
