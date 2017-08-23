import $ from 'jquery';
import TalkService from '../common/talk.service';

export default class NoteSession{
    render(idSession){
        let talk = new TalkService();
        
        $("#navbar-header").empty();
        $("#navbar-header").append(`<a class="navbar-brand" href="#session-detail-${idSession}" id="retour">Retour</a><a class="navbar-brand" href="#note-session-${idSession}" id="navbar-label">Mes Notes</a>`);
        $("h1#title").empty();
        $("#save").empty();
        $("#note").empty();
        talk.findSessionById(idSession)
            .then(session => {
                $("h1#title").append(session.title);
                $("#save").append(`<a id="saveBtn" class="btn btn-success" href="#session-detail-${session.id}">Enregistrer</a>`);
                let note = localStorage.getItem('note-session-'+session.id);
                if(note){
                    $("#note").append(note);
                }
                $("#saveBtn").on('click', () => {
                    localStorage.setItem('note-session-'+session.id, $("#note").val());
                })
            }).catch(error => $("h1#title").append("Could not load session : "+error));
    }
}