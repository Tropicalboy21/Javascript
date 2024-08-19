import { div, img, p, hr } from '../libs/html.js';

export class ProjectView {
    constructor(parent, project) {
        this.parent = parent;
        this.project = project;

        this.container = div({ id: 'projectContainer', className: 'project_container', onclick: this.explore.bind(this, this.project.link) }, this.parent);
        this.iconContainer = img({ id: 'iconContainer', className: 'icon_container', src: this.project.icon }, this.container);
        this.titleContainer = div({ id: 'titleContainer', className: 'title_container' }, this.container);
        this.title = p({ id: 'projectTitle', className: 'project_title', innerHTML: this.project.title }, this.titleContainer);
        this.subtitle = p({ id: 'projectSubtitle', className: 'project_subtitle', innerHTML: this.project.subtitle }, this.titleContainer);
        this.desContainer = div({ id: 'desContainer', className: 'des_container' }, this.container);
        this.description = p({ id: 'description', className: 'project_des', innerHTML: this.project.description }, this.desContainer);
        this.line = hr({ className: 'project_line' }, this.container);
        this.explore = div({ className: 'explore' }, this.container);
        this.exploreText = p({ className: 'explore_text', innerHTML: 'Explore' }, this.explore);
        this.exploreIcon = img({ className: 'explore_icon', src: 'imgs/arrow.png' }, this.explore);
    }

    explore(link) {
        location.href = link;
    }


}