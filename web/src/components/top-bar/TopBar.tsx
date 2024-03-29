import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Button, createStyles, makeStyles, Theme } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);
export function TopBar({title}: {title: string}){
    const classes = useStyles();
    return (
        <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MoreVertIcon />
          </IconButton>
          <Typography variant="h6"  className={classes.title}>
            {title}
          </Typography>

        </Toolbar>
      </AppBar>
    )
}