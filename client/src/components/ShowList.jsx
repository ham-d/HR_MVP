import React from 'react';
import Show from './Show.jsx';

const ShowList = (props) => {
  return (
    <div>
      <div className="row">
        {props.shows.map(show => {
          return <Show show={show} handleDeleteRequest={props.handleDeleteRequest} handleUpdateRequest={props.handleUpdateRequest} toggle={props.toggle}/>
        })}
      </div>
    </div>
  );
};

export default ShowList;