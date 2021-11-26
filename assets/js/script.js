

    let cityApi = document.getElementById("cityApi");
    let cities = document.getElementById("cityList");
    let titreValue ;
    let input =document.getElementById("input") ; 

    let btn = document.getElementById('btn');


    btn.addEventListener('click', (e)=>{
       let titreValue=input.value ; 
       console.log(titreValue)
        fetchFunc(titreValue)
    })

 input.addEventListener('keydown', (e)=>{
        if(e.key ==='Enter'){

            let titreValue=input.value ; 
            console.log(titreValue)
             fetchFunc(titreValue)
        }

    })





    const fetchFunc=(titreValue)=>{
        
        fetch('https://api.openweathermap.org/data/2.5/forecast?q='+titreValue + '&appid=c6dba3820082be8748f832cf9f2222c8&units=metric')
        .then(Response => Response.json())
        .then(result => {     
            console.log(result)
            afficherCity(result) ; 
            afficherList(result); 
    
    
        })
        .catch(error => {
            console.log(error);
    
        })

    }

  
  
         

    
    


   
// c6dba3820082be8748f832cf9f2222c8

function afficherCity(result){
    // console.log(result.city);
    let nameCity  =  result.city.name;
    let latCity = result.city.coord.lat;
    let lonCity = result.city.coord.lon;

    cityApi.innerHTML = `
        <h1>${nameCity}</h1>
        <p> lat :  ${latCity}</p>
        <p> longitude :  ${lonCity}</p>
    
    `
// sinon on passe par création des nodes 
//createElement , setAttribute , textContent ,  append() 
}



function afficherList(result){
    let cityList = result.list; 
    cityList.forEach(element => {
            // console.log(element)
            let pressure =element.main.pressure ; 
            let humidity = element.main.humidity; 
            let tmpMax = element.main.temp_max; 
            let tmpMin = element.main.temp_min; 



            let description = element.weather[0].description; 
            let dt_txt = element.dt_txt; 

            cities.innerHTML += `
            <div class="city">
            <h1>${dt_txt}</h1>
            <p> pressure    :  ${pressure} hPa</p>
            <p> description :  ${description} </p>
            <p> humidity    :  ${humidity} %</p>
            <p> tmp Max     : ${tmpMax} C°</p>
            <p> tmp Min     : ${tmpMin} C°</p>
            </div>
        `


})

}