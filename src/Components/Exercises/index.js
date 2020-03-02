import React, { Fragment } from 'react';
import { Grid, Paper, Typography, List, ListItem, ListItemText } from '@material-ui/core/';

const styles = {
	Paper: {
		padding: 20,
		maginTop: 10,
		marginBottom: 10,
		height: 500,
		overflow: 'auto'
	}
}

export default ({
	exercises,
	category,
	onSelect,
	exercise: {
		id,
		title = 'Welcome!',
		description = 'Please select an exercises from the list on the left.'
	}
}) =>
	<Grid container>
		<Grid item sm>
			<Paper style={ styles.Paper }>
				{exercises.map(([group, exercises]) =>
					!category || category === group
						?	<Fragment key={group}>
								<Typography
									variant="body1"
									style={{ textTransform: 'capitalize' }}
								>
									{group}
								</Typography>
								<List component="ul" aria-label="secondary mailbox folders">
									{exercises.map(({ id, title }) =>
										<ListItem
											key={id}
											button
											onClick={() => onSelect(id)}
										>
											<ListItemText primary={title}/>
										</ListItem>
									)}
								</List>
							</Fragment>
						: null
				)}
			</Paper>
		</Grid>
		<Grid item sm>
			<Paper style={styles.Paper}>
				<Typography variant="body1">
					{title}
				</Typography>
				<Typography variant="body2" style={{ maringTop: 20}}>
					{description}
				</Typography>
			</Paper>
		</Grid>
	</Grid>