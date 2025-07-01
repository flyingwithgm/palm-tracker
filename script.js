document.getElementById("logForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const zone = document.getElementById("zone").value;
  const activity = document.getElementById("activity").value;
  const notes = document.getElementById("notes").value;
  const timestamp = new Date().toLocaleString();

  const entry = { zone, activity, notes, timestamp };

  // Save to localStorage
  const logs = JSON.parse(localStorage.getItem("logs")) || [];
  logs.push(entry);
  localStorage.setItem("logs", JSON.stringify(logs));

  // Clear form
  this.reset();

  // Refresh log display
  showLogs();
});

function showLogs() {
  const logs = JSON.parse(localStorage.getItem("logs")) || [];
  const logList = document.getElementById("logList");
  logList.innerHTML = "";

  logs.reverse().forEach((log) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>[${log.zone}]</strong> ${log.activity} <br><em>${log.notes}</em> <br><small>${log.timestamp}</small><hr>`;
    logList.appendChild(li);
  });
}

// Load logs on page load
showLogs();
