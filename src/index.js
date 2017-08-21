import TalkService from './common/talk.service';
import Layout from './layout/index';
import Home from './home/layout';
import SpeakersList from './speakers/list';
import SpeakerDetails from './speakers/detail';
import SessionsList from './sessions/list';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './css/style.css';

const layout = new Layout();
layout.render();

var router = () => {
    if (location.hash === '#speakers-list') {
        layout.getList();
        const speakersList = new SpeakersList();
        speakersList.render();
    } else if (location.hash === '#sessions-list') {
        layout.getList();
        const sessionsList = new SessionsList();
        sessionsList.render();
    } else if (location.hash.includes('#speaker-detail-')) {
        const idSpeaker = location.hash.split("-")[2];
        layout.getSpeakerDetails();
        const speakerDetails = new SpeakerDetails();
        speakerDetails.render(idSpeaker);
    } else {
        const home = new Home();
        home.render("main-view");
    }
};

window.addEventListener('load', () => {
    window.onhashchange = () => {
        router();
    };
    router();
});