let countdownInterval;
let targetDateTime;
let isRunning = false;

function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.trim().split('=');
        if (cookieName === name) {
            return cookieValue;
        }
    }
    return null;
}

function clearCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

function updateCountdown() {
    const now = new Date().getTime();
    const remainingTime = targetDateTime - now;

    if (remainingTime <= 0) {
        clearInterval(countdownInterval);
        document.getElementById("completion-message").textContent = "Time’s up!";
        toggleButtons(false);
        return;
    }

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000); // Correct calculation for seconds

    document.getElementById("days").textContent = days.toString().padStart(2, '0');
    document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
}

function startCountdown() {
    const dateTimeInput = document.getElementById("datetime-picker").value;
    if (!dateTimeInput) {
        alert("Please select a valid date and time.");
        return;
    }

    targetDateTime = new Date(dateTimeInput).getTime();
    if (targetDateTime <= new Date().getTime()) {
        alert("Please select a future date and time.");
        return;
    }

    setCookie("targetDateTime", targetDateTime, 1);

    document.getElementById("countdown-box").classList.add("visible");
    document.getElementById("completion-message").textContent = "";

    countdownInterval = setInterval(updateCountdown, 1000);
    isRunning = true;
    toggleButtons(true);
}


function stopCountdown() {
    clearInterval(countdownInterval);
    isRunning = false;
    toggleButtons(false);
}

function resetCountdown() {
    stopCountdown();
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    document.getElementById("countdown-box").classList.remove("visible");
    document.getElementById("completion-message").textContent = "";
    clearCookie("targetDateTime");
    targetDateTime = null;
}


function toggleButtons(show) {
    document.getElementById("stop-btn").style.display = show ? "inline-block" : "none";
    document.getElementById("reset-btn").style.display = show ? "inline-block" : "none";
}


window.onload = function () {
    const savedTargetDateTime = getCookie("targetDateTime");
    if (savedTargetDateTime) {
        targetDateTime = parseInt(savedTargetDateTime, 10);
        document.getElementById("countdown-box").classList.add("visible");
        countdownInterval = setInterval(updateCountdown, 1000);
        isRunning = true;
        toggleButtons(true);
    } else {
        toggleButtons(false);
    }
};
