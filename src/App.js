import logo from './logo.svg';
import NavBar from './components/NavBar/NavBar';
import Page from './components/Page/Page';
import './App.css';
import reducer from './reducers/reducer';
import initialState from './reducers/initialState';
import { createContext, useReducer } from 'react';
import Dock from './components/Dock/Dock';

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
      <Page>
        <NavBar />

        <Dock />
      </Page>
    </StoreProvider>
  );
}

export default App;
