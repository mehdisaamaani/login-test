import {call,put,takeEvery,takeLatest} from 'redux-saga/effects'
import { loadingAPIAction,completeAPIAction,errorAPIAction } from '../action/action'

function* fetchApi(action){
    try{
        yield put(loadingAPIAction())
        const login = yield call(getLogin,action.payload);
        console.log(login)

        yield put(completeAPIAction(login));

    }catch (e){
        yield put (errorAPIAction(e))
    }
}

function* mySaga(){
    yield takeEvery("LOGIN_FETCH_API", fetchApi)
}

export default mySaga