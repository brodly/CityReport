import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Description from '@material-ui/icons/description';

export default class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: this.props.index,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  onMouseEnter() {
    const { handleOnMouseEnter } = this.props;
    const { index }              = this.state;

    handleOnMouseEnter(index);
  }

  render() {
    const { address, requesttype, status } = this.props.report;

    return (
      <div className="report">
        <ListItem
          button
          dense
          divider
          alignItems='center'
          onMouseEnter={this.onMouseEnter}>
          <ListItemIcon>
            <Description/>
          </ListItemIcon>
          <ListItemText
            primary={address}
            secondary={requesttype} />
          <ListSubheader
            style={{
              'color': 'rgba(25, 175, 61, 0.54)',
              'background-color': 'rgb(25, 175, 61, 0.2)',
              'line-height': '30px',
              'border-radius': '5px',
              'height': '30px',
            }}>
            {status}
          </ListSubheader>
        </ListItem>
      </div>
    );
  }
}