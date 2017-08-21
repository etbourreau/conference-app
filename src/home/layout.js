import $ from 'jquery';

export default class Home{
        render(idView){
            let content = "test";
            $("#"+idView).empty();
            $("#"+idView).append(content);
        }
}