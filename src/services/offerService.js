import { DEFAULT_OFFERS } from "./defaultOffers";
import { trackViewedOffers } from "../utils/viewTracking";

// Extract and parse offer content
const getOfferContent = (offer) => {
  let content = offer.content || offer.data?.content;

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
  const content = getOfferContent(offer);
  if (!content) return null;

  return {
    id: offer.id,
    title: content.headerText,
    description: content.subHeaderText,
    imageUrl: content.imageURL,
    ctaText: content.primaryCTAText,
    ctaUrl: content.primaryCTA,
  };
};

const mapDefaultOffers = () => DEFAULT_OFFERS.map(toCarouselOffer).filter(Boolean);

// Return valid Adobe offers if available; otherwise return default offers
export function mapOffers(offerList = []) {
  // Keep only OD offers that have valid content
  const validOffers = offerList.filter((offer) => toCarouselOffer(offer));

  // No valid OD offers: show defaults, no tracking
  if (validOffers.length === 0) {
    return mapDefaultOffers();
  }

  // Track only the valid OD offers that will be displayed (fires once)
  trackViewedOffers(validOffers);

  return validOffers.map(toCarouselOffer);
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

  // Remove the listener on unmount to prevent duplicate callbacks
  return () => {
    window.removeEventListener("od-offers", eventHandler);
  };
}