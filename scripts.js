document.addEventListener('DOMContentLoaded', () => {

        document.addEventListener('contextmenu', (event) => event.preventDefault());
        

            // Afficher la bulle au clic
    const gridItems = document.querySelectorAll('#stations > div');
    gridItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('show-bubble');
        });
    });

    const buyButtons = document.querySelectorAll('.buy-button');
    buyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const url = event.target.getAttribute('data-url');
            window.open(url, '_blank');
        });
    });

    const audio1 = new Audio("https://tim-school.com/codepen/in-cowbell/cowbell.mp3");
    let counterPlusElem1 = document.querySelector(".header");

    function play1() {
        audio1.play();
    }
    counterPlusElem1.addEventListener("click", () => {

        if (audio1.paused === true) {
            play1();
        } else {
            audio1.pause();
            audio1.currentTime = 0;
            play1();
        }
    });

    $(".header").on("click", function () {
        $('.header').effect('shake', { times: 4, distance: 2 }, 1000);
    });



    });