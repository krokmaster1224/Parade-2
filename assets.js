// =========================================================================
// [조선힙스터 행렬악단 V4] 외부 에셋(이미지·음원) 연동 설정 파일 (assets.js)
// =========================================================================
// * 안내: 모든 use... 값을 false로 두시면 내장된 V4 캔버스 그래픽과 Web Audio 국악 합성 엔진이 작동합니다.
// * 추후 깃허브에 직접 제작하신 이미지나 음원 파일을 업로드하신 뒤, 해당 항목만 true로 바꾸면 즉시 교체됩니다.

window.JOSEON_ASSETS = {
  // 1. 메인 타이틀 로고 이미지 연동 설정
  useCustomTitleLogo: false,
  titleLogoMain: './assets/title_logo.png',        // 타이틀 화면용 큰 로고 (권장: 800x240px PNG)
  titleLogoSmall: './assets/title_logo_small.png', // 인게임 상단용 작은 로고 (권장: 320x64px PNG)

  // 2. 연주자 캐릭터 이미지 연동 설정 (총 9종, 권장: 240x320px 투명 PNG)
  useCustomCharImages: {
    buk: false,
    janggu: false,
    kkwaeng: false,
    jing: false,
    gayageum: false,
    haegeum: false,
    taepyeongso: false,
    vocal: false,
    joseon808: false
  },
  charImages: {
    buk: './assets/char_buk.png',
    janggu: './assets/char_janggu.png',
    kkwaeng: './assets/char_kkwaeng.png',
    jing: './assets/char_jing.png',
    gayageum: './assets/char_gayageum.png',
    haegeum: './assets/char_haegeum.png',
    taepyeongso: './assets/char_taepyeongso.png',
    vocal: './assets/char_vocal.png',
    joseon808: './assets/char_joseon808.png'
  },

  // 3. 배경 시전 행랑 건물 이미지 연동 설정 (게임 내 자막 없이 순수 건물 외형만 교체됨, 권장: 260x220px 투명 PNG)
  useCustomBuildingImages: {
    tavern: false,       // 주점 이미지 파일
    silkshop: false,     // 비단·포목점 이미지 파일
    generalstore: false, // 잡화점 이미지 파일
    apothecaries: false  // 약방·다방 2층 누각 이미지 파일
  },
  buildingImages: {
    tavern: './assets/bldg_tavern.png',
    silkshop: './assets/bldg_silkshop.png',
    generalstore: './assets/bldg_generalstore.png',
    apothecaries: './assets/bldg_apothecaries.png'
  },

  // 4. 악기 연주 사운드 연동 설정 (총 9종, WAV 또는 MP3)
  useCustomAudio: {
    buk: false,
    janggu: false,
    kkwaeng: false,
    jing: false,
    gayageum: false,
    haegeum: false,
    taepyeongso: false,
    vocal: false,
    joseon808: false
  },
  audioFiles: {
    buk: './assets/buk.wav',
    janggu_kung: './assets/janggu_kung.wav',   // 장구 궁편(저음)
    janggu_ttak: './assets/janggu_ttak.wav',   // 장구 채편(고음)
    kkwaeng: './assets/kkwaeng.wav',
    jing: './assets/jing.wav',                 // 징 (긴 서스테인 저음)
    gayageum: './assets/gayageum_d4.wav',
    haegeum: './assets/haegeum_d4.wav',
    taepyeongso: './assets/taepyeongso_d4.wav',
    vocal: './assets/vocal_d4.wav',            // 소리꾼 판소리 창 샘플
    joseon808_kick: './assets/808_kick.wav',
    joseon808_snare: './assets/808_snare.wav',
    joseon808_hat: './assets/808_hat.wav'
  }
};
