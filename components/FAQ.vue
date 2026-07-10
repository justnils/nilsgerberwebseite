<script lang="ts" setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { faqs } from "~/data/faqs";

const openIndex = ref<number | null>(null);

const toggleFaq = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index;
};

onMounted(() => {
  setTimeout(() => {
    gsap.from(".faq-item", {
      stagger: 0.15,
      opacity: 0,
      y: 20,
      duration: 0.6,
      scrollTrigger: {
        trigger: ".faq-section",
        start: "top 70%",
      },
    });
  }, 100);
});
</script>

<template>
  <section id="faq" class="faq-section section position-relative">
    <SectionOverlayText text="FAQ" />
    <SectionTitle subtitle="Häufige Fragen" title="Fragen, die fast immer kommen" />

    <div class="faq-list">
      <div 
        v-for="(faq, index) in faqs" 
        :key="index" 
        class="faq-item"
        :class="{ 'is-open': openIndex === index }"
      >
        <button class="faq-question" @click="toggleFaq(index)">
          <span>{{ faq.question }}</span>
          <PhosphorIconCaretDown 
            :size="24" 
            class="faq-icon" 
            :class="{ 'rotated': openIndex === index }"
          />
        </button>
        <div class="faq-answer" v-show="openIndex === index">
          <p>{{ faq.answer }}</p>
        </div>
      </div>
    </div>

    <!-- Next Chapter -->
    <div class="col-12">
      <a href="#contact" class="d-flex gap-4 align-items-center next-chapter">
        <span class="page">10/10</span>
        <span class="next">Kontakt</span>
        <PhosphorIconArrowElbowRightDown />
      </a>
    </div>
  </section>
</template>

<style lang="scss">
.faq-section {
  padding-top: 60px;
  padding-bottom: 40px;
  @media (min-width: 1200px) {
    padding-top: 120px;
  }

  .faq-list {
    max-width: 800px;
    margin-bottom: 60px;
  }

  .faq-item {
    border: 1px solid rgb(var(--black));
    margin-bottom: -1px;

    &.is-open {
      .faq-question {
        background: rgba(var(--black), 0.05);
      }
    }

    .faq-question {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 24px;
      background: transparent;
      border: none;
      text-align: left;
      font-size: 17px;
      @media (min-width: 768px) {
        font-size: 19px;
      }
      font-weight: 500;
      cursor: pointer;
      transition: background 0.2s ease;

      &:hover {
        background: rgba(var(--black), 0.03);
      }

      .faq-icon {
        flex-shrink: 0;
        transition: transform 0.3s ease;

        &.rotated {
          transform: rotate(180deg);
        }
      }
    }

    .faq-answer {
      padding: 0 24px 20px;

      p {
        font-size: 16px;
        @media (min-width: 768px) {
          font-size: 17px;
        }
        line-height: 1.7;
        margin-bottom: 0;
        color: rgba(var(--black), 0.85);
      }
    }
  }

  .next-chapter {
    margin-top: 40px;
  }
}
</style>







