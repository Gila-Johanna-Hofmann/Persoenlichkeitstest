const startseite = document.getElementById("startseite"); //erzeugt ein Element aus den html-Elementen

const startbutton = document.getElementById("startbutton");

const quizteil = document.getElementById("quizteil");

const auswertung = document.getElementById("auswertung");

const auswertenButton = document.getElementById("auswertenButton");

const goAgainButton = document.getElementById("goAgainButton");

function startbuttonClick() {
    startseite.classList.add("invisible");
    quizteil.classList.remove("invisible");
}

startbutton.addEventListener("click", startbuttonClick);

function evaluateResults() {
    let radios = document.querySelectorAll('input[type="radio"]:checked');

    let heinz = 0;
    let horst = 0;

    for (let i = 0; i < radios.length; i++) {


        let value = radios[i].value;

        if (value === "a") {
            heinz += 1;
        } else if (value === "b") {
            horst += 1;
        }
    }
    let ergebnis = document.getElementById("ergebnis");

    console.log(heinz, horst);

    const picture = document.createElement("img");

    if (heinz > horst) {
        ergebnis.innerText = "Heinz";
        ergebnis.style.color = "brown";
        picture.src = "heinz.jpg";
    } else {
        ergebnis.innerText = "Charly";
        ergebnis.style.color = "blue";
        picture.src = "horst.jpg";
    }

    ergebnis.appendChild(picture);

}

function submitButtonClick(event) {
    event.preventDefault();
    quizteil.classList.add("invisible");
    auswertung.classList.remove("invisible");
    evaluateResults();

}

auswertenButton.addEventListener("click", submitButtonClick);

goAgainButton.addEventListener("click", function () { //das ist eine anonyme Funktion!!!!!!!!!
    location.reload();
})

// startbuttonClick(); //nachher wieder löschen ;_)


