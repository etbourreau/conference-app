import * as xmlhttpr from '../util/http';

export default class TalkService{
    constructor(){
        this.url = 'http://localhost:3000';
    }
    
    findAll(object){
        return new Promise((resolve, reject) => {
                xmlhttpr.httpGet(this.url+"/"+object, results => {
                    if(results){
                        resolve(results);
                    }else{
                        reject("Error while getting speakers");
                    }
                });
                
            
        });
    }
    
    findSpeakerById(idSpeaker){
        return new Promise((resolve, reject) => {
            xmlhttpr.httpGet(this.url+"/speakers", speakers => {
                if(speakers){
                    let found;
                    speakers.forEach(speaker => {
                        if(speaker.id == idSpeaker){
                            found = speaker;
                        }
                    });
                    if(found){
                        resolve(found);
                    }else{
                        reject("Error while getting speaker "+idSpeaker);
                    }
                }else{
                    reject("Error while getting speakers list");
                }
            })
        });
    }
    
    findSessionById(idSession){
        return new Promise((resolve, reject) => {
            xmlhttpr.httpGet(this.url+"/sessions", sessions => {
                if(sessions){
                    let found;
                    sessions.forEach(session => {
                        if(session.id == idSession){
                            found = session;
                        }
                    });
                    if(found){
                        resolve(found);
                    }else{
                        reject("Error while getting session "+idSession);
                    }
                }else{
                    reject("Error while getting sessions list");
                }
            })
        });
    }
}