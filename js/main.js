window.addEventListener('load', init);

//Globals
let apiUrl = 'http://localhost/magazine/webservice/index.php';
let soulsData = {};
let gallery;
let detailModal;
let detailModalContent;
let detailModalCloseButton;

/**
 * Initialize after the DOM is ready
 */
function init()
{
    //Retrieve gallery
    gallery = document.querySelector('.listings');
    gallery.addEventListener('click', soulsClickHandler);
    //Retrieve modal elements, and add click event for closing modal
    detailModal = document.getElementById('souls-detail');
    detailModalContent = document.querySelector('.modal-content');
    detailModalCloseButton = document.querySelector('.modal-close');
    detailModalCloseButton.addEventListener('click', detailModalCloseClickHandler);

    //Start the application with loading the API data
    ajaxRequest(apiUrl, createSoulsGames);
}



/**
 * AJAX-call to retrieve data from a webservice
 *
 * @param url
 * @param successHandler
 */
function ajaxRequest(url, successHandler)
{
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(successHandler)
        .catch(ajaxErrorHandler);
}

/**
 * Create initial Pokémon cards based on initial API data
 *
 * @param data
 */
function createSoulsGames(data)
{
    //Loop through the list of Pokémon
    for (let souls of data) {
        //Wrapper element for every Pokémon card. We need the wrapper now, because adding it later
        //will result in Pokémon being ordered based on the load times of the API instead of chronically
        let soulsGame = document.createElement('div');

        //Append Pokémon card to the actual HTML


        //Element for the name of the Pokémon
        let title = document.createElement('h1');
        title.innerHTML = `${souls.name} (#${souls.id})`;
        soulsGame.appendChild(title);

        //Element for the image of the Pokémon
        let image = document.createElement('img');
        image.src = souls.cover;
        soulsGame.appendChild(image);

        //Element for the image of the Pokémon
        let button = document.createElement('button');
        button.innerHTML = "fav button";
        button.dataset.id = souls.id;
        soulsGame.appendChild(button);

        //Element for the image of the Pokémon
        let details = document.createElement('button');
        details.innerHTML = "details button";
        details.dataset.id = souls.id;
        soulsGame.appendChild(details);

        gallery.appendChild(soulsGame);

        //Store Pokémon data globally for later use in other functions
        soulsData[souls.id] = souls;
    }
}

/**
 * Open the detailview with information of a Pokémon
 *
 * @param e
 */
function soulsClickHandler(e)
{
    let clickedItem = e.target;

    // //Get the information from the global stored data
    let souls = soulsData[clickedItem.dataset.id];

    //Check if we clicked on a button
    if (clickedItem.nodeName !== 'BUTTON') {
        return;
    }

    //Reset the content
    detailModalContent.innerHTML = '';

    //Show the name we used on the main grid
    let title = document.createElement('h1');
    title.innerHTML = `${souls.name} (#${souls.id})`;
    detailModalContent.appendChild(title);

    // show the main image
    let image = document.createElement('img');
    image.src = souls.cover;
    detailModalContent.appendChild(image);

    // get information from url using click and put it in showdetails function and put it in soulsclickhandler
    let soulsUrl = `http://localhost/magazine/webservice/index.php?id=${clickedItem.dataset.id}`;
    ajaxRequest(soulsUrl, showDetails);
}



function showDetails(data) {

    //put data details in html
    console.log(data)
    //Show the details
    let developer = document.createElement('h2');
    developer.innerHTML = `Developer: ${data.developer}`;
    detailModalContent.appendChild(developer);

    let director = document.createElement('h2');
    director.innerHTML = `Director: ${data.director}`;
    detailModalContent.appendChild(director);

    let publisher = document.createElement('h2');
    publisher.innerHTML = `Publisher: ${data.publisher}`;
    detailModalContent.appendChild(publisher);

    let release = document.createElement('h2');
    release.innerHTML = `Release date: ${data.release}`;
    detailModalContent.appendChild(release);

    let platforms = document.createElement('h2');
    platforms.innerHTML = `Platform(s): ${data.platforms}`;
    detailModalContent.appendChild(platforms);

    //Open the modal
    detailModal.classList.add('open');

}


/**
 * Show an error message to inform the API isn't working correctly
 *
 * @param data
 */
function ajaxErrorHandler(data)
{
    let error = document.createElement('div');
    error.classList.add('error');
    error.innerHTML = 'Error';
    gallery.before(error);
    console.log(data)
}

/**
 * Close the modal
 *
 * @param e
 */
function detailModalCloseClickHandler(e)
{
    detailModal.classList.remove('open');
}