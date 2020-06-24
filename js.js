function esperar(){
    let x = 10;
    return new Promise((response,reject)=>{
        if(x <= 10){
            setTimeout(()=>{
                response('succesfull!')
                
            },3000);
            
        }else{
            setTimeout(()=>{
                reject('error. Data not found.');
            },3000);
        }

    })
}

var res = document.querySelector('#resultado');
res.innerHTML = 'Waiting...';

esperar().then(x => {
    res.innerHTML = x

}).catch(error =>{
    res.innerHTML = error;
});