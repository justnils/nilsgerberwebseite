<script lang="ts" setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const speakingImages = [
  { src: "/images/NilsGerber Public Speaking.jpg", alt: "Nils Gerber bei einem Vortrag" },
  { src: "/images/NilsGerber_bei_der_BARC.jpg", alt: "Nils Gerber bei der BARC" },
  { src: "/images/NilsGerberEvent.jpg", alt: "Nils Gerber auf einem Event" },
];

onMounted(() => {
  gsap.from(".speaking-image", {
    stagger: 0.15,
    opacity: 0,
    y: 30,
    duration: 0.8,
    scrollTrigger: {
      trigger: ".speaking-events-section",
      start: "top 75%",
    },
  });
});
</script>

<template>
  <div class="speaking-events-section mt-5 pt-4">
    <h4 class="section-subtitle mb-4">
      <PhosphorIconMicrophone :size="24" class="me-2" />
      Regelmäßig als Speaker unterwegs
    </h4>
    
    <div class="row g-3">
      <div v-for="(image, index) in speakingImages" :key="index" class="col-12 col-md-4">
        <div class="speaking-image-wrapper">
          <img :src="image.src" :alt="image.alt" class="speaking-image" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.speaking-events-section {
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
  
  .speaking-image-wrapper {
    overflow: hidden;
    border-radius: 8px;
    border: 1px solid rgba(var(--black), 0.1);
    
    .speaking-image {
      width: 100%;
      height: 220px;
      object-fit: cover;
      transition: transform 0.4s ease;
      
      @media (min-width: 768px) {
        height: 240px;
      }
      
      @media (min-width: 1200px) {
        height: 280px;
      }
      
      &:hover {
        transform: scale(1.05);
      }
    }
  }
}
</style>

