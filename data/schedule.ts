export interface BakeDay {
  day: string;
  title: string;
  description: string;
  pickupWindow: string;
  status: 'past' | 'in_oven' | 'active' | 'upcoming';
  statusLabel: string;
  isMainDrop?: boolean;
}

export const WEEKLY_SCHEDULE: BakeDay[] = [
  {
    day: "Wednesday",
    title: "Porridge Loaf Hearth",
    description: "Toasted rolled oats folded into whole wheat wet dough with organic clover honey and sea salt.",
    pickupWindow: "Pickup 4PM – 7PM",
    status: "past",
    statusLabel: "Past Batch (Sold Out)"
  },
  {
    day: "Friday",
    title: "Country Heritage Sourdough",
    description: "The flagship batard. Crisp caramelized crust, open custard crumb, crisp balanced acidity.",
    pickupWindow: "Pickup 12PM – 6PM",
    status: "in_oven",
    statusLabel: "Final 3 Loaves"
  },
  {
    day: "Saturday Main Drop",
    title: "Brioche & Viennoiserie Drop",
    description: "Laminated French butter pain au chocolat, sourdough brioche buns, cardamom morning knots.",
    pickupWindow: "Pickup 8AM – 1:30PM",
    status: "active",
    statusLabel: "Active Window · 82% Reserved",
    isMainDrop: true
  },
  {
    day: "Sunday",
    title: "Focaccia Feasts",
    description: "Sicilian extra virgin olive oil deep pans, garlic confit, sun-dried tomatoes, rosemary and flaky salt.",
    pickupWindow: "Pickup 9AM – 1PM",
    status: "upcoming",
    statusLabel: "Opens Sat 2PM"
  }
];

export const BAKE_STAGES = [
  { step: "1. Mix Flour", time: "Thu 06:00", detail: "Stoneground levain", current: false },
  { step: "2. Bulk Stretch", time: "Thu 14:00", detail: "4-fold aeration", current: false },
  { step: "3. Hand Shape", time: "Fri 08:00", detail: "Banneton rest", current: false },
  { step: "4. Cold Proof", time: "CURRENT STAGE", detail: "18h deep flavor", current: true },
  { step: "5. Hearth Deck", time: "Sat 04:30", detail: "Steam & blister", current: false },
  { step: "6. Warm Pickup", time: "Sat 08:00", detail: "Porch cubby #04", current: false }
];

