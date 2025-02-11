// Button and Menu's dom declaration
const menubtn = document.getElementById("menu-btn");
const navigation = document.getElementById("navigation");

    //  Function declaration ES6+
    const hamburgerMenu = () => {
        menubtn.classList.toggle("active");
        navigation.classList.toggle("active");
    };

    // Eventlistener on click function
    menubtn.addEventListener("click", hamburgerMenu);