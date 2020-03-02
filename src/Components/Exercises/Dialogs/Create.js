import React, { Component, Fragment } from 'react';
import { Dialog, Button, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core/';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	FormControl: {
		width: 500
	}
})

export default withStyles(styles)(class extends Component {
	state = {
		open: false,
		exercise: {
			title: '',
			description: '',
			muscles: ''
		}
	}

	handleToggle = () => {
		this.setState({
			open: !this.state.open
		});
	}

	handleChange = name => ({ target: { value } }) => {
		this.setState({
			exercise: {
				...this.state.exercise,
				[name]: value
			}
		})
	}

	handleSubmit = () => {
		const { exercise } = this.state;
		
		this.props.onCreate({
			...exercise,
			id: exercise.title.toLocaleLowerCase().replace(/ /g, '-')
		});

		this.setState({
			open: false,
			exercise: {
				title: '',
				description: '',
				muscles: ''
			}
		})
	}

	render() {
		const { open, exercise: { title, description, muscles} } = this.state,
		{ classes, muscles: categories } = this.props;

		return (
			<Fragment>
				<Button onClick={this.handleToggle}>
					<Fab aria-label="add"  size="small">
						<AddIcon />
					</Fab>
				</Button>
				<Dialog open={open} onClose={this.handleToggle} aria-labelledby="form-dialog-title">
					<DialogTitle id="form-dialog-title">
						Create a New Exercise
					</DialogTitle>
					<DialogContent>
						<DialogContentText>
							Please fill out the form below.
						</DialogContentText>
						<form>
							<TextField
								label="Title"
								value={title}
								onChange={this.handleChange('title')}
								className={classes.FormControl}
							/>
							<br/>
							<FormControl className={classes.FormControl}>
								<InputLabel id="demo-simple-select-label">
									Muscles
								</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={muscles}
									onChange={this.handleChange('muscles')}
								>
									{categories.map(category =>
										<MenuItem key={category} value={category}>
											{category}
										</MenuItem>
									)}
									<MenuItem value={20}>Twenty</MenuItem>
									<MenuItem value={30}>Thirty</MenuItem>
								</Select>
							</FormControl>
							<br/>
							<TextField
								label="Description"
								value={description}
								multiline
								rows="4"
								onChange={this.handleChange('description')}
								className={classes.FormControl}
							/>
						</form>
					</DialogContent>
					<DialogActions>
						<Button
							color="primary"
							variant="contained"
							onClick={this.handleSubmit}>
							Create
						</Button>
					</DialogActions>
				</Dialog>
			</Fragment>
		);
	}
})