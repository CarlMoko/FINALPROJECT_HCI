document.getElementById("scrollSectionBtn").addEventListener("click", function() {
    let previousUrl = localStorage.getItem("previousUrl");
    if (previousUrl && previousUrl.includes("#")) {
        window.location.href = previousUrl;
    } else {
        window.history.back(); 
    }
});


localStorage.setItem("previousUrl", window.location.href);
