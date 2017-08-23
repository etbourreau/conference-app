import $ from 'jquery';
import TalkService from '../common/talk.service';

export default class SessionsList{
    render(){
        let content = "";
        let talk = new TalkService();
        $("#navbar-header").empty();
        $("#navbar-header").append(`<a class="navbar-brand" href="#sessions-list" id="navbar-label">Sessions</a>`);
        $("h1#title").empty();
        $("#linkedList").empty();
        talk.findAll("sessions")
            .then(speakers => {
                $("h1#title").append("Liste des Sessions");
                speakers.forEach(session => {
                    $("#linkedList").append(`<li><a href="#session-detail-${session.id}">${session.title}</a></li>`);
                })
            }).catch (error => $("h1#title").append("Could not load sessions list : "+error));
    }
}