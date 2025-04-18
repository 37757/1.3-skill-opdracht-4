const labels = [
    "3DS XL",
    "Laptop",
    "Telefoon",
    "Nintendo Switch",
    "Xbox 360",
];

const data = {
    labels: labels,
    datasets: [
        {
            label: "Most played consoles in hours",
            data: [1000, 3000, 6000, 500, 800], //niet de echte tijden want ik weet het niet uit mijn hoofd
            backgroundColors: ['#FF6363', '#FF8282', '#BEE4D0', '#DBFFCB', '#F4F8D3'],
        }
    ]
}

const config = {
    type: 'doughnut',
    data: data,
}

const config2 = {
    type: 'bar',
    data: data,
}

new Chart(document.getElementById("js--chart--1"), config);

 function getPokemon() {
    let normal = 0, fighting = 0, flying = 0, poison = 0, ground = 0, rock = 0, bug = 0, ghost = 0,
    steel = 0, fire = 0, water = 0, grass = 0, electric = 0, psychic = 0, ice = 0, dragon = 0, dark = 0, fairy = 0, unknown = 0,
 shadow = 0;

 const labels = ['normal','fighting','flying','poison','ground','rock','bug','ghost','steel','fire','water','grass',
'electric','psychic','ice','dragon','dark','fairy','unknown','shadow'];

    for (i = 0; i < 10; i++) {
        let random = Math.floor(Math.random() * 500 + 1);
        let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + random)
            .then(function (response) {
                return response.json();
            })
            .then(function (pokemon) {
                switch (pokemon.types[0].type.name) {
                    case 'normal':
                        normal = normal + 1;
                        break;
    
                    case 'fighting':
                        fighting = fighting + 1;
                        break;
    
                    case 'flying':
                        flying = flying + 1;
                        break;
    
                    case 'poison':
                        poison = poison + 1;
                        break;
    
                    case 'ground':
                        ground = ground + 1;
                        break;
    
                    case 'rock':
                        rock = rock + 1;
                        break;
    
                    case 'bug':
                        bug = bug + 1;
                        break;
    
                    case 'ghost':
                        ghost = ghost + 1;
                        break;
    
                    case 'steel':
                        steel = steel + 1;
                        break;
    
                    case 'fire':
                        fire = fire + 1;
                        break;
    
                    case 'water':
                        water = water + 1;
                        break;
    
                    case 'grass':
                        grass = grass + 1;
                        break;
    
                    case 'electric':
                        electric = electric + 1;
                        break;
    
                    case 'psychic':
                        psychic = psychic + 1;
                        break;
    
                    case 'ice':
                        ice = ice + 1;
                        break;
    
                    case 'dragon':
                        dragon = dragon + 1;
                        break;
    
                    case 'dark':
                        dark = dark + 1;
                        break;
    
                    case 'fairy':
                        fairy = fairy + 1;
                        fighting
    
                    case 'unknown':
                        unknown = unknown + 1;
                        break;
    
                        case 'shadow':
                            shadow = shadow + 1;
                            break;
                }
            }).then(function(){
                dataPokemon.datasets[0].data = [normal,fighting,flying,poison,ground,rock,bug,ghost,steel,fire,water,grass,
                    electric,psychic,ice, dragon,dark,fairy,unknown,shadow],
                graph.update();
            });
 }

 const dataPokemon = {
    labels: labels,
    datasets: [
        {
            label: "Pokemon types",
            data: [normal,fighting,flying,poison,ground,rock,bug,ghost,steel,fire,water,grass,
                electric,psychic,ice, dragon,dark,fairy,unknown,shadow],
            backgroundColors: ['#FF6363', '#FF8282', '#BEE4D0', '#DBFFCB', '#F4F8D3'],
        }
    ]
}

const configPokemon = {
    type: 'bar',
    data: dataPokemon,
}

const graph = new Chart(document.getElementById("js--chart--2"), configPokemon);

}

getPokemon();