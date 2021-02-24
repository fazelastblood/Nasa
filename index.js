var API_URL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol="
var API_END = "&camera=fhaz&api_key=";
var API_PASS = "D4XVk2MJ5Qbthubz2nbzRgxppVWbQSrsAkhpCRNC";

function getInput() {
    var Input = document.getElementById("value").value;
    GetApiData(Input);
}

async function GetApiData(data) {
    var resp = await fetch(API_URL + data + API_END + API_PASS);
    var respData = await resp.json();

    console.log(respData);

    if (respData.photos.length === 0) {
        alert("No Image Availible")
    } else {
        showData(respData);
    }
}

function showData(data) {
    var main = document.getElementById("main");
    main.innerHTML = "";

    data.photos.forEach((data) => {
        var Image = document.createElement("div");
        Image.classList.add("Image");

        Image.innerHTML = `
            <img src="${data.img_src}" alt="Image" />
            <h4>Camera Name: ${data.camera.name}</h4>
            <h4>Rover Name: ${data.rover.name}</h4>
            <h4>Earth Date: ${data.earth_date}</h4>
        `;

        main.append(Image);
    })
}
