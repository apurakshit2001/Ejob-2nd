let isNight = true;

const dayandnight = () => {
    const body = document.body;
    const links = document.querySelectorAll(".link"); 
    const arrow = document.querySelectorAll(".arrow");

    if (isNight) {
        body.style.backgroundColor = "white";
        body.style.color = "black";

        arrow.forEach(arrow => {
            arrow.style.boxShadow = "0 0 10px red";
            arrow.style.color = "black";
            arrow.style.fontSize = "15px";
        });

        links.forEach(link => {
            link.style.color = "black"; 
        });

        isNight = false;
    } else {
        body.style.backgroundColor = "#272727";
        body.style.color = "white";

        links.forEach(link => {
            link.style.color = "white"; 
        });

        isNight = true;
    }
}
