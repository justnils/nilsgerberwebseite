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
    
    <div class="row g-4">
      <!-- Digital Pioneer 2019 -->
      <div class="col-12 col-md-6">
        <div class="hobby-card award-card">
          <div class="card-content">
            <div class="award-badge">
              <PhosphorIconTrophy :size="32" />
            </div>
            <h5>Digital Pioneer 2019</h5>
            <p>Ausgezeichnet vom Digital Hub Aachen für innovative digitale Projekte.</p>
            <div class="award-image-wrapper">
              <img src="/images/NilsGerberDigitalPioneer2019.gif" alt="Digital Pioneer 2019 Auszeichnung" />
            </div>
          </div>
        </div>
      </div>
      
      <!-- Maisfeldlabyrinth -->
      <div class="col-12 col-md-6">
        <div class="hobby-card hobby-maze-card">
          <div class="card-content">
            <div class="hobby-badge">
              <PhosphorIconPlant :size="32" />
            </div>
            <h5>Monster-Maisfeldlabyrinth</h5>
            <p>Seit Jahren betreibe ich ein beliebtes Maisfeldlabyrinth in Alsdorf bei Aachen – ein kreatives Familienprojekt.</p>
            <a href="http://monster-maisfeldlabyrinth-alsdorf.de/" target="_blank" rel="noopener" class="hobby-link">
              Mehr erfahren
              <PhosphorIconArrowSquareOut :size="16" class="ms-1" />
            </a>
            <div class="hobby-image-wrapper mt-3">
              <img src="/images/NIlsGerberMaisfeldAlsdorfBeiAachen.jpg" alt="Nils Gerber am Maisfeldlabyrinth" />
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
  
  .hobby-card {
    padding: 24px;
    border: 1px solid rgba(var(--black), 0.15);
    border-radius: 12px;
    height: 100%;
    background: rgba(var(--primary), 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
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

