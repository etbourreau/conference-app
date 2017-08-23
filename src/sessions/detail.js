import $ from 'jquery';
import TalkService from '../common/talk.service';
import defaultImage from '../assets/speaker/default.jpg';

export default class SessionDetails{
    render(idSession){
        let talk = new TalkService();
        $("#navbar-header").empty();
        $("#navbar-header").append(`<a class="navbar-brand" href="#sessions-list" id="retour">Retour</a><a class="navbar-brand" href="#session-detail-${idSession}">Session</a>`);
        $("h1#title").empty();
        $("#desc").empty();
        $("#speakers").empty();
        $("#notes").empty();
        talk.findSessionById(idSession)
            .then(session => {
                $("h1#title").append(session.title);
                $("#desc").append(session.desc);
                session.speakers.forEach(speakerId => {
                    talk.findSpeakerById(speakerId).then(speaker => {
                            $("#speakers").append(`<div class="row speakers"><div class="col-sm-4 col-3 image"><img class="img-fluid" src="${speaker.image}" title="${speaker.lastname} ${speaker.firstname}" onerror="javascript:this.src='assets/speaker/default.jpg'"/></div><div class="col-sm-7 col-sm-offset-1 col-9 speakerLink"><a href="#speaker-detail-${speaker.id}">${speaker.lastname} ${speaker.firstname}</a></div></div>`);
                    });
                });
                $("#notes").append(`<a id="mesNotes" class="btn btn-danger" href="#note-session-${session.id}">Mes notes</a>`);
            }).catch(error => $("h1#title").append("Could not load session : "+error));
    }
}