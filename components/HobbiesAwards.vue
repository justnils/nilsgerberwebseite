<script lang="ts" setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.from(".hobby-card", {
    stagger: 0.2,
    opacity: 0,
    y: 30,
    duration: 0.8,
    scrollTrigger: {
      trigger: ".hobbies-awards-section",
      start: "top 75%",
    },
  });
});
</script>

<template>
  <div class="hobbies-awards-section mt-5 pt-4">
    <h4 class="section-subtitle mb-4">
      <PhosphorIconStar :size="24" class="me-2" />
      Mehr als nur KI
    </h4>
    
    <div class="cards-grid">
      <!-- CROP.ZONE Gründer -->
      <div>
        <div class="hobby-card founder-card">
          <div class="card-content">
            <div class="hobby-badge">
              <PhosphorIconRocketLaunch :size="32" />
            </div>
            <h5>Startup-Gründer: CROP.ZONE</h5>
            <p>
              Mitgründer und CIO des Aachener AgrarTech-Startups CROP.ZONE – ein RWTH-Spin-off für nachhaltige
              Unkrautbekämpfung ohne Chemie. Das Startup sammelte 11 Millionen US-Dollar Eigenkapital ein, erhielt
              800.000 Euro Förderung vom Bundeslandwirtschaftsministerium und wuchs auf fast 30 Mitarbeitende.
            </p>
            <div class="d-flex flex-column gap-1">
              <a href="https://www.aachen.digital/news/erfolgsstory-startup-made-in-aachen-crop-zone/" target="_blank" rel="noopener" class="hobby-link">
                Erfolgsstory beim digitalHUB Aachen
                <PhosphorIconArrowSquareOut :size="16" class="ms-1" />
              </a>
              <a href="https://www.aachener-zeitung.de/lokales/region-aachen/aachen/wie-die-landwirtschaft-ohne-die-chemiekeule-auskommen-soll/3890169.html" target="_blank" rel="noopener" class="hobby-link">
                Bericht in der Aachener Zeitung
                <PhosphorIconArrowSquareOut :size="16" class="ms-1" />
              </a>
            </div>
            <div class="hobby-image-wrapper mt-3">
              <img src="/images/NilsGerberCropZoneGruender.png" alt="Nils Gerber, Mitgründer des AgrarTech-Startups CROP.ZONE aus Aachen" />
            </div>
          </div>
        </div>
      </div>

      <!-- Digital Pioneer 2019 -->
      <div>
        <div class="hobby-card award-card">
          <div class="card-content">
            <div class="award-badge">
              <PhosphorIconTrophy :size="32" />
            </div>
            <h5>digitalPIONEER 2019</h5>
            <p>
              Der digitalPIONEER ist die Auszeichnung des digitalHUB Aachen für digitale Vorreiter der Region Aachen.
              2019 wurde der Preis zum ersten Mal vergeben: Nach einem Pitch vor einer neunköpfigen Jury wurden sechs
              Unternehmen prämiert, deren digitale Lösungen als Best Practice für die Region gelten – ich gehörte mit
              unserer AgrarTech-Innovation zur ersten Pioniergeneration.
            </p>
            <div class="d-flex flex-column gap-1">
              <a href="https://www.aachen.digital/news/digitalpioneer-2019/" target="_blank" rel="noopener" class="hobby-link">
                Zur Preisverleihung beim digitalHUB Aachen
                <PhosphorIconArrowSquareOut :size="16" class="ms-1" />
              </a>
            </div>
            <div class="award-image-wrapper mt-3">
              <img src="/images/NilsGerberDigitalPioneer2019.gif" alt="Nils Gerber bei der digitalPIONEER 2019 Preisverleihung des digitalHUB Aachen" />
            </div>
          </div>
        </div>
      </div>
      
      <!-- Maisfeldlabyrinth -->
      <div>
        <div class="hobby-card hobby-maze-card">
          <div class="card-content">
            <div class="hobby-badge">
              <PhosphorIconPlant :size="32" />
            </div>
            <h5>Monster-Maisfeldlabyrinth</h5>
            <p>Seit Jahren betreibe ich ein beliebtes Maisfeldlabyrinth in Alsdorf bei Aachen – ein kreatives Familienprojekt.</p>
            <div class="d-flex flex-column gap-1">
              <a href="http://monster-maisfeldlabyrinth-alsdorf.de/" target="_blank" rel="noopener" class="hobby-link">
                Mehr erfahren
                <PhosphorIconArrowSquareOut :size="16" class="ms-1" />
              </a>
              <a href="https://www.aachener-zeitung.de/lokales/region-aachen/alsdorf/maisfeld-labyrinth-in-alsdorf-auf-neuen-wegen/81033014.html" target="_blank" rel="noopener" class="hobby-link">
                Bericht in der Aachener Zeitung
                <PhosphorIconArrowSquareOut :size="16" class="ms-1" />
              </a>
            </div>
            <div class="hobby-image-wrapper mt-3">
              <img src="/images/NIlsGerberMaisfeldAlsdorfBeiAachen.jpg" alt="Nils Gerber am Maisfeldlabyrinth" />
            </div>
          </div>
        </div>
      </div>

      <!-- Speaker BARC Data & AI Summit -->
      <div>
        <div class="hobby-card speaker-card">
          <div class="card-content">
            <div class="hobby-badge">
              <PhosphorIconMicrophoneStage :size="32" />
            </div>
            <h5>Speaker: BARC Data &amp; AI Summit</h5>
            <p>
              Als Speaker stehe ich regelmäßig auf der Bühne – unter anderem auf dem BARC Data &amp; AI Summit, einer
              der wichtigsten Data- und KI-Konferenzen im DACH-Raum. Mein Vortrag „Aus dem Maschinenraum – Wie KI
              wirklich arbeitet, wenn man sie arbeiten lässt" zeigt, wie sich Arbeit, Denken und Organisation
              verändern, wenn Maschinen Sprache verstehen: Statt Technik-Showcase geht es um Haltung, Klarheit und den
              Sprung von Faszination zu echter Umsetzung.
            </p>
            <div class="d-flex flex-column gap-1">
              <a href="https://barc.com/de/events/data-ai-summit/programminhalte/" target="_blank" rel="noopener" class="hobby-link">
                Zum Programm des BARC Data &amp; AI Summit
                <PhosphorIconArrowSquareOut :size="16" class="ms-1" />
              </a>
            </div>
            <div class="hobby-image-wrapper mt-3">
              <img src="/images/NilsGerberSpeakerBarcDataAiSummit.png" alt="Nils Gerber als Speaker auf dem BARC Data und AI Summit mit dem Vortrag Aus dem Maschinenraum" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.hobbies-awards-section {
  border-top: 1px solid rgba(var(--black), 0.1);
  
  .section-subtitle {
    font-size: 18px;
    font-weight: 600;
    display: flex;
    align-items: center;
    
    svg {
      opacity: 0.7;
    }
  }
  
  // CSS-Grid statt Bootstrap-Row: grid-auto-rows 1fr macht ALLE Karten
  // gleich hoch, auch ueber mehrere Zeilen hinweg
  .cards-grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 1fr;
    gap: 24px;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    > div {
      min-width: 0;
    }
  }

  .hobby-card {
    padding: 24px;
    border: 1px solid rgba(var(--black), 0.15);
    border-radius: 12px;
    height: 100%;
    background: rgba(var(--primary), 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;

    .card-content {
      display: flex;
      flex-direction: column;
      width: 100%;

      // Bild immer buendig am unteren Kartenrand, damit alle Karten gleich wirken
      .award-image-wrapper,
      .hobby-image-wrapper {
        margin-top: auto !important;
        padding-top: 12px;
      }
    }
    
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
    
    .award-badge, .hobby-badge {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: rgb(var(--primary));
      border: 2px solid rgb(var(--black));
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 16px;
    }
    
    h5 {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 8px;
    }
    
    p {
      font-size: 15px;
      line-height: 1.6;
      opacity: 0.85;
      margin-bottom: 12px;
    }
    
    .hobby-link {
      display: inline-flex;
      align-items: center;
      font-size: 14px;
      font-weight: 600;
      color: rgb(var(--black));
      text-decoration: underline;
      
      &:hover {
        opacity: 0.7;
      }
    }
    
    .award-image-wrapper, .hobby-image-wrapper {
      overflow: hidden;
      border-radius: 8px;
      margin-top: 12px;
      
      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        transition: transform 0.4s ease;
        
        @media (min-width: 768px) {
          height: 240px;
        }
        
        @media (min-width: 1200px) {
          height: 280px;
        }
        
        &:hover {
          transform: scale(1.03);
        }
      }
    }
    
    .award-image-wrapper img {
      object-fit: contain;
      background: #fff;
    }
  }
}
</style>

