import React, { Component } from "react";
import { connect } from "react-redux";
import { addOneAct, minusOneAct } from '../redux/reducers/reducers.js';

class Counter extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
				{this.props.counter.counter}
				<button className = "add-button" onClickCapture = {this.props.addOneAct}> + </button>
				<button className = "minus-button" onClickCapture = {this.props.minusOneAct}> - </button>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		counter : state.counterReducer
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addOneAct: () => dispatch(addOneAct()),
		minusOneAct : () => dispatch(minusOneAct())
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
