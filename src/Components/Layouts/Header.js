import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core/";
import CreateDialog from "../Exercises/Dialog";

export default ({ muscles, onExerciseCreate }) => (
	<AppBar position="static">
		<Toolbar>
			<Typography variant="body1" color="inherit" style={{ flex: 1 }}>
				Exercise Database
			</Typography>
			<CreateDialog muscles={muscles} onCreate={onExerciseCreate} />
		</Toolbar>
	</AppBar>
);
