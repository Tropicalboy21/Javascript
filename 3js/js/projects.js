'use strict';

import { Project } from "./model/project.js";
import { ProjectView } from "./view/projectView.js";

window.addEventListener('load', init, false);

function init() {
    let projectContainer = document.getElementById("projects-container");
    let projects = [];

    loadProjects();


    function loadProjects() {
        var request = new XMLHttpRequest();
        request.open('GET', './data/data.json');
        request.onload = function () {
            var jsonData = JSON.parse(request.response);
            var data = jsonData.data;

            data.forEach(projectData => {
                var project = new Project(projectData.id, projectData.icon, projectData.title, projectData.subtitle, projectData.description, projectData.link);
                projects.push(project);
            });

            showProjects();
        };

        request.send();
    };

    function showProjects() {
        projects.forEach(project => {
            var projectView = new ProjectView(projectContainer, project);
        });
    };
};