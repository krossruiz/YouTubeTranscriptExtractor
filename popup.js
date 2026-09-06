//document.getElementById("helloWorldConsoleLog").addEventListener("click", logHelloWorld);
// Select the custom element

//NOTE
//
//
//NEEDS TO GO IN CONTENT SCRIPT TO ACCESS HTML ELEMENTS IN DOM
//
//
//
const checkIfTranscriptElementExistsButton = document.getElementById('checkIfTranscriptElementExistsButton');

checkIfTranscriptElementExistsButton.addEventListener("click", function () {
  // Query the active tab
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (tabs.length > 0) {
      const activeTab = tabs[0];
        // Dynamically inject the content script if not already injected
        chrome.tabs.sendMessage(activeTab.id, { action: 'checkIfTranscriptElementExists' }, function (response) {
          console.log("Response");
          console.log(response);
          if (chrome.runtime.lastError) {
            console.error('Error sending message to content script:', chrome.runtime.lastError);
          } else {
            if (response && response.exists) {
              console.log('Transcript element exists:', response.exists);
            } else {
              console.log('Transcript element does not exist:', response.exists);
            }
          }
        })
    }
  });
});