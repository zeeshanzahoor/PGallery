import React, { Component } from "react";
import { connect } from "react-redux";
import realm from '../DB/Schema';

export default function withRedux(HocComponent) {
	class Hoc extends Component {
		static navigationOptions = HocComponent.navigationOptions;
		constructor(props) {
			super(props);
		}
		render() {
			return (
				<HocComponent  {...this.props} realm={realm}></HocComponent>
			);
		}
	}
	function mapStateToProps(state) {
		return state;
	}


	const connectedPage = connect(mapStateToProps)(Hoc);
	return connectedPage;
}