const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/municipios';

// requisição JSON
$.getJSON(url, function(data){
    let i = 0;
    let conteudo = '<select name="cities" id="lang" required>';
    conteudo += '<option>Selecione sua cidade</option>';
    $.each(data, function (v, val) {
        i++;
        conteudo += ` <option value="${i}">`+val.nome+`</option>`
    });
    conteudo += '</select>'

    $(".listaMunicipios").html(conteudo);

    const selectCity = document.querySelector('.selectCity');
    const select = document.getElementById('lang');

    select.addEventListener('change', function(){
        let option = select.options[select.selectedIndex];
        selectCity.innerHTML = option.innerText;
    })

    const numberCity = document.getElementById('numberCity');

    numberCity.addEventListener('input', function(e){
        let option = select.options[numberCity.value];
        option.value = option.innerText;
        selectCity.innerHTML = option.innerText;
    });
});