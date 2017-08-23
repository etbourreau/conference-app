import $ from 'jquery';
import TalkService from '../common/talk.service';

export default class SpeakerList{
    render(){
        let content = "";
        let talk = new TalkService();
        $("#navbar-header").empty();
        $("#navbar-header").append(`<a class="navbar-brand" href="#speakers-list" id="navbar-label">Présentateurs</a>`);
        $("h1#title").empty();
        $("#linkedList").empty();
        talk.findAll("speakers")
            .then(speakers => {
                $("h1#title").append("Liste des Présentateurs");
                speakers.forEach(speaker => {
                    $("#linkedList").append(`<li><a href="#speaker-detail-${speaker.id}">${speaker.firstname} ${speaker.lastname}</a></li>`);
                })
            }).catch (error => $("h1#title").append("Could not load speakers list : "+error));
    }
}