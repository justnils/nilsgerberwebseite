<script lang="ts" setup>
import { onMounted } from "vue";
import gsap from "gsap";

onMounted(() => {
  gsap.from(".value-headline", { duration: 1, y: 30, opacity: 0, scrollTrigger: { trigger: ".value-proposition", start: "top 80%" } });
  gsap.from(".value-subline", { duration: 1, y: 20, opacity: 0, delay: 0.3, scrollTrigger: { trigger: ".value-proposition", start: "top 80%" } });
  gsap.from(".benefit-item", { duration: 0.8, x: -30, opacity: 0, stagger: 0.15, delay: 0.5, scrollTrigger: { trigger: ".value-proposition", start: "top 80%" } });
  gsap.from(".value-btn", { duration: 1.2, scale: 0, opacity: 0, ease: "bounce", scrollTrigger: { trigger: ".value-proposition", start: "top 80%" } });
});
</script>

<template>
  <section id="value" class="value-proposition section position-relative">
    <div class="row gx-4 justify-content-center">
      <div class="col-12 col-lg-10 col-xl-8">
        <div class="text-center mb-5">
          <h2 class="value-headline">KI-Transformation, die im Alltag wirkt.</h2>
          <p class="value-subline">
            Ich bin Nils Gerber, KI-Berater aus Alsdorf bei Aachen und Head of AI bei INFORM DataLab. 
            Ich helfe Unternehmen und Kommunen in NRW und deutschlandweit, KI pragmatisch und sicher produktiv zu machen.
          </p>
          <!-- Klare Abgrenzung (GEO) -->
          <p class="value-distinction">
            Keine Buzzword-Beratung. Keine reinen Tool-Demos. Keine PowerPoint-Folien. 
            Operative Umsetzung mit messbarer Wirkung.
          </p>
        </div>

        <!-- 3 Nutzenpunkte -->
        <div class="benefits-grid">
          <div class="benefit-item d-flex align-items-start gap-3">
            <div class="benefit-icon">
              <PhosphorIconRocketLaunch :size="32" />
            </div>
            <div>
              <strong>Schnell starten</strong>
              <p>Fokus, Proof, saubere nächste Schritte</p>
            </div>
          </div>
          <div class="benefit-item d-flex align-items-start gap-3">
            <div class="benefit-icon">
              <PhosphorIconWrench :size="32" />
            </div>
            <div>
              <strong>Pragmatisch liefern</strong>
              <p>Weniger Buzzwords, mehr Umsetzung</p>
            </div>
          </div>
          <div class="benefit-item d-flex align-items-start gap-3">
            <div class="benefit-icon">
              <PhosphorIconShieldCheck :size="32" />
            </div>
            <div>
              <strong>Sicher skalieren</strong>
              <p>DSGVO, Zugriff, Governance, Betrieb</p>
            </div>
          </div>
        </div>

        <div class="d-flex gap-4 flex-wrap justify-content-center mt-5">
          <a href="#contact" class="btn value-btn text-capitalize btn-secondary"> Erstgespräch anfragen </a>
          <a href="#services" class="btn value-btn text-capitalize btn-outline-secondary"> Leistungen ansehen </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.value-proposition {
  padding: 100px 0;
  @media (min-width: 992px) {
    padding: 150px 0;
  }

  .value-headline {
    font-size: 32px;
    @media (min-width: 768px) {
      font-size: 48px;
    }
    @media (min-width: 1400px) {
      font-size: 56px;
    }
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 24px;
  }

  .value-subline {
    font-size: 18px;
    @media (min-width: 768px) {
      font-size: 20px;
    }
    line-height: 1.6;
    margin-bottom: 16px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }

  .value-distinction {
    font-size: 15px;
    @media (min-width: 768px) {
      font-size: 16px;
    }
    line-height: 1.5;
    opacity: 0.85;
    font-weight: 500;
    margin-bottom: 32px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .benefits-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 32px;
    }
  }

  .benefit-item {
    background: rgba(var(--white), 0.05);
    border-radius: 12px;
    padding: 24px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    .benefit-icon {
      flex-shrink: 0;
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
      background: rgba(var(--secondary-rgb), 0.1);
    }

    strong {
      display: block;
      font-size: 18px;
      @media (min-width: 768px) {
        font-size: 20px;
      }
      margin-bottom: 8px;
    }

    p {
      font-size: 14px;
      @media (min-width: 768px) {
        font-size: 16px;
      }
      margin: 0;
      opacity: 0.8;
    }
  }
}
</style>




