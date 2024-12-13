const userReviews = {}
const movieIDs = ['m1', 'm10', 'm100', 'm1000', 'm1002', 'm1003', 'm1004', 'm1005','m1006', 'm1007', 'm1008', 'm1009', 'm101', 'm1010', 'm1011', 'm1012','m1013', 'm1014', 'm1015', 'm1016', 'm1017', 'm1018', 'm1019', 'm102','m1020', 'm1021', 'm1022', 'm1023', 'm1024', 'm1025', 'm1026', 'm1027','m1028', 'm1029', 'm103', 'm1030', 'm1031', 'm1032', 'm1033', 'm1034','m1035', 'm1036', 'm1037', 'm1038', 'm1039', 'm104', 'm1040', 'm1041','m1042', 'm1043', 'm1044', 'm1046', 'm1047', 'm1049', 'm105', 'm1050','m1051', 'm1053', 'm1054', 'm1055', 'm1056', 'm1057', 'm1058', 'm1059','m106', 'm1060', 'm1061', 'm1062', 'm1063', 'm1064', 'm1066', 'm1067','m1068', 'm1069', 'm107', 'm1070', 'm1071', 'm1073', 'm1076', 'm1077','m1078', 'm1079', 'm108', 'm1080', 'm1081', 'm1082', 'm1083', 'm1084','m1085', 'm1086', 'm1087', 'm1088', 'm1089', 'm1090', 'm1091', 'm1092','m1093', 'm1094', 'm1095', 'm1096'];
const movieNames = ["Jumanji (1995)",  "American President, The (1995)",  "Mr. Wrong (1996)",  "Parent Trap, The (1961)",  "Homeward Bound: The Incredible Journey (1993)",  "Shaggy Dog, The (1959)",  "Swiss Family Robinson (1960)",  "That Darn Cat! (1965)",  "20,000 Leagues Under the Sea (1954)",  "Cool Runnings (1993)",  "Angels in the Outfield (1994)",  "Cinderella (1950)",  "Unforgettable (1996)",  "Winnie the Pooh and the Blustery Day (1968)",  "Three Caballeros, The (1945)",  "Sword in the Stone, The (1963)",  "So Dear to My Heart (1949)",  "Robin Hood: Prince of Thieves (1991)",  "Mary Poppins (1964)",  "Dumbo (1941)",  "Pete's Dragon (1977)",  "Bedknobs and Broomsticks (1971)",  "Alice in Wonderland (1951)",  "Happy Gilmore (1996)",  "Fox and the Hound, The (1981)",  "Freeway (1996)",  "Sound of Music, The (1965)",  "Die Hard (1988)",  "Lawnmower Man, The (1992)",  "Unhook the Stars (1996)",  "Synthetic Pleasures (1995)",  "Secret Agent, The (1996)",  "Secrets & Lies (1996)",  "That Thing You Do! (1996)",  "Bridges of Madison County, The (1995)",  "To Gillian on Her 37th Birthday (1996)",  "Surviving Picasso (1996)",  "Love Is All There Is (1996)",  "Beautiful Thing (1996)",  "Long Kiss Goodnight, The (1996)",  "Ghost and the Darkness, The (1996)",  "Looking for Richard (1996)",  "Trees Lounge (1996)",  "Proprietor, The (1996)",  "Normal Life (1996)",  "Nobody Loves Me (Keiner liebt mich) (1994)",  "Get on the Bus (1996)",  "Shadow Conspiracy (1997)",  "Jude (1996)",  "Everyone Says I Love You (1996)",  "Bitter Sugar (Azucar Amargo) (1996)",  "Swingers (1996)",  "Sleepers (1996)",  "Johns (1996)",  "Muppet Treasure Island (1996)",  "Aladdin and the King of Thieves (1996)",  "Woman in Question, The (1950)",  "Damsel in Distress, A (1937)",  "Crossfire (1947)",  "Murder, My Sweet (1944)",  "Macao (1952)",  "For the Moment (1994)",  "Willy Wonka and the Chocolate Factory (1971)",  "Sexual Life of the Belgians, The (1994)",  "Catwalk (1995)",  "Innocents, The (1961)",  "Sleeper (1973)",  "Bananas (1971)",  "Fish Called Wanda, A (1988)",  "Monty Python's Life of Brian (1979)",  "Candidate, The (1972)",  "Great Race, The (1965)",  "Bonnie and Clyde (1967)",  "Old Man and the Sea, The (1958)",  "Headless Body in Topless Bar (1995)",  "Dial M for Murder (1954)",  "Madame Butterfly (1995)",  "Reservoir Dogs (1992)",  "Basic Instinct (1992)",  "Doors, The (1991)",  "Crying Game, The (1992)",  "Glengarry Glen Ross (1992)",  "Braveheart (1995)",  "Sophie's Choice (1982)",  "E.T. the Extra-Terrestrial (1982)",  "Search for One-eye Jimmy, The (1996)",  "Christmas Carol, A (1938)",  "Days of Thunder (1990)",  "Top Gun (1986)",  "American Strays (1996)",  "Rebel Without a Cause (1955)",  "Streetcar Named Desire, A (1951)",  "Children of the Corn IV: The Gathering (1996)",  "Leopard Son, The (1996)",  "Loser (1991)",  "Prerokbe Ognja (1995)",  "Charm's Incidents (1996)",  "Bird of Prey (1996)",  "Microcosmos (Microcosmos: Le peuple de l'herbe) (1996)",  "Palookaville (1996)"];

function generateTile(title, id, is_rec) {
    let tile = document.createElement("div");
    const img_url = `https://liangfgithub.github.io/MovieImages/${Number(id) + 1}.jpg?raw=true`;
    tile.setAttribute("class", "tile");
    let template = `
        <p class='movie_title'>${title}</p>
        <img class='movie_image' src=${img_url}>
        <div class='ratings'>
            <button class='rating_button' value='1' data-movie='${id}'>1</button>
            <button class='rating_button' value='2' data-movie='${id}'>2</button>
            <button class='rating_button' value='3' data-movie='${id}'>3</button>
            <button class='rating_button' value='4' data-movie='${id}'>4</button>
            <button class='rating_button' value='5' data-movie='${id}'>5</button>
        </div>
    `;

    // This means we are loading in rated content
    if(is_rec == true) {
        let template = `
            <p class='movie_title'>${title}</p>
            <img class='movie_image' src=${img_url}>
        `;
        tile.innerHTML = template;
        return tile;
    }
    else {
        tile.innerHTML = template;
        return tile;
    }
}

function submitReview(element) {
    const classes = element.classList;
    if(classes.contains('rating_button')) {
        const value = element.value;
        const movie = element.dataset['movie']
        userReviews[movie] = value;

        const parent = element.parentNode;
        const children = parent.querySelectorAll("button")
        children.forEach(child => {
            child.removeAttribute("disabled");
        });
        element.disabled = "true";
    }
}

function fillDiv(div_id, movies, ids, is_rec) {
    const container = document.querySelector(`#${div_id}`);
    movies.forEach((name, index) => {
        container.appendChild(generateTile(name, ids[index].replace("m", ""), is_rec));
    });
}

function getSimilarMovies() {
    // Throw error if there are no movies rated.
    const N = 100;
    const reviews = new Array(N);
    reviews.fill(0);
    const indices = [];
    for(id in userReviews) {
        const array_index = movieIDs.indexOf("m" + id);
        reviews[array_index] = Number(userReviews[id]);
        indices.push(Number(array_index));
    }

    const all_scores = new Array(100);
    const top_ten_ids = new Array(10);
    // Iterate through each row and compute the weighed score
    for(let i = 0; i < N; i++) {
        const norm = smallS[i].filter((val, idx) => indices.includes(idx)).reduce((x, y, idx) => x + y);
        const weighted = smallS[i].map((subS, j) => subS * reviews[j]).reduce((x, y) => x + y);
        const score = weighted / norm;
        all_scores[i] = score;
    }

    for(let i = 0; i < 10; i++) {
        let max_idx = all_scores.indexOf(Math.max(...all_scores));
        top_ten_ids[i] = max_idx;
        all_scores[max_idx] = -1;
    }

    // Once the promise returns we'll run "fillDiv" on the "no2" div
    const rec_names = new Array(10);
    const rec_ids = new Array(10);
    for(let i = 0; i < 10; i++) {
        rec_names[i] = movieNames[top_ten_ids[i]];
        rec_ids[i] = movieIDs[top_ten_ids[i]];
    }
    fillDiv("no2", rec_names, rec_ids, true);
}

// Init
window.onload = () => {
    fillDiv("no1", movieNames, movieIDs, false);
    window.addEventListener("click", (event) => {submitReview(event.target)});
};
