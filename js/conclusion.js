const POPUP = {
    win: _=>`
    <h2>You won this Round!</h2>
    You can now only pick <b>ONE</b> of the following cards:<br>
    <div id="pick_cards"></div>
    `,
    lose: _=>`
    <h2>GAME OVER!</h2>
    You lost Round ${data.round}!<br>
    <button onclick="tryAgain()">Try again</button>
    `,
    passConfirm: _=>`
    Are you sure you want to pass to enemy with unspent energy?<br>
    <button onclick="removePopup();pass()">I'm sure!</button><button onclick="removePopup()">No</button>
    `,
}

function setPopup(txt) {
    document.getElementById("conclusion").innerHTML = txt
    document.getElementById("conclusion").style.top = "50%"
}

function removePopup() {
    if (document.getElementById("conclusion").style.top == "50%") {
        document.getElementById("conclusion").style.top = "-50%"
    }
}