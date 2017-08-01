import React from 'react';

const Show = (props) => {
  return (
    <div>
      <div className="col-sm-3 text-center">
        <img src={props.show.image} />
        <p>Title: {props.show.title}</p>
        <p>Genre(s): {props.show.genre}</p>
        <p>Rating: {props.show.rating}</p>
        <button className="btn btn-warning edit" onClick={() => {props.handleUpdateRequest(props.show.title)}}>update rating</button>
        <button className="btn btn-danger edit" onClick={() => {props.handleDeleteRequest(props.show.title)}}>delete show</button>
      </div>
    </div>
  );
};

export default Show;

