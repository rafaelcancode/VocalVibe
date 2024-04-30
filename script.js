var next = document.getElementById("continue-btn")

function nextPage() {
    window.location.href = "answeringpage.html";
    alert("continuing to next page")
}

next.addEventListener("click", nextPage);