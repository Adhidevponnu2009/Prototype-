document.querySelector("button").addEventListener("click", function (e) {
    const rect = this.getBoundingClientRect();
    this.style.setProperty("--ripple-x", (e.clientX - rect.left) + "px");
    this.style.setProperty("--ripple-y", (e.clientY - rect.top) + "px");
});
function toggleMenu() {
    document.getElementById("sideMenu").style.right = "0";
}

function closeMenu() {
    document.getElementById("sideMenu").style.right = "-250px";
}
async function analyze() {

    const loading = document.getElementById("loading");
    const result = document.getElementById("result");

    loading.style.display = "block";
    result.style.display = "none";

    // Fetch disease data from data.json
    let data;
    try {
        const response = await fetch("data.json");
        data = await response.json();
    } catch (err) {
        console.error("JSON loading error:", err);
        loading.style.display = "none";
        result.innerHTML = "<p style='color:red;'>Error loading data.json</p>";
        result.style.display = "block";
        return;
    }

    // Collect user inputs
    const plant = document.getElementById("plantName").value.toLowerCase();
    const climate = document.getElementById("climate").value.toLowerCase();

    await new Promise(r => setTimeout(r, 1500)); // smooth delay

    loading.style.display = "none";
    result.style.display = "block";

    // Check if plant + climate exists in data.json
    if (data[plant] && data[plant][climate]) {
        result.innerHTML = `
            <h3>🔍 Analysis Result</h3>
            <p><b>Plant:</b> ${plant}</p>
            <p><b>Climate:</b> ${climate}</p>
            <p><b>Disease Detected:</b> ${data[plant][climate].disease}</p>
            <p><b>Recommended Action:</b> ${data[plant][climate].action}</p>
        `;
    } else {
        result.innerHTML = `
            <h3>🔍 Analysis Result</h3>
            <p><b>Plant:</b> ${plant}</p>
            <p><b>Climate:</b> ${climate}</p>
            <p style="color:#ff8080;"><b>No data found in data.json</b></p>
        `;
    }
}
// Floating particles
for (let i = 0; i < 25; i++) {
    let p = document.createElement("div");
    p.classList.add("particle");
    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = (4 + Math.random() * 4) + "s";
    p.style.animationDelay = Math.random() * 4 + "s";
    document.getElementById("particles").appendChild(p);
}
function swipeTo(page) {
    const current = document.querySelector(".page");

    // add exit animation
    current.classList.add("page-exit");

    // wait for animation then navigate
    setTimeout(() => {
        window.location.href = page;  
    }, 450);
}
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".nav");
    if (window.scrollY > 10) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});
