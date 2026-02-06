let homeScore = 0
let guestScore = 0
let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let newGameEl = document.getElementById("btn-new-game")
let headingHome = document.getElementById("heading-home")
let headingGuest = document.getElementById("heading-guest")

function addOne(team){
    if(team == 'home'){
        homeScore++
        homeScoreEl.textContent = homeScore
    }else{
        guestScore++
        guestScoreEl.textContent = guestScore
    }
}

function addTwo(team){
    if(team == 'home'){
        homeScore += 2
        homeScoreEl.textContent = homeScore
    }else{
        guestScore += 2
        guestScoreEl.textContent = guestScore
    }
}

function addThree(team){
    if(team == 'home'){
        homeScore += 3
        homeScoreEl.textContent = homeScore
    }else{
        guestScore += 3
        guestScoreEl.textContent = guestScore
    }
}

function reset(){
    homeScore = 0
    homeScoreEl.textContent = homeScore
    guestScore = 0
    guestScoreEl.textContent = guestScore
    headingHome.classList.remove("leader")
    headingGuest.classList.remove("leader")
}

function leader(){
    if(homeScore > guestScore){
        headingHome.classList.add("leader")
        headingGuest.classList.remove("leader")
    }else if(guestScore > homeScore){
        headingGuest.classList.add("leader")
        headingHome.classList.remove("leader")
    }else{
        headingHome.classList.remove("leader")
        headingGuest.classList.remove("leader")
    }
}