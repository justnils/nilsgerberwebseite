<script lang="ts" setup>
defineProps<{}>()
</script>

<template>
  <section id="projects" class="current-projects section position-relative">
    <h2>Aktuelle Projekte</h2>
    <p>justpool.ai – Der KI-Coach für deinen Pool</p>
  </section>
</template>

<style lang="scss">
.current-projects {
  padding-top: 60px;
  padding-bottom: 40px;
  @media (min-width: 1200px) {
    padding-top: 120px;
  }
  .section-title-overlay-text {
    top: 100px;
  }

  // Karten-Hülle trägt den site-typischen Hover (rotierte Doppel-Outline)
  .showcase-wrap {
    position: relative;
    margin-top: 40px;

    &::before,
    &::after {
      content: "";
      position: absolute;
      inset: 0;
      border: 1px solid rgb(var(--black));
      border-radius: 20px;
      opacity: 0;
      transition-duration: 500ms;
      pointer-events: none;
    }

    &:hover {
      &::before {
        transform: rotate(1.2deg);
        opacity: 1;
      }
      &::after {
        transform: rotate(-1.2deg);
        opacity: 1;
      }
      .showcase-visual img {
        transform: scale(1.04);
      }
    }
  }

  // Das Navy-Fenster in die justpool-Welt
  .showcase-card {
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    background: linear-gradient(135deg, #0f1630 0%, #1b2347 100%);
  }

  .showcase-content {
    padding: 32px 28px;
    @media (min-width: 768px) {
      padding: 40px;
    }
    @media (min-width: 1400px) {
      padding: 56px;
    }

    .brand {
      color: #fff;
      font-size: 22px;
      font-weight: 700;
      letter-spacing: 0.01em;
      @media (min-width: 1200px) {
        font-size: 24px;
      }
    }

    .status-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 14px;
      border: 1px solid rgba(67, 198, 201, 0.45);
      border-radius: 20px;
      background: rgba(67, 198, 201, 0.12);
      color: #a8e6e7;
      font-size: 13px;
      font-weight: 500;

      .dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #43c6c9;
        box-shadow: 0 0 0 0 rgba(67, 198, 201, 0.6);
        animation: pool-pulse 2.4s ease-out infinite;
      }
    }

    .claim {
      color: #fff;
      font-size: 28px;
      font-weight: 700;
      line-height: 1.25;
      margin-top: 24px;
      margin-bottom: 16px;
      @media (min-width: 1200px) {
        font-size: 36px;
        margin-top: 32px;
      }
      @media (min-width: 1400px) {
        font-size: 40px;
      }

      .wave-word {
        position: relative;
        display: inline-block;
        white-space: nowrap;

        .wave {
          position: absolute;
          left: 0;
          bottom: -10px;
          width: 100%;
          height: 12px;
          color: #ef8a72;
        }
      }
    }

    .showcase-description {
      color: rgba(255, 255, 255, 0.85);
      font-size: 16px;
      line-height: 1.7;
      margin-bottom: 24px;
      @media (min-width: 1200px) {
        font-size: 17px;
      }
    }

    .tags {
      margin-bottom: 32px;
      span {
        padding: 6px 14px;
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 20px;
        color: rgba(255, 255, 255, 0.85);
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }
    }

    .cta-primary {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 24px;
      border-radius: 40px;
      background: #43c6c9;
      color: #0f1630;
      font-size: 16px;
      font-weight: 600;
      transition-duration: 300ms;

      svg {
        transition-duration: 300ms;
      }

      &:hover {
        background: #5ad3d5;
        color: #0f1630;
        svg {
          transform: translate(2px, -2px);
        }
      }

      &:focus-visible {
        outline: 2px solid #fff;
        outline-offset: 3px;
      }
    }

    .cta-secondary {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      color: #fff;
      font-size: 15px;
      font-weight: 500;
      text-decoration: underline;
      text-underline-offset: 4px;
      text-decoration-color: rgba(255, 255, 255, 0.4);
      transition-duration: 300ms;

      &:hover {
        color: #43c6c9;
        text-decoration-color: #43c6c9;
      }

      &:focus-visible {
        outline: 2px solid #fff;
        outline-offset: 3px;
      }
    }
  }

  .showcase-visual {
    position: relative;
    overflow: hidden; // gescaltes Bild bleibt in der eigenen Spalte
    aspect-ratio: 16 / 9;
    background: #10172e; // Fallback, damit bei Hover-Transitions nie der Seitenhintergrund durchblitzt
    @media (min-width: 992px) {
      aspect-ratio: auto;
      min-height: 420px;
    }

    img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 600ms ease;
    }

    .visual-overlay {
      position: absolute;
      inset: -1px;
      background: linear-gradient(0deg, #10172e 0%, rgba(16, 23, 46, 0) 45%);
      @media (min-width: 992px) {
        left: -2px;
        background: linear-gradient(90deg, #10172e 0%, #10172e 12%, rgba(16, 23, 46, 0) 65%);
      }
    }
  }

  .next-chapter {
    margin-top: 60px;
  }
}

@keyframes pool-pulse {
  70% {
    box-shadow: 0 0 0 9px rgba(67, 198, 201, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(67, 198, 201, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .current-projects {
    .status-badge .dot {
      animation: none;
    }
    .showcase-visual img,
    .showcase-wrap::before,
    .showcase-wrap::after {
      transition: none;
    }
  }
}
</style>
