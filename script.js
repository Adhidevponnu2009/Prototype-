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

    loading.style.display = "block";  // show animation
    result.style.display = "none";    // hide result

    // Fake analyzing time
    await new Promise(r => setTimeout(r, 2000));

    loading.style.display = "none";   // hide animation
    result.style.display = "block";   // show result

    result.innerHTML = `
        <h3>🔍 Analysis Result</h3>
        <p><b>Plant:</b> ${plantName.value}</p>
        <p><b>Climate:</b> ${climate.value}</p>
        <p><b>Disease Detected:</b> Example Disease</p>
        <p><b>Recommended Action:</b> Spray organic treatment.</p>
    `;
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