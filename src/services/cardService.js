import http from "./httpService";
import { apiUrl } from "../config.json";

export function deleteCard(cardId) {
  return http.delete(`${apiUrl}/cards/${cardId}`);
}

export function getCard(cardId) {
  return http.get(`${apiUrl}/cards/${cardId}`);
}

export function editCard(card) {
  const cardId = card._id;
  delete card._id;
  return http.put(`${apiUrl}/cards/${cardId}`, card);
}

export function getMyCards() {
  return http.get(`${apiUrl}/cards/my-cards`);
}

export function createCard(card) {
  return http.post(`${apiUrl}/cards`, card);
}

export function getAllCards() {
  return http.get(`${apiUrl}/cards/all-cards`);
}

export function getFavsList() {
  return http.get(`${apiUrl}/users/cards/my-favs`);
}

export function pushFavNum(favCard) {
  return http.patch(`${apiUrl}/users/cards`, favCard);
}

export function pushFavCards(favCard) {
  return http.patch(`${apiUrl}/users/cards/stay`, favCard);
}

export function deleteFavNum(favCard) {
  return http.patch(`${apiUrl}/users/cards/favs`, favCard);
}

export function getMyFavorites() {
  return http.get(`${apiUrl}/users/cards/num`);
}

const service = {
  createCard,
  getMyCards,
  editCard,
  getCard,
  deleteCard,
  getAllCards,
  getFavsList,
  pushFavNum,
  pushFavCards,
  deleteFavNum,
  getMyFavorites,
};

export default service;
