import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox'

class Filter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      requesttype: {
        'Graffiti Removal': false,
        'Single Streetlight Issue': false,
        'Multiple Streetlight Issue': false,
        'Homeless Encampment': false,
        'Other': false,
      },
      status: {
        Open: true,
        Closed: true,
        Cancelled: true,
      },
    };

    this.useStyles    = this.useStyles.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClose  = this.handleClose.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleChange(type, name) {
    return (event) => {
      this.setState({
        ...this.state,
        [type]: {
          ...this.state[type],
          [name]: event.target.checked,
        },
      });
    };
  };

  handleFilter() {
    const { state }        = this;
    const { handleFilter } = this.props;

    let result = [];
    for (let key in state) {
      for (let value in state[key]) {
        if (state[key][value]) {
          result.push(`${key}=${value}`);
        }
      }
    }

    handleFilter(result);
  }

  handleClose() {
    const { handleClick} = this.props;
    handleClick();
  }

  useStyles() {
    return makeStyles(theme => ({
      root: {
        display: 'flex',
      },
      formControl: {
        margin: theme.spacing(1),
      },
    }));
  }

  render() {
    const { useStyles: classes }  = this;
    const { requesttype, status } = this.state;

    return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel>Issue</FormLabel>
        <FormGroup>
          <div>
            {Object.keys(requesttype).map((request, index) => (
              <FormControlLabel
                key={index}
                label={request}
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                    fontSize="small"
                    checked={requesttype[request]}
                    onChange={this.handleChange('requesttype', request)}
                    value={request}
                    color='primary'/>
              }/>
            ))}
          </div>
        </FormGroup>
        <br/>
        <FormLabel>Ticket Status</FormLabel>
        <FormGroup>
          <div>
            {Object.keys(status).map((s, index) => (
              <FormControlLabel
                key={index}
                label={s}
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                    fontSize="small"
                    checked={status[s]}
                    onChange={this.handleChange('status', s)}
                    value={s}
                    color='primary'/>
              }/>
            ))}
          </div>
        </FormGroup>
        <br/>
        <div className="footer">
          <Button edge='start' color="primary" variant="contained" size="small" onClick={this.handleFilter}>Filter</Button>
          <Button edge='end' color="secondary" size="small" onClick={this.handleClose}>Close</Button>
        </div>
      </FormControl>
    </div>
  );
  }
}

export default Filter;