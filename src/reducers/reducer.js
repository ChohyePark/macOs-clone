import getDate from '../utils/helpers/getDate';

export default function reducer(state, action) {
  switch (action.type) {
    case 'dock/SELECT':
      return { ...state, dockItem: action.payload };
    case 'dock/RESET':
      return { ...state, dockItem: undefined };
    case 'date/SET':
      const date = getDate();
      return { ...state, date: date };
    case 'booting/FINISH':
      return { ...state, booting: false };
    case 'state/BOOT':
      return { ...state, booting: action.payload };
    case 'section/SELECT':
      return { ...state, section: action.payload };
    case 'wallpaper/CHANGE':
      return {
        ...state,
        settings: {
          ...state.settings,
          wallpaper: {
            open: true,
            preview: action.payload.preview,
            src: action.payload.src,
            name: action.payload.name,
            surname: action.payload.surname,
          },
        },
      };
    default:
      return state;
  }
}
