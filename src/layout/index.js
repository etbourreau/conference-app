import layout from './layout.html';
import list from './list.html';
import speakerDetails from './speakerDetails.html';
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
}