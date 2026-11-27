import { DEFAULT_OFFERS } from "./defaultOffers";

// Extract and parse offer content
const getOfferContent = (offer) => {

  var content = offer.content || offer.data?.content;

  if (typeof content === "string") {
    try {
      content = JSON.parse(content);
    } catch {
      return null;
    }
  }

  return content && typeof content === "object" ? content : null;
};


// Convert an offer into the carousel format
const toCarouselOffer = (offer) => {

  var content = getOfferContent(offer);

  if (!content) {
    return null;
  }

  return {
    id: offer.id,
    title: content.headerText,
    description: content.subHeaderText,
    imageUrl: content.imageURL,
    ctaText: content.primaryCTAText,
    ctaUrl: content.primaryCTA
  };
};


// Return Adobe offers if available; otherwise return default offers
export function mapOffers(offerList = []) {

  var offersToDisplay = offerList.length > 0 ? offerList : DEFAULT_OFFERS;

  var carouselOffers = offersToDisplay
    .map(toCarouselOffer)
    .filter(Boolean);

  // Use defaults if none of the received offers could be mapped (e.g., due to missing content of all OD offers)
  if (carouselOffers.length === 0 && offersToDisplay !== DEFAULT_OFFERS) {
    return DEFAULT_OFFERS.map(toCarouselOffer).filter(Boolean);
  }

  return carouselOffers;
}


// Get offers available when the application loads
export async function getOffers() {
  return mapOffers(window.__odOffers || []);
}


// Listen for offers returned by Adobe
export function subscribeOffers(callback) {

  const eventHandler = (event) => {
    callback(mapOffers(event.detail || []));
  };

  window.addEventListener("od-offers", eventHandler);

  // Remove the event listener when the component unmounts to prevent memory leaks and duplicate callbacks.
  return () => {
    window.removeEventListener("od-offers", eventHandler);
  };
}