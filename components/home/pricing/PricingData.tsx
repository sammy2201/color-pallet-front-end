export const pricingData = [
  {
    id: 1,
    packageName: "Free",
    monthPrice: 0,
    yearPrice: 0,
    subTitle: "Perfect for individuals getting started",
    offerList: [
      { feature: "Basic Color Palette Generation", status: "active" },
      { feature: "Limited Color Suggestions", status: "active" },
      { feature: "Email Support", status: "active" },
      { feature: "Phone Call Support", status: "inactive" },
      { feature: "Lifetime Access", status: "inactive" },
      {
        feature: "Basic Palette Customization (lighten/darken)",
        status: "active",
      },
    ],
  },
  {
    id: 2,
    packageName: "Premium",
    monthPrice: 100,
    yearPrice: 900,
    subTitle: "For professionals who need more features",
    offerList: [
      { feature: "Advanced Color Palette Generation", status: "active" },
      { feature: "Unlimited Color Suggestions", status: "active" },
      { feature: "Email Support", status: "active" },
      { feature: "Phone Call Support", status: "active" },
      { feature: "Lifetime Access", status: "inactive" },
      {
        feature:
          "Complete Palette Customization (hue, saturation, lightness, etc.)",
        status: "active",
      },
    ],
  },
];
