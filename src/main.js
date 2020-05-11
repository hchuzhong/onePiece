import string from './css.js'

const player = {
    id: undefined,
    n: 1,
    time: 100,
    hasID: false,
    ui: {
        demo: document.querySelector("#demo"),
        demo2: document.querySelector("#demo2")
    },
    init: () => {
        player.ui.demo.innerText = string.substr(0, player.n)
        player.ui.demo2.innerHTML = string.substr(0, player.n)
        player.play()
        player.bindEvents()
    },
    events: {
            "#btnPause": "pause",
            "#btnPlay": "play",
            "#btnSlow": "slow",
            "#btnNormal": "normal",
            "#btnFast": "fast"
    },
    bindEvents: () => {
        for(let key in player.events){
            if(player.events.hasOwnProperty(key)){
                const value = player.events[key]
                document.querySelector(key).onclick = player[value]
            }  
        }
    },
    run: () => {
        player.hasID = true
        player.n += 1
        if(player.n > string.length){
            window.clearInterval(player.id)
            return 
        }
        player.ui.demo.innerText = string.substr(0, player.n)
        player.ui.demo2.innerHTML = string.substr(0, player.n)
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight
    },
    play: () => {
        if(!player.hasID){
            player.id = setInterval(player.run, player.time)
            player.hasID = true
        }
    },
    pause: () => {
        if(player.hasID){
            window.clearInterval(player.id)
            player.hasID = false
        }
    },
    slow: () => {
        player.pause()
        player.time = 300
        player.play()
    },
    normal: () => {
        player.pause()
        player.time = 100
        player.play()
    },
    fast: () => {
        player.pause()
        player.time = 0
        player.play()
    },
}

player.init()