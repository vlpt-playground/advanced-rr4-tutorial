import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from 'shared/App';

const render = (location) => ReactDOMServer.renderToString(
    <StaticRouter location={location}>
        <App/>
    </StaticRouter>
);

export default render;