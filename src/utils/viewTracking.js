// let scrollBound = false;

// function fireOnFirstScroll() {
//     if (scrollBound) return;
//     scrollBound = true;

//     const onScroll = () => {
//         window.removeEventListener("scroll", onScroll);
//         window._satellite?.track("pageScroll");
//     };
//     window.addEventListener("scroll", onScroll);
// }

// // propositions: only the entries (and items) that are being shown
// export function trackViewedOffers(propositions = []) {
//     const offerStrings = [];

//     propositions.forEach((p) => {
//         p.items.forEach((item) => {
//             let content = item?.data?.content;
//             if (typeof content === "string") {
//                 try { content = JSON.parse(content); } catch { content = {}; }
//             }
//             offerStrings.push(
//                 [
//                     p.placement?.name,
//                     item.data?.characteristics?.OfferCode,
//                     item.data?.characteristics?.Product,
//                     content?.microSegmentName,
//                 ].join(":")
//             );
//         });
//     });

//     window._icicibank = window._icicibank || {};
//     window._icicibank.offersViewed = {
//         offers: offerStrings,
//         hasOffers: offerStrings.length > 0,
//     };
//     window._icicibank.offersResponseArray = propositions;

//     fireOnFirstScroll();
// }