function saveImage(src){
    localStorage.setItem("Source",src);
}

function displayImage(){
    var source = localStorage.getItem("Source")
    var eElement = document.getElementById("back")
    var img = document.createElement("img");
    var br = document.createElement("br");
    img.src = source;
    img.classList.add("displayImage");
    document.getElementById("innerBox").insertBefore(img, eElement);
}