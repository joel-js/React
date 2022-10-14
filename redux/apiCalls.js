const redux							= require('redux');
const axios							= require('axios');
const thunkMiddleware		= require('redux-thunk').default;

const createStore				  = redux.createStore
const applyMiddleware		  = redux.applyMiddleware
const bindActionCreators  = redux.bindActionCreators

const GET_USERS_REQUEST = 'GET_USERS_REQUEST'
const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
const GET_USERS_FAILURE = 'GET_USERS_FAILURE'

const initialState = {
	loading : false,
	users   : [],
	error   : ''
}

const getUsersRequest = () => {
	return {
		type : GET_USERS_REQUEST
	}
}

const getUsersSuccess = users => {
	return {
		type 		: GET_USERS_SUCCESS,
		payload	: users	
	}
}

const getUsersFailure = errors => {
	return {
		type 		: GET_USERS_FAILURE,
		payload	: errors
	}
}

const reducer = (state = initialState, action) => {
	switch(action.type){

		case GET_USERS_REQUEST :
			return {
				...state,
				loading	: true
			}

		case GET_USERS_SUCCESS :
			return {
				loading	: false,
				users		: action.payload
			}

		case GET_USERS_FAILURE :
			return {
				loading	: false,
				users		: [],
				error		: action.payload
			}
	}
}

const getUsers = () => {

  return (dispatch) => {
    dispatch(getUsersRequest())
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then( res => {
      const users = res.data.map(user => user.id)
      dispatch(getUsersSuccess(users))
    })
    .catch( err => dispatch(getUsersFailure(err.message)))
    
  }
}


const store	= createStore(reducer,applyMiddleware(thunkMiddleware)) 
const unsubscribe = store.subscribe( () => console.log(store.getState()))
const actions = bindActionCreators({ getUsers, getUsersFailure, getUsersRequest, getUsersSuccess }, store.dispatch) 
actions.getUsers()
unsubscribe()