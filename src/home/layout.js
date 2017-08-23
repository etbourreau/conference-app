import $ from 'jquery';
import homeImage from '../assets/home/home.jpg';

export default class Home{
        render(){
            $("#navbar-header").empty();
            $("#navbar-header").append(`<a class="navbar-brand" href="#">Conférence</a>`);
        }
}