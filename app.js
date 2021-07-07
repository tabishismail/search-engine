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
        f11pro: {
            name: "Oppo F11 Pro",
            os: "Android 11 OS",
            sim: "Dual Sim, Dual Standby (Nano-Sim)",
            cpu: "Octa-core (4 x 2.6 GHz Cortex-A77 + 4 x 2.0 GHz Cortex-A55)",
            memory: "128GB Built-in, 8GB RAM",
            url: "image/oppo/f11 pro.jpg"
        }
    },
    iphone: {
        iphone12: {
            name: "Iphone 12",
            os: "Android 11 OS",
            sim: "Dual Sim, Dual Standby (Nano-Sim)",
            cpu: "Octa-core (4 x 2.6 GHz Cortex-A77 + 4 x 2.0 GHz Cortex-A55)",
            memory: "256GB Built-in, 12GB RAM",
            url: "image/iphone/12.jpg"
        },
        Iphone9: {
            name: "Iphone 9",
            os: "Android 11 OS",
            sim: "Dual Sim, Dual Standby (Nano-Sim)",
            cpu: "Octa-core (4 x 2.6 GHz Cortex-A77 + 4 x 2.0 GHz Cortex-A55)",
            memory: "128GB Built-in, 8GB RAM",
            url: "image/iphone/9.jpg"
        },
        Iphone6: {
            name: "Iphone 6",
            os: "Android 11 OS",
            sim: "Dual Sim, Dual Standby (Nano-Sim)",
            cpu: "Octa-core (4 x 2.6 GHz Cortex-A77 + 4 x 2.0 GHz Cortex-A55)",
            memory: "128GB Built-in, 8GB RAM",
            url: "image/iphone/9.jpg"
        }
        
    },
}


function search() {
    var brand = document.getElementById("brand");
    var brandSelect = brand.value;
    if (brandSelect == "oppo" || brandSelect == "iphone") {
        pro.innerHTML = "";
        for (var a in mobiles[brandSelect]) {
            pro.setAttribute('class','products col-10');
            var div1 = document.createElement("div");
            div1.setAttribute('class','pro-card');
            pro.appendChild(div1);
            var picDiv = document.createElement("div");
            picDiv.setAttribute('class', 'pic-div');
            div1.appendChild(picDiv);
            var pic = document.createElement("div");
            pic.setAttribute('class', 'pic');
            picDiv.appendChild(pic);
            var img = document.createElement("img");
            img.setAttribute('class', 'pic-img');
            img.setAttribute("src", mobiles[brandSelect][a].url);
            pic.appendChild(img);
            var lable = document.createElement("div");
            lable.setAttribute('class','feature');
            picDiv.appendChild(lable);
            var lableText=document.createElement("label");
            lableText.innerText="Featured";
            lable.appendChild(lableText);
            var textBox = document.createElement("div");
            textBox.setAttribute('class', 'text-box');
            div1.appendChild(textBox);
            var text1 = document.createElement("div");
            text1.setAttribute('class', 'text-1');
            text1.innerText = mobiles[brandSelect][a].name;
            textBox.appendChild(text1);
            var text2 = document.createElement("div");
            text2.setAttribute('class', 'text-2');
            text2.innerText = mobiles[brandSelect][a].sim;
            textBox.appendChild(text2);
            
        }
    }
}
function searchm() {
    var brand = document.getElementById("brand");
    var brandSelect = brand.value;
    var model = document.getElementById("model");
    var modelSelect = model.value;
    console.log(modelSelect);
    if (modelSelect.toLowerCase() == "f19"||modelSelect.toLowerCase() == "f11pro"|| modelSelect.toLowerCase() == "f19pro") {
        pro.innerHTML = "";
        pro.setAttribute('class','products col-10');
            var div1 = document.createElement("div");
            div1.setAttribute('class','pro-card');
            pro.appendChild(div1);
            var picDiv = document.createElement("div");
            picDiv.setAttribute('class', 'pic-div');
            div1.appendChild(picDiv);
            var pic = document.createElement("div");
            pic.setAttribute('class', 'pic');
            picDiv.appendChild(pic);
            var img = document.createElement("img");
            img.setAttribute('class', 'pic-img');
            img.setAttribute("src", mobiles[brandSelect][modelSelect].url);
            pic.appendChild(img);
            var lable = document.createElement("div");
            lable.setAttribute('class','feature');
            picDiv.appendChild(lable);
            var lableText=document.createElement("label");
            lableText.innerText="Featured";
            lable.appendChild(lableText);
            var textBox = document.createElement("div");
            textBox.setAttribute('class', 'text-box');
            div1.appendChild(textBox);
            var text1 = document.createElement("div");
            text1.setAttribute('class', 'text-1');
            text1.innerText = mobiles[brandSelect][modelSelect].name;
            textBox.appendChild(text1);
            var text2 = document.createElement("div");
            text2.setAttribute('class', 'text-2');
            text2.innerText = mobiles[brandSelect][modelSelect].sim;
            textBox.appendChild(text2);
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