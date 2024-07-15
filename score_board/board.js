let teamscoreA = 0;
let teamscoreB = 0;
let game = true

let team_score1 = document.querySelector("#teamscoreA");

let team_score2 = document.querySelector("#teamscoreB");

let teams = document.querySelectorAll(".team");

let reset = document.querySelector("#reset");

let addscore1 = document.querySelector("#add1");
let addscore2 = document.querySelector("#add2");
let subscore1 = document.querySelector("#sub1");
let subscore2 = document.querySelector("#sub2");

let head = document.querySelector("#title");

reset.addEventListener("click", () => {
    teamscoreA = 0;
    teamscoreB = 0;
    team_score1.innerText = teamscoreA;
    team_score2.innerText = teamscoreB;
    head.innerText = "Score counting";
    console.log("score reset");
})

//score added
addscore1.addEventListener("click", () => {
    teamscoreA = teamscoreA + 1;
    console.log("score added in team A");
    team_score1.innerText = teamscoreA;
    count();
});
addscore2.addEventListener("click", () => {
    teamscoreB = teamscoreB + 1;
    console.log("scored added in team B");
    team_score2.innerText = teamscoreB;
    count();
});

//score subtracted
subscore1.addEventListener("click", () => {
    teamscoreA = teamscoreA - 1;
    console.log("score subtracted in team A");
    team_score1.innerText = teamscoreA;
});
subscore2.addEventListener("click", () => {
    teamscoreB = teamscoreB - 1;
    console.log("score subtracted in team B");
    team_score2.innerText = teamscoreB;
});

function count() {
    while (teamscoreA == "10" || teamscoreB == "10") {
        if (teamscoreA > teamscoreB) {
            head.innerText = "Team A won the match";
        }
        else if (teamscoreB > teamscoreA) {
            head.innerText = "Team B won the match";
        }
        else {
            head.innerText = "Match is tie";
        }

        if (teamscoreA == "10") {
            teamscoreA = 0;
        }
        else if (teamscoreB == "10") {
            teamscoreB = 0;
        }
    }
}