import { div, img, p, a } from '../libs/html.js'

export class PlayView {
    constructor(parent, play) {
        this.parent = parent;
        this.play = play;

        this.container = div({ id: 'playItem', className: 'play_item' }, this.parent);
        this.star = img({ id: 'star', className: 'star', src: this.play.star }, this.container);
        this.containerImg = div({ id: 'containerImg', className: 'container_img' }, this.container);
        this.playImg = img({ id: 'playImg', className: 'play_img', src: this.play.img }, this.containerImg);

        this.playInfo = div({ id: 'playInfo', className: ' play_info' }, this.container);
        this.playContent = div({ id: 'playContent', className: ' play_content' }, this.playInfo);
        this.flagContainer = div({ id: 'flagContainer', className: 'lot_icon' }, this.playContent)
        this.flag = img({ id: 'iconLot', className: 'icon_lot', src: this.play.flag }, this.flagContainer)
        this.desContainer = div({ id: 'desContainer', className: 'des_container' }, this.playContent);
        this.playTitle = p({ id: 'playTitle', className: 'play_title', innerHTML: this.play.title }, this.desContainer);

        this.prizeContainer = div({ id: 'prizeContainer', className: 'prize_container' }, this.container);
        this.prize = p({ id: 'prize', className: 'prize', innerHTML: this.play.prize }, this.prizeContainer);

        this.timerContainer = div({ id: 'timerContainer', className: 'timer_container' }, this.container);
        this.iconContainer = div({ id: 'lotIcon2', className: 'lot_icon2' }, this.timerContainer)
        this.iconPlay = img({ id: 'iconPlay', className: 'icon_play', src: this.play.icon }, this.iconContainer)
        this.playTimer = p({ id: 'playTimer', className: 'play_timer', innerHTML: '1:22:01' }, this.timerContainer);


        this.btnPlayNow = div({ id: 'btnPlayNow', className: 'btn_play', innerHTML: 'Play Now' }, this.container);

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
            this.playTimer.innerHTML = hours + ": "
                + minutes + ": " + seconds;

            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(x);
                this.playTimer.innerHTML = "EXPIRED";
            }
        }, 1000);

    }
}
