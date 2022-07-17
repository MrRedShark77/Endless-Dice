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
    tutorial0: _=>`
    Do you want to see the tutorial?<br>
    <button onclick="setPopup(POPUP.tutorial1())">Yes, tutorial!</button><button onclick="removePopup();start()">No thanks, I know!</button>
    `,
    tutorial1: _=>`
    <h2>Tutorial</h2>

    This game starts with 50 health, 10 energy!<br><br>

    <span style="font-size: 20px">
    1) Click a <b>"Roll"</b> button to spawn random Dice (cost with 1 Energy)<br>
    2) Pick any <b>two</b> of following Dices that applies effect to Enemy:<br>
    2.1) Gray Dice is called <b>"Normal Dice"</b>.<br>
    2.2) Red Dice is called <b>"Attack Dice"</b>, which attacks the enemy by result.<br>
    2.3) Green Dice is called <b>"Heal Dice"</b>, which heals you by result.<br>
    3) Bottom-Right of each Dice have energy cost.<br>
    4) If you are ready to apply picked Dices and afford energies, click <b>"Make a Move"</b> button to attack or heal anything.<br>
    5) If you make with <b>SAME</b> dices, will be stronger!<br>
    6) If you miss picking Dice, click <b>"Clear picking Dices"</b> button to clear.<br>
    7) When you ran out of energy, click <b>"Pass to Enemy"</b> button to pass.<br>
    8) Every round, enemy's starting health & multiplier are increased.<br>
    </span>

    <button onclick="removePopup();start()">Good, I understand!</button>
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