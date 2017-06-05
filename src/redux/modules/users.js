import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';

import * as api from 'lib/api';

// 액션 타입
const GET_USERS = 'users/GET_USERS';

// 액션 생성자
export const getUsers = createAction(GET_USERS, api.getUsers);

// 초기 상태
const initialState = {
    data: []
};

export default handleActions({
    ...pender({
        type: GET_USERS, 
        onSuccess: (state, action) => {
            return {
                data: action.payload.data
            }
        }
    })
}, initialState);