import React from 'react';
import Attendee from './Attendee.jsx';
export default React.createClass({
  render: function() {
    if (this.props.data.attendees){
      var attendeeNodes = this.props.data.attendees.map(function(attendee){
        return (
          <ul className='attendee' key={attendee.id}>
            <Attendee attendee={attendee}/>
          </ul>
        );
      });
      return (
        <div ref="masonryContainer">
          {attendeeNodes}
        </div>
      );
    }else{
      return (
        <div className='attendeeList'></div>
      );
    }
  }
})
