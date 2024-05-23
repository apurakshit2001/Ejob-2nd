let isNight = true;

const dayandnight = () => {
    const body = document.body;
    const links = document.querySelectorAll(".link"); // Corrected selector
    
    if (isNight) {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        
        links.forEach(link => {
            link.style.color = "black"; // Loop through each link and change color
        });
        
        isNight = false;
    } else {
        body.style.backgroundColor = "#272727";
        body.style.color = "white";
        
        links.forEach(link => {
            link.style.color = "white"; // Loop through each link and change color
        });
        
        isNight = true;
    }
}
