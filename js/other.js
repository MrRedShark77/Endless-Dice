function createTextPopupParticle(text,x,y,up=false) {
    var newPopup = document.createElement("div")
    newPopup.className = "popup_text"
    newPopup.innerHTML = text

    newPopup.style.top = y + "px"
    newPopup.style.left = x + "px"

    if (up) newPopup.style.animationName = "text_popup_up"

    //newPopup.style.ani =

    document.getElementById("popup_text").appendChild(newPopup)

    setTimeout(_=>{
        newPopup.remove()
    },2000)
}