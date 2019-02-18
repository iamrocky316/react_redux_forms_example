import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { combineForms } from 'react-redux-form';
import { reducer as formReducer } from 'react-redux-form';



//initial state start
const initialUserState = {
    username: 'jasonmalfatto@moduscreate.com',
    password: '',
    passwordConfirm: '',
};
//initial state end

const rootReducer = combineReducers({
    form: formReducer,
    ...combineForms({
        user: initialUserState,
    })
});
//store creation start
export default createStore(rootReducer, applyMiddleware(thunk));
//store creation end