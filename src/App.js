import logo from './logo.svg';
import NavBar from './components/NavBar/NavBar';
import Page from './components/Page/Page';
import './App.css';
import reducer from './reducers/reducer';
import initialState from './reducers/initialState';
import { createContext, useContext, useEffect, useReducer } from 'react';
import Dock from './components/Dock/Dock';
import WallPaperMenu from './components/WallpaperMenu/WallPaperMenu';
import { use } from 'react';

export const store = createContext(null);

const StoreProvider = ({ children }) => {
  return (
    <store.Provider value={useReducer(reducer, initialState)}>
      {children}
    </store.Provider>
  );
};

function App() {
  return (
    <StoreProvider>
      <AppContent />
    </StoreProvider>
  );
}

function AppContent() {
  const [state, dispatch] = useContext(store);
  return (
    <Page>
      <NavBar />
      <WallPaperMenu />
      <Dock />
    </Page>
  );
}

export default App;
