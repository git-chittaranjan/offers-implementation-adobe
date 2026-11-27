// Default offers - It followes the same structure as Web SDK's event.propositions object

export const DEFAULT_OFFERS = [
    {
        id: "dps:personalized-offer:1ca96d3d4b49414b",
        name: "Home Loan Default Offer",
        score: 1000.0,
        priority: 100.0,
        data: {
            id: "dps:personalized-offer:1ca96d3d4b49414b",
            format: "application/json",
            language: ["en-us"],
            content: "{\"headerText\":\"Home Loan - Default Offer\",\"subHeaderText\":\"Get XYZ Bank Home Loan sanctioned with no documentation. T&Cs.\",\"imageURL\":\"/default-offers/home-loan.png\",\"primaryCTAText\":\"APPLY NOW\",\"primaryCTA\":\"https://www.chittaranjansaha.com/\"}",
            characteristics: {
                ViewCapping: "3",
                ViewCappingDays: "3",
                ClickCapping: "1",
                ClickCappingDays: "3",
                Product: "HL",
                OfferType: "Default",
                TestFlag: "False",
                OfferCode: "DefaultHL",
            }
        }
    },
    {
        id: "dps:personalized-offer:1a5fb683415dc08f",
        name: "Consumer EMI Default Offer",
        score: 900.0,
        priority: 100.0,
        data: {
            id: "dps:personalized-offer:1a5fb683415dc08f",
            format: "application/json",
            language: ["en-us"],
            content: "{\"headerText\":\"Dream Appliances EMI - Default Offer\",\"subHeaderText\":\"Convert your purchases into easy EMIs!\",\"imageURL\":\"/default-offers/consumer-emi.png\",\"primaryCTAText\":\"APPLY NOW\",\"primaryCTA\":\"https://www.chittaranjansaha.com/\"}",
            characteristics: {
                ViewCapping: "3",
                ViewCappingDays: "3",
                ClickCapping: "1",
                ClickCappingDays: "3",
                Product: "CD",
                OfferType: "Default",
                TestFlag: "False",
                OfferCode: "DefaultCD",
            }
        }
    },
    {
        id: "dps:personalized-offer:19d8f56e077b848a",
        name: "Gold Loan New Default Offer",
        score: 800.0,
        priority: 100.0,
        data: {
            id: "dps:personalized-offer:19d8f56e077b848a",
            format: "application/json",
            language: ["en-us"],
            content: "{\"headerText\":\"Gold Loan - Default Offer\",\"subHeaderText\":\"Fixed interest rate, simple documentation and much more\",\"imageURL\":\"/default-offers/gold-loan.png\",\"primaryCTAText\":\"APPLY NOW\",\"primaryCTA\":\"https://www.chittaranjansaha.com/\"}",
            characteristics: {
                ViewCapping: "3",
                ViewCappingDays: "3",
                ClickCapping: "1",
                ClickCappingDays: "3",
                Product: "GL",
                OfferType: "Default",
                TestFlag: "False",
                OfferCode: "DefaultGL",
            }
        }
    },
    {
        id: "dps:personalized-offer:1ca9682381094148",
        name: "Fixed Deposit Default Offer",
        score: 1,
        priority: 1,
        data: {
            id: "dps:personalized-offer:1ca9682381094148",
            format: "application/json",
            language: ["en-us"],
            content: "{\"headerText\":\"Fixed Deposit - Default Offer\",\"subHeaderText\":\"Grow your money safely with Fixed Deposits. T&Cs.\",\"imageURL\":\"/default-offers/fixed-deposit.png\",\"primaryCTAText\":\"APPLY NOW\",\"primaryCTA\":\"https://www.chittaranjansaha.com/\"}",
            characteristics: {
                ViewCapping: "3",
                ViewCappingDays: "3",
                ClickCapping: "1",
                ClickCappingDays: "3",
                Product: "FD",
                OfferType: "Default",
                TestFlag: "False",
                OfferCode: "DefaultFD",
            }
        }
    },
    {
        id: "dps:personalized-offer:1ca97517a6c94150",
        name: "Auto Loan Default Offer",
        score: 3,
        priority: 3,
        data: {
            id: "dps:personalized-offer:1ca97517a6c94150",
            format: "application/json",
            language: ["en-us"],
            content: "{\"headerText\":\"Car Loan - Default Offer\",\"subHeaderText\":\"Car Loans with digital disbursement & tie-ups with 3,400+ dealers! T&Cs.\",\"imageURL\":\"/default-offers/car-loan.png\",\"primaryCTAText\":\"APPLY NOW\",\"primaryCTA\":\"https://www.chittaranjansaha.com/\"}",
            characteristics: {
                ViewCapping: "3",
                ViewCappingDays: "3",
                ClickCapping: "1",
                ClickCappingDays: "3",
                Product: "AL",
                OfferType: "Default",
                TestFlag: "False",
                OfferCode: "DefaultAL"
            }
        }
    }

];