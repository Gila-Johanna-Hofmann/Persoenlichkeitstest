/*DOMs*/

const startseite = document.getElementById("startseite"); //erzeugt ein Element aus den html-Elementen

const startbutton = document.getElementById("startbutton");

const quizteil = document.getElementById("quizteil");

const auswertung = document.getElementById("auswertung");

const auswertenButton = document.getElementById("auswertenButton");

const goAgainButton = document.getElementById("goAgainButton");

/*changing visibility of sections via click of startbutton*/
function startbuttonClick() {
    startseite.classList.add("invisible");
    quizteil.classList.remove("invisible");
}

startbutton.addEventListener("click", startbuttonClick);

/*counting the results from the radio buttons. very simple.
the outcome has just two options ("heinz" and "horst"), which
are assigned the values "a" and "b". the default outcome is always
"horst"/"b"*/
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

    /*for learning purposes and because the picture and text displayed
    depend on the outcome: instead of linking the picture in the 
    html as with the #startseite section, I decided to link the 
    picture for the #auswertung section with JS, using the #ergebnis id*/
    const picture = document.createElement("img");

    if (heinz > horst) {
        ergebnis.innerText = "Heinz";
        ergebnis.style.color = "blue";
        picture.src = "heinz.jpg";
    } else {
        ergebnis.innerText = "Charly";
        ergebnis.style.color = "blue";
        picture.src = "horst.jpg";
    }

    ergebnis.appendChild(picture);

}

/*thie button click takes the site back to the original settings.
the quiz can be taken again*/
function submitButtonClick(event) {
    event.preventDefault();
    quizteil.classList.add("invisible");
    auswertung.classList.remove("invisible");
    evaluateResults();

}

auswertenButton.addEventListener("click", submitButtonClick);

goAgainButton.addEventListener("click", function () { /* <--- das ist 
    eine anonyme Funktion!!!!!!!!!*/
    location.reload();
})

/*when working on the #quizteil section, the following can be 
uncommented, so the sites always dispplayes the #quizteil section*/
// startbuttonClick(); 


