export default function reducer(state, action) {
  switch (action.type) {
    case 'dock/SELECT':
      console.log(action.payload);
      return { ...state, dockItem: action.payload };
  }
}
