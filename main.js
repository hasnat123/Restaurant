//select element function
const selectElement = function(element)
{
    return document.querySelector(element);
}

const menuToggler = selectElement(".menu-toggle");
const body = selectElement("body");

menuToggler.addEventListener("click", function()
{
    body.classList.toggle("open");
})

const currentLocation = location.href;
const navLink = document.querySelectorAll(".nav-link");
const navLength = navLink.length;
for (let i = 0; i < navLength; i++)
{
    if(navLink[i].href === currentLocation) navLink[i].classList.add("active");
    else navLink[i].classList.remove("active");
}

//Scroll reveal

window.sr = ScrollReveal();

sr.reveal(".animate-left", {
    origin: "left",
    duration: 1000,
    distance: "25rem",
    delay: 300
});

sr.reveal(".animate-right", {
    origin: "right",
    duration: 1000,
    distance: "25rem",
    delay: 600
});

sr.reveal(".animate-top", {
    origin: "top",
    duration: 1000,
    distance: "25rem",
    delay: 600
});

sr.reveal(".animate-bottom", {
    origin: "bottom",
    duration: 1000,
    distance: "25rem",
    delay: 600
});
