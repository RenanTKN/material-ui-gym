import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core/';

const styles = theme => ({
	FormControl: {
		width: 300
	}
})

export default withStyles(styles)(class extends Component {
	state = this.getInitState();

	getInitState() {
		const { exercise } = this.props

		return exercise ? exercise : {
			title: '',
			description: '',
			muscles: ''
		}
	}

	static getDerivedStateFromProps({ exercise }) {
		return exercise || null
	}
	/*componentWillReceiveProps({ exercise }) {
		this.setState({
			...exercise
		})
	}*/

	handleChange = name => ({ target: { value } }) =>
		this.setState({
			[name]: value
		})

	handleSubmit = () => {
		this.props.onSubmit({
			id: this.state.title.toLocaleLowerCase().replace(/ /g, '-'),
			...this.state
		})

		this.setState(this.getInitState())
	}

	render() {
		const { title, description, muscles } = this.state, 
			  { classes, exercise, muscles: categories } = this.props;

		return <form>
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
			<br/>
			<Button
				color="primary"
				variant="contained"
				onClick={this.handleSubmit}>
				{exercise ? 'Edit' : 'Create' }
			</Button>
		</form>
	}
})