import { div, p, img, a } from "../libs/html.js"

export class WinnerView {
    constructor(parent, winner) {
        this.parent = parent;
        this.winner = winner;

        this.container = div({ id: 'winnerItem', className: 'winner_item' }, this.parent);
        this.logoContainer = div({ id: "logoContainer", className: "logo_container" }, this.container);
        this.logo = img({ id: "logo", className: "logo", src: this.winner.logo }, this.logoContainer);
        this.winnersContent = div({ id: "winnersContent", className: "winners_content" }, this.container);
        this.dateContainer = p({ id: "dateContainer", className: "date_container", innerHTML: this.winner.date }, this.winnersContent);
        this.winnerText = div({ id: "winnerText", className: "winner_text", }, this.winnersContent);
        this.flag = img({ id: "flag", className: "flag", src: this.winner.flag }, this.winnerText);
        this.winnerTitle = div({ id: "winnerTitle", className: "winner_title", innerHTML: this.winner.title }, this.winnerText);
        this.winnerPrize = div({ id: "winnerPrize", className: "winners_prize", innerHTML: this.winner.prize }, this.winnersContent);



        // this.x = div({ id: "", className: "" }, this.);
        // this.x = div({ id: "", className: "" }, this.);




    }
}
