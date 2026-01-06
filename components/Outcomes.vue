<script lang="ts" setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const outcomes = ref([
  {
    title: "KI-Agenten, die eigenstaendig arbeiten",
    desc: "Autonome Systeme, die komplexe Aufgaben ohne staendige Anleitung erledigen – von Recherche bis Berichterstellung."
  },
  {
    title: "Chatbots, die wirklich verstehen",
    desc: "Interne Assistenten, die auf euer Firmenwissen zugreifen und praezise Antworten liefern – keine generischen Floskeln."
  },
  {
    title: "Automatische Dokumentenanalyse in Sekunden",
    desc: "Vertraege, PDFs, E-Mails – KI extrahiert relevante Infos, fasst zusammen und kategorisiert automatisch."
  },
  {
    title: "RAG-Systeme fuer euer Unternehmenswissen",
    desc: "Eure Dokumente, FAQs und Wikis werden durchsuchbar – mit praezisen, quellenbasierten Antworten."
  },
  {
    title: "Workflow-Automatisierung mit LLMs",
    desc: "E-Mails beantworten, Tickets priorisieren, Reports erstellen – wiederkehrende Aufgaben laufen automatisch."
  },
  {
    title: "Code-Generierung und Entwickler-Boost",
    desc: "KI schreibt Boilerplate, reviewed Code und beschleunigt die Entwicklung um 30-50%."
  },
  {
    title: "Personalisierte Kommunikation in Echtzeit",
    desc: "Individuelle E-Mails, Angebote und Antworten – automatisch generiert, trotzdem persoenlich."
  },
]);

onMounted(() => {
  setTimeout(() => {
    gsap.from(".outcome-item", {
      stagger: 0.1,
      opacity: 0,
      x: -30,
      duration: 0.6,
      scrollTrigger: {
        trigger: ".outcomes-section",
        start: "top 70%",
        end: "top 30%",
      },
    });
  }, 100);
});
</script>

<template>
  <section id="outcomes" class="outcomes-section section position-relative">
    <ClientOnly>
      <SectionOverlayText text="Ergebnisse" />
      <SectionTitle subtitle="Was du mit mir erreichst" title="Typische Outcomes, die realistisch erreichbar sind." />
    </ClientOnly>

    <p class="outcomes-intro mb-5">
      Das ist heute mit KI moeglich – und ich helfe dir, es umzusetzen:
    </p>

    <div class="outcomes-grid">
      <div v-for="(outcome, index) in outcomes" :key="index" class="outcome-card">
        <div class="outcome-icon">
          <PhosphorIconRocket :size="28" weight="duotone" v-if="index === 0" />
          <PhosphorIconChatCircleText :size="28" weight="duotone" v-else-if="index === 1" />
          <PhosphorIconFileSearch :size="28" weight="duotone" v-else-if="index === 2" />
          <PhosphorIconDatabase :size="28" weight="duotone" v-else-if="index === 3" />
          <PhosphorIconGear :size="28" weight="duotone" v-else-if="index === 4" />
          <PhosphorIconCode :size="28" weight="duotone" v-else-if="index === 5" />
          <PhosphorIconEnvelopeSimple :size="28" weight="duotone" v-else />
        </div>
        <h4 class="outcome-title">{{ outcome.title }}</h4>
        <p class="outcome-desc">{{ outcome.desc }}</p>
      </div>
    </div>

    <!-- Next Chapter -->
    <div class="col-12">
      <a href="#services" class="d-flex gap-4 align-items-center next-chapter">
        <span class="page">04/09</span>
        <span class="next">Weiter</span>
        <PhosphorIconArrowElbowRightDown />
      </a>
    </div>
  </section>
</template>

<style lang="scss">
.outcomes-section {
  padding-top: 60px;
  padding-bottom: 40px;
  @media (min-width: 1200px) {
    padding-top: 120px;
  }

  .outcomes-intro {
    font-size: 18px;
    @media (min-width: 768px) {
      font-size: 20px;
    }
    line-height: 1.7;
    max-width: 700px;
  }

  .outcomes-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 60px;
    
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
    }
    
    @media (min-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .outcome-card {
    padding: 28px;
    border: 1px solid rgb(var(--black));
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
    }
    
    .outcome-icon {
      width: 56px;
      height: 56px;
      border-radius: 12px;
      background: rgba(var(--black), 0.05);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
    }
    
    .outcome-title {
      font-size: 18px;
      @media (min-width: 768px) {
        font-size: 20px;
      }
      font-weight: 600;
      margin-bottom: 12px;
      line-height: 1.3;
    }
    
    .outcome-desc {
      font-size: 15px;
      @media (min-width: 768px) {
        font-size: 16px;
      }
      line-height: 1.6;
      margin-bottom: 0;
      opacity: 0.85;
    }
  }

  .next-chapter {
    margin-top: 40px;
  }
}
</style>




