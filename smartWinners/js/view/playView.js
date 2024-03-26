import { div, img, p, a } from '../libs/html.js'

export class PlayView {
    constructor(parent, play) {
        this.parent = parent;
        this.play = play;

        this.container = div({ id: 'playItem', className: 'play_item' }, this.parent);
        this.star = img({ id: 'star', className: 'star', src: this.play.star }, this.container);

    }
}
