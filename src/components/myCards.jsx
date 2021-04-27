import React, { Component } from "react";
import PageHeader from "./common/pageHeader";
import cardService from "../services/cardService";
import Card from "./card";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

class MyCards extends Component {
  state = {
    cards: [],
  };

  async componentDidMount() {
    const { data } = await cardService.getMyCards(); // data comes from axios (httpService)
    if (data.length > 0) this.setState({ cards: data });
  }

  handleCardDelete = async (cardId, cardBizNumber, event) => {
    console.log(cardBizNumber); // todo remove
    event.preventDefault();
    Swal.fire({
      title: "Are you sure you want to delete this card ?",
      showCancelButton: true,
      confirmButtonText: "Delete",
      confirmButtonColor: "#dc3545",
    }).then(async (result) => {
      if (result.isConfirmed) {
        let cards = [...this.state.cards];
        cards = cards.filter(card => card._id !== cardId);
        this.setState({ cards });
        await cardService.deleteCard(cardId);
        toast("Card has been deleted succesfully");
        const {data} = await cardService.deleteFavNum({favNum:cardBizNumber});
        console.log(data); // todo remove
      }
    });
  };

  render() {
    const { cards } = this.state;

    return (
      <div className="container">
        <PageHeader titleText="Your Cards List" />
        <div className="row">
          <div className="col-12">
            <p>Here you can view your cards list</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p>
              <Link className="btn btn-primary" to="/create-card">
                <i className="fas fa-plus-circle"></i>
                <span className="ml-1">Add Card</span>
              </Link>
            </p>
          </div>
        </div>
        <div className="row">
          {cards.length >0 && cards.map((card) => <Card key={card._id} card={card} handleCardDelete={this.handleCardDelete} />)}
        </div>
      </div>
    );
  }
}

export default MyCards;
