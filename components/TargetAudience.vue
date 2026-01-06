<script lang="ts" setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const audienceData = ref([
  {
    id: 1,
    title: "Geschäftsführung",
    icon: "PhosphorIconBuildings",
    description: "Prioritäten, Business Value, Roadmap, Umsetzung in die Organisation",
  },
  {
    id: 2,
    title: "IT-Leitung",
    icon: "PhosphorIconCpu",
    description: "Sichere Architektur, Integration, Betrieb, Governance",
  },
  {
    id: 3,
    title: "Fachbereiche",
    icon: "PhosphorIconUsersThree",
    description: "Konkrete Use Cases, weniger Reibung, schnelle Entlastung",
  },
  {
    id: 4,
    title: "Kommunen",
    icon: "PhosphorIconBank",
    description: "Quick Wins, spürbare Entlastung, realistisch umsetzbar",
  },
]);

onMounted(() => {
  setTimeout(() => {
    gsap.from(".audience-card", {
      stagger: 0.15,
      opacity: 0,
      y: 30,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".audience-section",
        start: "top 70%",
        end: "top 30%",
      },
    });
  }, 100);
});
</script>

<template>
  <section id="audience" class="audience-section section position-relative">
    <ClientOnly>
      <SectionOverlayText text="Zielgruppe" />
      <SectionTitle subtitle="Für wen ich arbeite" title="Für Entscheider, die KI nicht 'einführen', sondern nutzen wollen." />
    </ClientOnly>

    <p class="audience-intro mb-5">
      Ich arbeite mit Geschäftsführung, IT-Leitung und Fachbereichen, ebenso mit Kommunen. 
      Egal ob erster Schritt oder Skalierung: Ziel ist, dass KI messbar Zeit spart, Qualität erhöht oder Service verbessert.
    </p>

    <div class="row g-4 audience-grid">
      <div v-for="item in audienceData" :key="item.id" class="col-sm-6 col-lg-3">
        <div class="audience-card">
          <div class="card-inner"></div>
          <div class="content">
            <div class="icon-circle mb-4">
              <PhosphorIconBuildings v-if="item.id === 1" :size="32" />
              <PhosphorIconCpu v-if="item.id === 2" :size="32" />
              <PhosphorIconUsersThree v-if="item.id === 3" :size="32" />
              <PhosphorIconBank v-if="item.id === 4" :size="32" />
            </div>
            <h4>{{ item.title }}</h4>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Next Chapter -->
    <div class="col-12">
      <a href="#outcomes" class="d-flex gap-4 align-items-center next-chapter">
        <span class="page">03/09</span>
        <span class="next">Weiter</span>
        <PhosphorIconArrowElbowRightDown />
      </a>
    </div>
  </section>
</template>

<style lang="scss">
.audience-section {
  padding-top: 60px;
  padding-bottom: 40px;
  @media (min-width: 1200px) {
    padding-top: 120px;
  }

  .audience-intro {
    font-size: 18px;
    @media (min-width: 768px) {
      font-size: 20px;
    }
    line-height: 1.7;
    max-width: 800px;
  }

  .audience-grid {
    margin-bottom: 60px;
  }

  .audience-card {
    position: relative;
    padding: 20px;
    @media (min-width: 768px) {
      padding: 24px;
    }
    @media (min-width: 992px) {
      padding: 28px;
    }
    border: 1px solid rgb(var(--black));
    height: 100%;
    min-height: 280px;
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;

    .card-inner {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      background-color: rgb(var(--primary));
      z-index: 1;
    }

    .content {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .icon-circle {
      width: 56px;
      height: 56px;
      @media (min-width: 992px) {
        width: 64px;
        height: 64px;
      }
      border-radius: 50%;
      border: 1px solid rgb(var(--black));
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    h4 {
      font-size: 18px;
      @media (min-width: 768px) {
        font-size: 20px;
      }
      @media (min-width: 1200px) {
        font-size: 22px;
      }
      font-weight: 600;
      margin-bottom: 10px;
      word-wrap: break-word;
      hyphens: auto;
    }

    p {
      font-size: 14px;
      @media (min-width: 768px) {
        font-size: 15px;
      }
      line-height: 1.5;
      margin-bottom: 0;
      word-wrap: break-word;
      hyphens: auto;
    }

    &:hover {
      transform: translateY(-5px);
    }
  }

  .next-chapter {
    margin-top: 40px;
  }
}
</style>





