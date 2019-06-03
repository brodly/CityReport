import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Description from '@material-ui/icons/description';

const createSubHeaderStyle = (status) => {
  const style = {
    lineHeight: '30px',
    borderRadius: '5px',
    height: '30px',
  };

  const statusStyle = {
    Open: {
      color: 'rgba(25, 175, 61, 0.54)',
      backgroundColor: 'rgb(25, 175, 61, 0.2)',
    },
    Closed: {
      color: 'rgba(244, 67, 54, 0.73)',
      backgroundColor: 'rgba(245, 0, 87, 0.08)',
    },
    Cancelled: {
      backgroundColor: 'rgba(0,0,0,.1)',
      color: 'rgba(0,0,0,.4)',
    },
  };

  return Object.assign(style, statusStyle[status])
}

const Report = ({ report }) => {
  const { address, requesttype, status } = report;

  return (
    <div className="report">
      <ListItem button dense divider alignItems='center'>
        <ListItemIcon>
          <Description/>
        </ListItemIcon>
        <ListItemText primary={address} secondary={requesttype} />
        <ListSubheader style={createSubHeaderStyle(status)}>
          {status}
        </ListSubheader>
      </ListItem>
    </div>
  );
};

export default Report;
