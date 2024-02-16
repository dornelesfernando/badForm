// if (document.addEventListener) {
//     document.addEventListener("contextmenu", function(e) {
//         e.preventDefault();
//         return false;
//     });
// } else { //Versões antigas do IE
//     document.attachEvent("oncontextmenu", function(e) {
//         e = e || window.event;
//         e.returnValue = false;
//         return false;
//     });
// }

const form = document.querySelector(".form");
const body = document.querySelector('body');

// form.addEventListener('submit', function (e) {
//     e.preventDefault()
// })

function criaRandom(){
    const min = 1;
    const max = 10;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    
    const retNun = randomNumber < 10 ? `0${randomNumber}` : randomNumber;
    return retNun;
}

const randomNumber = criaRandom();

body.style.backgroundImage = `url('src/assets/img/${randomNumber}.jpg')`;


const socialNameValue = document.querySelector('.socialNameValue');
const buttonName = document.querySelector('#buttonName');
const buttonMore = document.querySelector('#more');

const arrayNick = ["Bariátrico", "Biblioteco", "Bisteco", "Bistéco", "Borboleto", "Calabreso", "Camisinho", 
                    "Cerejo", "Cervejo", "Cnpjoto", "Cpfo", "Danono", "Delicio", "Dipirono", "Fanto", "Gasolino", 
                    "Itabuino", "Iveto", "Lacraio", "Lady", "Lapiseiro", "Lombrigo", "Ludmilo", "Madonno", 
                    "Mamadeiro", "Mato", "Monaliso", "Notebooko", "Panqueco", "Pastilho", "Pitango", "Prexeco", 
                    "Salado", "Samsungo", "Tadalafilo", "Tigreso", "Tilapio", "Toscano", "Valesco", "Xoxoto", 
                    "Iveto Sangalo", "Casos Bahio", "Rito Cadillaco", "Patricio Poeto", "Tubaíno", 
                    "Valesco Popozudo", "Braganço Paulisto", "Caldo de Cano", "Salado de Fruto", "Emicido", 
                    "Sapopembo", "Diademo", "Caso Lotérico", "Ludmillo", "Arábio Saudito", "Silas Malafaio", 
                    "Caganeiro", "Cracolândio", "CNPJoto", "Aeromoço", "Lady Gago", "Copacabano", "Ipanemo", 
                    "Olivio Palito", "Seu Madrugo", "Anchieto", "Marílio Mendonço", "Mussarelo", "Netflixo", 
                    "Barro do Tijuco", "Tim Maio", "Kid Bengalo", "Frigideiro", "Motorolo", "Uberlândio", 
                    "Coritibo", "Amado Batisto", "Viagro", "Capivaro", "Pitango", "Gustavo Limo", "Luan Santano", 
                    "Carmen Mirando", "Fatimo Bernardo", "Alfaço", "Ultrafarmo", "Sapatilho", "Sandaio", "Garrafo", 
                    "Perebo", "Palmeiros", "Testosterono", "Margarido", "Magazino Luizo", "Xilocaíno", "Inseticido",
                    "Ubatubo", "Lésbico", "Maconho", "Bolso Famílio", "Madioco", "Melancio", "Taturano", "Fanto Laranjo", 
                    "Pistolo", "Prestobarbo", "Lantejoulo", "Claudio Raio", "Vero Ficho", "Lagosto", "Belo Adormecido", 
                    "Mona Liso", "Cravículo", "Iphono", "Bob Esponjo", "Pelando", "Isabelo", "Globelezo", "Helen Ganzarolo", 
                    "Ambulâncio", "Lamborguino", "Bruno Surfistinho", "Creatino", "Senta Fofo", "Mama Penca", 
                    "Touca de Linguiça", "Mustango", "Itaipavo", "Picanho", "Salsicho", "Vampeto", "Camomilo", 
                    "Centopéio", "Lesmo", "Groselho", "Mego Seno", "Lactopurgo", "Doutor Deolano", "Raparido", 
                    "Limonado", "Manivelo", "Sobrancelho", "Insônio", "Cataporo", "Neymaro", "Carabino", 
                    "Espingardo", "Menstruado", "Eliano", "Carapicuíbo", "Teresino", "Traíro", "Champions Ligo"];

function escolheNick(){
    const min = 0;
    const max = 152;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber
}

buttonName.addEventListener('click', function (e) {
    buttonName.style.display = 'none';
    buttonMore.style.display = 'inline';
    socialNameValue.innerHTML = arrayNick[escolheNick()];
})

buttonMore.addEventListener('click', function (e){
    socialNameValue.innerHTML = arrayNick[escolheNick()];
})


const birthdate = document.querySelector(".birthdate");
const birthdateDays = document.querySelector("#days");

birthdateDays.addEventListener("input", function (e){
    const days = birthdateDays.value;

    const date = new Date((60 * 60 * 3 * 1000)+ ((days - 1) * (60 * 60 * 24 * 1000)));
    
    function zeroAEsc(n){
        return n < 10 ? n = `0${n}`: n;
    }

    function printDate(date){
        const day =zeroAEsc(date.getDate());
        const month = zeroAEsc(date.getMonth() + 1);
        const year = zeroAEsc(date.getFullYear());

        return `${day}/${month}/${year}`
    }

    birthdate.innerHTML = printDate(date);
})  