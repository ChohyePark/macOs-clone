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
  }
}
