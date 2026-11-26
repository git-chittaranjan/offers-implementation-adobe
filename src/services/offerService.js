// Channel/LOP default offers, shown when OD returns nothing
export const DEFAULT_OFFERS = [
  {
    id: "default-1",
    title: "Default offer",
    description: "Replace with your default content",
    imageUrl: "",
    ctaText: "Know more",
    ctaUrl: "#",
  },
];

const toCarouselOffer = (o) => ({
  id: o.id,
  productID: o.content?.productID,
  title: o.content?.headerText,
  description: o.content?.subHeaderText,
  imageUrl: o.content?.imageURL,
  ctaText: o.content?.primaryCTAText,
  ctaUrl: o.content?.primaryCTA,
});

// productId optional: filter by product; already sorted by score
export function mapOffers(list = [], productId) {
  const filtered = productId
    ? list.filter((o) => o.content?.productID === productId).slice(0, 1)
    : list;
  return filtered.length ? filtered.map(toCarouselOffer) : DEFAULT_OFFERS;
}

export async function getOffers(productId) {
  return mapOffers(window.__odOffers, productId);
}

// Called whenever Adobe returns offers
export function subscribeOffers(callback, productId) {
  const handler = (e) => callback(mapOffers(e.detail, productId));
  window.addEventListener("od-offers", handler);
  return () => window.removeEventListener("od-offers", handler);
}