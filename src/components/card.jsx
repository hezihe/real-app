import React from "react";
import { Link } from "react-router-dom";

const Card = ({ card, handleCardDelete }) => { // from parent myCards

  return (
    <div className="col-md-6 col-lg-4 mt-3">
      <div className="card">
        <img width="150"
          className="p-2"
          src={card.bizImage}
          alt={card.bizName}
        />
        <div className="card-body">
          <h5 className="card-title text-primary">{card.bizName}</h5>
          <p className="card-text">{card.bizDescription}</p>
          <p className="card-text border-top pt-2">
            <b>Tel: </b>{card.bizPhone}<br />
            <b>Address:</b> {card.bizAddress} <br/>
            <b>Card #:</b> {card.bizNumber} <br/>
          </p>

            <Link className="btn btn-primary" to={`/my-cards/edit/${card._id}`}>
              <i className="far fa-edit"> </i> Edit
            </Link>
            {"  "}
              <a  className="ml-1 btn btn-danger"
                  href="/" 
                  onClick={ event => handleCardDelete(card._id, card.bizNumber, event)}
              >
                  <i className="fas fa-trash-alt"></i> Delete
              </a>
          </div>
        </div>
      </div>
  );
};

export default Card;
