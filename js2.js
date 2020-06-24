var resultado = document.querySelector("#resultado");
var spinner = document.querySelector("#spinner");
resultado.innerHTML = "waiting...";

function evaluar(param){
    var control = param;
    return new Promise((resolve,reject)=>{
        if (control){
            setTimeout(() => {
                resolve(1);
            }, 2000);
        }else{
            setTimeout(() => {
                reject(0);
            }, 2000)            
        }

    })
}

function other(){
    return "Other sentences returned";
}

async function render(){
    var cart = [];
    var failCount = 0;
    for(var i = 0; i <= 5; i++){
        var control = 1;
        try {
            if (i != 3){
                respuesta = await evaluar(true);
            }else{
                respuesta = await evaluar(false);
            }            
        } catch (error) {
            control = 0;      
        }
        if(!control){
            resultado.style.color = "red";
            resultado.innerHTML = "Pack"+i+": not solved.";
            spinner.classList.add("text-danger");
            failCount++;
        }
        console.log(cart);
        cart.push(i);
    }

    if(failCount == 0){
        resultado.innerHTML = "All Packages obtained"
    }else{
        resultado.style.color = "#fa0f72";
        resultado.innerHTML = "Some packages not solved"
    }
    spinner.style.visibility = "hidden";
}
render();