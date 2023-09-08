import React from "react";

const Card = ({ name, email, id }) => {
  id = id + 100;
  return (
    <div className="tc bg-light-blue dib br2 pa3  ma2 grow bw2 shadow-5">
      <img alt="robot" src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email} </p>
      </div>
    </div>
  );
};

export default Card;
