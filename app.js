let left_btn = document.getElementsByClassName('bi-chevron-left')[0];
let right_btn = document.getElementsByClassName('bi-chevron-right')[0];
let cards = document.getElementsByClassName('cards')[0];
let search = document.getElementsByClassName('search')[0];
let search_input = document.getElementById('search_input');


left_btn.addEventListener('click', () => {
    cards.scrollLeft -= 140;
})
right_btn.addEventListener('click', () => {
    cards.scrollLeft += 140;
})

let json_url = "movie.json";

fetch(json_url).then(Response => Response.json())
    .then((data) => {
        data.forEach((element, i) => {
            let {name, imdb, date, sposter, bposter, genre, url} = element;
            let card = document.createElement('a');
            card.classList.add('card');
            card.href = url;
            card.innerHTML = `
            <img src="${sposter}" alt="${name}" class="poster">
            <div class="rest_card">
                <img src="${bposter}" alt="">
                <div class="cont">
                    <h4>${name}</h4>
                    <div class="sub">
                        <p>${genre},${date}</p>
                        <h3><span>IMDB</span> <i class="bi bi-star-fill"></i> ${imdb}</h3>
                    </div>
                </div>
            </div
            `
            cards.appendChild(card);
        });

        //search data load
        data.forEach(element => {
            let {name, imdb, date, sposter, genre, url} = element;
            let card = document.createElement('a');
            card.classList.add('card');
            card.href = url;
            card.innerHTML = `
                <img src="${sposter}" alt="">
                <div class="cont">
                    <h3>${name}</h3>
                    <p>${genre}, ${date}, <span>IMDB</span> <i class="bi bi-star-fill"></i> ${imdb}</p>
                </div>
            `;
            search.appendChild(card);
        });

        //search filter
        // Add an event listener for the input event
        search_input.addEventListener('keyup', function () {
            // Get the value of the search input
            let filter = search_input.value.toUpperCase();

            // Get all the cards
            let cards = document.getElementsByClassName('card');

            // Loop through each card and check if it matches the search criteria
            for (let index = 0; index < cards.length; index++) {
                let card = cards[index];
                let textValue = card.textContent || card.innerText;

                if (textValue.toUpperCase().indexOf(filter) > -1) {
                    card.style.display = "flex";
                    search.style.visibility = "visible";
                    search.style.opacity = 1;
                } else {
                    card.style.display = "none";
                }
            }

            // Check if the search input is empty, and adjust the visibility accordingly
            if (search_input.value === "") {
                search.style.visibility = "hidden";
                search.style.opacity = 0;
            }
        });

        let series = document.getElementById('series');

        series.addEventListener('click', ()=> {
            cards.innerHTML = '';

            let series_array = data.filter(ele => {
                return ele.type === 'series';
            });

            series_array.forEach(element => {
                let {name, imdb, date, sposter, genre, url} = element;
                let card = document.createElement('a');
                card.classList.add('card');
                card.href = url;
                card.innerHTML = `
                <img src="${sposter}" alt="">
                            <div class="cont">
                                <h3>${name}</h3>
                                <p>${genre}, ${date}, <span>IMDB</span> <i class="bi bi-star-fill"></i> ${imdb}</p>
                            </div>
                `
                search.appendChild(card);
            });
        });

    });