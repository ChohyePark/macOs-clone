import getDate from '../utils/helpers/getDate';
import initialState from './initialState';

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
    default:
      return initialState;
  }
}
