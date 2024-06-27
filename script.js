var darkmode = document.getElementById("dark");

darkmode.onclick = function() {

    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        darkmode.src = "./Images/light_mode_24dp_FILL0_wght400_GRAD0_opsz24.png";
    }
    else 
    {
        darkmode.src = "./Images/dark_mode_24dp_FILL0_wght400_GRAD0_opsz24.png";
    }
};