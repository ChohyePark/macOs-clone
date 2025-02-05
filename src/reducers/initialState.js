const initialState = {
  weather: {
    forecast: [], // 날씨 예보 데이터 (배열 형태)
  },
  loading: false, // 로딩 상태
  failed: false, // 요청 실패 여부
  query: '', // 검색어 상태
  section: 'none', // 현재 선택된 섹션
  selected: undefined, // 선택된 특정 날씨 데이터
  dockItem: undefined, // Dock에 선택된 아이템
  date: '', // 날짜 정보
  booting: true, // 부팅 상태
  soundPlayed: false, // 사운드 재생 여부
  settings: {
    open: false, // 설정창 열림 여부
    color: '', // 색상 설정
    animations: true, // 애니메이션 활성화 여부
    notch: true, // 노치 표시 여부
    wallpaper: null,
    runday: {
      open: false,
    },
    email: {
      oepn: false,
    },
  },
  onTop: [], // 최상위에 있는 요소들 (배열)
};

export default initialState;
