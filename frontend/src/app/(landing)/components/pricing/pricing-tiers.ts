import type {Frequency, Tier} from "./pricing-types";

import {FrequencyEnum, TiersEnum} from "./pricing-types";

export const frequencies: Array<Frequency> = [
  {key: FrequencyEnum.Yearly, label: "Paiement Annuel", priceSuffix: "par an"},
  {key: FrequencyEnum.Quarterly, label: "Paiement Mensuel", priceSuffix: "par mois"},
];

export const tiers: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "basique",
    price: {
      yearly: "20€",
      quarterly: "2€",
    },    href: "#",
    featured: false,
    mostPopular: false,
    description: "Pour facturez facilment vos clients",
    features: ["10 users included", "2 GB of storage", "Help center access", "Email support"],
    buttonText: "Essayez gratuitement",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Pro,
    title: "Pro",
    description: "Pour gagnez en efficacité avec un outil tout-en-un ",
    href: "#",
    mostPopular: true,
    price: {
      yearly: "55€",
      quarterly: "5.95€",
    },
    featured: false,
    features: [
      "20 users included",
      "10 GB of storage",
      "Help center access",
      "Priority email support",
    ],
    buttonText: "Démarrez",
    buttonColor: "primary",
    buttonVariant: "solid",
  },

  {
    key: TiersEnum.Team,
    title: "Personalisé",
    href: "#",
    featured: true,
    mostPopular: false,
    description: "For large teams that have more than 10 members.",
    price: {
      yearly: "0-60",
      quarterly: "0-6",
    },
    // priceSuffix: "per user",
    features: [
      "50 users included",
      "30 GB of storage",
      "Help center access",
      "Phone & email support",
    ],
    buttonText: "Nous contacter",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
];
