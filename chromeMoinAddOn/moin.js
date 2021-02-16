// var element = document.getElementsByClassName("theme_red");
// element[0].classList.remove("pop_blue")
// element[0].classList.add("pop_dgrey");
  
// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//     console.log(changeInfo)
//     if (changeInfo.status === "loading") {
//         if (tab.url === "https://company.lotte.net/") {
//             chrome.tabs.insertCSS(tabId, {
//                 file: "default.css"
//             }, () => {
//                 console.log("Inserted");
//             })
//         }
//     }
// })