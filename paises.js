const prompt = require('prompt-sync')();

// Estrutura de dados
let countries = [];

// Função para adicionar um país
function addCountry(name) {
    let country = {
        name: name,
        states: []
    };
    countries.push(country);
    return country;
}

// Função para adicionar um estado a um país
function addState(country, name) {
    let state = {
        name: name,
        cities: []
    };
    country.states.push(state);
    return state;
}

// Função para adicionar uma cidade a um estado
function addCity(state, name) {
    state.cities.push(name);
}

// Função para listar todos os países
function listCountries() {
    console.log("Países cadastrados:");
    countries.forEach((country, index) => {
        console.log(`${index + 1}. ${country.name}`);
    });
}

// Função para listar estados de um país
function listStates(country) {
    console.log(`Estados de ${country.name}:`);
    country.states.forEach((state, index) => {
        console.log(`${index + 1}. ${state.name}`);
    });
}

// Função para listar cidades de um estado
function listCities(state) {
    console.log(`Cidades de ${state.name}:`);
    state.cities.forEach((city, index) => {
        console.log(`${index + 1}. ${city}`);
    });
}

// Função para iniciar o cadastro
function startCadastro() {
    while (true) {
        console.log("\n### CADASTRO DE PAÍSES, ESTADOS E CIDADES ###\n");
        console.log("Escolha uma opção:");
        console.log("1. Adicionar país");
        console.log("2. Adicionar estado a um país");
        console.log("3. Adicionar cidade a um estado");
        console.log("4. Listar países");
        console.log("5. Sair");

        let choice = prompt("Digite o número da opção desejada: ");

        switch (choice) {
            case '1':
                let countryName = prompt("Digite o nome do país: ");
                addCountry(countryName);
                break;
            case '2':
                listCountries();
                let countryIndex = prompt("Digite o número do país: ");
                let selectedCountry = countries[countryIndex - 1];
                let stateName = prompt("Digite o nome do estado: ");
                addState(selectedCountry, stateName);
                break;
            case '3':
                listCountries();
                countryIndex = prompt("Digite o número do país: ");
                selectedCountry = countries[countryIndex - 1];
                listStates(selectedCountry);
                let stateIndex = prompt("Digite o número do estado: ");
                let selectedState = selectedCountry.states[stateIndex - 1];
                let cityName = prompt("Digite o nome da cidade: ");
                addCity(selectedState, cityName);
                break;
            case '4':
                listCountries();
                break;
            case '5':
                console.log("Saindo...");
                return;
            default:
                console.log("Opção inválida. Por favor, escolha uma opção válida.");
        }
    }
}

// Iniciar o cadastro
startCadastro();
