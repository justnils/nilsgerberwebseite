<script lang="ts" setup>
import { faqs } from "~/data/faqs";

// Person Schema (JSON-LD) für Knowledge Graph und KI-Systeme
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Nils Gerber",
  "jobTitle": "KI-Berater und Head of AI",
  "description": "Nils Gerber ist KI-Berater und Head of AI aus Alsdorf bei Aachen. Er hilft Unternehmen und Kommunen in NRW und deutschlandweit, KI pragmatisch und sicher produktiv zu machen. Schwerpunkte: LLMs, RAG-Systeme, KI-Agenten.",
  "url": "https://www.nils-gerber.de",
  "email": "kontakt@nils-gerber.de",
  "image": "https://www.nils-gerber.de/images/hero.png",
  "sameAs": [
    "https://de.linkedin.com/in/nils-gerber",
    "https://www.instagram.com/justnils/",
    "https://www.facebook.com/justnils",
    "https://x.com/justnils888"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "INFORM DataLab"
  },
  "award": "Digital Pioneer 2019 (digitalHUB Aachen)",
  "alumniOf": {
    "@type": "Organization",
    "name": "CROP.ZONE",
    "description": "AgrarTech-Startup aus Aachen, mitgegründet von Nils Gerber als CIO"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Alsdorf",
    "addressRegion": "Nordrhein-Westfalen",
    "addressCountry": "DE"
  },
  "knowsAbout": [
    "Large Language Models (LLMs)",
    "Retrieval Augmented Generation (RAG)",
    "KI-Agenten",
    "KI-Transformation",
    "Automatisierung wissensbasierter Prozesse",
    "Interne KI-Systeme"
  ],
  "areaServed": [
    "Alsdorf",
    "Aachen",
    "Köln",
    "Düsseldorf",
    "Nordrhein-Westfalen",
    "Deutschland"
  ]
};

// WebSite Schema für Suchmaschinen und KI-Systeme
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Nils Gerber – KI-Berater",
  "url": "https://www.nils-gerber.de",
  "inLanguage": "de",
  "description": "KI-Beratung für Mittelstand, Geschäftsführung und Kommunen in NRW und deutschlandweit. LLMs, RAG-Systeme, KI-Agenten.",
  "publisher": {
    "@type": "Person",
    "name": "Nils Gerber"
  }
};

// ProfessionalService Schema mit Leistungskatalog
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Nils Gerber – KI-Beratung",
  "url": "https://www.nils-gerber.de",
  "email": "kontakt@nils-gerber.de",
  "founder": { "@type": "Person", "name": "Nils Gerber" },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Alsdorf",
    "addressRegion": "Nordrhein-Westfalen",
    "addressCountry": "DE"
  },
  "areaServed": ["Aachen", "Köln", "Düsseldorf", "Nordrhein-Westfalen", "Deutschland"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "KI-Beratungsleistungen",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "KI-Kickstart Workshop", "description": "1 Tag: Priorisierte Use Cases, klare Roadmap, realistische Umsetzungsschritte." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Proof of Concept / Pilot", "description": "2-4 Wochen: Ein konkreter Use Case als funktionierender Pilot, inklusive Bewertung, Risiken und Daten-Check." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sparring", "description": "Monatlich: Schnellere Entscheidungen, klare Prioritäten, weniger Tool-Chaos." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Enablement und Schulungen", "description": "Nach Bedarf: Team-Befähigung für sauberes Arbeiten mit KI." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Transformationsprojekte", "description": "6-12 Wochen+: Mehrere Use Cases, stabile Architektur, Governance, Rollout und Betrieb." } }
    ]
  }
};

// FAQPage Schema: serverseitig gerendert, damit AI-Crawler (ohne JS) es lesen können
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer,
    },
  })),
};

useHead({
  title: "Nils Gerber | KI-Berater Aachen | Head of AI | KI Beratung NRW",
  htmlAttrs: {
    lang: "de",
  },
  meta: [
    {
      name: "description",
      content: "Nils Gerber ist KI-Berater aus Alsdorf bei Aachen. KI Beratung für Mittelstand und Geschäftsführung in NRW. Schwerpunkte: LLMs, RAG, KI-Agenten. Operative Umsetzung statt Buzzword-Beratung.",
    },
    {
      name: "keywords",
      content: "Nils Gerber KI Berater, KI Berater Aachen, KI Beratung NRW, KI Beratung Mittelstand, KI Beratung Geschäftsführung, Head of AI, LLM Beratung, RAG Systeme, KI-Agenten, KI-Transformation, INFORM DataLab",
    },
    {
      name: "author",
      content: "Nils Gerber",
    },
    {
      name: "geo.region",
      content: "DE-NW",
    },
    {
      name: "geo.placename",
      content: "Alsdorf bei Aachen",
    },
    {
      property: "og:title",
      content: "Nils Gerber | KI-Berater Aachen | Head of AI",
    },
    {
      property: "og:description",
      content: "KI-Berater aus Alsdorf bei Aachen. KI Beratung für Mittelstand und Geschäftsführung in NRW. LLMs, RAG, KI-Agenten. Operative Umsetzung statt Buzzword-Beratung.",
    },
    {
      property: "og:image",
      content: "https://www.nils-gerber.de/images/hero.png",
    },
    {
      property: "og:url",
      content: "https://www.nils-gerber.de",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:locale",
      content: "de_DE",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Nils Gerber | KI-Berater Aachen | Head of AI",
    },
    {
      name: "twitter:description",
      content: "KI-Berater aus Alsdorf bei Aachen. Operative KI-Umsetzung für Mittelstand und Geschäftsführung.",
    },
    {
      name: "twitter:image",
      content: "https://www.nils-gerber.de/images/hero.png",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "robots",
      content: "index, follow",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(personSchema),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(websiteSchema),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(serviceSchema),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(faqSchema),
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://www.nils-gerber.de",
    },
    {
      rel: "alternate",
      type: "text/markdown",
      href: "https://www.nils-gerber.de/llms.txt",
      title: "LLM-freundliche Version",
    },
  ],
});
</script>
<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>
