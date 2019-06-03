import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function ButtonAppBar() {
  const classes = useStyles();

  const onSubmitClick = e => {
    e.preventDefault();
    document.querySelector(".submit-form").style.display = "block"
  }

  const onLoginClick = e => {
    e.preventDefault();
  }

  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            CityReport
          </Typography>
          <Button color="inherit" onClick={onSubmitClick}>Create New Service Request</Button>
          <Button color="inherit" onClick={onLoginClick}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ButtonAppBar;
