import type {PricingFeatures} from "./pricing-comparison-types";

import {TiersEnum} from "./pricing-types";

const features: PricingFeatures = [
  {
    title: "Content",
    items: [
      {
        title: "Outil de facture",
        tiers: {
          [TiersEnum.Free]: true,
          [TiersEnum.Pro]: true,
          [TiersEnum.Team]: true,
        },
        helpText:
          "",
      },
      {
        title: "Accès aux dernières version",
        tiers: {
          [TiersEnum.Free]: false,
          [TiersEnum.Pro]: true,
          [TiersEnum.Team]: true,
        },
        helpText: "Accédez aux dernières fonctionalités avant tout le monde",
      },
    ],
  },
  {
    title: "Features",
    items: [
      {
        title: "Facturation",
        tiers: {
          [TiersEnum.Free]: "Illimité",
          [TiersEnum.Pro]: "Illimité",
          [TiersEnum.Team]: "Illimité",
        },
        helpText: "Facturez facilement vos clients",
      },
      {
        title: "Clients",
        tiers: {
          [TiersEnum.Free]: "Jusqu'à 3 enregistrement",
          [TiersEnum.Pro]: "Illimité",
          [TiersEnum.Team]: "Illimité",
        },
        helpText: "Ajoutez vos clients directement sur l'appli pour plus de simplicité",
      },
      {
        title: "Raccourci",
        tiers: {
          [TiersEnum.Free]: true,
          [TiersEnum.Pro]: true,
          [TiersEnum.Team]: true,
        },
        helpText: "Retrouvez rapidement toutes les fonctionalités grâce aux raccourcis",
      },
      {
        title: "Automatisation",
        tiers: {
          [TiersEnum.Free]: true,
          [TiersEnum.Pro]: true,
          [TiersEnum.Team]: true,
        },
        helpText: "Ne perdez plus de temps à inserer vos informations entreprise ou celle des clients",
      },

      {
        title: "Dashboard",
        tiers: {
          [TiersEnum.Free]: true,
          [TiersEnum.Pro]: true,
          [TiersEnum.Team]: true,
        },
        helpText:
          "Retrouvez votre profit et autres données sur le dashboard",
      },
      {
        title: "Calendrier",
        tiers: {
          [TiersEnum.Free]: false,
          [TiersEnum.Pro]: true,
          [TiersEnum.Team]: true,
        },
        helpText:
            "Plannifiez vos rendez-vous pro avec notre calendrier",
      },
      {
        title: "Optimisation",
        tiers: {
          [TiersEnum.Free]: false,
          [TiersEnum.Pro]: true,
          [TiersEnum.Team]: true,
        },
        helpText:
            "Easily batch-download multiple screens at one go from apps, flows, your collections and more.",
      },
      {
        title: "Chat Bot AI",
        tiers: {
          [TiersEnum.Free]: false,
          [TiersEnum.Pro]: true,
          [TiersEnum.Team]: true,
        },
        helpText:
          "Easily batch-download multiple screens at one go from apps, flows, your collections and more.",
      },
    ],
  },
  // {
  //   title: "Collaboration",
  //   items: [
  //     {
  //       title: "Team members",
  //       tiers: {
  //         [TiersEnum.Free]: "Just you",
  //         [TiersEnum.Pro]: "Just you",
  //         [TiersEnum.Team]: "Unlimited",
  //       },
  //       helpText: "Collaborate with other users in a team.",
  //     },
  //     {
  //       title: "Team collections",
  //       tiers: {
  //         [TiersEnum.Free]: false,
  //         [TiersEnum.Pro]: false,
  //         [TiersEnum.Team]: true,
  //       },
  //       helpText: "Create collections shared across your team.",
  //     },
  //     {
  //       title: "Team administration",
  //       tiers: {
  //         [TiersEnum.Free]: false,
  //         [TiersEnum.Pro]: false,
  //         [TiersEnum.Team]: true,
  //       },
  //       helpText:
  //         "Add or remove members from your team to manage access to membership and collections.",
  //     },
  //     {
  //       title: "Flexible seat-based licensing",
  //       tiers: {
  //         [TiersEnum.Free]: false,
  //         [TiersEnum.Pro]: false,
  //         [TiersEnum.Team]: true,
  //       },
  //       helpText:
  //         "Membership licenses are purchased by seats, which can be provisioned to or removed from users.",
  //     },
  //   ],
  // },
  // {
  //   title: "Security & Access",
  //   items: [
  //     {
  //       title: "SAML Single Sign-On (SSO)",
  //       tiers: {
  //         [TiersEnum.Free]: false,
  //         [TiersEnum.Pro]: false,
  //         [TiersEnum.Team]: true,
  //       },
  //       helpText:
  //         "Access through Okta, ADFS, Azure, Onelogin, or your own SAML identity provider (IdP).",
  //     },
  //     {
  //       title: "SCIM user provisioning",
  //       tiers: {
  //         [TiersEnum.Free]: false,
  //         [TiersEnum.Pro]: false,
  //         [TiersEnum.Team]: true,
  //       },
  //       helpText:
  //         "Sync user directories with Okta, Azure AD, Onelogin, or your own SCIM identity provider (IdP).",
  //     },
  //   ],
  // },
  // {
  //   title: "Billing",
  //   items: [
  //     {
  //       title: "Flexible payment options",
  //       tiers: {
  //         [TiersEnum.Free]: false,
  //         [TiersEnum.Pro]: false,
  //         [TiersEnum.Team]: true,
  //       },
  //       helpText:
  //         "Option to pay via invoice and bank transfers on a net 30, 45 or 60 payment term. Available upon request.",
  //     },
  //     {
  //       title: "Custom security assessment",
  //       tiers: {
  //         [TiersEnum.Free]: false,
  //         [TiersEnum.Pro]: false,
  //         [TiersEnum.Team]: true,
  //       },
  //       helpText:
  //         "Our team will help answer security assessments or questionnaires for your organization. Available upon request.",
  //     },
  //     {
  //       title: "Custom agreement",
  //       tiers: {
  //         [TiersEnum.Free]: false,
  //         [TiersEnum.Pro]: false,
  //         [TiersEnum.Team]: true,
  //       },
  //       helpText:
  //         "Standardized SaaS agreement for your organization’s legal requirement. Available upon request.",
  //     },
  //   ],
  // },
  {
    title: "Support",
    items: [
      // {
      //   title: "Help center",
      //   tiers: {
      //     [TiersEnum.Free]: true,
      //     [TiersEnum.Pro]: true,
      //     [TiersEnum.Team]: true,
      //   },
      //   helpText:
      //     "Browse our articles in our knowledge base to find answers to your questions regarding the platform.",
      // },
      {
        title: "Email support",
        tiers: {
          [TiersEnum.Free]: "Peut prendre jusqu'à 3 jours",
          [TiersEnum.Pro]: "Réponse en moins de 24h",
          [TiersEnum.Team]: true,
        },
        helpText: "Recevez de l'aide par email",
      },
      {
        title: "Chatbot AI support",
        tiers: {
          [TiersEnum.Free]: false,
          [TiersEnum.Pro]: true,
          [TiersEnum.Team]: true,
        },
        helpText: "Get help via email.",
      },
    ],
  },
];

export default features;
