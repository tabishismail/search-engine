var mobiles = {
    oppo: {
        f19pro: {
            name: "Oppo F19 Pro",
            os: "Android 11 OS",
            sim: "Dual Sim, Dual Standby (Nano-Sim)",
            cpu: "Octa-core (4 x 2.6 GHz Cortex-A77 + 4 x 2.0 GHz Cortex-A55)",
            memory: "256GB Built-in, 12GB RAM",
            url: "image/oppo/f19 pro.jpg"
        },
        f19: {
            name: "Oppo F19",
            os: "Android 11 OS",
            sim: "Dual Sim, Dual Standby (Nano-Sim)",
            cpu: "Octa-core (4 x 2.6 GHz Cortex-A77 + 4 x 2.0 GHz Cortex-A55)",
            memory: "128GB Built-in, 8GB RAM",
            url: "image/oppo/f19.jpg"
        },
    }
}


function search() {
    var brand = document.getElementById("brand");
    var brandSelect = brand.value;
    console.log(brandSelect);
    if (brandSelect == "oppo") {
        console.log(pro)
        pro.innerHTML = "";
        for (var a in mobiles[brandSelect]) {
            var div = document.createElement("div");
            // div.setAttribute("class", "row");
            // pro.appendChild(div);
            var div1 = document.createElement("div");
            div1.setAttribute("class", "col");
            pro.appendChild(div1);
            var card = document.createElement("div");
            card.setAttribute("class", "card");
            card.setAttribute("style", "width :18rem");
            div1.appendChild(card);
            var img = document.createElement("img");
            img.setAttribute('class', 'card-img-top');
            img.setAttribute("src", mobiles[brandSelect][a].url);
            card.appendChild(img);
            var cardBody = document.createElement("div");
            cardBody.setAttribute('class', 'card-body');
            card.appendChild(cardBody);
            var h5 = document.createElement("h5");
            h5.setAttribute('class', 'card-title');
            h5.innerText = mobiles[brandSelect][a].name;
            cardBody.appendChild(h5);
        }
    }
}
function searchm() {
    var brand = document.getElementById("brand");
    var brandSelect = brand.value;
    var model = document.getElementById("model");
    var modelSelect = model.value;
    console.log(modelSelect);
    if (modelSelect.toLowerCase() == "f19") {
        console.log(container)
        container.innerHTML = "";
        console.log(mobiles[brandSelect][modelSelect])
        var div = document.createElement("div");
            // div.setAttribute("class", "row");
            // container.appendChild(div);
            var div1 = document.createElement("div");
            div1.setAttribute("class", "col");
            container.appendChild(div1);
            var card = document.createElement("div");
            card.setAttribute("class", "card");
            card.setAttribute("style", "width :18rem");
            div1.appendChild(card);
            var img = document.createElement("img");
            img.setAttribute('class', 'card-img-top');
            img.setAttribute("src", mobiles[brandSelect][modelSelect].url);
            card.appendChild(img);
            var cardBody = document.createElement("div");
            cardBody.setAttribute('class', 'card-body');
            card.appendChild(cardBody);
            var h5 = document.createElement("h5");
            h5.setAttribute('class', 'card-title');
            h5.innerText = mobiles[brandSelect][modelSelect].name;
            cardBody.appendChild(h5);
    }
}

        //     if (brandSelect == "oppo") {
            //         console.log(container)
//         container.innerHTML="";
//         var div = document.createElement("div");
//         div.setAttribute("class", "row");
//         container.appendChild(div);
//         var div1 = document.createElement("div");
//         div1.setAttribute("class", "col");
//         div.appendChild(div1);
//         var card = document.createElement("div");
//         card.setAttribute("class", "card");
//         card.setAttribute("style", "width :18rem");
//         div1.appendChild(card);
//         var img = document.createElement("img");
//         img.setAttribute('class', 'card-img-top');
//         img.setAttribute("src", "image/oppo/f19 pro.jpg");
//         card.appendChild(img);
//         var cardBody = document.createElement("div");
//         cardBody.setAttribute('class', 'card-body');
//         card.appendChild(cardBody);
//         var h5 = document.createElement("h5");
//         h5.setAttribute('class', 'card-title');
//         h5.innerText = mobiles.oppo.fseries.f19pro.name;
//         cardBody.appendChild(h5);

//         var div1 = document.createElement("div");
//         div1.setAttribute("class", "col");
//         div.appendChild(div1);
//         var card = document.createElement("div");
//         card.setAttribute("class", "card");
//         card.setAttribute("style", "width :18rem");
//         div1.appendChild(card);
//         var img = document.createElement("img");
//         img.setAttribute('class', 'card-img-top');
//         img.setAttribute("src", "image/oppo/f19.jpg");
//         card.appendChild(img);
//         var cardBody = document.createElement("div");
//         cardBody.setAttribute('class', 'card-body');
//         card.appendChild(cardBody);
//         var h5 = document.createElement("h5");
//         h5.setAttribute('class', 'card-title');
//         h5.innerText = mobiles.oppo.fseries.f19.name;
//         cardBody.appendChild(h5);

//         var div1 = document.createElement("div");
//         div1.setAttribute("class", "col");
//         div.appendChild(div1);
//         var card = document.createElement("div");
//         card.setAttribute("class", "card");
//         card.setAttribute("style", "width :18rem");
//         div1.appendChild(card);
//         var img = document.createElement("img");
//         img.setAttribute('class', 'card-img-top');
//         img.setAttribute("src", 'image/oppo/f11 pro.jpg');
//         card.appendChild(img);
//         var cardBody = document.createElement("div");
//         cardBody.setAttribute('class', 'card-body');
//         card.appendChild(cardBody);
//         var h5 = document.createElement("h5");
//         h5.setAttribute('class', 'card-title');
//         h5.innerText = mobiles.oppo.fseries.f11pro.name;
//         cardBody.appendChild(h5);
//     }

// }
// function searchm(){
//     // var con=document.getElementById('container')
//     var model = document.getElementById("model");
//     var modelSelect = model.value;
//     var div1 = document.createElement("div");
//     if (modelSelect == "f11 pro") {
//         console.log(container);
//         container.innerHTML="";
//         var div = document.createElement("div");
//         div.setAttribute("class", "row");
//         container.appendChild(div);
//         div1.innerHTML="";
//         div.appendChild(div1);
//         div1.setAttribute("class", "col");
//         var card = document.createElement("div");
//         card.setAttribute("class", "card");
//         card.setAttribute("style", "width :18rem");
//         div1.appendChild(card);
//     var img = document.createElement("img");
//     img.setAttribute('class', 'card-img-top');
//     img.setAttribute("src", "image/oppo/f11 pro.jpg");
//     card.appendChild(img);
//     var cardBody = document.createElement("div");
//     cardBody.setAttribute('class', 'card-body');
//     card.appendChild(cardBody);
//     var h5 = document.createElement("h5");
//     h5.setAttribute('class', 'card-title');
//     h5.innerText = mobiles.oppo.fseries.f11pro.name;
//     cardBody.appendChild(h5);
// }
// else if(modelSelect=="f19"){
//     var div = document.createElement("div");
//     div.setAttribute("class","row");
//     container.appendChild(div);        
// var div1= document.createElement("div");
// div1.setAttribute("class","col");
// div.appendChild(div1);
// var card=document.createElement("div");
// card.setAttribute("class","card");
// card.setAttribute("style","width :18rem");
// div1.appendChild(card);
// var img=document.createElement("img");
// img.setAttribute('class','card-img-top');
// img.setAttribute("src","image/oppo/f19.jpg");
// card.appendChild(img);
// var cardBody=document.createElement("div");
// cardBody.setAttribute('class','card-body');
// card.appendChild(cardBody);
// var h5=document.createElement("h5");
// h5.setAttribute('class','card-title');
// h5.innerText=mobiles.oppo.fseries.f19.name;
// cardBody.appendChild(h5);
// }
// else{
// model.setAttribute('placeholder',"not Found")

// }
// }