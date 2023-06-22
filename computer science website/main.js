/* Heading card background image carousel */
const background_images = [
    "42.jpg",
    "42.jpg",
    "42.jpg",
    "42.jpg"
];
const bg_index = Math.floor(Math.random() * background_images.length);
const active_background = background_images[bg_index];
console.log(active_background)
try {
    document.getElementById("heading_container").style.backgroundImage = "url('resources/'" + active_background + "')";
}
catch {
    console.error("Couldn't load background image.")
}

/* Functions */
function fun_fact() {
    window.alert("computer science is main course of education you .")
}
