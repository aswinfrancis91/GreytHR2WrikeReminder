window.addEventListener("click", notifyExtension);

function notifyExtension(e) {
  if (e.target.shadowRoot != null && e.target.shadowRoot.textContent == "Sign Out") {
    chrome.runtime.sendMessage("Sign Out");

    const dialogElement = document.createElement("p");
    dialogElement.innerHTML =
      '<div><dialog id="TimeSheetDialog">Have you filled timesheet for the day<br><button id="YesTimeSheet">Yes</button><br><button id="NoTimeSheet">No</button></dialog></div>';

    document.body.insertBefore(dialogElement, document.body.firstChild);

    var dialog = document.getElementById("TimeSheetDialog");
    var yesButton = document.getElementById("YesTimeSheet");
    var noButton = document.getElementById("NoTimeSheet");

    yesButton.addEventListener("click", function () {
      dialog.close();
      return;
    });

    noButton.addEventListener("click", function () {
      dialog.close();
      alert("Will proceed with sign-out however please ensure that you update timesheet the earliest");
    });
    dialog.showModal();
  }
}
