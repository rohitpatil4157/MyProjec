const myChrome = chrome.webRequest.onBeforeRequest;

let urls = prompt("Enter you suggested Value");


let webFilter = [
    "*://*.youtube.com/*",
    "https://*.amazon.co.uk/*",
    "https://*.discord.com/*",
    "https://*.google.com/*"
]

if (urls != '' && urls != null) {
    console.log('you Entered Correct value')
    webFilter.push(`*://*.${urls}.com/*`)

}

myChrome.addListener(function (details) {
    console.log(details)
    return { cancel: true }
},
    { urls: webFilter },
    ["blocking"]
)