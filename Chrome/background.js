chrome.runtime.onMessage.addListener(notify);

function notify(message) {
  chrome.tabs.create({
    url: "https://www.wrike.com/workspace.htm?#/timesheet",
    active: true,
  });
}
