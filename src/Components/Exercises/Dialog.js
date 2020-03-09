import React, { Component, Fragment } from "react";
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText
} from "@material-ui/core/";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Form from "./Form";

export default class extends Component {
	state = {
		open: false
	};

	handleToggle = () => {
		this.setState({
			open: !this.state.open
		});
	};

	handleFormSubmit = exercise => {
		this.handleToggle();

		this.props.onCreate(exercise);
	};

	render() {
		const { open } = this.state,
			{ muscles } = this.props;

		return (
			<Fragment>
				<Fab aria-label="add" size="small" onClick={this.handleToggle}>
					<AddIcon />
				</Fab>
				<Dialog
					open={open}
					onClose={this.handleToggle}
					aria-labelledby="form-dialog-title"
				>
					<DialogTitle>Create a New Exercise</DialogTitle>
					<DialogContent>
						<DialogContentText>
							Please fill out the form below.
						</DialogContentText>
						<Form
							muscles={muscles}
							onSubmit={this.handleFormSubmit}
						/>
					</DialogContent>
				</Dialog>
			</Fragment>
		);
	}
}
