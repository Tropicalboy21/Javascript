import { div, img, p, a } from '../libs/html.js'

export class CardView {
    constructor(parent, card) {
        this.parent = parent;
        this.card = card;

        this.container = div({ id: 'cardContainer', className: 'cardContainer' }, this.parent);
        this.imgContainer = div({ id: 'imgContainer', className: 'img-container' }, this.container);
        this.iconContainer = img({ id: 'iconContainer', className: 'icon_container', src: this.card.icon, alt: 'card' }, this.imgContainer);
        this.infoContainer = div({ id: 'infoContainer', className: 'info_container' }, this.container);
        this.titleWrapper = div({ id: 'titleWrapper', className: 'title_wrapper' }, this.infoContainer)
        this.titleContainer = div({ id: 'titleContainer', className: 'title_container' }, this.titleWrapper);
        this.title = p({ id: 'cardTitle', className: 'card_title', innerHTML: this.card.title }, this.titleContainer);
        this.linkContainer = a({ id: 'linkContainer', className: 'link_container' }, this.titleWrapper);
        this.cardLink = a({ id: 'cardLink', className: 'card_link', innerHTML: this.card.link }, this.linkContainer);
        this.desContainer = div({ id: 'desContainer', className: 'des_container' }, this.infoContainer);
        this.description = p({ id: 'description', className: 'card_des', innerHTML: this.card.description }, this.desContainer);
    }
}