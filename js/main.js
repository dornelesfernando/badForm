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
    let retNun;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if(randomNumber == max) {
        randomNumber--;
    }else{
        retNun = randomNumber < 10 ? `0${randomNumber}` : randomNumber;
    }
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

//reCaptcha

const recButton = document.querySelector("input[name=recapchaButton]");
const hiddenRe = document.querySelector(".hiddenRe");
const submitButton = document.querySelector("#submit");

recButton.addEventListener('change', function () {
    if(this.checked){
        hiddenRe.style.display = "inline";
        var container = document.querySelector("#unity-container");
        var canvas = document.querySelector("#unity-canvas");
        var loadingBar = document.querySelector("#unity-loading-bar");
        var progressBarFull = document.querySelector("#unity-progress-bar-full");
        var fullscreenButton = document.querySelector("#unity-fullscreen-button");
        var warningBanner = document.querySelector("#unity-warning");
  
        // Shows a temporary message banner/ribbon for a few seconds, or
        // a permanent error message on top of the canvas if type=='error'.
        // If type=='warning', a yellow highlight color is used.
        // Modify or remove this function to customize the visually presented
        // way that non-critical warnings and error messages are presented to the
        // user.
        function unityShowBanner(msg, type) {
          function updateBannerVisibility() {
            warningBanner.style.display = warningBanner.children.length ? 'block' : 'none';
          }
          var div = document.createElement('div');
          div.innerHTML = msg;
          warningBanner.appendChild(div);
          if (type == 'error') div.style = 'background: red; padding: 10px;';
          else {
            if (type == 'warning') div.style = 'background: yellow; padding: 10px;';
            setTimeout(function() {
              warningBanner.removeChild(div);
              updateBannerVisibility();
            }, 5000);
          }
          updateBannerVisibility();
        }
  
        var buildUrl = "Build";
        var loaderUrl = buildUrl + "/Builds.loader.js";
        var config = {
          dataUrl: buildUrl + "/Builds.data.unityweb",
          frameworkUrl: buildUrl + "/Builds.framework.js.unityweb",
          codeUrl: buildUrl + "/Builds.wasm.unityweb",
          streamingAssetsUrl: "StreamingAssets",
          companyName: "DefaultCompany",
          productName: "gameCapy",
          productVersion: "1.0",
          showBanner: unityShowBanner,
        };
  
        // By default, Unity keeps WebGL canvas render target size matched with
        // the DOM size of the canvas element (scaled by window.devicePixelRatio)
        // Set this to false if you want to decouple this synchronization from
        // happening inside the engine, and you would instead like to size up
        // the canvas DOM size and WebGL render target sizes yourself.
        // config.matchWebGLToCanvasSize = false;
  
        if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
          // Mobile device style: fill the whole browser client area with the game canvas:
  
          var meta = document.createElement('meta');
          meta.name = 'viewport';
          meta.content = 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes';
          document.getElementsByTagName('head')[0].appendChild(meta);
          container.className = "unity-mobile";
          canvas.className = "unity-mobile";
  
          // To lower canvas resolution on mobile devices to gain some
          // performance, uncomment the following line:
          // config.devicePixelRatio = 1;
  
  
        } else {
          // Desktop style: Render the game canvas in a window that can be maximized to fullscreen:
  
          canvas.style.width = "656px";
          canvas.style.height = "369px";
        }
  
        loadingBar.style.display = "block";
  
        var script = document.createElement("script");
        script.src = loaderUrl;
        script.onload = () => {
          createUnityInstance(canvas, config, (progress) => {
            progressBarFull.style.width = 100 * progress + "%";
                }).then((unityInstance) => {
                  loadingBar.style.display = "none";
                  fullscreenButton.onclick = () => {
                    unityInstance.SetFullscreen(1);
                  };
                }).catch((message) => {
                  alert(message);
                });
              };
  
        document.body.appendChild(script);
    }else{
        submitButton.disabled = true;
    }
});

var teclas = {};

document.addEventListener('keydown', function(event) {
    teclas[event.key] = true;
    
    // Verifica se as teclas 'a' e 'b' estão pressionadas
    if(teclas['Shift'] && teclas['Alt'] && teclas['Enter']) {
        submitButton.disabled = false;
    }
});

document.addEventListener('keyup', function(event) {
    teclas[event.key] = false;
});