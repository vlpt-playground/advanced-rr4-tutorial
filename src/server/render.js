import React from 'react';
import { StaticRouter } from 'react-router';
import App from 'shared/App';
import configureStore from 'redux/configureStore';
import { Provider } from 'react-redux';

/* react-router-server 의 renderToString 은 비동기로 작동하며,
   데이터 로딩도 관리해줍니다. */

import { renderToString } from 'react-router-server';

import { Helmet } from 'react-helmet';

const render = async (location) => {
    // 서버사이드에선, 매 요청마다 새 store 를 생성해주어야 합니다.
    const store = configureStore();
    const { html } = await renderToString(
        <StaticRouter location={location}>
            <Provider store={store}>
                <App/>
            </Provider>
        </StaticRouter>
    );

    // helmet 정보를 가져옵니다
    const helmet = Helmet.renderStatic();

    // 스토어 상태와, 렌더링된 문자열 결과물, 그리고 helmet 정보를 반환합니다
    return {
        html,
        state: store.getState(),
        helmet
    };
}

export default render;