<?php
    if(isset($_POST['submit'])){
        include_once('config.php');

        $nome = $_POST['name'].' '. $_POST['lastname'];
        $email = $_POST['email'];
        $days = $_POST['days'];
        $datetime = new DateTime();
        $datetime->setTimestamp((($days - 1) * (60 * 60 * 24)) - 3600);
        $birthdate = $datetime->format('d/m/Y');
        $celular = '('.$_POST['ddd0'].$_POST['ddd1'].') '.$_POST['number0'].' '.$_POST['number1'].$_POST['number2'].$_POST['number3'].$_POST['number4'].'-'.$_POST['number5'].$_POST['number6'].$_POST['number7'].$_POST['number8'];
        $celularRange = $_POST['rangeCel'];
        $cityId = $_POST['numberCity'];
        $city = $_POST['cities'];
        if(!is_numeric($city)) $city = 0;
        $fav_color = 'rgb('.$_POST['red'].','.$_POST['green'].','.$_POST['blue'].')';
        $descricao = $_POST['desc'];
        
        $result = mysqli_query($conexao, "INSERT INTO alunos(nome, email, birthdate, celular, celularRange, cityId, city, fav_color, descricao)
        VALUES('$nome', '$email', '$birthdate', '$celular', '$celularRange', '$cityId', '$city', '$fav_color', '$descricao')");
    }
?>