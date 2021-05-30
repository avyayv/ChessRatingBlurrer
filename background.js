let chesscomratingsblurred = true;

chrome.runtime.onInstalled.addListener(() => {
    console.log("HELLO WORLD 1");
    chrome.storage.sync.set({ chesscomratingsblurred });
});
