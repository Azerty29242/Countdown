class Countdown {
    constructor(date, message) {
        this.message = message;
        this.date = date;
    }

    set interval(intervalId) {
        this.intervalId = intervalId;
    }

    get remaining() {
        if (this.date.getTime() - Date.now() >= 0) {
            return parseInt((this.date.getTime() - Date.now()) / 1000)
        } else {
            clearInterval(this.intervalId)
            return this.message
        }
    }
}

params = new URLSearchParams(window.location.search)
countdown = new Countdown(new Date(`${params.get("date")} ${params.get("time")}`), params.get("message"))
countdown.interval = setInterval(() => {
    document.getElementById("remaining").innerHTML = countdown.remaining
}, 100)