window.app = window.app || {};

// Add or remove placements as needed
const PLACEMENTS = [
    "IP_NLI_LOGOUT_PAGE_BANNER",
];

window.app.modifyComponents = function (props) {
    const offers = [];

    (Array.isArray(props) ? props : [props]).forEach((p) => {
        const name = p?.placement?.name || p?.scopeDetails?.placement?.name;
        if (!PLACEMENTS.includes(name)) return;

        (p.items || []).forEach((item) => {
            let content = item?.data?.content;
            if (typeof content === "string") {
                try { content = JSON.parse(content); } catch { return; }
            }
            offers.push({ id: item.id, score: item.score ?? 0, content });
        });
    });

    offers.sort((a, b) => b.score - a.score); // high to low
    window.__odOffers = offers;
    window.dispatchEvent(new CustomEvent("od-offers", { detail: offers }));
    return offers.map((o) => o.id);
};