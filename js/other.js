function createTextPopupParticle(text,x,y) {
    var newPopup = document.createElement("div")
    newPopup.className = "popup_text"
    newPopup.innerHTML = text

    newPopup.style.top = y + "px"
    newPopup.style.left = x + "px"

    //newPopup.style.ani =

    document.getElementById("popup_text").appendChild(newPopup)

    setTimeout(_=>{
        newPopup.remove()
    },2000)
}