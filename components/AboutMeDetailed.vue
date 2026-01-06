<script lang="ts" setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  setTimeout(() => {
    gsap.from(".about-content", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".about-detailed-section",
        start: "top 70%",
      },
    });
  }, 100);
});
</script>

<template>
  <section id="about_me" class="about-detailed-section section position-relative">
    <ClientOnly>
      <SectionOverlayText text="Über mich" />
      <SectionTitle subtitle="Wer ich bin" title="Ich bin Nils Gerber. Head of AI, Berater, Gründer." />
    </ClientOnly>

    <div class="row align-items-center">
      <!-- Profile Image -->
      <div class="col-lg-4 mb-4 mb-lg-0">
        <div class="profile-image-wrapper">
          <img src="/images/Nils_Gerber_KI_Experte.gif" alt="Nils Gerber - KI Experte" class="profile-image profile-cutout" />
        </div>
      </div>

      <div class="col-lg-8 about-content">
        <p class="about-text mb-4">
          Ich arbeite an der Schnittstelle zwischen Entscheider-Realität, IT-Umsetzung und Fachbereichs-Nutzen. 
          Genau deshalb kann ich KI so übersetzen, dass daraus konkrete Projekte werden. 
          Mein Ziel ist nicht "KI machen", sondern KI so einsetzen, dass sie Arbeit spürbar erleichtert.
        </p>

        <div class="about-profile">
          <h4 class="mb-3">Kurzprofil:</h4>
          <p class="profile-text">
            <strong>Standort:</strong> Alsdorf bei Aachen, Nordrhein-Westfalen. 
            KI-Berater fuer die Region Aachen, Koeln, Duesseldorf und deutschlandweit.
          </p>
          <p class="profile-text mt-2">
            Assistent der Geschaeftsfuehrung bei INDU-ELECTRIC Gerber GmbH, spaeter Beratung im Datenumfeld, 
            danach Gruender bei crop.zone GmbH. Heute Head of AI bei INFORM DataLab. 
            Ich bringe Tempo, Struktur und Umsetzungsfokus zusammen.
          </p>
        </div>

        <!-- Fachliche Schwerpunkte (GEO) -->
        <div class="about-expertise mt-4">
          <h4 class="mb-3">Fachliche Schwerpunkte:</h4>
          <div class="d-flex flex-wrap gap-2">
            <span class="expertise-tag">Large Language Models (LLMs)</span>
            <span class="expertise-tag">Retrieval Augmented Generation (RAG)</span>
            <span class="expertise-tag">KI-Agenten</span>
            <span class="expertise-tag">Automatisierung wissensbasierter Prozesse</span>
          </div>
        </div>

        <div class="about-keywords mt-4 d-flex flex-wrap gap-2">
          <span class="keyword-tag">Head of AI</span>
          <span class="keyword-tag">INFORM DataLab</span>
          <span class="keyword-tag">Startup-Gruender</span>
          <span class="keyword-tag">KI-Transformation</span>
          <span class="keyword-tag">KI Berater Aachen</span>
          <span class="keyword-tag">KI Beratung NRW</span>
        </div>
      </div>
    </div>

    <!-- Speaking Events -->
    <SpeakingEvents />
    
    <!-- Hobbies & Awards -->
    <HobbiesAwards />

    <!-- Next Chapter -->
    <div class="col-12">
      <a href="#faq" class="d-flex gap-4 align-items-center next-chapter">
        <span class="page">08/09</span>
        <span class="next">Weiter</span>
        <PhosphorIconArrowElbowRightDown />
      </a>
    </div>
  </section>
</template>

<style lang="scss">
.about-detailed-section {
  padding-top: 60px;
  padding-bottom: 40px;
  @media (min-width: 1200px) {
    padding-top: 120px;
  }

  .profile-image-wrapper {
    position: relative;
    max-width: 400px;
    margin: 0 auto;
    
    .profile-image {
      width: 100%;
      height: auto;
      transition: transform 0.3s ease, filter 0.3s ease;
      
      &:hover {
        transform: scale(1.02) translateY(-4px);
      }
      
      // Freigestelltes Bild - kein Rahmen, mit Schlagschatten
      &.profile-cutout {
        border: none;
        border-radius: 0;
        box-shadow: none;
        filter: drop-shadow(0 15px 30px rgba(0, 0, 0, 0.15));
        
        &:hover {
          filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.2));
        }
      }
    }
  }

  .about-text {
    font-size: 18px;
    @media (min-width: 768px) {
      font-size: 20px;
    }
    line-height: 1.7;
  }

  .about-profile {
    padding: 24px;
    border-left: 3px solid rgb(var(--black));
    background: rgba(var(--black), 0.03);

    h4 {
      font-size: 18px;
      font-weight: 600;
    }

    .profile-text {
      font-size: 16px;
      @media (min-width: 768px) {
        font-size: 17px;
      }
      line-height: 1.7;
      margin-bottom: 0;
    }
  }

  .about-expertise {
    h4 {
      font-size: 16px;
      font-weight: 600;
    }
    
    .expertise-tag {
      display: inline-block;
      padding: 8px 16px;
      font-size: 13px;
      font-weight: 500;
      background: rgba(var(--black), 0.08);
      border-radius: 6px;
    }
  }

  .about-keywords {
    .keyword-tag {
      display: inline-block;
      padding: 6px 14px;
      font-size: 14px;
      font-weight: 500;
      border: 1px solid rgb(var(--black));
      border-radius: 20px;
    }
  }

  .next-chapter {
    margin-top: 60px;
  }
}
</style>



