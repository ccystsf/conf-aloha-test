import React from 'react';
import Attendees from './Attendees.jsx';
export default React.createClass({
  loadAttendeesFromServer: function() {
    $.ajax({
      url: 'http://localhost:3000/attendees',
      dataType: 'json',
      cache: false,
      success: function(data) {
        debugger
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('http://localhost:3000/attendees', status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadAttendeesFromServer();
  },
  render: function() {
    return (
      <div className="attendee">
        <h1>Attendee</h1>
        <Attendees data={this.state.data} />
      </div>
    );
  }
})