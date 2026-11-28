const parseContent = (content) => {
    if (typeof content !== "string") return content || {};
    try {
        return JSON.parse(content);
    } catch {
        return {};
    }
};

export function trackOfferClick(offerId, ctaName) {
    // Only OD offers are tracked; default offers are not in __odOffers
    const clicked = (window.__odOffers || []).find((o) => o.id === offerId);
    if (!clicked) return;

    const { item, proposition } = clicked;
    const content = parseContent(item?.data?.content);

    const offerString = [
        proposition?.placement?.name,
        item?.data?.characteristics?.OfferCode,
        item?.data?.characteristics?.Product,
        content.microSegmentName,
    ].join(":");

    window.adobeDataLayer = window.adobeDataLayer || [];
    window.adobeDataLayer.push({
        event: "ctaClick",
        ctaName,
        _icicibank: {
            offersClicked: {
                offers: [offerString],
                hasOffers: true,
                offerID: item?.id,
            },
            // Same structure as the OD payload, only with the clicked item
            offersClickArray: [{ ...proposition, items: [item] }],
        },
    });
}