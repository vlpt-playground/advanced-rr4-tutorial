import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as usersActions from 'redux/modules/users';
import { withDone } from 'react-router-server';

class Users extends Component {
    componentWillMount() {
        // 서버사이드에서도 데이터 로딩이 작동하기 위해서, 데이터 불러오는 작업을 componentWillMount 에서 호출합니다.
        const { UsersActions, data, done } = this.props;
        if(data.length !== 0) return false; // 데이터가 이미 존재하면 재요청 하지 않음
        UsersActions.getUsers().then(done, done); // Promise 가 성공했을때, 혹은 실패했을때 done() 호출
    }
    
    render() {
        const { data } = this.props;

        // 유저 이름 목록을 생성합니다
        const userList = data.map(
            user => <li key={user.id}>{user.name}</li>
        );

        return (
            <div>
                <ul>
                    {userList}
                </ul> 
            </div>
        );
    }
}

// withDone 으로 감싸주면, done 이 호출될때까지 렌더링을 미룹니다
export default withDone(connect(
    (state) => ({
        data: state.users.data
    }),
    (dispatch) => ({
        UsersActions: bindActionCreators(usersActions, dispatch)
    })
)(Users));