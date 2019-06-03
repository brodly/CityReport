import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import grey from '@material-ui/core/colors/grey';
import { Filter } from './';

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(1),
  },
  paper: {
    position: 'absolute',
    zIndex: '2',
    padding: '20px',
    width: '200px',
    top: 45,
    right: 0,
    left: 25,
  },
  button: {
    border: '1px solid rgba(0, 0, 0, 0.12)',
  },
});

class ClickAway extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

    this.handleClick     = this.handleClick.bind(this);
    this.handleClickAway = this.handleClickAway.bind(this);
    this.handleFilter    = this.handleFilter.bind(this);
  }

  handleClick(state) {
    this.setState(state => ({
      open: !this.state.open,
    }));
  };

  handleClickAway() {
    this.setState({
      open: false,
    });
  };

  handleFilter(data) {
    const { handleFilter } = this.props;
    handleFilter(data);
    this.handleClick();
  }

  render() {
    const { classes } = this.props;
    const { open }    = this.state;

    return (
      <div className={classes.root}>
        <ClickAwayListener onClickAway={this.handleClickAway}>
          <div>
            <Button className={classes.button} onClick={this.handleClick}>Filter Service Requests</Button>
            {open ? (
              <Paper className={classes.paper}>
                <Filter handleFilter={this.handleFilter} handleClick={this.handleClick}/>
              </Paper>
            ) : null}
          </div>
        </ClickAwayListener>
      </div>
    );
  }
}

export default withStyles(styles)(ClickAway);