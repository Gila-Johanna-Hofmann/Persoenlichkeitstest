/*DOMs*/

const startpage = document.getElementById("startpage"); //erzeugt ein Element aus den html-Elementen

const startbutton = document.getElementById("startbutton");

const quizsection = document.getElementById("quizsection");

const evaluation = document.getElementById("evaluation");

const evaluationButton = document.getElementById("evaluationButton");

const goAgainButton = document.getElementById("goAgainButton");

/*changing visibility of sections via click of startbutton*/
function startbuttonClick() {
    startpage.classList.add("invisible");
    quizsection.classList.remove("invisible");
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
    let result = document.getElementById("result");

    console.log(heinz, horst);

    /*for learning purposes and because the picture and text displayed
    depend on the outcome: instead of linking the picture in the 
    html as with the #startpage section, I decided to link the 
    picture for the #evaluation section with JS, using the #result id*/
    const picture = document.createElement("img");

    if (heinz > horst) {
        result.innerText = "Heinz";
        result.style.color = "blue";
        picture.src = "heinz.jpg";
    } else {
        result.innerText = "Charlie";
        result.style.color = "blue";
        picture.src = "horst.jpg";
    }

    result.appendChild(picture);

}

function scrollToTop() { 
    window.scrollTo(0, 0); 
} 

/*thie button click takes the site back to the original settings.
the quiz can be taken again*/
function submitButtonClick(event) {
    event.preventDefault();
    quizsection.classList.add("invisible");
    evaluation.classList.remove("invisible");
    evaluateResults();
    scrollToTop();

}

evaluationButton.addEventListener("click", submitButtonClick);

goAgainButton.addEventListener("click", function () { /* <--- das ist 
    eine anonyme Funktion!!!!!!!!!*/
    location.reload();
    scrollToTop();
})

/*when working on the #quizsection, the following can be 
uncommented, so the sites always dispplayes the #quizsection*/
// startbuttonClick(); 


