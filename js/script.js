class Countdown {
    constructor(date) {
        this.date = date;
    }

    get remaining() {
        return this.date.getTime() - Date.now()
    }
}

params = new URLSearchParams(window.location.search)
countdown = new Countdown(new Date(`${params.get("date")} ${params.get("time")}`))
setInterval(() => {
    document.getElementById("remaining").innerHTML = parseInt(countdown.remaining / 1000)
}, 100)