browser.runtime.onMessage.addListener(notify);

function notify(message) {
    browser.tabs.create({
        url: "https://www.wrike.com/workspace.htm?#/timesheet",
        active: true,
    });
}
