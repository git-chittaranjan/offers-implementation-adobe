// Add or remove placements as needed
const PLACEMENTS = ["IP_NLI_LOGOUT_PAGE_BANNER"];

//window.app = window.app || {};

window.app.modifyComponents = function (props) {

    console.log("modifyComponents received props:", props);

    const offers = [];

    // Ensure propositions is always an array
    var propositions = Array.isArray(props) ? props : (props ? [props] : []);

    propositions.forEach((p) => {

        const placementName = p?.placement?.name || p?.scopeDetails?.placement?.name;

        // Skip propositions that don't match the required placement
        if (!PLACEMENTS.includes(placementName)) {
            return;
        }

        var offersItems = p.items || [];

        offersItems.forEach((item) => {

            // Extract offer properties from the Adobe response
            offers.push({
                id: item?.id,
                name: item?.name,
                score: item?.score,
                priority: item?.priority,
                content: item?.data?.content
            });

        });
    });

    // Store offers globally in __odOffers object
    window.__odOffers = offers;

    // Notify the application that Adobe offers are available
    window.dispatchEvent(
        new CustomEvent("od-offers", { detail: offers })
    );

    // Return the extracted offer IDs
    return offers.map((offer) => offer.id);
};