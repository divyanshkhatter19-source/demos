export interface Product {
  id: string;
  name: string;
  shortName: string;
  price: number;
  weight?: string;
  description: string;
  details: string;
  badge?: string;
  badgeType?: 'primary' | 'secondary' | 'neutral' | 'soldout' | 'limited';
  claimed: number;
  totalBatch: number;
  proofTime?: string;
  flourType?: string;
  category: 'sourdough' | 'viennoiserie' | 'focaccia' | 'pantry';
  dietTags: string[];
  image: string;
  galleryImages?: { src: string; alt: string; label: string }[];
  isSignature?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: "heritage-spelt-boule",
    name: "Heritage Spelt Country Sourdough Boule",
    shortName: "Heritage Country Loaf",
    price: 13.50,
    weight: "Approx. 880g baked weight",
    description: "Our anchor loaf with dark blistered mahogany crust, custard-like open crumb, and bright lacto-sour tang.",
    details: "Organic spelt & red fife whole grain blend. 36-hour cold fermented for profound honey-nut aroma and easy digestion. Milled at Cairnspring Mills in the Skagit Valley.",
    badge: "Baker's Flagship",
    badgeType: "primary",
    claimed: 16,
    totalBatch: 24,
    proofTime: "36-hr Slow Ferment",
    flourType: "Organic Hard Red Spring & Spelt",
    category: "sourdough",
    dietTags: ["Vegan", "Whole Grain", "Ancient Grains", "Nut-Free"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBL397UwRuLQ7MRZ8-hynG-Nzs1YJyTpDum-pHoj2F_0Eeet2J3LzVcizXDnTy6OTH8Sdlkl1RdyFPgLx9Hni2sA-qkDURpfoVlw1UAy5GHscwSr6mJ_YQ1VuMnL53IrgE_ATm9_bIDdOXCtxXYIsCM7cNgaUQzz6iIb_hlbggmdR4MqBGwSj5AssqssDlPrPigPGPyPtXru_gKBsxyZOu0PAYL891JhUINLuTVI-wxtbPfKWji4pa0",
    isSignature: true,
    galleryImages: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBL397UwRuLQ7MRZ8-hynG-Nzs1YJyTpDum-pHoj2F_0Eeet2J3LzVcizXDnTy6OTH8Sdlkl1RdyFPgLx9Hni2sA-qkDURpfoVlw1UAy5GHscwSr6mJ_YQ1VuMnL53IrgE_ATm9_bIDdOXCtxXYIsCM7cNgaUQzz6iIb_hlbggmdR4MqBGwSj5AssqssDlPrPigPGPyPtXru_gKBsxyZOu0PAYL891JhUINLuTVI-wxtbPfKWji4pa0",
        alt: "Close-up macro of an artisan heritage sourdough boule showing deeply blistered dark mahogany crust",
        label: "1 of 4 Perspectives: Blistered Ear"
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmv85HGOwH5o-0HgBfNEiI0zvoJwWKPu1sAiCNePvNSzS1-euxlyp1G6DHzvn6hcr8ZcwULOiK6NcnsxU8P72LKZ9hPrjEIQIjO7YiFDQaFpIwGQtrU4knSFi7bPORBfGPm9PLFDW83wSCsUX0oMLNwrcWmelb5uHtn6XOzjSRrtmVEBqvzDWwo-wdDAtfBKY7G9vukHlMLEkLreykWrSmzFr-91aC8OzPmI957dAzNsCW6XQ-KS-F",
        alt: "Golden brown sourdough loaf ear with caramelized blisters and crispy textured crust",
        label: "2 of 4 Perspectives: Crust Snap"
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-TItg26McWXKrj9wv4m7l5XSx93XTgLYMO8dOFGy76lwo4GHqdcD-RvNfIzanK2wHCC_MFACF-U-NYrsQGd1fXa3s6POq4jr-2pe92m6w1E8PhtNnzC_YsvjIiVlsET5qW83EVdj1Wn8amzXM9LO4hJe93Ql3OCxcpVyYSebI9qSAhrW_kwwqXHGM6G9USlCdXKnQnHEQvIEYIW5gn2FSXf19PP1G7qcCfRtLxG1DaBroZHtTgsQz",
        alt: "Cut cross-section of sourdough bread revealing an open, glossy, airy honeycomb crumb structure",
        label: "3 of 4 Perspectives: Airy Crumb"
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAB02boowG6rzK4-2x9H8OkPB942l5YzhhQDYJlszTKMVhjQmXb2v367x3IMJqSA1I60uECi5fn5vi5RWl5GXbc6k9jYAUZR9ZL80jWvjig0FxBjg4IXi3QTuOYYxnSwOfxj5cZ0YZN5nVhkm1BZApdT9ug9yWOor3BpmutmavPJvjod3Wg6Z_r5xtB0TZBUnm6Q3A5n9pp8oDRTh4I2ksbtAGl9ylKxHBFSO7APfBvh9E8vZQLIQGP",
        alt: "Macro textural detail of spongy sourdough crumb interior with specks of organic whole grain spelt bran",
        label: "4 of 4 Perspectives: Bran Texture"
      }
    ]
  },
  {
    id: "honey-lavender-buns",
    name: "Honey Lavender Morning Buns",
    shortName: "Honey Lavender Buns",
    price: 6.50,
    description: "Slow-laminated buttery croissant dough rolled with citrus zest, dried local lavender, and glazed with wild meadow honey.",
    details: "High-layer flaky sourdough lamination enriched with Normandy cultured butter, raw cane sugar crystals, and sweet lavender blossoms from local apiaries.",
    badge: "Rising in Proofer",
    badgeType: "secondary",
    claimed: 18,
    totalBatch: 24,
    proofTime: "24-hr Cold Laminate",
    flourType: "Normandy Butter & Meadow Honey",
    category: "viennoiserie",
    dietTags: ["Vegetarian"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBl45RHxBORAGIfi1E5AtTkOuI2-CQJ07RezRbYScVc4zYfbrNpJMpNnX_Q9NCwjjO4FTm7dbebNU4MiazgqIsMjK-zkz80sJFTqT3ub-ydPG6Pfw5e3FEwwhnpgdhZvEbLeOaeuxJawkMRrO5e8s_w4tB_UDIk4BTLLzkpxabkG2ZM_TJFY4dopojZ31S9bZhNEqm_2VDtXI2nvYmNeGUkqfOj3vdDSxmsbN3nTgfIzPUdr1wdpCVi"
  },
  {
    id: "garlic-rosemary-focaccia",
    name: "Roasted Garlic & Rosemary Focaccia",
    shortName: "Garlic & Rosemary Focaccia",
    price: 8.50,
    description: "Airy, pillowy crumb drenched in cold-pressed Castelvetrano olive oil, sweet soft garlic confit, and flaky Maldon salt.",
    details: "High hydration (85%) dough with deep finger dimples holding glistening reservoirs of extra virgin olive oil and charred rosemary sprigs.",
    badge: "Batch 2 Available",
    badgeType: "neutral",
    claimed: 12,
    totalBatch: 16,
    proofTime: "48-hr Cold Retard",
    flourType: "Organic High Protein & EVOO",
    category: "focaccia",
    dietTags: ["Vegan", "Nut-Free"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgpivDAbdHTMbEGEcBsy_5vVSVQfgxPetx_bLvmn8fQ4ZRGbRWwoXUZNNNJeKKqDYDSTaSedJzg01YFFPaER_g0-xo3NWXXwDmEfzlb8xaLpXm8V7nRfIJKQBBNYaqJAz2NsFHnRcrhZhObhlAg1dhYXXZfeK5ZrUiWL0M1bKuZFA1I78bfM4l5UCYBVMajJxuZwjmbvos_J_dTmOLSiEBaKrCyF5yHpLggRvGMW8blMCXJK2QdHU5"
  },
  {
    id: "cardamom-pistachio-escargot",
    name: "Cardamom Pistachio Escargot Pastry",
    shortName: "Cardamom Pistachio Escargot",
    price: 7.00,
    description: "Hand-swirled spiral filled with Bronte pistachio paste and freshly ground green cardamom pods.",
    details: "Ultra-crisp caramelised base with an aromatic spiced cream interior, finished with crushed Sicilian pistachios.",
    badge: "Batch Sold Out",
    badgeType: "soldout",
    claimed: 20,
    totalBatch: 20,
    proofTime: "3-Day Laminate",
    flourType: "Bronte Pistachio & Butter",
    category: "viennoiserie",
    dietTags: ["Vegetarian"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxx1Yu_Mxi2Gfp6to3pc2XPqL2HY5yi84shnw3n_dPhOxP3-ihGoNKGntSa8F4WAYHybiGjxf8Ue2mjYNaaWxFstUzGDbczE-_dBSoQnTdWYj0tDsZMh5-HBQXfJ0XYWoSkQBqc5ECePIHhR2E4yLHCWQGrCQ9TFsokfstFyovopApddutfwpeLPsnZEenL13TxRgwKAIhlNuLv1Vb0MHzlvDdQjEWfmWdRXPgxPUvhz82235KXumF"
  },
  {
    id: "toasted-sesame-semolina",
    name: "Toasted Sesame & Semolina Batard",
    shortName: "Toasted Sesame & Semolina",
    price: 13.50,
    description: "Deep nutty warmth and crisp crackling seed crust with soft, golden-hued honeyed crumb.",
    details: "Durum semolina rimacinata paired with heirloom sesame seeds toasted over cast iron before encrusting.",
    badge: "Only 1 Left!",
    badgeType: "limited",
    claimed: 19,
    totalBatch: 20,
    proofTime: "30-hr Proof",
    flourType: "Durum Semolina Rimacinata",
    category: "sourdough",
    dietTags: ["Vegan", "Nut-Free"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjdpCXdTrO8Bi_Bf1fmHS4Fs80zAm6eL5yjqCSNJVZJTP9dIKNrsto1cY6oXZHcEwJ0Uy-vEY5mkjAJ7GABeQV6xWjN_k60Nv3Wnp3CgLuxgy3EzaJCRcDKfYKa_FKo6PDkxesVzUlRCF6ywWrcK34UOiaTGEjSnPZGYUmXZOu18kk9W149MbUCvXALS0XSmKOxQQMz4aXfjF8zPYOhIdi5rZo0AYRxpQnsmvRzPRbuUH_9tSCk0p-"
  },
  {
    id: "pain-au-chocolat",
    name: "Valrhona Dark Pain au Chocolat",
    shortName: "Pain au Chocolat",
    price: 5.75,
    description: "High-layer flaky sourdough lamination filled with double bittersweet dark cacao batons.",
    details: "Crafted with 70% single-origin Valrhona dark chocolate enveloped in buttery honeycomb layers.",
    badge: "Normandy Butter",
    badgeType: "neutral",
    claimed: 22,
    totalBatch: 30,
    proofTime: "3-Day Laminate",
    flourType: "Valrhona 70% Dark",
    category: "viennoiserie",
    dietTags: ["Vegetarian", "Nut-Free"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRBl4pzWUZUjy57u1sbxS9A1Jf1seAFVX8l07BL4gALWNQVWqSxxIrJVolchBT1IH4gGGctMk9UehJEebAK8W5JNFbSx3G1PcQ0gAWmaekCM2QjFY00ncuOwKq5cQ62lodRQnnR44l_QOo2KVyZYU5Kc1dUDLp7Xe-w_5XMQueBSoKBGpRBal1aIgySvFuFMvWZ8XxFlkwaIw2dDIce0nm52YsjBnWfR-HLo-4Qbx-OD0_Jm5hQM31"
  },
  {
    id: "golden-cardamom-bun",
    name: "Golden Cardamom Morning Knot",
    shortName: "Golden Cardamom Bun",
    price: 5.25,
    description: "Swedish twisted ribbon bun enriched with browned butter, coarse pestle-ground cardamom, and dark cane glaze.",
    details: "Topped with crunchy Swedish pearl sugar and whole green cardamom seeds freshly cracked before shaping.",
    badge: "Morning Ritual",
    badgeType: "secondary",
    claimed: 14,
    totalBatch: 24,
    proofTime: "Overnight Proof",
    flourType: "Guatemalan Green Cardamom",
    category: "viennoiserie",
    dietTags: ["Vegetarian", "Nut-Free"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuArM36Yzog4vfM5bc2L7XiF4BDDnQjqhqd-TkASG1lwVKL9ScB6H_1te7dHGBUPO6o1-GzvgQvBkmIqrfwuItrcr8qgYxucbYgFKVIgaJ6TZsfoUqib08TH-9IWIXTkIwnF_yCC_nw-F6bFbpo7PaoUjrxlL67RkIQgLrin0fSJ9XNhjtyy8m8Kh2tt5Tsi5jH_VEUCS-iHoqrXxDo04Yi118VAIrVimReYttZvHlwy43DP7lcck-9s"
  },
  {
    id: "zaatar-tomato-focaccia",
    name: "Za'atar & Confit Tomato Focaccia Slab",
    shortName: "Za'atar & Tomato Focaccia",
    price: 8.50,
    description: "Generous square slab dimpled with olive oil pools, sweet slow-roasted cherry tomatoes, and wild thyme sumac.",
    details: "Baked directly on the hearth stones with fragrant Lebanese wild za'atar and Maldon sea salt flakes.",
    badge: "1 Slab Left!",
    badgeType: "limited",
    claimed: 15,
    totalBatch: 16,
    proofTime: "48-hr Ferment",
    flourType: "High-Hydration 85% EVOO",
    category: "focaccia",
    dietTags: ["Vegan", "Nut-Free"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8J7lYrz8nuGh-gAryWSJ49GsZq2AlNdp44BPx9dv0DCLE_fPL_cvt3ypVXwa3nOgDACuYbUrHGBs_dXRjeWUIMeId86vYV1C6i6D9udfgnMCgDRJoFPEh5pbNDUbfYL1WdUtlTiOLBsqnK1Ve90P-iXKQ2BFsCYSVCnHp7wwYCxvp17YNsIuz0e2FWLJetWEyGBMIqsy4iSuae5HFPNDTT3GuNs9XO2_dR03QD4go4VTdlQnOxK0b"
  },
  {
    id: "spelt-walnut-batard",
    name: "Ancient Spelt & Roasted Walnut Batard",
    shortName: "Spelt & Walnut Batard",
    price: 14.00,
    description: "Nutty and earthy ancient spelt paired with roasted walnuts that lend a subtle violet tint and rich savory crumb.",
    details: "Cold-milled 18 hours prior to mixing. Rich in magnesium, zinc, and natural omega oils with intense walnut crust crunch.",
    badge: "Stoneground Spelt",
    badgeType: "neutral",
    claimed: 8,
    totalBatch: 18,
    proofTime: "36-hr Ferment",
    flourType: "Organic CA Walnuts & Spelt",
    category: "sourdough",
    dietTags: ["Vegan"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD35lX-Lc2NTvgDX95oWUz3Z9_jzj6wSUV4bCZa9DoMAoaOYtGwJLxltDJIqw2xgbjSfruKJ0_EmrswvkNaUKqhLCfk-oA73XEe5lH5XLwB0MajdNGQg2LKKBDDfkLy_r22ZZxjY5-X1RIAHjpoIvwfY2KFzXUs9WDyCdrvTEM74CLzbvhqTzQ13RHBNASgIyBJs26Mpqyjle90VLLwplVH-QYJYSgynjeZchO_WOZkBVw4hkCy6GFv"
  },
  {
    id: "sourdough-crackers",
    name: "Sourdough Discard Sea Salt Crackers",
    shortName: "Sea Salt Crackers",
    price: 7.00,
    description: "Crisp golden sourdough crackers tossed in extra virgin olive oil, freshly ground black pepper, and rosemary Maldon flakes.",
    details: "Created from daily levain discard to eliminate food waste while concentrating tangy lactic acid flavor in paper-thin snaps.",
    badge: "Pantry Favorite",
    badgeType: "neutral",
    claimed: 24,
    totalBatch: 30,
    flourType: "100% Starter Discard",
    category: "pantry",
    dietTags: ["Vegan", "Nut-Free"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5x0oClQdb8Q8LLTx6XMrqddTzQb1RvGl7wJio6qQjtKAiMeL-w8kaGCt6Q_ZX1KOESus2aA8dwAiT4EJWemaEsv_cJFBeX3DO_2pkNrRDkeG5MXMnhYmVNAo9goKJPx7j5i8Ev8lb6mDqg0T2OU6L1V_zil3ikP76g3d9J2AFRn1JuUBozzSR6iTudy1KbaaeOxhBfYSsZ8EEl8Iolg8LaRaxX-zaNptdh2pbmfQsJtJ3lyzSh0jP"
  }
];

