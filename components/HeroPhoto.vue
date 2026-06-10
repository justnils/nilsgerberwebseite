<script lang="ts" setup>
import { onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  // Bild Animation mit Scale und Rotation
  gsap.from(".hero-photo-cutout", {
    opacity: 0,
    scale: 0.8,
    rotation: -5,
    duration: 1.2,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".hero-photo-section",
      start: "top 85%",
    },
  });
  
  // Floating Animation für das Bild
  gsap.to(".cutout-image", {
    y: -15,
    duration: 2.5,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
  });
  
  // Text Animation
  gsap.from(".hero-photo-text", {
    opacity: 0,
    x: 50,
    duration: 1,
    delay: 0.3,
    scrollTrigger: {
      trigger: ".hero-photo-section",
      start: "top 80%",
    },
  });
  
  // Glow-Pulse Animation
  gsap.to(".cutout-image", {
    filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.25))",
    duration: 2,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
  });
});
</script>

<template>
  <section class="hero-photo-section">
    <div class="row align-items-center">
      <!-- Freigestelltes Foto links -->
      <div class="col-12 col-lg-5 col-xl-4">
        <div class="hero-photo-cutout">
          <img 
            src="/images/Nils_Gerber_Alsdorf_bei_aachen.webp" 
            alt="Nils Gerber, KI-Berater und Head of AI aus Alsdorf bei Aachen" 
            class="cutout-image"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
      
      <!-- Text rechts -->
      <div class="col-12 col-lg-7 col-xl-8">
        <div class="hero-photo-text">
          <h3 class="quote-text">
            „KI ist kein Selbstzweck – sie muss Arbeit spürbar erleichtern."
          </h3>
          <p class="quote-author">— Nils Gerber</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.hero-photo-section {
  padding: 20px 0 40px;
  
  @media (min-width: 768px) {
    padding: 30px 0 50px;
  }
  
  @media (min-width: 992px) {
    padding: 40px 0 60px;
  }

  .hero-photo-cutout {
    text-align: center;
    margin-bottom: 30px;
    
    @media (min-width: 992px) {
      margin-bottom: 0;
      text-align: left;
    }

    .cutout-image {
      max-width: 100%;
      max-height: 690px;
      height: auto;
      filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15));
      transition: transform 0.4s ease, filter 0.4s ease;

      @media (min-width: 768px) {
        max-height: 815px;
      }
      
      @media (min-width: 992px) {
        max-height: 940px;
      }
      
      @media (min-width: 1200px) {
        max-height: 1065px;
      }

      &:hover {
        transform: scale(1.05) translateY(-10px) rotate(1deg);
        filter: drop-shadow(0 40px 60px rgba(0, 0, 0, 0.25));
      }
    }
  }

  .hero-photo-text {
    @media (min-width: 992px) {
      padding-left: 40px;
    }

    .quote-text {
      font-size: 24px;
      font-weight: 600;
      line-height: 1.4;
      margin-bottom: 16px;
      
      @media (min-width: 768px) {
        font-size: 32px;
      }
      
      @media (min-width: 1200px) {
        font-size: 40px;
      }
    }

    .quote-author {
      font-size: 18px;
      font-weight: 500;
      opacity: 0.8;
      
      @media (min-width: 768px) {
        font-size: 20px;
      }
    }
  }
}
</style>

