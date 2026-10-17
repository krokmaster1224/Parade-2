// =========================================================================
// [조선힙스터 행렬악단 V4] 외부 에셋(이미지·음원·건물) 연동 설정 파일 (assets.js)
// =========================================================================
// * 안내: 기본값(false) 상태에서는 내장된 캔버스 아트워크와 Web Audio 국악 신디사이저가 즉시 작동합니다.
// * 추후 깃허브에 직접 제작한 이미지/음원 파일을 업로드한 뒤 해당 스위치만 true로 변경하세요.

window.JOSEON_ASSETS = {
  // 1. 메인 타이틀 로고 이미지 연동 설정
  useCustomTitleLogo: false,
  titleLogoMain: './assets/title_logo.png',        // 타이틀 화면용 큰 로고 (권장: 800x240px PNG)
  titleLogoSmall: './assets/title_logo_small.png', // 인게임 상단용 작은 로고 (권장: 320x64px PNG)

  // 2. 연주자 캐릭터 9종 이미지 연동 설정 (권장: 240x320px 투명 PNG)
  useCustomCharImages: {
    buk: false,
    kkwaeng: false,
    gayageum: false,
    haegeum: false,
    taepyeongso: false,
    joseon808: false,
    janggu: false,
    jing: false,
    vocal: false
  },
  charImages: {
    buk: './assets/char_buk.png',
    kkwaeng: './assets/char_kkwaeng.png',
    gayageum: './assets/char_gayageum.png',
    haegeum: './assets/char_haegeum.png',
    taepyeongso: './assets/char_taepyeongso.png',
    joseon808: './assets/char_joseon808.png',
    janggu: './assets/char_janggu.png',
    jing: './assets/char_jing.png',
    vocal: './assets/char_vocal.png'
  },

  // 3. 종로 시전 행랑 건물 5종 이미지 연동 설정 (권장: 260x180px 투명 PNG, 게임 내 자막 없음)
  useCustomBuildingImages: {
    tavern: false,       // 주점 (술독과 청사초롱이 있는 기와집)
    silkshop: false,     // 비단전 (색동 비단 필이 걸린 시전)
    generalstore: false, // 잡화점 (짚신·소쿠리 등 만물이 진열된 행랑)
    pharmacy: false,     // 약방 (약초 주머니와 약장이 보이는 한약방)
    teahouse: false      // 다방/다실 (격자 창호와 찻상이 있는 2층 누각풍 건물)
  },
  buildingImages: {
    tavern: './assets/building_tavern.png',
    silkshop: './assets/building_silkshop.png',
    generalstore: './assets/building_generalstore.png',
    pharmacy: './assets/building_pharmacy.png',
    teahouse: './assets/building_teahouse.png'
  },

  // 4. 악기 연주 사운드 9종 연동 설정 (WAV 또는 MP3)
  useCustomAudio: {
    buk: false,
    kkwaeng: false,
    gayageum: false,
    haegeum: false,
    taepyeongso: false,
    joseon808: false,
    janggu: false,
    jing: false,
    vocal: false
  },
  audioFiles: {
    buk: './assets/buk.wav',
    kkwaeng: './assets/kkwaeng.wav',
    gayageum: './assets/gayageum_d4.wav',
    haegeum: './assets/haegeum_d4.wav',
    taepyeongso: './assets/taepyeongso_d4.wav',
    joseon808_kick: './assets/808_kick.wav',
    joseon808_snare: './assets/808_snare.wav',
    joseon808_hat: './assets/808_hat.wav',
    janggu_kung: './assets/janggu_kung.wav', // 장구 궁편(저음)
    janggu_ki: './assets/janggu_ki.wav',     // 장구 채편(고음)
    jing: './assets/jing.wav',               // 징 (긴 서스테인 저음)
    vocal: './assets/vocal_d4.wav'           // 소리꾼 창(판소리 D4 기준 샘플)
  }
};
