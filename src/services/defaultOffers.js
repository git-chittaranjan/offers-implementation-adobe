// Default offers - It followes the same structure as Web SDK's event.propositions object

export const DEFAULT_OFFERS = [
    {
        id: "dps:personalized-offer:1ca96a578e494149",
        etag: "4",
        name: "Personal Loan Default Offer",
        score: 5,
        priority: 5,
        schema: "https://ns.adobe.com/experience/offer-management/content-component-json",
        data: {
            id: "dps:personalized-offer:1ca96a578e494149",
            format: "application/json",
            language: ["en-us"],
            content: "{\"headerText\":\"Grow Your Global Earnings - Default Offer\",\"subHeaderText\":\"Save in foreign currency with attractive returns and full repatriability.\",\"imageURL\":\"https://www.icici.bank.in/content/dam/icicibank-revamp/nri-banking/fcnr-place-holder.webp\",\"primaryCTAText\":\"Open FCNR Deposit\",\"primaryCTA\":\"https://buy.icici.bank.in/cap-v2/utm?iup=PL852452&ius=CAP83006AA&ITM=IP_NLI_LOGOUT_PAGE_BANNER_PL_DefaultPL_\"}",
            characteristics: {
                ViewCapping: "3",
                OfferCategory: "PL",
                OfferType: "Default",
                TestFlag: "False",
                OfferCode: "DefaultPL",
                ClickCappingDays: "3",
                Product: "PL",
                ClickCapping: "1",
                ViewCappingDays: "3"
            }
        }
    },
    {
        id: "dps:personalized-offer:1ca96d3d4b49414b",
        etag: "3",
        name: "Home Loan Default Offer",
        score: 4,
        priority: 4,
        schema: "https://ns.adobe.com/experience/offer-management/content-component-json",
        data: {
            id: "dps:personalized-offer:1ca96d3d4b49414b",
            format: "application/json",
            language: ["en-us"],
            content: "{\"headerText\":\"Home Loan - Default Offer\",\"subHeaderText\":\"Get ICICI Bank Home Loan sanctioned with no documentation. T&Cs.\",\"imageURL\":\"https://www.icici.bank.in/content/dam/icicibank/india/managed-assets/images/hl.webp\",\"primaryCTAText\":\"APPLY NOW\",\"primaryCTA\":\"https://buy.icici.bank.in/ucj/HomeLoan/personal?ius=IS83006US&iup=UCJHL1000480&ITM=IP_NLI_LOGOUT_PAGE_BANNER_HL_DefaultHL_\"}",
            characteristics: {
                ViewCapping: "3",
                OfferType: "Default",
                TestFlag: "False",
                OfferCode: "DefaultHL",
                ClickCappingDays: "3",
                Product: "HL",
                ClickCapping: "1",
                ViewCappingDays: "3"
            }
        }
    },
    {
        id: "dps:personalized-offer:1ca97517a6c94150",
        etag: "3",
        name: "Auto Loan Default Offer",
        score: 3,
        priority: 3,
        schema: "https://ns.adobe.com/experience/offer-management/content-component-json",
        data: {
            id: "dps:personalized-offer:1ca97517a6c94150",
            format: "application/json",
            language: ["en-us"],
            content: "{\"headerText\":\"Car Loan\",\"subHeaderText\":\"Car Loans with digital disbursement & tie-ups with 3,400+ dealers! T&Cs.\",\"imageURL\":\"https://www.icici.bank.in/content/dam/icicibank/india/managed-assets/images/logo/al-nli.webp\",\"primaryCTAText\":\"APPLY NOW\",\"primaryCTA\":\"https://buy.icici.bank.in/cap-v2/utm?iup=CAPUN1046AL&ius=COM31684ON&ITM=IP_NLI_LOGOUT_PAGE_BANNER_AL_DefaultAL_\"}",
            characteristics: {
                ViewCapping: "3",
                OfferType: "Default",
                TestFlag: "False",
                OfferCode: "DefaultAL",
                ClickCappingDays: "3",
                Product: "AL",
                ClickCapping: "1",
                ViewCappingDays: "3"
            }
        }
    }
];