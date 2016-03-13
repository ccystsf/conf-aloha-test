import React from 'react';
export default ({attendee}) => {
  return (
    <div className='attendee'>
      <img src={attendee.thumbnail_url}></img>
      <p className='name'>{attendee.name}</p>
      <p className='title'>{attendee.title}</p>
      <p className='company'>{attendee.company}</p>
      <p className='country'>{attendee.country}</p>
      <p className='interest'>{attendee.interest}</p>
    </div>
  )
}