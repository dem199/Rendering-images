// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "IMG_3563.PNG",
    "IMG_3565.PNG",
    "IMG_3570.PNG",
    "IMG_3572.PNG"
]

const container = document.getElementById("container")

function renderImages() {
    let imgsDOM = ""
    for (let i = 0; i < imgs.length; i++) {
        imgsDOM += `<img alt="Optimistic pictures" class="optimistic-img" src="${imgs[i]}">`
    }
    container.innerHTML = imgsDOM
}

renderImages()