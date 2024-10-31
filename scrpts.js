//funktio joka hakee elokuvan tiedot ja tulostaa ne näytölle
function haeElokuva(){
    //haetaan tekstikentän syöte muuttujaan
    let x = document.getElementsByTagName('input');
    let syöte = x[0].value;
    //tarkistetaan onko kentässä syötettä ja heitetään virheilmoitus konsolille
    if (syöte.length < 1) {
        throw new Error("Target can not be empty")
    }
    localStorage.setItem("hakusana", syöte)
}
    
//täytetään div sivun ladattua hakusanalla
function täytäElokuvaData(){
    let hakuosoite = "https://www.omdbapi.com/?apikey=75309769&t=" + localStorage.getItem("hakusana")
    // suoritetaan AJAX haku
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", hakuosoite, true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function() {
            if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                //parsitaan dataa ja lisätään se sivulle
                let leffatiedot = JSON.parse(xmlhttp.responseText)
                //testioperaatio, poistetaan myöhemmin
                console.log(leffatiedot)
                //kerätään leffatiedoista kivat asiat ja laitetaan divin sisään taulukkoon
                document.getElementById("leffataulukko").innerHTML = 
                "<table>" +
                "<tr>" +
                    "<th>Title</th>" +
                    "<th>Year</th>" +
                    "<th>Plot</th>" +
                "</tr>" +
                "<tr>" +
                    "<td>" + leffatiedot.Title + "</td>" +
                    "<td>" + leffatiedot.Year + "</td>" +
                    "<td>" + leffatiedot.Plot + "</td>" +
                


                "</table>"

            }
    }
    

}


//lisätään kuuntelija hakukenttään
let x = document.getElementsByTagName('input');
x[1].addEventListener("click", haeElokuva);

//lisätään onload-kuuntelija
let y = document.getElementById('leffataulukko');
y[1].addEventListener("onload",täytäElokuvaData);