import React from 'react';
import axios from 'axios';
import List from '@material-ui/core/List';
import {
  MapContainer,
  SubmitForm,
  Topbar,
  Report,
  Search,
 } from './components';

const defaultData = [
  'requesttype=Single Streetlight Issue',
  'requesttype=Homeless Encampment',
];

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    }

    this.fetchData    = this.fetchData.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  fetchData(data) {
    if (data && data.length > 0) {
      data = data.join("" + '&');

      axios.get(`/search?${data}`)
      .then(res => { this.setState({ data: res.data }); })
      .catch(err => { throw err });
    } else {
      this.setState({ data: [] })
    }
  }

  handleFilter(data) {
    this.fetchData(data)
  }

  componentDidMount() {
    this.fetchData(defaultData);
  }

  render() {
    const { data, selectedListItem } = this.state;

    return (
      <div className="main">
        <Topbar />
        <SubmitForm docs={data}/>
        <MapContainer docs={data}/>
        <div className="sidebar">
          <List dense>
            <Search handleFilter={this.handleFilter}/>
            {data.map((report, index) => (<Report key={report._id} report={report} />))}
          </List>
        </div>
      </div>
    );
  }
}
