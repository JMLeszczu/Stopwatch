const time = document.querySelector(".stopwatch__time")
const lastTime = document.querySelector(".stopwatch__last-time")
const playBtn = document.querySelector(".stopwatch__play")
const pauseBtn = document.querySelector(".stopwatch__pause")
const stopBtn = document.querySelector(".stopwatch__stop")
const archiveBtn = document.querySelector(".stopwatch__archive")

let seconds = 0
let minutes = 0
let hours = 0
const timeStart = params => {
	if (seconds <= 9 && minutes <= 9) {
		time.textContent = `00:0${minutes}:0${seconds}`
	} else if (seconds >= 10 && minutes <= 9) {
		time.textContent = `00:0${minutes}:${seconds}`
	} else if (seconds <= 9 && minutes >= 10) {
		time.textContent = `00:${minutes}:0${seconds}`
	} else if (seconds >= 10 && minutes >= 10) {
		time.textContent = `00:${minutes}:${seconds}`
	} else if (seconds == 60) {
		seconds = 0
		minutes++
	}
	seconds++
}

const timeClear = params => {
	lastTime.textContent = `${hours} : ${minutes} : ${seconds}`
	seconds = 0
	minutes = 0
	hours = 0
}

const events = params => {
	let intervalId
	playBtn.addEventListener("click", () => {
		intervalId = setInterval(timeStart, 100)
	})
	pauseBtn.addEventListener("click", () => {
		clearInterval(intervalId)
	})
	stopBtn.addEventListener("click", () => {
		timeClear
		clearInterval(intervalId)
	})
}

events()
