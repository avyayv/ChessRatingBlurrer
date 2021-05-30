hideRatings.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: clearRatings
    });
});

function clearRatings() {
    // clearContent("user-tagline-rating user-tagline-dark")
    // clearContent("user-rating")
    var documentElements = document.getElementsByClassName("user-tagline-rating user-tagline-dark")
    for (var i = 0; i < documentElements.length; i++) {
        documentElements[i].textContent = "----"
    }

    var documentElements = document.getElementsByClassName("resizable-chat-area-component")
    for (var i = 0; i < documentElements.length; i++) {
        documentElements[i].innerHTML = ""
    }
}

function clearContent(className, doc) {
    alert("clearContent() was called")
    var documentElements = doc.getElementsByClassName(className)
    for (var i = 0; i < documentElements.length; i++) {
        documentElements[i].textContent = "----"
    }
}

