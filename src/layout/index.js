import layout from './layout.html';
import list from './list.html';
import speakerDetails from './speakerDetails.html';
import sessionDetails from './sessionDetails.html';
import noteSession from './noteSession.html';
import $ from 'jquery';

export default class Layout{
    render(){
        $("body").append(layout);
    }
    
    getList(){
        $("#main-view").empty();
        $("#main-view").append(list);
    }
    
    getSpeakerDetails(){
        $("#main-view").empty();
        $("#main-view").append(speakerDetails);
    }
    
    getSessionDetails(){
        $("#main-view").empty();
        $("#main-view").append(sessionDetails);
    }
    
    getNoteSession(){
        $("#main-view").empty();
        $("#main-view").append(noteSession);
    }
}