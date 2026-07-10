<script lang="ts" setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const principles = ref([
  "Wirkung vor Demo",
  "Pilot vor Rollout",
  "Datenzugriff und Berechtigungen zuerst",
  "Qualität messbar machen statt 'fühlt sich gut an'",
  "Menschen mitnehmen, sonst stirbt jedes System",
  "Sicherheit und DSGVO pragmatisch lösen, nicht als Ausrede nutzen",
]);

onMounted(() => {
  setTimeout(() => {
    gsap.from(".principle-item", {
      stagger: 0.1,
      opacity: 0,
      scale: 0.9,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".principles-section",
        start: "top 70%",
        end: "top 30%",
      },
    });
  }, 100);
});
</script>

<template>
  <section id="principles" class="principles-section section position-relative">
    <SectionOverlayText text="Prinzipien" />
    <SectionTitle subtitle="Meine Arbeitsweise" title="Meine Prinzipien, damit KI nicht als Spielerei endet." />

    <div class="principles-grid row g-3 mb-5">
      <div v-for="(principle, index) in principles" :key="index" class="col-sm-6 col-lg-4">
        <div class="principle-item d-flex align-items-start gap-3">
          <div class="principle-icon">
            <PhosphorIconTarget :size="20" weight="bold" />
          </div>
          <span>{{ principle }}</span>
        </div>
      </div>
    </div>

    <div class="promise-box">
      <div class="promise-inner">
        <h4>Gegenversprechen:</h4>
        <p>Keine Buzzword-Folien, kein Bullshit, keine Experimente ohne Ziel. Wir bauen Dinge, die genutzt werden.</p>
      </div>
    </div>

    <!-- Next Chapter -->
    <div class="col-12">
      <a href="#about_me" class="d-flex gap-4 align-items-center next-chapter">
        <span class="page">07/10</span>
        <span class="next">Weiter</span>
        <PhosphorIconArrowElbowRightDown />
      </a>
    </div>
  </section>
</template>

<style lang="scss">
.principles-section {
  padding-top: 60px;
  padding-bottom: 40px;
  @media (min-width: 1200px) {
    padding-top: 120px;
  }

  .principles-grid {
    margin-bottom: 40px;
  }

  .principle-item {
    padding: 16px 20px;
    border: 1px solid rgb(var(--black));
    height: 100%;
    font-size: 15px;
    @media (min-width: 768px) {
      font-size: 16px;
    }
    line-height: 1.5;

    .principle-icon {
      flex-shrink: 0;
      margin-top: 2px;
    }
  }

  .promise-box {
    position: relative;
    margin-bottom: 60px;
    
    .promise-inner {
      padding: 32px;
      border: 2px solid rgb(var(--black));
      background: rgba(var(--black), 0.05);
      max-width: 700px;

      h4 {
        font-size: 20px;
        @media (min-width: 768px) {
          font-size: 24px;
        }
        font-weight: 600;
        margin-bottom: 12px;
      }

      p {
        font-size: 17px;
        @media (min-width: 768px) {
          font-size: 19px;
        }
        line-height: 1.6;
        margin-bottom: 0;
      }
    }
  }

  .next-chapter {
    margin-top: 40px;
  }
}
</style>






