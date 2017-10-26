import React, { Component} from "react";
import ReactDOM from "react-dom";
import Counter from "./components/counter.js";
import { Provider } from "react-redux";
import counterReducer from "./redux/reducers/reducers.js";
import { createStore, combineReducers,compose } from "redux";

let reducers = combineReducers({
	counterReducer
})

let store = createStore(reducers,compose(window.devToolsExtension? window.devToolsExtension():f=>f))

class Main extends Component{
	render(){
		return(
			<div>
				<Counter />
			</div>
		)
	}
}

ReactDOM.render(
	<Provider store = {store}>
		<Main/>
	</Provider>,
	document.getElementById('root')
);
