window.addEventListener("click", notifyExtension);

function notifyExtension(e) {
    if (e.target.shadowRoot != null && e.target.shadowRoot.textContent === "Sign Out") {
        chrome.runtime.sendMessage("Sign Out");

        const dialogElement = document.createElement("p");
        dialogElement.innerHTML =
            '<div style="border: 1 solid;!important;"><dialog id="TimeSheetDialog">Have you filled timesheet for the day<br><br><button id="YesTimeSheet" style="border-width: 1px;padding: 2%;margin-right: 15%;">Yes</button><button id="NoTimeSheet" style="border-width: 1px;padding: 2%; margin-right: 15%;">No</button></dialog></div>';

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
