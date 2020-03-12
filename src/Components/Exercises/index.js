import React, { Fragment } from "react";
import {
	Grid,
	Paper,
	Typography,
	List,
	ListItem,
	ListItemText
} from "@material-ui/core/";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";
import { withStyles } from '@material-ui/core/styles';
import Form from "./Form";

const styles = theme => ({
	Paper: {
		padding: 20,
		maginTop: 5,
		height: 500,
		overflow: "auto"
	}
})

export default withStyles(styles)(
	({
		classes,
		muscles,
		exercises,
		category,
		editMode,
		onSelect,
		exercise,
		exercise: {
			id,
			title = "Welcome!",
			description = "Please select an exercises from the list on the left."
		},
		onDelete,
		onSelectEdit,
		onEdit
	}) => (
		<Grid container>
			<Grid item xs={12} sm={6}>
				<Paper className={classes.Paper}>
					{exercises.map(([group, exercises]) =>
						!category || category === group ? (
							<Fragment key={group}>
								<Typography
									variant="h5"
									style={{ textTransform: "capitalize" }}
								>
									{group}
								</Typography>
								<List
									component="ul"
									aria-label="secondary mailbox folders"
								>
									{exercises.map(({ id, title }) => (
										<ListItem
											key={id}
											button
											onClick={() => onSelect(id)}
										>
											<ListItemText primary={title} />
											<ListItemSecondaryAction>
												<IconButton
													onClick={() => onSelectEdit(id)}
												>
													<Edit />
												</IconButton>
												<IconButton
													onClick={() => onDelete(id)}
												>
													<DeleteIcon />
												</IconButton>
											</ListItemSecondaryAction>
										</ListItem>
									))}
								</List>
							</Fragment>
						) : null
					)}
				</Paper>
			</Grid>
			<Grid item xs={12} sm={6}>
				<Paper className={classes.Paper}>
					{editMode ? (
						<Form
							exercise={exercise}
							muscles={muscles}
							onSubmit={onEdit}
						/>
					) : (
						<Fragment>
							<Typography variant="body1">{title}</Typography>
							<Typography variant="body2" style={{ maringTop: 20 }}>
								{description}
							</Typography>
						</Fragment>
					)}
				</Paper>
			</Grid>
		</Grid>
	)
)