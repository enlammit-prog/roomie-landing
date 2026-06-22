export const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSerJlzK1oOmlQJ_fEAg1knxZiVSgvBFPVD6NpTfinpmd2rQlw/viewform?usp=dialog";

// Link para reservar una videollamada de 15 min con el equipo de ROOMIE.
// Configurable por env var para poder cambiarlo sin tocar código.
export const BOOKING_URL =
  process.env.NEXT_PUBLIC_BOOKING_URL ??
  "https://calendar.app.google/rzkTFUEhQp9EWs4N6";
