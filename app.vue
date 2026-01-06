<script lang="ts" setup>
// Person Schema (JSON-LD) fuer Knowledge Graph und KI-Systeme
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
    "https://www.linkedin.com/in/nils-gerber/"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "INFORM DataLab"
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
    "Koeln",
    "Duesseldorf",
    "Nordrhein-Westfalen",
    "Deutschland"
  ]
};

useHead({
  title: "Nils Gerber | KI-Berater Aachen | Head of AI | KI Beratung NRW",
  htmlAttrs: {
    lang: "de",
  },
  meta: [
    {
      name: "description",
      content: "Nils Gerber ist KI-Berater aus Alsdorf bei Aachen. KI Beratung fuer Mittelstand und Geschaeftsfuehrung in NRW. Schwerpunkte: LLMs, RAG, KI-Agenten. Operative Umsetzung statt Buzzword-Beratung.",
    },
    {
      name: "keywords",
      content: "Nils Gerber KI Berater, KI Berater Aachen, KI Beratung NRW, KI Beratung Mittelstand, KI Beratung Geschaeftsfuehrung, Head of AI, LLM Beratung, RAG Systeme, KI-Agenten, KI-Transformation, INFORM DataLab",
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
      content: "KI-Berater aus Alsdorf bei Aachen. KI Beratung fuer Mittelstand und Geschaeftsfuehrung in NRW. LLMs, RAG, KI-Agenten. Operative Umsetzung statt Buzzword-Beratung.",
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
      content: "KI-Berater aus Alsdorf bei Aachen. Operative KI-Umsetzung fuer Mittelstand und Geschaeftsfuehrung.",
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
  ],
  link: [
    {
      rel: "canonical",
      href: "https://www.nils-gerber.de",
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
