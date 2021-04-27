import React from "react";

const FavCard = ({
  card,
  handleFavorite,
  favorites,
  favsParam,
  handleCardRemove,
}) => {
  let exc = 0;

  favorites.map((fav) => {
    if (fav === card.bizNumber) {
      exc = 1;
    }
  });

  return (
    <div className="col-md-6 col-lg-4 mt-3">
      <div className="card">
        <div className="row" class="float-right" position="relative">
          <img width="100" src={card.bizImage} alt={card.bizName} />
          {!exc && favorites.length >= 0 && (
            <a
              className="btn btn-primary ml-1 float-right"
              href="/"
              onClick={(event) => handleFavorite(card.bizNumber, event)}
            >
              <i className="fas fa-bookmark"></i> Bookmark
            </a>
          )}

          <div className="card-body">
            <h5 className="card-title">{card.bizName}</h5>
            <p className="card-text">{card.bizDescription} </p>

            <p className="card-text border-top pt-2">
              <b>Tel: </b> {card.bizPhone} <br />
              <b>Address:</b> {card.bizAddress} <br />
              <b>Card #:</b> {card.bizNumber} <br />
            </p>
          </div>
          {!favsParam && (
            <a
              className="btn btn-danger ml-3 float-right"
              href="/"
              onClick={(event) => handleCardRemove(card.bizNumber, event)}
            >
              <i className="fas fa-trash-alt"></i> Remove
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default FavCard;
