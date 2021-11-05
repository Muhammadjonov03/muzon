const closeBtn = document.querySelector(".music-close-btn")
const closeBtnIcon = document.querySelector("#music-close-btn")
const musicPlayerWrap = document.querySelector(".music-player-wrap")
const musicPlayer = musicPlayerWrap.querySelector("#music-player")
const musicSection = document.querySelector(".music")
const musicItems = document.querySelectorAll(".music__item") 
const musicTitle = document.querySelector(".music-title")

closeBtn.addEventListener("click", evt => {
  closeBtnIcon.classList.toggle("fa-angle-down")
  musicPlayerWrap.classList.toggle("active")
  musicSection.classList.toggle("active")
})

musicItems.forEach(item => {
  item.addEventListener("click", () => {
    let src = item.dataset.src
    let text = item.querySelector(".music__item-title").textContent
    closeBtnIcon.classList.add("fa-angle-down")
    musicPlayerWrap.classList.add("active")
    musicSection.classList.add("active")
    musicPlayer.src = src
    musicTitle.textContent = text
    musicPlayer.play()
    let id = item.id
    musicItems.forEach(musicItem => {
      let musicPlayIcon = musicItem.querySelector("#music-play-icon")
      if(musicItem.id === id) {
        musicPlayIcon.className ="far fa-pause-circle"
        musicItem.classList.add("active-music")
      } else {
        musicPlayIcon.className ="fas fa-play"
        musicItem.classList.remove("active-music")
      }
    })
  })
})