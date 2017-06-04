import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Posts } from 'pages';
import Menu from 'components/Menu';

class App extends Component {

    state = {
        SplitMe: null
    }

    showSplitMe = () => {
        // 비동기적으로 코드를 불러옵니다. 함수의 결과는 Promise 를 반환합니다.
        // import() 는 모듈의 전체 네임스페이스를 불러오므로, default 를 직접 지정해주어야합니다.
        import('components/SplitMe').then(({default: Component}) => {
            // 불러오고 난 다음엔 컴포넌트를 state 에 집어넣습니다.
            this.setState({
                SplitMe: Component
            });
        });
    }

    render() {
        const { SplitMe } = this.state; // state 에 담겨있는 SplitMe 에 대한 레퍼런스를 만들고
        
        return (
            <div>
                <Menu/>
                { SplitMe && <SplitMe/> /* SplitMe 가 유효하면 렌더링을 해줍니다 */}
                <button onClick={this.showSplitMe}>ClickMe</button>
                <Route exact path="/" component={Home}/>
                <Route path="/posts" component={Posts}/>
                <Switch>
                    <Route path="/about/:name" component={About}/>
                    <Route path="/about" component={About}/>
                </Switch>
            </div>
        );
    }
}

export default App;