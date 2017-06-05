import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'shared/App';
import store from 'redux/store';
import { Provider } from 'react-redux';

const Root = () => (
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);

export default Root;