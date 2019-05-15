

window.onload = function(){
  let preloader = document.getElementById("preloader");
  preloader.style.display = "none";
}


// 

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://swapi.co/api/people", true);
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState != 4) return;
    if (xhr.status != 200) {
        var errStatus = xhr.status;
        var errText = xhr.statusText;
        console.log(errStatus + ": " + errText);
    } else {
        var data = JSON.parse(xhr.responseText);
        console.log(data);
        HeroesTable(data);
    }
}
let HeroesTable = (data) => {
    let table_data = document.querySelector("#data");

    for (let i = 0; i < data.results.length; i++) {

        var trTable = document.createElement("tr");

        var tdName = document.createElement("td");
        tdName.innerText = data.results[i].name;

        var tdBirth_year = document.createElement("td");
        tdBirth_year.innerText = data.results[i].birth_year;

        var tdHeight  = document.createElement("td");
        tdHeight.innerText = data.results[i].height;

         var tdHaircolor = document.createElement("td");
         tdHaircolor.innerText = data.results[i].hair_color;

        var tdMass = document.createElement("td");
        tdMass.innerText = data.results[i].mass;

        table_data.appendChild(trTable);
        trTable.appendChild(tdName);
        trTable.appendChild(tdBirth_year);
        trTable.appendChild(tdHeight);
        trTable.appendChild(tdHaircolor);
        trTable.appendChild(tdMass);

         
        
    }
}


