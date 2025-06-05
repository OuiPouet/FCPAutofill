document.getElementById("btn").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            func: remplirFcp
        });
    });
});

function remplirFcp() {
    
    const iframe = document.querySelector('iframe');
    const doc = iframe.contentDocument || iframe.contentWindow.document;
    doc.querySelectorAll('.checkBox').forEach(checkbox => {
        for(const child of checkbox.children) {
            child.click();
        }
    });
    
}