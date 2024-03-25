import { div, p, img, a } from "../libs/html.js"

export class LotteryView {
    constructor(parent, lottery) {
        this.parent = parent;
        this.lottery = lottery;

        this.container = div({ id: 'lotteryItem', className: 'lottery_item' }, this.parent);
        this.lotTop = div({ id: 'lotTop', className: 'lot_top' }, this.container);

        this.imgContainer = div({ id: 'imgContainer', className: 'img_container' }, this.lotTop);
        this.lotImg = img({ id: 'lotImg', className: 'lot_img', src: this.lottery.img }, this.imgContainer);
        this.lotInfo = div({ id: 'lotInfo', className: ' lot_info' }, this.lotTop);
        this.lotContent = div({ id: 'lotContent', className: ' lot_content' }, this.lotInfo);
        this.lotIcon = div({ id: 'lotIcon', className: 'lot_icon' }, this.lotContent)
        this.Icon = img({ id: 'iconLot', className: 'icon_lot', src: this.lottery.icon }, this.lotIcon)
        this.desContainer = div({ id: 'desContainer', className: 'des_container' }, this.lotContent);
        this.lotDes = p({ id: 'lotDes', className: 'lot_des', innerHTML: this.lottery.description }, this.desContainer);
        this.priceContainer = div({ id: 'priceContainer', className: ' price_container' }, this.lotInfo);
        this.lotPrice = p({ id: 'lotPrice', className: 'lot_price', innerHTML: this.lottery.price }, this.priceContainer);

        this.lotBottom = div({ id: 'lotBottom', className: 'lot_bottom' }, this.container);
        this.btnPlayNow = div({ id: 'btnPlayNow', className: 'btn_play_now', innerHTML: 'Play Now' }, this.lotBottom);
        this.timerContainer = div({ id: 'timerContainer', className: 'timer_container' }, this.lotBottom);
        this.lotIcon2 = div({ id: 'lotIcon2', className: 'lot_icon2' }, this.timerContainer)
        this.Icon2 = img({ id: 'iconLot2', className: 'icon_lot2', src: this.lottery.icon2 }, this.lotIcon2)
        this.lotTimer = p({ id: 'lotTimer', className: 'lot_timer', innerHTML: '1:22:01' }, this.timerContainer);

        this.startCountDown();


    }

    startCountDown() {

        var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();

        // Update the count down every 1 second
        var x = setInterval(() => {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            this.lotTimer.innerHTML = hours + ": "
                + minutes + ": " + seconds;

            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(x);
                this.lotTimer.innerHTML = "EXPIRED";
            }
        }, 1000);

    }
}
