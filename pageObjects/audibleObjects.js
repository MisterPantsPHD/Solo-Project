var audibleCommands={
    categoriesTest: function(data){
        this
        .waitForElementVisible('@topBar')
        .click('@libraryLink')
        .assert.containsText('@categoryHeader' , 'Library')
        .click('@home')
        .waitForElementVisible('@topBar')
        .click('@browseDP')
        .click('@cMysteries')
        .assert.containsText('@categoryHeader' , 'Mystery')
        .click('@home')
        .waitForElementVisible('@topBar')
        .click('@browseDP')
        .click('@cSciFi')
        .assert.containsText('@categoryHeader' , 'Science Fiction')
        .click('@home')
        .waitForElementVisible('@topBar')
        .click('@browseDP')
        .click('@cHistory')
        .assert.containsText('@categoryHeader' , 'History')
        .click('@home')
        .waitForElementVisible('@topBar')
        .click('@browseDP')
        .click('@cTechnology')
        .assert.containsText('@categoryHeader' , 'Technology')
        .click('@home')
        .waitForElementVisible('@topBar')
        .click('@browseDP')
        .click('@cHealth')
        .assert.containsText('@categoryHeader' , 'Health')
        .click('@home')
        .waitForElementVisible('@topBar')
        .click('@browseDP')
        .click('@cBios')
        .assert.containsText('@categoryHeader' , 'Biographies')
        .click('@home')
        .waitForElementVisible('@topBar')
        .click('@browseDP')
        .click('@cBusiness')
        .assert.containsText('@categoryHeader' , 'Business')
        .click('@home')
        .waitForElementVisible('@topBar')
        .click('@browseDP')
        .click('@cSelf')
        .assert.containsText('@categoryHeader' , 'Relationships')
        .click('@home')
        .waitForElementVisible('@topBar')
        .click('@browseDP')
        .click('@cRomance')
        .assert.containsText('@categoryHeader' , 'Romance')
        .click('@home')
        .waitForElementVisible('@topBar')
        .click('@browseDP')
        .click('@cLiterature')
        .assert.containsText('@categoryHeader' , 'Literature')
        .click('@home')
        .waitForElementVisible('@topBar')
        .click('@browseDP')
        .click('@cTeens')
        .assert.containsText('@categoryHeader' , 'Teen')
        .click('@home')
        .waitForElementVisible('@topBar')
        .click('@browseDP')
        .click('@cScience')
        .assert.containsText('@categoryHeader' , 'Science')
        .click('@home')
        .waitForElementVisible('@topBar')
        .click('@browseDP')
        .click('@cArts')
        .assert.containsText('@categoryHeader' , 'Arts')
        .click('@home')
        .waitForElementVisible('@topBar')
        .click('@browseDP')
        .click('@cReligion')
        .assert.containsText('@categoryHeader' , 'Religion')
        .click('@home')
        return this

    },
    libraryTest: function(data){
        var self = this
        this
        .waitForElementVisible('@topBar')
        .click('@libraryLink')
        .click('@libraryListenNow')
        .api.windowHandles(function (result) {
            var handle = result.value[1];
            self.switchWindow(handle);
        });
        this
        .assert.containsText('@audiblePlayerChapter', 'Opening Credits')
        this.api.closeWindow()
        this.api.windowHandles(function (result) {
            var handle = result.value[0];
            self.switchWindow(handle);
        });
        this
        .click('@home')
        return this
        

    },
    searchAndCartTest: function(data){
        this
        .navigate()
        .click('@signIn')
        .setValue('@loginEmail' , 'francis.e.pants@gmail.com')
        .setValue('@loginPassword' , 'V0tefortrump')
        .click('@loginSubmit')
        .waitForElementVisible('@topBar')
        .setValue('@searchStore' , 'Brandon Sanderson')
        .click('@searchSubmit')
        .assert.containsText('@searchAuthorResult' , 'Brandon Sanderson')
        .click('@home')
        .setValue('@searchStore' , 'Michael Kramer')
        .click('@searchSubmit')
        .assert.containsText('@searchNarratorResult' , 'Michael Kramer')
        .click('@home')
        .setValue('@searchStore' , 'Warbreaker')
        .click('@searchSubmit')
        .assert.containsText('@searchTitleResult' , 'Warbreaker')
        .click('@searchProductLink')
        .click('@addToCart')
        .assert.containsText('@cartTitle' , 'Warbreaker')
        .click('@removeFromCart')
        .click('@home')
        return this
    },

}


module.exports = {
url: 'https://www.audible.com/',
commands: [audibleCommands],
elements:{
    signIn: {
        selector: '//li/a[contains (@class , "ui")]',
        locateStrategy: 'xpath'
    },
    loginEmail: 'input[type="email"]',
    loginPassword: 'input[type="password"]',
    topBar: {
        selector: '(//div[@tabindex="-1"])[1]',
        locateStrategy: 'xpath'
    },
    loginSubmit: 'input[id="signInSubmit"]',
    searchStore: 'input[name="keywords"]',
    searchSubmit: 'button[class="bc-icon bc-icon-search bc-color-base bc-autocomplete-icon"]',
        searchTitleResult: {
            selector: '(//li/h3)[1]',
            locateStrategy: 'xpath'
        },
        searchProductLink: {
            selector: '//h3/a',
            locateStrategy:'xpath'
        },
        searchAuthorResult: {
            selector: '//*/li[contains(@class , "authorLabel")]',
            locateStrategy: 'xpath'
        },
        searchNarratorResult: {
            selector: '//*/li[contains(@class , "narratorLabel")]',
            locateStrategy: 'xpath'
        },
    categoryHeader: 'h1.bc-heading',
    cart: {
        selector: '(//a[@tabindex="0"])[11]',
        locateStrategy: 'xpath'
    },
    addToCart: {
        selector: '(//button[@type="submit"])[3]',
        locateStrategy: 'xpath'
    },
    removeFromCart: {
        selector: '//a[@id="cart-item-0-remove-link"]',
        locateStrategy: 'xpath'
    },
    cartTitle: {
        selector: '//li[@id="cart-item-0-title"]',
        locateStrategy: 'xpath'
    },
    home: {
        selector: '(//a[@tabindex="0"])[12]',
        locateStrategy: 'xpath'
    },
    libraryLink: {
        selector: '(//a[@tabindex="0"])[13]',
        locateStrategy: 'xpath'
    },
        librarySearch: 'input[type="lib-search"]',
        librarySearchSubmit: {
            selector: '(//button[@class="bc-icon bc-icon-search bc-color-base bc-autocomplete-icon"])[2]',
            locateStrategy: 'xpath'
        },
        libraryFilterAll: {
            selector: '(//button[@class="bc-button-text"])[1]',
            locateStrategy: 'xpath'
        },
        libraryFilterFinished: {
            selector: '(//button[@class="bc-button-text"])[2]',
            locateStrategy: 'xpath'
        },
        libraryFilterUnfinished: {
            selector: '(//button[@class="bc-button-text"])[3]',
            locateStrategy: 'xpath'
        },
        libraryAudio:{
            selector: '(//span/select)[1]',
            locateStrategy: 'xpath'
        },
            audioEnhanced: 'option[value="Enhanced"]',
            auidoFormat4: 'option[value="Format4"]',
        librarySortDP: 'select[name="sortBy"]',
            sortDate:'(//option)[3]',
            sortLength: '(//option)[4]',
            sortTitle: '(//option)[5]',
            sortAuthor: '(//option)[6]',
        libraryListenNow: {
            selector: '//div[contains(@class , "bc-row")]/*/button',
            locateStrategy: 'xpath'
        },
            audiblePlayerChapter: {
                selector: '//div[contains(@id , "adbl-cloud-player-top-chapter")]',
                locateStrategy: 'xpath'
            },
    wishListLink: {
        selector: '(//a[@tabindex="0"])[16]',
        locateStrategy: 'xpath'
    },
    audibleOriginals: {
        selector: '(//a[@tabindex="0"])[49]',
        locateStrategy: 'xpath'
    },
    gifts: {
        selector: '(//a[@tabindex="0"])[50]',
        locateStrategy: 'xpath'
    },
    browseDP: {
        selector: '(//a[@tabindex="0"])[15]',
        locateStrategy: 'xpath'
    },
        cMysteries: {
            selector: '(//a[@tabindex="0"])[16]',
            locateStrategy: 'xpath'
        }, 
        cSciFi: {
            selector: '(//a[@tabindex="0"])[17]',
            locateStrategy: 'xpath'
        },
        cHistory: {
            selector: '(//a[@tabindex="0"])[18]',
            locateStrategy: 'xpath'
        },
        cTechnology: {
            selector: '(//a[@tabindex="0"])[19]',
            locateStrategy: 'xpath'
        },
        cHealth: {
            selector: '(//a[@tabindex="0"])[20]',
            locateStrategy: 'xpath'
        },
        cBios: {
            selector: '(//a[@tabindex="0"])[21]',
            locateStrategy: 'xpath'
        },
        cBusiness: {
            selector: '(//a[@tabindex="0"])[22]',
            locateStrategy: 'xpath'
        },
        cSelf: {
            selector: '(//a[@tabindex="0"])[23]',
            locateStrategy: 'xpath'
        },
        cRomance: {
            selector: '(//a[@tabindex="0"])[24]',
            locateStrategy: 'xpath'
        },
        cLiterature: {
            selector: '(//a[@tabindex="0"])[25]',
            locateStrategy: 'xpath'
        },
        cTeens: {
            selector: '(//a[@tabindex="0"])[26]',
            locateStrategy: 'xpath'
        },
        cKids: {
            selector: '(//a[@tabindex="0"])[27]',
            locateStrategy: 'xpath'
        },
        cScience: {
            selector: '(//a[@tabindex="0"])[28]',
            locateStrategy: 'xpath'
        },
        cArts: {
            selector: '(//a[@tabindex="0"])[29]',
            locateStrategy: 'xpath'
        },
        cReligion: {
            selector: '(//a[@tabindex="0"])[30]',
            locateStrategy: 'xpath'
        },
        cMoreCategories: {
            selector: '(//a[@tabindex="0"])[31]',
            locateStrategy: 'xpath'
        },
        cBest: {
            selector: '(//a[@tabindex="0"])[32]',
            locateStrategy: 'xpath'
        },
        cNew: {
            selector: '(//a[@tabindex="0"])[33]',
            locateStrategy: 'xpath'
        },
        cSoon: {
            selector: '(//a[@tabindex="0"])[34]',
            locateStrategy: 'xpath'
        },
        cAuthors: {
            selector: '(//a[@tabindex="0"])[35]',
            locateStrategy: 'xpath'
        },
        c2019: {
            selector: '(//a[@tabindex="0"])[36]',
            locateStrategy: 'xpath'
        },
        cGreat: {
            selector: '(//a[@tabindex="0"])[37]',
            locateStrategy: 'xpath'
        },
        cNarratorHoF: {
            selector: '(//a[@tabindex="0"])[38]',
            locateStrategy: 'xpath'
        },
        cMoreLists: {
            selector: '(//a[@tabindex="0"])[39]',
            locateStrategy: 'xpath'
        },
    


}

}