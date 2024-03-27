'use strict';

import { Card } from "./model/card.js";
import { Lottery } from "./model/lottery.js";
import { Play } from "./model/play.js";
import { CardView } from "./view/cardView.js";
import { LotteryView } from "./view/lotteryView.js";
import { PlayView } from "./view/playView.js";

window.addEventListener('load', init, false);

function init() {

    let cardsContainer = document.getElementById("cardsInner");
    let lotContainer = document.getElementById("lotteryInner");
    let playContainer = document.getElementById("playInner");

    let cards = [];
    let lots = [];
    let plays = []


    loadCards();

    function loadCards() {
        var request = new XMLHttpRequest();
        request.open('GET', './js/data/data.json');
        request.onload = function () {
            var jsonData = JSON.parse(request.response);
            var data = jsonData.data;

            data.forEach(cardData => {
                var card = new Card(cardData.id, cardData.icon, cardData.title, cardData.link, cardData.description);
                cards.push(card);
            });

            showCards();
        };

        request.send();
    };


    function showCards() {
        cards.forEach(card => {
            var cardView = new CardView(cardsContainer, card);
        });
    };

    loadLot();

    function loadLot() {
        var request = new XMLHttpRequest();
        request.open('GET', './js/data/lot.json');
        request.onload = function () {
            var jsonData = JSON.parse(request.response);
            var data = jsonData.data;

            data.forEach(lotData => {
                var lot = new Lottery(lotData.id, lotData.img, lotData.icon, lotData.description, lotData.price, lotData.icon2);
                lots.push(lot);
            });

            showLot();
        };

        request.send();
    };


    function showLot() {
        lots.forEach(lot => {
            var lotView = new LotteryView(lotContainer, lot);
        });
    };

    loadPlay();

    function loadPlay() {
        var request = new XMLHttpRequest();
        request.open('GET', './js/data/play.json');
        request.onload = function () {
            var jsonData = JSON.parse(request.response);
            var data = jsonData.data;

            data.forEach(dataplay => {
                var play = new Play(dataplay.id, dataplay.star, dataplay.img, dataplay.flag, dataplay.title, dataplay.prize, dataplay.icon);
                plays.push(play);
            });

            showPlay();
        };

        request.send();
    };


    function showPlay() {
        plays.forEach(play => {
            var playView = new PlayView(playContainer, play);
        });
    };


};