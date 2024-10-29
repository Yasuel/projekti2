//funktio joka hakee elokuvan tiedot ja tulostaa ne näytölle
function haeElokuva(){
    //haetaan tekstikentän syöte muuttujaan
    let x = document.getElementsByTagName('input');
    let syöte = x[0].value;
    //tarkistetaan onko kentässä syötettä ja heitetään virheilmoitus konsolille
    if (syöte.length < 1) {
        throw new Error("Target can not be empty")
    }

    //tehdään haettava osoite
    let hakuosoite = "http://www.omdbapi.com/?t=" + syöte
    // suoritetaan AJAX haku
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", hakuosoite, true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function() {
            if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                //parsitaan dataa ja lisätään se sivulle
                document.getElementById("leffadata").innerHTML=xmlhttp.responseText
            }
    }
    

}


//lisätään kuuntelija hakukenttään
let x = document.getElementsByTagName('input');
x[1].addEventListener("click", haeElokuva);