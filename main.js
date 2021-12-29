window.addEventListener('wheel', (e) => {
    e.preventDefault();
    document.getElementById("container").scrollLeft += e.deltaY;
})

let navbuttons = document.getElementsByClassName("nav-button");

function navButtonClick(e)
{
    e.preventDefault();
    
}