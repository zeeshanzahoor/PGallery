import React, { Component } from "react";
import { connect } from "react-redux";

export default function withRedux(HocComponent, styles) {
	class Hoc extends Component {
		constructor(props) {
			super(props);
		}
		render() {
			return (
				<HocComponent  {...this.props}></HocComponent>
			);
		}
	}
	function mapStateToProps(state) {
		return state;
	}

	const connectedPage = connect(mapStateToProps)(Hoc);
	return connectedPage;
}