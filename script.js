// Check login
if(localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}

// Queue array
let queue = [];

// Output function
function showOutput(msg) {
    document.getElementById("output").textContent = msg;
}

// Render queue visually
function renderQueue() {
    const display = document.getElementById("queueDisplay");
    display.innerHTML = "";
    queue.forEach(item => {
        const div = document.createElement("div");
        div.className = "queue-element";
        div.textContent = item;
        display.appendChild(div);
    });
}

// Logout
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}

// ---------------- Queue Operations ----------------
function enqueue() {
    const value = document.getElementById("enqueueValue").value.trim();
    if(value === "") {
        showOutput("Enter a value to enqueue!");
        return;
    }
    queue.push(value);
    renderQueue();
    showOutput(`Enqueued: ${value}`);
    document.getElementById("enqueueValue").value = "";
}

function dequeue() {
    if(queue.length === 0) {
        showOutput("Queue is empty!");
        return;
    }
    const removed = queue.shift();
    renderQueue();
    showOutput(`Dequeued: ${removed}`);
}

function peek() {
    if(queue.length === 0) {
        showOutput("Queue is empty!");
        return;
    }
    showOutput(`Front Element: ${queue[0]}`);
}

function rear() {
    if(queue.length === 0) {
        showOutput("Queue is empty!");
        return;
    }
    showOutput(`Rear Element: ${queue[queue.length - 1]}`);
}

function queueSize() {
    showOutput(`Queue Size: ${queue.length}`);
}

function isEmpty() {
    showOutput(queue.length === 0 ? "Queue is empty!" : "Queue is not empty.");
}

function clearQueue() {
    queue = [];
    renderQueue();
    showOutput("Queue cleared!");
}

// ---------------- Additional Operations ----------------
function searchQueue() {
    if(queue.length === 0) {
        showOutput("Queue is empty! Nothing to search.");
        return;
    }
    let value = prompt("Enter value to search in the queue:");
    if(value === null || value === "") {
        showOutput("Search cancelled or empty input.");
        return;
    }
    let index = queue.indexOf(value);
    if(index !== -1) {
        showOutput(`${value} found at position ${index + 1} (Front is position 1)`);
    } else {
        showOutput(`${value} not found in the queue.`);
    }
}

function reverseQueue() {
    if(queue.length === 0) {
        showOutput("Queue is empty! Nothing to reverse.");
        return;
    }
    let reversed = queue.slice().reverse();
    showOutput("Queue (Rear → Front): " + reversed.join(", "));
}