import $ from 'jquery';
import TalkService from '../common/talk.service';

export default class SpeakerDetails{
    render(idSpeaker){
        let talk = new TalkService();
        $("h1#title").empty();
        $("#image").empty();
        $("#speakerLinks").empty();
        $("#about").empty();
        talk.findSpeakerById(idSpeaker)
            .then(speaker => {
                $("h1#title").append(`${speaker.lastname} ${speaker.firstname}`);
                $("#image").append(`<img class="img-responsive" src="${speaker.image}" title="${speaker.lastname} ${speaker.firstname}" alt="Image manquante"/>`);
                speaker.socials.forEach((social) => {
                    $("#speakerLinks").append(`<p><a href="${social.link}" target="_blank">${social.class}</a></p>`);
                })
                $("#about").append(`<p>${speaker.about}</p>`);
            }).catch(error => $("h1#title").append("Could not load speaker : "+error));
    }
}