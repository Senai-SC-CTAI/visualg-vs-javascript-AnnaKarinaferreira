function funcEnviar(){
    
    var population = document.getElementById('population').value;
    document.getElementById('teste').innerHTML = population;

    if (population<200){
        alert("Insira um número acima de 200")
        }
  
    if (population>=200 && population<499) {
        alert("Espécie criticamente em perigo!");
    }
    if(population>=500 && population<=999){
        alert("Espécie em perigo!")
    }
    if(population>=1000 && population<=5000){
       alert("Espécie vulnerável!") 
    }
    

}