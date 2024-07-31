const prompt = require('prompt-sync')();

let countries = [];

function addCountry(name) {
    let country = {
        name: name,
        states: []
    };
    countries.push(country);
    console.log(`País "${name}" adicionado com sucesso.`);
    return country;
}

function addState(country, name) {
    let state = {
        name: name,
        cities: []
    };
    country.states.push(state);
    console.log(`Estado "${name}" adicionado ao país "${country.name}".`);
    return state;
}

function addCity(state, name) {
    state.cities.push(name);
    console.log(`Cidade "${name}" adicionada ao estado "${state.name}".`);
}

function listCountries() {
    if (countries.length === 0) {
        console.log("Nenhum país cadastrado.");
        return;
    }
    console.log("Países cadastrados:");
    countries.forEach((country, index) => {
        console.log(`${index + 1}. ${country.name}`);
    });
}

function listStates(country) {
    if (country.states.length === 0) {
        console.log(`Nenhum estado cadastrado para ${country.name}.`);
        return;
    }
    console.log(`Estados de ${country.name}:`);
    country.states.forEach((state, index) => {
        console.log(`${index + 1}. ${state.name}`);
    });
}

function listCities(state) {
    if (state.cities.length === 0) {
        console.log(`Nenhuma cidade cadastrada em ${state.name}.`);
        return;
    }
    console.log(`Cidades de ${state.name}:`);
    state.cities.forEach((city, index) => {
        console.log(`${index + 1}. ${city}`);
    });
}

function startCadastro() {
    while (true) {
        console.log("\n### CADASTRO DE PAÍSES, ESTADOS E CIDADES ###\n");
        console.log("Escolha uma opção:");
        console.log("1. Adicionar país");
        console.log("2. Adicionar estado a um país");
        console.log("3. Adicionar cidade a um estado");
        console.log("4. Listar países");
        console.log("5. Listar estados e cidades");
        console.log("6. Sair");

        let choice = prompt("Digite o número da opção desejada: ").trim();
        let countryIndex, stateIndex;

        switch (choice) {
            case '1':
                let countryName = prompt("Digite o nome do país: ").trim();
                addCountry(countryName);
                break;
            case '2':
                listCountries();
                countryIndex = parseInt(prompt("Digite o número do país: ").trim()) - 1;
                if (isNaN(countryIndex) || countryIndex < 0 || countryIndex >= countries.length) {
                    console.log("Número do país inválido. Tente novamente.");
                    break;
                }
                let selectedCountry = countries[countryIndex];
                let stateName = prompt("Digite o nome do estado: ").trim();
                addState(selectedCountry, stateName);
                break;
            case '3':
                listCountries();
                countryIndex = parseInt(prompt("Digite o número do país: ").trim()) - 1;
                if (isNaN(countryIndex) || countryIndex < 0 || countryIndex >= countries.length) {
                    console.log("Número do país inválido. Tente novamente.");
                    break;
                }
                let selectedCountryForState = countries[countryIndex];
                listStates(selectedCountryForState);
                stateIndex = parseInt(prompt("Digite o número do estado: ").trim()) - 1;
                if (isNaN(stateIndex) || stateIndex < 0 || stateIndex >= selectedCountryForState.states.length) {
                    console.log("Número do estado inválido. Tente novamente.");
                    break;
                }
                let selectedState = selectedCountryForState.states[stateIndex];
                let cityName = prompt("Digite o nome da cidade: ").trim();
                addCity(selectedState, cityName);
                break;
            case '4':
                listCountries();
                break;
            case '5':
                listCountries();
                countryIndex = parseInt(prompt("Digite o número do país para listar estados e cidades: ").trim()) - 1;
                if (isNaN(countryIndex) || countryIndex < 0 || countryIndex >= countries.length) {
                    console.log("Número do país inválido. Tente novamente.");
                    break;
                }
                let selectedCountryForListing = countries[countryIndex];
                listStates(selectedCountryForListing);
                stateIndex = parseInt(prompt("Digite o número do estado para listar cidades: ").trim()) - 1;
                if (isNaN(stateIndex) || stateIndex < 0 || stateIndex >= selectedCountryForListing.states.length) {
                    console.log("Número do estado inválido. Tente novamente.");
                    break;
                }
                let selectedState2 = selectedCountryForListing.states[stateIndex];
                listCities(selectedState2);
                break;
            case '6':
                console.log("Saindo...");
                return;
            default:
                console.log("Opção inválida. Por favor, escolha uma opção válida.");
        }
    }
}

startCadastro();
