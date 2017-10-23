//   
function Replace_0(details) {    
    return {redirectUrl: details.url.replace('wikipedia.org','0wikipedia.org')};
}

chrome.webRequest.onBeforeRequest.addListener(Replace_0,
    {
        urls: [
            "*://*.wikipedia.org/*"                
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);