import { div, p, img, a } from "../libs/html.js"

export class LotteryView {
    constructor(parent, lottery) {
        this.parent = parent;
        this.lottery = lottery;

        this.container = div({ id: 'lotteryItem', className: 'lottery_item' }, this.parent);


    }
}