// Get the button
let scrollSectionBtn = document.getElementById("scrollSectionBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
        scrollSectionBtn.style.display = "block";
    } else {
        scrollSectionBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the specified section
scrollSectionBtn.addEventListener("click", function() {
    scrollToSection('section1');
});

function scrollToSection(sectionId) {
    let section = document.getElementById(sectionId);
    section.scrollIntoView({behavior: "smooth"});
}
