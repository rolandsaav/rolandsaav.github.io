function scrollHome()
{
    rect = document.getElementById('nav').getBoundingClientRect();
    window.scroll({top: rect.top, behavior: "smooth"});
}

function scrollAbout()
{
    rect = document.getElementById('about').getBoundingClientRect();
    window.scroll({top: rect.top, behavior: "smooth"});
}
function scrollProjects()
{
    rect = document.getElementById('projects').getBoundingClientRect();
    window.scroll({top: rect.top, behavior: "smooth"});
}
function scrollContact()
{
    rect = document.getElementById('contact').getBoundingClientRect();
    window.scroll({top: rect.top, behavior: "smooth"});
}