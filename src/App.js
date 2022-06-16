import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import MainMenu from './components/main-menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RouterMenu from './routers/routerMenu';
import DetailsRecipe from './components/detailsRecipe';
import { Provider } from 'react-redux';
import reducer from './store/store';
import store from './store/store';
function App() {
  return (

    <>
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <MainMenu></MainMenu>
          <RouterMenu></RouterMenu>
        </BrowserRouter>
      </Provider>
    </div>
    </>
  );
}

export default App;
