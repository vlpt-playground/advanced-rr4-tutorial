const Koa = require('koa');
const serve = require('koa-static');
const path = require('path');

const app = new Koa();

const render = require('./render');


// 경로가 / 일시에 index.html 을 전달하는게 아닌, 서버사이드 렌더링 작업을 합니다
app.use((ctx, next) => {
    if(ctx.path === '/') return render(ctx);
    return next();
});
// 파일을 요청 받으면 build 내부의 파일들을 반환합니다
app.use(serve(path.resolve(__dirname, '../build/')));
// 요청받은 경로가 파일들이 아니라면, 해당 경로를 위한 서버사이드 렌더링을 해줍니다
app.use(render);

app.listen(3001);