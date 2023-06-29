function changeColors() {

    const pElements = document.getElementsByTagName('p');

    const id = setInterval(() => {
        // Loops over each p element in a page
        for(let i = 0; i < pElements.length; i++) {
            // Creates a random value for red green and blue
            let red = Math.floor(Math.random() * 255);
            let green = Math.floor(Math.random() * 255);
            let blue = Math.floor(Math.random() * 255);

            // Changes each element's value to a randomly generated rgb
            pElements[i].style.background = `rgb(${red}, ${green}, ${blue})`;
        }
    }, 1);

    // Stops interval after 10 seconds
    setTimeout(() => {

        clearInterval(id)

    }, 10000);
}
