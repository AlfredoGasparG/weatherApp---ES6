export class Http {
    static fetchData(url){
        return new Promise((resolve,reject) => {
            const HTTP = new XMLHttpRequest();
            HTTP.open('GET',url);
            HTTP.onreadystatechange = function(){
                if (HTTP.readyState == XMLHttpRequest.DONE && HTTP.status == 200){
                    const RESPONSE_DATA = JSON.parse(HTTP.responseText);
                    resolve(RESPONSE_DATA); //resolve es como un return 'positivo'' de una promesa
                }
                else if (HTTP.readyState == XMLHttpRequest.DONE){
                    reject('Error al intentar aceeder a la información'); //reject es como un return 'negativo'' de una promesa

                }
            };
            HTTP.send();
        });
    }

}