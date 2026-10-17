// =========================================================================
// [조선힙스터 행렬악단 V3] 외부 에셋(이미지·음원) 연동 설정 파일 (assets.js)
// =========================================================================
// * 안내: 처음에는 모든 use... 값을 false로 두시면 기존 V2의 사운드와 그래픽이 그대로 작동합니다.
// * 추후 깃허브에 이미지나 음원 파일을 업로드하신 뒤, 해당 항목만 true로 바꾸면 즉시 교체됩니다.

window.JOSEON_ASSETS = {
  // 1. 메인 타이틀 로고 이미지 연동 설정
  useCustomTitleLogo: false,
  titleLogoMain: './assets/title_logo.png',        // 타이틀 화면용 큰 로고 (권장: 800x240px PNG)
  titleLogoSmall: './assets/title_logo_small.png', // 인게임 상단용 작은 로고 (권장: 320x64px PNG)

  // 2. 연주자 캐릭터 이미지 연동 설정 (개별 적용 가능, 권장: 240x320px 투명 PNG)
  useCustomCharImages: {
    buk: false,
    kkwaeng: false,
    gayageum: false,
    haegeum: false,
    taepyeongso: false,
    joseon808: false
  },
  charImages: {
    buk: './assets/char_buk.png',
    kkwaeng: './assets/char_kkwaeng.png',
    gayageum: './assets/char_gayageum.png',
    haegeum: './assets/char_haegeum.png',
    taepyeongso: './assets/char_taepyeongso.png',
    joseon808: './assets/char_joseon808.png'
  },

  // 3. 악기 연주 사운드(가상악기 추출 음원) 연동 설정 (개별 적용 가능, WAV 또는 MP3)
  // * false일 때는 기존의 Web Audio 국악 합성 엔진이 정상적으로 소리를 냅니다.
  useCustomAudio: {
    buk: false,
    kkwaeng: false,
    gayageum: false,
    haegeum: false,
    taepyeongso: false,
    joseon808: false
  },
  audioFiles: {
    buk: './assets/buk.wav',
    kkwaeng: './assets/kkwaeng.wav',
    gayageum: './assets/gayageum_d4.wav',       // D4(레) 기준 단발 샘플 권장
    haegeum: './assets/haegeum_d4.wav',         // D4(레) 기준 단발 샘플 권장
    taepyeongso: './assets/taepyeongso_d4.wav', // D4(레) 기준 단발 샘플 권장
    joseon808_kick: './assets/808_kick.wav',
    joseon808_snare: './assets/808_snare.wav',
    joseon808_hat: './assets/808_hat.wav'
  }
};
