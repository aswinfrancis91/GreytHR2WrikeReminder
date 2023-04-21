window.addEventListener("click", notifyExtension);

function notifyExtension(e) {
  if (e.rangeParent.textContent == "Sign Out") {
    browser.runtime.sendMessage("Sign Out");
    if (confirm("Have you filled timesheet for the day?") == true) {
      return;
    } else {
      alert(
        "Will proceed with sign-out however please ensure that you update timesheet the earliest"
      );
    }
  }
}
