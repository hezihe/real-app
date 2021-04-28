import React from "react";
import PageHeader from "./common/pageHeader";
import cardService from "../services/cardService";
import FavCard from "./favCard";
import Joi from "joi-browser";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import Form from "./common/form";

class Favorites extends Form {
  state = {
    cards: [],
    cards2: [],
    favorites: [],
    errors: {},
    data: {
      search: "",
    },
    favsParam: 0,
  };

  schema = {
    search: Joi.string().required().label("Search"),
  };

  async componentDidMount() {
    const favs = await cardService.getFavsList();
    if (favs.data.length > 0) this.setState({ favorites: favs.data });
    console.log(favs.data); // todo remove

    if (favs.data.length > 0) {
      const { data } = await cardService.getAllCards();
      if (data.length > 0) this.setState({ cards: data });
    }

    this.convertFavToCards(favs.data);
  }

  convertFavToCards(favorites) {
    let favsCards = this.state.cards.filter((card) =>
      favorites.includes(card.bizNumber)
    );
    console.log(favsCards); // todo remove
    if (favsCards.length >= 0) this.setState({ cards: favsCards });
  }

  handleCardRemove = async (cardNum, event) => {
    event.preventDefault();
    Swal.fire({
      title: "Do you want to remove this card from Bookmark ?",
      showCancelButton: true,
      confirmButtonText: `YES`,
      confirmButtonColor: "#dc3545",
    }).then(async (result) => {
      if (result.isConfirmed) {
        if (this.state.favorites.length >= 0) {
          let favorites = [...this.state.favorites];
          let favStay = favorites.filter((fav) => fav !== cardNum);

          this.setState({ favorites: favStay });
        }
        let x = cardService.pushFavCards({ arr: this.state.favorites });
        console.log(x.data); // todo remove
        this.convertFavToCards(this.state.favorites);

        console.log(this.state.favorites); // todo remove

        toast("The Bookmark was removed succesfully", {
          autoClose: 2500,
        });
      }
    });
  };

  doSubmit() {
    const { search } = this.state.data;
    let cards = [...this.state.cards];
    let cards2 = cards.filter((card) =>
      card.bizName.toLowerCase().includes(search)
    );

    console.log(cards2); // todo remove
    this.setState({ cards2 });
  }

  sortByName() {
    let cardx = [...this.state.cards];
    if (this.state.cards2.length > 0) {
      cardx = [...this.state.cards2];
    }
    console.log(cardx); // todo remove
    return cardx;
  }

  render() {
    let carda = this.sortByName();
    if (this.state.data.search === "all") {
      carda = [...this.state.cards];
    }
    let favorites = [...this.state.favorites];
    console.log(carda); // todo remove

    return (
      <div className="container">
        <PageHeader titleText="Your Favorites Cards" />
        <div className="row">
          <div className="col-12">
            <p>Here you can view your favorites Cards list</p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <form onSubmit={this.handleSubmit} autoComplete="off" method="POST">
              {this.renderInput("search", "Look for a word of business name")}
              <p className="text-danger">
                Note: Use only lowercase letters for search, enter "all" to see
                all cards
              </p>
              {this.renderButton("Search")}
            </form>
          </div>
        </div>

        <div className="row">
          {carda.length > 0 &&
            carda.map((card) => (
              <FavCard
                favsParam={this.state.favsParam}
                key={card._id}
                card={card}
                favorites={favorites}
                handleFavorite={this.handleFavorite}
                handleCardRemove={this.handleCardRemove}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default Favorites;
