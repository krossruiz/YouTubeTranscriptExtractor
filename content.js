chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === 'checkIfTranscriptElementExists') {
        // Check if the element exists
        const transcriptElement = document.querySelector('ytd-transcript-renderer');
        if (transcriptElement) {
            console.log('Transcript element found:', transcriptElement);
            sendResponse({ exists: true });
        } else {
            console.log('Transcript element not found.');
            sendResponse({ exists: false });
        }
    }
    return true;
});