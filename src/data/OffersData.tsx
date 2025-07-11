export type Offer = {
  title: string;
  description?: string;
  priceUSD?: number;
  priceEUR?: number;
  slotsAvailable?: number;
  galleryLink?: string;
  validity?: Date;
};

export const offersData: Offer[] = [
  /*
  {
    title: "Bust/Head",
    description: "Just the head",
    priceUSD: 80,
    priceEUR: 70,
    slotsAvailable: 3,
    validity: new Date("2025-07-31"), // ejemplo de fecha
  },
  {
    title: "Half Body",
    priceUSD: 118,
    priceEUR: 100,
  },
  {
    title: "Half Body",
    priceUSD: 118,
    priceEUR: 100,
  },
  {
    title: "Half Body",
    priceUSD: 118,
    priceEUR: 100,
  },
  {
    title: "Full Body",
    priceUSD: 140,
    priceEUR: 120,
    slotsAvailable: 6,
  },
*/
];
