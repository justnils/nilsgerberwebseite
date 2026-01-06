<script setup lang="ts"></script>

<template>
  <section id="trust" class="about section">
    <ClientOnly>
      <!-- Section Overlay -->
      <SectionOverlayText text="Vertrauen" />
      <!-- Section Title -->
      <SectionTitle subtitle="Warum ich?" title="Vision ist gut. Lieferung ist besser." />
    </ClientOnly>
    <!-- About Content -->
    <div class="row mb-4 mb-lg-5 align-items-center">
      <!-- About Description -->
      <div class="col-lg-7 col-xl-8 about-desc">
        <p class="desc">Ich gelte als Visionär, aber mein Maßstab ist Wirkung. Ich komme aus Rollen, in denen man Ergebnisse liefern muss: als Assistent der Geschäftsführung, als Berater im Datenumfeld und als Gründer eines Startups. Heute baue ich als Head of AI KI-Initiativen, die Teams wirklich nutzen – nicht nur testen.</p>
        
        <div class="trust-bullets mt-4">
          <div class="trust-bullet d-flex align-items-start gap-3 mb-3">
            <PhosphorIconBriefcase :size="22" />
            <span>Head of AI bei INFORM DataLab</span>
          </div>
          <div class="trust-bullet d-flex align-items-start gap-3 mb-3">
            <PhosphorIconRocket :size="22" />
            <span>Gründer und fünf Jahre Startup-Erfahrung (crop.zone GmbH)</span>
          </div>
          <div class="trust-bullet d-flex align-items-start gap-3 mb-3">
            <PhosphorIconDatabase :size="22" />
            <span>Beratung im Big-Data-Umfeld (Praxis in Organisationen)</span>
          </div>
          <div class="trust-bullet d-flex align-items-start gap-3">
            <PhosphorIconUsers :size="22" />
            <span>Früh gelernt, wie Entscheider ticken: Assistent der Geschäftsführung (INDU-ELECTRIC Gerber GmbH)</span>
          </div>
        </div>
      </div>

      <!-- Experience Cards -->
      <div class="col-lg-5 col-xl-4">
        <div class="experience-cards-wrapper">
          <!-- Main Card: 25 Jahre IT Erfahrung -->
          <div class="experience-card experience-card-main">
            <div class="card-inner"></div>
            <div>
              <div class="numbers">
                <span class="number-outline-one">25</span>
                <span class="number-outline-two">25</span>
                <span class="number-main">25</span>
              </div>
              <p>Jahre IT-Erfahrung</p>
            </div>
          </div>
          <!-- Secondary Card: 3+ Jahre KI-Erfahrung -->
          <div class="experience-card experience-card-secondary">
            <div class="card-inner"></div>
            <div>
              <div class="numbers">
                <span class="number-outline-one">3+</span>
                <span class="number-outline-two">3+</span>
                <span class="number-main">3+</span>
              </div>
              <p>Jahre KI-Erfahrung</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Next Chapter Link -->
    <div class="col-12">
      <a href="#audience" class="d-flex gap-4 align-items-center next-chapter">
        <span class="page">02/09</span>
        <span class="next">Weiter</span>
        <span class="icon">
          <PhosphorIconArrowElbowRightDown />
        </span>
      </a>
    </div>
  </section>
</template>

<style lang="scss">
.about {
  .section-title-overlay-text {
    top: 80px;
  }
  position: relative;
  padding-top: 60px;
  @media (min-width: 1200px) {
    padding-top: 120px;
  }
  padding-bottom: 40px;
  z-index: 3;
  .about-desc {
    h2 {
      font-size: 32px;
      @media (min-width: 768px) {
        font-size: 40px;
      }
      margin-bottom: 28px;
    }
    p.desc {
      font-size: 18px;
      @media (min-width: 1200px) {
        font-size: 20px;
      }
      line-height: 1.7;
      margin-bottom: 20px;
    }
    .trust-bullets {
      .trust-bullet {
        font-size: 16px;
        @media (min-width: 768px) {
          font-size: 18px;
        }
        svg {
          flex-shrink: 0;
          margin-top: 3px;
        }
      }
    }
  }
  .about-contact {
    p {
      font-size: 18px;
      font-weight: 500;
    }
    a,
    span {
      font-size: 20px;
      font-weight: 500;
    }
  }
  .experience-cards-wrapper {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .experience-card {
    border: 1px solid rgb(var(--black));
    width: 100%;
    padding: 40px;
    text-align: center;
    transition-duration: 500ms;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(var(--primary));
    position: relative;
    z-index: 3;
    &::before {
      content: "";
      position: absolute;
      transition-duration: 500ms;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 1px solid rgb(var(--black));
      transform: rotate(2.5deg);
      z-index: -1;
    }
    &::after {
      content: "";
      position: absolute;
      transition-duration: 500ms;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 1px solid rgb(var(--black));
      transform: rotate(-2.5deg);
      z-index: -1;
    }
    .card-inner {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgb(var(--primary));
      z-index: 0;
    }
    &:hover {
      &::before,
      &::after {
        transform: rotate(0);
        opacity: 0;
      }
      .numbers .number-outline-one,
      .numbers .number-outline-two {
        transform: rotate(0);
        opacity: 0;
      }
    }
    p {
      font-size: 20px;
      font-weight: 500;
      position: relative;
      z-index: 1;
    }
    .numbers {
      z-index: 1;
      position: relative;
      span {
        font-size: 200px;
        font-weight: 700;
        line-height: 120%;
      }
      .number-outline-one,
      .number-outline-two {
        position: absolute;
        top: 0;
        -webkit-text-stroke: 1px #000;
        -webkit-text-fill-color: transparent;
        display: flex;
        justify-content: center;
        transition-duration: 500ms;
      }
      .number-outline-one {
        transform: rotate(6deg);
      }
      .number-outline-two {
        transform: rotate(-6deg);
      }
    }

    // Secondary smaller card
    &.experience-card-secondary {
      padding: 24px;
      .numbers span {
        font-size: 100px;
      }
      p {
        font-size: 16px;
      }
      &::before {
        transform: rotate(1.5deg);
      }
      &::after {
        transform: rotate(-1.5deg);
      }
      .number-outline-one {
        transform: rotate(4deg);
      }
      .number-outline-two {
        transform: rotate(-4deg);
      }
    }
  }
  .next-chapter {
    padding-top: 100px;
  }
}
</style>
