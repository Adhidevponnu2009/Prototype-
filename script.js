
function toggleMenu() {
    document.getElementById("sideMenu").style.right = "0";
}

function closeMenu() {
    document.getElementById("sideMenu").style.right = "-250px";
}
async function analyze() {
    const plant = document.getElementById("plantName").value.toLowerCase();
    const climate = document.getElementById("climate").value.toLowerCase();
    const result = document.getElementById("result");
    
    const response = await fetch("data.json");
    const data = await response.json();
    
    let disease = "No data found";
    let action = "No action available";
    
    if (data[plant] && data[plant][climate]) {
        disease = data[plant][climate].disease;
        action = data[plant][climate].action;
    }
    
    result.style.display = "block";
    result.innerHTML = `
        <h3>🔍 Analysis Result</h3>
        <p><b>Plant:</b> ${plant}</p>
        <p><b>Climate:</b> ${climate}</p>
        <p><b>Disease Detected:</b> ${disease}</p>
        <p><b>Recommended Action:</b> ${action}</p>
    `;
}