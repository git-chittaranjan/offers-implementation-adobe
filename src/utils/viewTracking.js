let tracked = false;

const parseContent = (content) => {
    if (typeof content !== "string") return content || {};
    try {
        return JSON.parse(content);
    } catch {
        return {};
    }
};

// displayedOffers: only valid OD offers that are shown in the UI
export function trackViewedOffers(displayedOffers = []) {

    if (tracked) {
        return; // fire only once per page load
    }

    if (!displayedOffers.length) {
        return;
    }

    const offerStrings = [];
    const responseArray = [];

    displayedOffers.forEach(({ item, proposition }) => {
        const content = parseContent(item?.data?.content);
        const placementName = proposition?.placement?.name;

        offerStrings.push(
            [
                placementName,
                item?.data?.characteristics?.OfferCode,
                item?.data?.characteristics?.Product,
                content.microSegmentName,
            ].join(":")
        );

        // Same structure as the OD payload, but only with displayed items
        let entry = responseArray.find((r) => r.id === proposition.id);
        if (!entry) {
            entry = { ...proposition, items: [] };
            responseArray.push(entry);
        }
        entry.items.push(item);
    });

    tracked = true;

    window.adobeDataLayer = window.adobeDataLayer || [];
    window.adobeDataLayer.push({
        event: "pageView",
        _icicibank: {
            offersViewed: { offers: offerStrings, hasOffers: true },
            offersResponseArray: responseArray,
        },
    });
}