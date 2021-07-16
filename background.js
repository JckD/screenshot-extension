let color = "#3aa757"

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });

    console.log('Default background color set to %cgreen', `color: ${color}`);
});

chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        "title": 'Take Screenshot',
        "id": "myContextMenuId"
    });
});

var obj = {

    audio : false,
    video : false,
    fullscreen : false
}

function takeScreenShot(displayMediaOptions) {
    console.log('screenshot')
    return navigator.mediaDevices.getDisplayMedia(displayMediaOptions)
    .catch(err => { console.error("Error:" + err); return null; });
}
    
chrome.contextMenus.onClicked.addListener(function(info, tab) {
    console.log(info)

    // chrome.scripting.executeScript({
    //     boolean : 'let enabled = true;'
    // }, function() {
    //     chrome.scripting.executeScript({
      
    //         target: { tabId: tab.id},
    //         files: ['content-script.js']
    //     }); 

    // })

    chrome.scripting.executeScript({
      target: { tabId: tab.id, allFrames : true},
      files: ['content-script.js']
    }, function() {

        chrome.tabs.sendMessage(tab.id, {data : true})
    })
    let enabled = true;
    
    // chrome.tabs.executeScript(tabId, {
    //     file: 'content-script.js'
    // });

 


 
});