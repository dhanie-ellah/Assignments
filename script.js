const menu = document.getElementById("menu")
const close = document.getElementById("close")
const links = document.getElementById("links")

menu.addEventListener("click", () => {
     menu.style.display = 'none'
     close.style.display = 'block'
     links.style.display = 'block'
})

close.addEventListener("click", () => {
     menu.style.display = 'block'
     close.style.display = 'none'
     links.style.display = 'none'
})