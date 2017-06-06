import configureStore from './configureStore';

// 클라이언트에서만 사용됨
export default configureStore(window.__PRELOADED_STATE__);