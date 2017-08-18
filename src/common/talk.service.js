class TalkService{
    findAllSpeakers = function(){
        return Promise((resolve, reject) => {
            setTimeout(() => {
                let speakers = httpGet('localhost:3000/speakers');
                if(speakers){
                    resolve(speakers);
                }else{
                    reject("Error while getting speakers");
                }
            }, 5000);
        });
    }
}