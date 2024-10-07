// function loadDoc(){
//     var xhttp = new XMLHttpRequest;
//     xhttp.onreadystatechange = function (){
//          if(xhttp.readyState ==4 && xhttp.status == 200){
//             document.getElementById("mohamed").innerHTML = xhttp.responseText;

//          }

//     }
//     xhttp.open ("GET",'https://jsonplaceholder.typicode.com/photos',true);
//     xhttp.send(); 

// }
//============================================================
// fetch('https://jsonplaceholder.typicode.com/photos ')
// .then(function (item){
//     return item.json();

// })
// .then(function(result){
// document. querySelector('.test img').src = result[0].url;
// document. querySelector('.test h2') .innerHTML = result[0].id;
// document. querySelector('.test h5').innerHTML = result[0].title;
// })
// ======================================================
(async function getApi() {
    var item = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
    var result = await item.json();
    var data = result.recipes;
    var text = "";

    for (var i = 0; i < data.length; i++) {
        var cartoona = `
            <div class="col-md-4 text-center mb-4">
                <img style="height:350px" src="${data[i].image_url}" class="img-fluid">
                <h2>${data[i].publisher}</h2>
                <h5>${data[i].title}</h5>
            </div>`;
        text += cartoona;
    }

    document.querySelector('.mm').innerHTML = text;
})();