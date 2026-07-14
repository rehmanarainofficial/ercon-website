import generatedHero from "../assets/images/generated/switchgear-manufacturing-floor.png";
import generatedTesting from "../assets/images/generated/switchgear-testing-engineer.png";

const erconAsset = (path) => `https://erconind.com${path}`;

const categoryImages = {
  mediumVoltage: erconAsset("/assets/images12-CHY_He2t.png"),
  lowVoltage: erconAsset("/assets/images14-Drf81w4S.png"),
  cableManagement: erconAsset("/assets/images16-HPIHnKMU.png"),
  solar: erconAsset("/assets/images15-q7nCAQ8J.png"),
  fabrication: erconAsset("/assets/images19-BVoh4YrH.png"),
};

const sharedApplications = [
  {
    id: "industrial-infrastructure",
    title: "Industrial and infrastructure projects",
    description:
      "For project environments that require organized electrical distribution and manufacturing support.",
  },
  {
    id: "commercial-technical",
    title: "Commercial technical facilities",
    description:
      "For facilities that need dependable panel, cabinet, or distribution-system coordination.",
  },
];

const makeSpecifications = (rows) => [
  {
    group: "Verified product information",
    rows,
  },
];

export const products = [
  {
    id: "mv-type-tested-switchgear",
    slug: "mv-type-tested-switchgear",
    name: "MV Type Tested Switchgear",
    categoryId: "medium-voltage",
    categoryLabel: "Medium Voltage",
    category: "Medium Voltage",
    shortDescription:
      "Medium-voltage switchgear for controlling and protecting electrical equipment in power distribution systems.",
    overview:
      "MV Type Tested Switchgear represents ERCON’s medium-voltage switchgear focus for electrical systems that require controlled distribution, protection, and project-ready manufacturing coordination.",
    heroImage: generatedHero,
    cardImage: categoryImages.mediumVoltage,
    image: categoryImages.mediumVoltage,
    gallery: [
      {
        id: "mv-product",
        src: categoryImages.mediumVoltage,
        alt: "MV Type Tested Switchgear product visual",
        caption:
          "Medium-voltage switchgear category visual from ERCON public assets.",
      },
      {
        id: "mv-manufacturing",
        src: generatedHero,
        alt: "Switchgear manufacturing floor with blue panels",
        caption:
          "Manufacturing environment used as a temporary product-context visual.",
      },
    ],
    highlights: [
      "Medium voltage",
      "Type-tested focus",
      "Protection and control",
    ],
    features: [
      {
        id: "control-protection",
        title: "Control and protection role",
        description:
          "Positioned for controlling and protecting electrical equipment in medium-voltage power systems.",
      },
      {
        id: "manufacturing-focus",
        title: "Manufacturing-focused delivery",
        description:
          "Connected to ERCON’s LV/MV switchgear manufacturing and power-distribution capability.",
      },
    ],
    applications: sharedApplications,
    specifications: makeSpecifications([
      { label: "Product family", value: "MV switchgear" },
      { label: "Category", value: "Medium Voltage" },
      {
        label: "Functional role",
        value: "Control and protection of electrical equipment",
      },
      {
        label: "Detailed ratings",
        value: "To be confirmed from ERCON technical documentation",
      },
    ]),
    relatedProductSlugs: [
      "medium-voltage-switchgear",
      "low-voltage-switchgear",
      "cable-management-system",
    ],
    featured: true,
    status: "active",
  },
  {
    id: "medium-voltage-switchgear",
    slug: "medium-voltage-switchgear",
    name: "Medium Voltage Switchgear",
    categoryId: "medium-voltage",
    categoryLabel: "Medium Voltage",
    category: "Medium Voltage",
    shortDescription:
      "Switchgear solutions supporting industrial and infrastructure power distribution requirements.",
    overview:
      "Medium Voltage Switchgear supports ERCON’s public product range for power distribution projects where medium-voltage equipment coordination is required.",
    heroImage: generatedHero,
    cardImage: erconAsset("/assets/images13-fgfJBba8.png"),
    image: erconAsset("/assets/images13-fgfJBba8.png"),
    gallery: [
      {
        id: "medium-voltage-product",
        src: erconAsset("/assets/images13-fgfJBba8.png"),
        alt: "Medium Voltage Switchgear visual",
        caption: "Medium-voltage switchgear public category visual.",
      },
      {
        id: "medium-voltage-testing",
        src: generatedTesting,
        alt: "Engineer testing a blue switchgear panel",
        caption: "Testing and inspection context visual.",
      },
    ],
    highlights: [
      "Power distribution",
      "Industrial projects",
      "System reliability",
    ],
    features: [
      {
        id: "distribution-support",
        title: "Distribution system support",
        description:
          "Part of ERCON’s medium-voltage product range for electrical distribution requirements.",
      },
      {
        id: "project-fit",
        title: "Project-oriented product family",
        description:
          "Presented for industrial and infrastructure projects requiring engineered electrical equipment.",
      },
    ],
    applications: sharedApplications,
    specifications: makeSpecifications([
      { label: "Product family", value: "Switchgear" },
      { label: "Category", value: "Medium Voltage" },
      { label: "Business area", value: "Power distribution systems" },
    ]),
    relatedProductSlugs: [
      "mv-type-tested-switchgear",
      "low-voltage-switchgear",
      "sheet-metal-fabrication",
    ],
    featured: true,
    status: "active",
  },
  {
    id: "low-voltage-switchgear",
    slug: "low-voltage-switchgear",
    name: "Low Voltage Switchgear",
    categoryId: "low-voltage",
    categoryLabel: "Low Voltage",
    category: "Low Voltage",
    shortDescription:
      "LV panel and distribution solutions aligned with ERCON’s switchgear manufacturing focus.",
    overview:
      "Low Voltage Switchgear sits within ERCON’s LV/MV switchgear manufacturing focus and supports low-voltage distribution and panel requirements.",
    heroImage: generatedHero,
    cardImage: categoryImages.lowVoltage,
    image: categoryImages.lowVoltage,
    gallery: [
      {
        id: "low-voltage-product",
        src: categoryImages.lowVoltage,
        alt: "Low Voltage Switchgear visual",
        caption: "Low-voltage switchgear public category visual.",
      },
      {
        id: "low-voltage-manufacturing",
        src: generatedHero,
        alt: "Modern electrical panel manufacturing floor",
        caption: "Manufacturing context visual.",
      },
    ],
    highlights: ["LV systems", "Panel manufacturing", "Distribution control"],
    features: [
      {
        id: "panel-focus",
        title: "Panel manufacturing focus",
        description:
          "Aligned with ERCON’s public positioning around LV/MV switchgear and electrical panels.",
      },
      {
        id: "distribution-control",
        title: "Distribution control",
        description:
          "Supports electrical distribution and control requirements in project environments.",
      },
    ],
    applications: sharedApplications,
    specifications: makeSpecifications([
      { label: "Product family", value: "LV switchgear" },
      { label: "Category", value: "Low Voltage" },
      {
        label: "Related manufacturing",
        value: "Electrical panels and cabinets",
      },
    ]),
    relatedProductSlugs: [
      "medium-voltage-switchgear",
      "mv-type-tested-switchgear",
      "sheet-metal-fabrication",
    ],
    featured: true,
    status: "active",
  },
  {
    id: "solar-energy-systems",
    slug: "solar-energy-systems",
    name: "Solar Energy Systems",
    categoryId: "energy-solutions",
    categoryLabel: "Energy Solutions",
    category: "Energy Solutions",
    shortDescription:
      "Solar energy solutions presented by ERCON as part of its integrated power and energy offering.",
    overview:
      "Solar Energy Systems are included in ERCON’s public product range as part of the company’s integrated electrical and energy-solutions offering.",
    heroImage: categoryImages.solar,
    cardImage: categoryImages.solar,
    image: categoryImages.solar,
    gallery: [
      {
        id: "solar-product",
        src: categoryImages.solar,
        alt: "Solar Energy Systems visual",
        caption: "Solar energy systems public category visual.",
      },
    ],
    highlights: ["Energy transition", "Power systems", "Project support"],
    features: [
      {
        id: "energy-system",
        title: "Energy-system category",
        description:
          "Included in ERCON’s public product range beside switchgear and cable-management solutions.",
      },
    ],
    applications: [
      {
        id: "energy-projects",
        title: "Energy project requirements",
        description:
          "For projects evaluating solar energy systems as part of broader electrical infrastructure.",
      },
    ],
    specifications: makeSpecifications([
      { label: "Product family", value: "Solar energy systems" },
      { label: "Category", value: "Energy Solutions" },
      {
        label: "Detailed system ratings",
        value: "To be confirmed from ERCON technical documentation",
      },
    ]),
    relatedProductSlugs: ["low-voltage-switchgear", "cable-management-system"],
    featured: true,
    status: "active",
  },
  {
    id: "cable-management-system",
    slug: "cable-management-system",
    name: "Cable Management System",
    categoryId: "cable-management",
    categoryLabel: "Cable Management",
    category: "Cable Management",
    shortDescription:
      "Cable tray and cable management systems for organized, maintainable industrial electrical installations.",
    overview:
      "Cable Management System covers ERCON’s public cable tray and cable management offering for organized electrical routing and project installation support.",
    heroImage: categoryImages.cableManagement,
    cardImage: categoryImages.cableManagement,
    image: categoryImages.cableManagement,
    gallery: [
      {
        id: "cable-management-product",
        src: categoryImages.cableManagement,
        alt: "Cable Management System visual",
        caption: "Cable management public category visual.",
      },
      {
        id: "cable-management-fabrication",
        src: categoryImages.fabrication,
        alt: "Sheet metal fabrication and cable support visual",
        caption: "Fabrication-related public category visual.",
      },
    ],
    highlights: ["Cable trays", "Infrastructure", "Installation support"],
    features: [
      {
        id: "organized-routing",
        title: "Organized electrical routing",
        description:
          "Supports cable tray and cable-management requirements for maintainable installations.",
      },
      {
        id: "fabrication-link",
        title: "Manufacturing link",
        description:
          "Connected to ERCON’s sheet metal fabrication and electrical manufacturing capabilities.",
      },
    ],
    applications: sharedApplications,
    specifications: makeSpecifications([
      { label: "Product family", value: "Cable tray and cable management" },
      { label: "Category", value: "Cable Management" },
      { label: "Related capability", value: "Sheet metal fabrication" },
    ]),
    relatedProductSlugs: [
      "sheet-metal-fabrication",
      "low-voltage-switchgear",
      "solar-energy-systems",
    ],
    featured: true,
    status: "active",
  },
  {
    id: "sheet-metal-fabrication",
    slug: "sheet-metal-fabrication",
    name: "Sheet Metal Fabrication",
    categoryId: "manufacturing",
    categoryLabel: "Manufacturing",
    category: "Manufacturing",
    shortDescription:
      "Precision sheet metal fabrication capability supporting ERCON’s electrical cabinets and switchgear production.",
    overview:
      "Sheet Metal Fabrication supports ERCON’s electrical cabinets, enclosures, cable-management elements, and switchgear manufacturing work.",
    heroImage: generatedHero,
    cardImage: categoryImages.fabrication,
    image: categoryImages.fabrication,
    gallery: [
      {
        id: "fabrication-product",
        src: categoryImages.fabrication,
        alt: "Sheet Metal Fabrication visual",
        caption: "Sheet metal fabrication public category visual.",
      },
      {
        id: "fabrication-manufacturing",
        src: generatedHero,
        alt: "Switchgear and fabrication manufacturing environment",
        caption: "Manufacturing context visual.",
      },
    ],
    highlights: ["Fabrication", "Electrical cabinets", "Manufacturing"],
    features: [
      {
        id: "cabinet-support",
        title: "Cabinet and enclosure support",
        description:
          "Supports electrical cabinets, enclosures, and switchgear production requirements.",
      },
      {
        id: "manufacturing-capability",
        title: "Production capability",
        description:
          "Part of ERCON’s localized manufacturing capability in Pakistan.",
      },
    ],
    applications: sharedApplications,
    specifications: makeSpecifications([
      { label: "Capability family", value: "Sheet metal fabrication" },
      { label: "Category", value: "Manufacturing" },
      {
        label: "Related products",
        value: "Electrical cabinets, switchgear, cable management",
      },
    ]),
    relatedProductSlugs: [
      "cable-management-system",
      "low-voltage-switchgear",
      "medium-voltage-switchgear",
    ],
    featured: true,
    status: "active",
  },
];

export const productFamilies = products;

export const getProductBySlug = (slug) =>
  products.find((product) => product.slug === slug);

export const getRelatedProducts = (product, limit = 3) => {
  if (!product) return [];

  const explicit = product.relatedProductSlugs
    .map((slug) => getProductBySlug(slug))
    .filter(Boolean);

  const sameCategory = products.filter(
    (candidate) =>
      candidate.slug !== product.slug &&
      candidate.categoryId === product.categoryId,
  );

  return [...explicit, ...sameCategory]
    .filter(
      (candidate, index, list) =>
        list.findIndex((item) => item.slug === candidate.slug) === index,
    )
    .slice(0, limit);
};
