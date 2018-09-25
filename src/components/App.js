import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from '../redux/configureStore';
import Main from './Main';

const store = ConfigureStore();

const App = (props) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Main />
            </BrowserRouter>
        </Provider>
    );
}

export default App;