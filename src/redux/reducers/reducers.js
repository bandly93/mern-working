//initialState 

let initialState = {
	counter : 0
}

//ACTIONS
export const addOneAct = () =>{
	return {
		type : 'ADD_ONE'	
	}
}

export const minusOneAct = () =>{
	return {
		type : 'MINUS_ONE'
	}
}

//REDUCERS

export const counterReducer = (state = initialState, action) => {
	switch (action.type){
		case 'ADD_ONE':
			return {
				counter: state.counter + 1
			}
		case 'MINUS_ONE':
			return {
				counter: state.counter - 1
			}
		default:
			return state; 
	}
}

export default counterReducer;

