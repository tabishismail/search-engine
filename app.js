var mobiles = {
    iphone: {
        iphonex: {
            brand: "Iphone",
            model: "Iphone X",
            price: "150000 PKR",
            color: "Gray,Black & White",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "12px Back, And 4px Front (Full Hd Dslar Wala)",
            url: "image/iphone/9.jpg"
        },
        iphone11: {
            brand: "Iphone",
            model: "Iphone 11",
            price: "200000 PKR",
            color: "Gray,Black & White & Crystal",
            storage: "4 & 64, 6 & 128, 6 & 256, 12 & 512",
            camera: "16px Back, And 6px Front (Full Hd Dslar Wala)",
            url: "image/iphone/9.jpg"
        },
        iphone12: {
            brand: "Iphone",
            model: "Iphone 12",
            price: "250000 PKR",
            color: "Gray,Black & White & Crystal & New Crystal",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "20px Back, And 8px Front (Full Hd Dslar Wala)",
            url: "image/iphone/9.jpg"
        }
    },
    samsung: {
        s8: {
            brand: "Samsung",
            model: "Samsung Galaxy S8",
            price: "70000 PKR",
            color: "Golden",
            storage: "4 & 64, 6 & 128",
            camera: "12px Back, And 4px Front",
            url: "image/iphone/9.jpg"
        },
        s9: {
            brand: "Samsung",
            model: "Samsung Galaxy S9",
            price: "100000 PKR",
            color: "Golden",
            storage: "4 & 64, 6 & 128",
            camera: "12px Back, And 4px Front",
            url: "image/iphone/9.jpg"
        },
        s10: {
            brand: "Samsung",
            model: "Samsung Galaxy S10",
            price: "100000 PKR",
            color: "Golden",
            storage: "4 & 64, 6 & 128",
            camera: "12px Back, And 4px Front",
            url: "image/iphone/9.jpg"
        }
    },
    oppo: {
        f8: {
            brand: "Oppo",
            model: "Oppo F8",
            price: "50000 PKR",
            color: "Golden",
            storage: "4 & 64, 6 & 128",
            camera: "12px Back, And 4px Front",
            url: "image/iphone/9.jpg"
        },
        f9: {
            brand: "Oppo",
            model: "Oppo F9",
            price: "75000 PKR",
            color: "Golden & White",
            storage: "4 & 64, 6 & 128",
            camera: "12px Back, And 4px Front",
            url: "image/iphone/9.jpg"
        },
        f10: {
            brand: "Oppo",
            model: "Oppo F10",
            price: "100000 PKR",
            color: "Cristal Shade",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "12px Back, And 4px Front",
            url: "image/iphone/9.jpg"
        }
    },
    infinix: {
        hot8: {
            brand: "Infinix",
            model: "Infinix Hote 8",
            price: "100000 PKR",
            color: "Cristal Shade",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "12px Back, And 4px Front",
            url: "image/iphone/9.jpg"
        },
        hot9: {
            brand: "Infinix",
            model: "Infinix Hote 9",
            price: "100000 PKR",
            color: "Cristal Shade",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "12px Back, And 4px Front",
            url: "image/iphone/9.jpg"
        },
        hot10: {
            brand: "Infinix",
            model: "Infinix Hote 10",
            price: "100000 PKR",
            color: "Cristal Shade",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "12px Back, And 4px Front",
            url: "image/iphone/9.jpg"
        }
    },
    poco: {
        pocox3: {
            brand: "Poco",
            model: "Poco X3",
            price: "100000 PKR",
            color: "Cristal Shade",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "12px Back, And 4px Front",
            url: "image/iphone/9.jpg"
        },
        Poco8c: {
            brand: "Poco",
            model: "Poco 8C",
            price: "100000 PKR",
            color: "Cristal Shade",
            storage: "4 & 64, 6 & 128, 6 & 256",
            camera: "12px Back, And 4px Front",
            url: "image/iphone/9.jpg"
        }
    }
}


for (var key in mobiles) {
    var brands = document.getElementById("brand");
    var option = document.createElement("option");
    var optionText = document.createTextNode(key)
    option.appendChild(optionText)
    brands.appendChild(option)
    for (var key1 in mobiles[key]) {
        pro.setAttribute('class','products');
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
            console.log(mobiles[key][key1].url)
            img.setAttribute("src", mobiles[key][key1].url);
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
            text1.innerText = mobiles[key][key1].model;
            textBox.appendChild(text1);
            var text2 = document.createElement("div");
            text2.setAttribute('class', 'text-2');
            text2.innerText = mobiles[key][key1].camera;
            textBox.appendChild(text2);
    }
}

function search() {
    var brand = document.getElementById("brand");
    var brandSelect = brand.value;
    if (brand) {
        pro.innerHTML = "";
        for (var a in mobiles[brandSelect]) {
            pro.setAttribute('class','products col-lg-10 col-md-10 col-sm-6');
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
            text1.innerText = mobiles[brandSelect][a].model;
            textBox.appendChild(text1);
            var text2 = document.createElement("div");
            text2.setAttribute('class', 'text-2');
            text2.innerText = mobiles[brandSelect][a].camera;
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
    if (brand && model) {
        pro.innerHTML = "";
        pro.setAttribute('class','products col-lg-10 col-md-10 col-sm-6');
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
            text1.innerText = mobiles[brandSelect][modelSelect].model;
            textBox.appendChild(text1);
            var text2 = document.createElement("div");
            text2.setAttribute('class', 'text-2');
            text2.innerText = mobiles[brandSelect][modelSelect].camera;
            textBox.appendChild(text2);
    }
}

function setValue(e) {
    // console.log(e.value)
    var models = document.getElementById("model");
    models.innerHTML = ""
    var option1 = document.createElement("option");
    option1.setAttribute("value","")
    var optionText1 = document.createTextNode("Select Model")
    option1.appendChild(optionText1)
    models.appendChild(option1)
    for (var key in mobiles[e.value]) {
        var option = document.createElement("option");
        var optionText = document.createTextNode(key)
        option.appendChild(optionText)
        models.appendChild(option)
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