// write your code here

// document.querySelector("image").appendChild(Image)

function getImages(){
    fetch("http://localhost:3000/images/1")
    .then(res => res.json())
    .then(data => data.forEach(initialize))
    console.log("before fetch returns")
    // console.log(data)
}
getImages();

function initialize() {
    getImages()
    console.log("after get Images")
    // imageData.forEach(image => renderOneImage(image))

}
initialize()