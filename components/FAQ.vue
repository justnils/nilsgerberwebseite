<script lang="ts" setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = ref([
  // GEO-optimierte Fragen
  {
    question: "Wer ist Nils Gerber?",
    answer: "Nils Gerber ist KI-Berater und Head of AI aus Alsdorf bei Aachen, Nordrhein-Westfalen. Er hilft Unternehmen und Kommunen in NRW und deutschlandweit, KI pragmatisch und sicher produktiv zu machen. Schwerpunkte: Large Language Models (LLMs), RAG-Systeme, KI-Agenten. Operative Umsetzung statt Buzzword-Beratung.",
  },
  {
    question: "Was macht ein KI-Berater?",
    answer: "Ein KI-Berater wie Nils Gerber hilft Unternehmen, die richtigen KI-Use-Cases zu identifizieren, Piloten zu entwickeln und KI-Systeme in den Alltag zu integrieren. Das umfasst Strategie, Architektur, Implementierung und Schulung – immer mit Fokus auf messbare Wirkung.",
  },
  {
    question: "Was ist der Unterschied zwischen KI-Beratung und klassischer IT-Beratung?",
    answer: "KI-Beratung fokussiert sich auf den Einsatz von Machine Learning, Large Language Models und intelligenter Automatisierung. Es geht nicht nur um Technik, sondern auch um Datenqualitaet, Change Management und den sinnvollen Einsatz von KI – nicht um Hype.",
  },
  {
    question: "Wie starten wir, wenn wir noch keine Use Cases haben?",
    answer: "Mit einem Kickstart-Workshop. In einem Tag identifizieren wir priorisierte Use Cases, bewerten Machbarkeit und erstellen eine realistische Roadmap. Danach ist klar, was sinnvoll ist, was Daten braucht und was schnell Wirkung bringt.",
  },
  {
    question: "Was kostet KI-Beratung?",
    answer: "Das haengt vom Umfang ab. Ein Kickstart-Workshop ist ein ueberschaubares Investment, ein Transformationsprojekt entsprechend mehr. Wichtig: Der ROI sollte klar sein, bevor wir starten. Im Erstgespraech klaeren wir, ob und wie eine Zusammenarbeit sinnvoll ist – kostenfrei.",
  },
  {
    question: "Ist KI-Beratung auch fuer den Mittelstand geeignet?",
    answer: "Ja, besonders. Der Mittelstand kann mit fokussierten KI-Projekten schnell Wirkung erzielen – ohne eigene AI-Abteilung. Entscheidend ist nicht die Groesse, sondern der Wille, Dinge sauber umzusetzen und zu nutzen.",
  },
  {
    question: "Geht das DSGVO-konform?",
    answer: "Ja. Nils Gerber arbeitet ausschliesslich mit datenschutzkonformen Loesungen. Zugriff, Datenfluesse, Logging und Grenzen werden von Anfang an sauber definiert. Europaeische Cloud-Anbieter und lokale Modelle sind moeglich.",
  },
  {
    question: "Wo bietet Nils Gerber KI-Beratung an?",
    answer: "Nils Gerber ist KI-Berater in Alsdorf bei Aachen und arbeitet mit Unternehmen in Aachen, Koeln, Duesseldorf, ganz NRW und deutschlandweit (remote). Vor-Ort-Termine und Remote-Zusammenarbeit sind flexibel kombinierbar.",
  },
  {
    question: "Was sind LLMs, RAG und KI-Agenten?",
    answer: "LLMs (Large Language Models) sind Sprachmodelle wie GPT-4 oder Claude. RAG (Retrieval Augmented Generation) kombiniert LLMs mit Unternehmenswissen fuer praezise Antworten. KI-Agenten sind autonome Systeme, die Aufgaben eigenstaendig bearbeiten. Nils Gerber hilft bei allen drei Bereichen.",
  },
]);

const openIndex = ref<number | null>(null);

const toggleFaq = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index;
};

onMounted(() => {
  setTimeout(() => {
    gsap.from(".faq-item", {
      stagger: 0.15,
      opacity: 0,
      y: 20,
      duration: 0.6,
      scrollTrigger: {
        trigger: ".faq-section",
        start: "top 70%",
      },
    });
  }, 100);
});
</script>

<template>
  <section id="faq" class="faq-section section position-relative">
    <ClientOnly>
      <SectionOverlayText text="FAQ" />
      <SectionTitle subtitle="Häufige Fragen" title="Fragen, die fast immer kommen" />
    </ClientOnly>

    <div class="faq-list">
      <div 
        v-for="(faq, index) in faqs" 
        :key="index" 
        class="faq-item"
        :class="{ 'is-open': openIndex === index }"
      >
        <button class="faq-question" @click="toggleFaq(index)">
          <span>{{ faq.question }}</span>
          <PhosphorIconCaretDown 
            :size="24" 
            class="faq-icon" 
            :class="{ 'rotated': openIndex === index }"
          />
        </button>
        <div class="faq-answer" v-show="openIndex === index">
          <p>{{ faq.answer }}</p>
        </div>
      </div>
    </div>

    <!-- Next Chapter -->
    <div class="col-12">
      <a href="#contact" class="d-flex gap-4 align-items-center next-chapter">
        <span class="page">09/09</span>
        <span class="next">Kontakt</span>
        <PhosphorIconArrowElbowRightDown />
      </a>
    </div>
  </section>
</template>

<style lang="scss">
.faq-section {
  padding-top: 60px;
  padding-bottom: 40px;
  @media (min-width: 1200px) {
    padding-top: 120px;
  }

  .faq-list {
    max-width: 800px;
    margin-bottom: 60px;
  }

  .faq-item {
    border: 1px solid rgb(var(--black));
    margin-bottom: -1px;

    &.is-open {
      .faq-question {
        background: rgba(var(--black), 0.05);
      }
    }

    .faq-question {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 24px;
      background: transparent;
      border: none;
      text-align: left;
      font-size: 17px;
      @media (min-width: 768px) {
        font-size: 19px;
      }
      font-weight: 500;
      cursor: pointer;
      transition: background 0.2s ease;

      &:hover {
        background: rgba(var(--black), 0.03);
      }

      .faq-icon {
        flex-shrink: 0;
        transition: transform 0.3s ease;

        &.rotated {
          transform: rotate(180deg);
        }
      }
    }

    .faq-answer {
      padding: 0 24px 20px;

      p {
        font-size: 16px;
        @media (min-width: 768px) {
          font-size: 17px;
        }
        line-height: 1.7;
        margin-bottom: 0;
        color: rgba(var(--black), 0.85);
      }
    }
  }

  .next-chapter {
    margin-top: 40px;
  }
}
</style>





