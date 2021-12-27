window.addEventListener('wheel', (e) => {
    e.preventDefault();
    document.getElementById("container").scrollLeft += e.deltaY;
})


