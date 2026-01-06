<script lang="ts" setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Service data array
const serviceData = ref([
  {
    id: 1,
    title: "KI-Kickstart Workshop",
    subtitle: "1 Tag",
    result: "Priorisierte Use Cases, klare Roadmap, realistische Umsetzungsschritte.",
  },
  {
    id: 2,
    title: "Proof of Concept / Pilot",
    subtitle: "2–4 Wochen",
    result: "Ein konkreter Use Case als funktionierender Pilot, inklusive Bewertung, Risiken und Daten-Check.",
  },
  {
    id: 3,
    title: "Sparring",
    subtitle: "Monatlich",
    result: "Du triffst schnellere Entscheidungen, setzt klare Prioritäten und reduzierst Tool-Chaos.",
  },
  {
    id: 4,
    title: "Enablement & Schulungen",
    subtitle: "Nach Bedarf",
    result: "Dein Team versteht KI, arbeitet sauberer und produziert verlässlichere Ergebnisse.",
  },
  {
    id: 5,
    title: "Transformationsprojekte",
    subtitle: "6–12 Wochen+",
    result: "Mehrere Use Cases, stabile Architektur, Governance, Rollout und Betrieb.",
  },
]);

// GSAP animation logic
gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  setTimeout(() => {
    gsap.from(".service-card", {
      stagger: 0.2,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".services",
        start: "top 60%",
        end: "top 20%",
      },
    });
  }, 100);
});

const containerRef = ref(null);
</script>

<template>
  <section id="services" class="services section position-relative">
    <!-- Overlay Text -->
    <!-- Section Title -->
    <ClientOnly>
      <SectionOverlayText text="Leistungen" />
      <SectionTitle subtitle="Was ich anbiete" title="Einstieg klein, Wirkung groß, Skalierung möglich." />
    </ClientOnly>

    <p class="services-intro mb-5">
      Du kannst klein starten und sauber wachsen. Mein Ziel ist immer: schnelle Wirkung, dann kontrollierte Skalierung.
    </p>

    <!-- Swiper -->
    <ClientOnly>
      <swiper :slides-per-view="1" :space-between="24" loop :autoplay="{ delay: 5000 }" :pagination="{ clickable: true, el: '.service-pagination' }" :breakpoints="{ 768: { slidesPerView: 2, spaceBetween: 24 }, 1550: { slidesPerView: 3, spaceBetween: 24 } }" ref="containerRef" class="swiper service-swiper">
        <swiper-slide v-for="service in serviceData" :key="service.id" class="overflow-visible p-3" priority>
          <div class="service-card">
            <div class="card-inner"></div>
            <div class="content">
              <div class="number-circle">
                <div class="waves-top-sm">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <h2>{{ service.id }}</h2>
                <div class="waves-bottom-sm">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <h4>{{ service.title }}</h4>
              <span class="service-subtitle">{{ service.subtitle }}</span>
              <div class="service-result">
                <strong>Ergebnis:</strong> {{ service.result }}
              </div>
            </div>
          </div>
        </swiper-slide>

        <div class="service-pagination"></div>
      </swiper>
    </ClientOnly>

    <!-- Swipe Hint -->
    <div class="swipe-hint d-flex align-items-center justify-content-center gap-3 mt-4">
      <PhosphorIconArrowLeft :size="20" class="swipe-arrow swipe-arrow-left" />
      <span class="swipe-text">Wischen für mehr</span>
      <PhosphorIconArrowRight :size="20" class="swipe-arrow swipe-arrow-right" />
    </div>

    <!-- Next Chapter -->
    <div class="col-12">
      <a href="#how_i_work" class="d-flex gap-4 align-items-center next-chapter">
        <span class="page">05/09</span>
        <span class="next">Weiter</span>
        <PhosphorIconArrowElbowRightDown />
      </a>
    </div>
  </section>
</template>

<style lang="scss">
/* services section */
.services {
  margin-top: 60px;
  @media (min-width: 992px) {
    margin-top: 120px;
  }
  padding-bottom: 40px;
  
  .swipe-hint {
    font-size: 14px;
    opacity: 0.7;
    
    .swipe-text {
      font-weight: 500;
    }
    
    .swipe-arrow {
      animation: swipeArrow 1.5s ease-in-out infinite;
    }
    
    .swipe-arrow-left {
      animation-name: swipeArrowLeft;
    }
    
    .swipe-arrow-right {
      animation-name: swipeArrowRight;
    }
    
    @keyframes swipeArrowLeft {
      0%, 100% { transform: translateX(0); opacity: 0.5; }
      50% { transform: translateX(-8px); opacity: 1; }
    }
    
    @keyframes swipeArrowRight {
      0%, 100% { transform: translateX(0); opacity: 0.5; }
      50% { transform: translateX(8px); opacity: 1; }
    }
  }
  
  .services-intro {
    font-size: 18px;
    @media (min-width: 768px) {
      font-size: 20px;
    }
    line-height: 1.7;
    max-width: 700px;
  }
  .section-title {
    padding-top: 60px;
  }
  .service-swiper {
    padding-bottom: 50px;
  }
  .service-pagination {
    display: flex;
    justify-content: center;
    .swiper-pagination-bullet {
      width: 12px;
      height: 12px;
      opacity: 0.5;
      background-color: #fff;
    }
    .swiper-pagination-bullet-active {
      opacity: 1;
    }
  }
  .next-chapter {
    margin-top: 50px;
    @media (min-width: 992px) {
      margin-top: 80px;
    }
  }
  .service-card {
    position: relative;
    padding: 16px;
    @media (min-width: 576px) {
      padding: 32px;
    }
    @media (min-width: 1200px) {
      padding: 50px;
    }
    border: 1px solid rgb(var(--black));
    .card-inner {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      background-color: rgb(var(--primary));
      z-index: 1;
    }
    .number-circle {
      .waves-top-sm,
      .waves-bottom-sm {
        opacity: 0;
      }
    }
    &::before,
    &::after {
      content: "";
      position: absolute;
      transition-duration: 500ms;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      border: 1px solid rgb(var(--black));
    }
    &:hover {
      &::before {
        transform: rotate(3.5deg);
        opacity: 1;
      }
      &::after {
        transform: rotate(-3.5deg);
        opacity: 1;
      }
      .number-circle {
        .waves-top-sm,
        .waves-bottom-sm {
          opacity: 1;
        }
      }
    }
    .content {
      position: relative;
      z-index: 2;
    }
    .number-circle {
      margin-bottom: 40px;
      width: 78px;
      height: 78px;
      border-radius: 50%;
      background-color: rgb(var(--primary));
      border: 1px solid rgb(var(--black));
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      h2 {
        font-size: 32px;
        font-weight: 500;
      }
    }
    h4 {
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 24px;
      padding-bottom: 8px;
      display: inline-block;
      border-bottom: 2px solid rgb(var(--black));
    }
    .service-subtitle {
      display: inline-block;
      font-size: 14px;
      font-weight: 500;
      padding: 4px 12px;
      background: rgba(var(--black), 0.1);
      border-radius: 20px;
      margin-bottom: 16px;
    }
    .service-result {
      font-size: 15px;
      line-height: 1.6;
      color: rgb(var(--black));
      strong {
        display: block;
        margin-bottom: 4px;
      }
    }
    .service-list {
      list-style: none;
      padding-left: 0;
      display: flex;
      flex-direction: column;
      gap: 8px;
      li {
        display: flex;
        align-items: center;
        gap: 12px;
        color: rgb(var(--black));
        svg {
          color: #343330;
        }
      }
    }
  }
}
</style>
