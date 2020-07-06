var aObjects = {}

module.exports = {
    beforeEach: browser =>{
        aObjects = browser.page.audibleObjects()
        aObjects.navigate
    },
    afterEach: browser =>{
        browser.end
    },
    'Search Test': browser=>{
        aObjects.searchAndCartTest()
    },
    'Library Test': browser=>{
        aObjects.libraryTest()
    },
    'Category Test': browser=>{
        aObjects.categoriesTest()
       },

}




// module.exports = {
//     'Test new tab open': function (browser) {
//         browser.url('http://localhost:8000')
//             .click('#a-href-with-target-blank')
//         // Switch to new tab
//         browser.window_handles(function (result) {
//             // 0 == current main window, 1 == new tab
//             var handle = result.value[1];
//             browser.switchWindow(handle);
//         });
//         // do something
//         browser.closeWindow(); // Close tab
//         // Switch to main window
//         browser.window_handles(function (result) {
//             // 0 == current main window, 1 == new tab
//             var handle = result.value[0];
//             browser.switchWindow(handle);
//         });
//     }
// };