<template>
  <section id="projects" class="current-projects section position-relative">
    <SectionOverlayText text="projekte" />
    <SectionTitle subtitle="Woran ich gerade baue" title="Aktuelle Projekte" />

    <!-- Geschäftliche Projekte -->
    <div class="project-group project-group--business">
      <h4 class="group-title">
        <PhosphorIconBuildings :size="24" class="me-2" />
        Geschäftliche Projekte
      </h4>
      <p class="group-intro">
        Als Head of AI bei INFORM DataLab bringe ich KI dorthin, wo sie Arbeit abnimmt – auch in die öffentliche Verwaltung.
      </p>

      <article class="business-card">
        <div class="row g-0">
          <!-- Inhalt -->
          <div class="col-lg-7 business-content">
            <div class="brand-row d-flex flex-wrap align-items-center gap-3">
              <span class="brand">Stadt Alsdorf × INFORM DataLab</span>
              <span class="status-badge status-badge--light">
                <span class="dot" aria-hidden="true"></span>
                Pilotprojekt des Bundes · läuft
              </span>
            </div>

            <h3 class="claim claim--dark">
              KI findet die passenden
              <span class="wave-word">
                Fördermittel.
                <svg class="wave" viewBox="0 0 120 12" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M0 6 Q 15 0, 30 6 T 60 6 T 90 6 T 120 6" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
                </svg>
              </span>
            </h3>

            <p class="business-description">
              Förderprogramme gibt es viele – die richtigen für ein konkretes Vorhaben zu finden, kostet Kommunen
              bislang Wochen. Alsdorf ist als eine von nur zwei Kommunen bundesweit in ein Pilotprojekt des Bundes
              aufgenommen worden. Gemeinsam mit dem Landkreis Lüchow-Dannenberg und INFORM DataLab testet die Stadt
              ein KI-System, das Förderprogramme automatisch mit den geplanten Projekten der Verwaltung abgleicht.
            </p>
            <p class="business-description">
              Mein Part: die KI-Seite des Projekts. Dass Verwaltung und Technik dabei an einem Tisch sitzen, ist für
              mich der eigentliche Hebel – und dass es ausgerechnet meine Heimatstadt ist, macht es persönlich.
            </p>

            <div class="tags tags--dark d-flex flex-wrap gap-2">
              <span>Öffentliche Verwaltung</span>
              <span>Fördermittel</span>
              <span>KI-Matching</span>
              <span>Pilotprojekt</span>
            </div>

            <div class="cta-row d-flex flex-wrap align-items-center gap-3 gap-xl-4">
              <a
                href="https://www.antenneac.de/artikel/pilotprojekt-alsdorf-testet-ki-fuer-die-foerdermittelsuche-2771126"
                target="_blank"
                rel="noopener"
                class="cta-primary cta-primary--dark"
              >
                Bericht bei Antenne AC lesen
                <PhosphorIconArrowUpRight :size="20" />
              </a>
            </div>
          </div>

          <!-- Fakten -->
          <div class="col-lg-5 business-facts">
            <ul class="facts-list">
              <li>
                <PhosphorIconMagnifyingGlass :size="22" aria-hidden="true" />
                <div>
                  <span class="fact-label">Was die KI macht</span>
                  <span class="fact-value">Gleicht Förderprogramme automatisch mit geplanten Projekten der Stadt ab</span>
                </div>
              </li>
              <li>
                <PhosphorIconHandshake :size="22" aria-hidden="true" />
                <div>
                  <span class="fact-label">Partner</span>
                  <span class="fact-value">Stadt Alsdorf · Landkreis Lüchow-Dannenberg · INFORM DataLab</span>
                </div>
              </li>
              <li>
                <PhosphorIconBank :size="22" aria-hidden="true" />
                <div>
                  <span class="fact-label">Rahmen</span>
                  <span class="fact-value">Pilotprojekt des Bundes – Alsdorf ist eine von zwei Kommunen bundesweit</span>
                </div>
              </li>
              <li>
                <PhosphorIconUserCircle :size="22" aria-hidden="true" />
                <div>
                  <span class="fact-label">Meine Rolle</span>
                  <span class="fact-value">Head of AI, INFORM DataLab</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </article>

      <aside class="nda-note">
        <PhosphorIconLockSimple :size="22" aria-hidden="true" />
        <p>
          <strong>Warum hier nur ein Projekt steht:</strong>
          Die meisten meiner Projekte für Unternehmen laufen unter NDA. Darüber darf ich nichts erzählen,
          auch wenn ich es gern würde – umso schöner, dass das Alsdorf-Projekt öffentlich ist.
          Wenn dich interessiert, was in deinem Umfeld möglich ist:
          <a href="#contact">einfach fragen</a>.
        </p>
      </aside>
    </div>

    <!-- Private Projekte -->
    <div class="project-group project-group--private">
      <h4 class="group-title">
        <PhosphorIconHouseLine :size="24" class="me-2" />
        Private Projekte
      </h4>
      <p class="group-intro">
        Neben dem Job baue ich an eigenen Ideen – aktuell an einem Startup rund um den Pool im Garten.
      </p>

      <div class="showcase-wrap">
        <article class="showcase-card">
          <div class="row g-0 flex-column-reverse flex-lg-row">
            <!-- Inhalt -->
            <div class="col-lg-6 showcase-content">
              <div class="brand-row d-flex flex-wrap align-items-center gap-3">
                <span class="brand">justpool.ai</span>
                <span class="status-badge">
                  <span class="dot" aria-hidden="true"></span>
                  in Gründung · Launch 2027
                </span>
              </div>

              <h3 class="claim">
                Der KI-Coach für deinen
                <span class="wave-word">
                  Pool.
                  <svg class="wave" viewBox="0 0 120 12" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0 6 Q 15 0, 30 6 T 60 6 T 90 6 T 120 6" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
                  </svg>
                </span>
              </h3>

              <p class="showcase-description">
                Teststreifen eintauchen, mit der App scannen – und justpool sagt dir aufs Gramm genau,
                was in deinen Pool muss. Dazu: Preisvergleich über 100 Shops und eine Abo-Box,
                die die Poolsaison auf Autopilot stellt.
              </p>

              <div class="tags d-flex flex-wrap gap-2">
                <span>KI-App</span>
                <span>Teststreifen</span>
                <span>Abo-Box</span>
                <span>Preisvergleich</span>
              </div>

              <div class="cta-row d-flex flex-wrap align-items-center gap-3 gap-xl-4">
                <a href="https://www.just-pool.de" target="_blank" rel="noopener" class="cta-primary">
                  just-pool.de ansehen
                  <PhosphorIconArrowUpRight :size="20" />
                </a>
                <a href="https://www.just-pool.de/investoren" target="_blank" rel="noopener" class="cta-secondary">
                  Founders Circle für Investoren
                  <PhosphorIconArrowRight :size="18" />
                </a>
              </div>
            </div>

            <!-- Visual -->
            <div class="col-lg-6 showcase-visual">
              <img
                src="/images/projects/poster.webp"
                alt="justpool – ein Teststreifen wird in einen Aufstellpool getaucht, daneben ein Smartphone mit der App"
                loading="lazy"
              />
              <div class="visual-overlay" aria-hidden="true"></div>
            </div>
          </div>
        </article>
      </div>
    </div>

    <!-- Next Chapter -->
    <div class="col-12">
      <a href="#faq" class="d-flex gap-4 align-items-center next-chapter">
        <span class="page">09/10</span>
        <span class="next">Weiter</span>
        <PhosphorIconArrowElbowRightDown />
      </a>
    </div>
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

  // Gruppierung: geschäftlich / privat
  .project-group {
    margin-top: 40px;
    @media (min-width: 1200px) {
      margin-top: 56px;
    }

    &--business {
      margin-top: 8px;
      @media (min-width: 1200px) {
        margin-top: 16px;
      }
    }
  }

  .group-title {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
    @media (min-width: 1200px) {
      font-size: 22px;
    }

    svg {
      opacity: 0.7;
      flex-shrink: 0;
    }
  }

  .group-intro {
    max-width: 720px;
    font-size: 15px;
    line-height: 1.6;
    opacity: 0.8;
    margin-bottom: 0;
    @media (min-width: 1200px) {
      font-size: 16px;
    }
  }

  // Helle Karte für das geschäftliche Projekt (Kontrast zur Navy-Showcase-Karte)
  .business-card {
    position: relative;
    overflow: hidden;
    margin-top: 28px;
    border: 1px solid rgba(var(--black), 0.15);
    border-radius: 20px;
    background: rgba(var(--primary), 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
  }

  .business-content {
    padding: 32px 28px;
    @media (min-width: 768px) {
      padding: 40px;
    }
    @media (min-width: 1400px) {
      padding: 56px;
    }

    .brand {
      color: rgb(var(--black));
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 0.01em;
      @media (min-width: 1200px) {
        font-size: 24px;
      }
    }

    .status-badge--light {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 14px;
      border: 1px solid rgba(var(--black), 0.3);
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.5);
      color: rgb(var(--black));
      font-size: 13px;
      font-weight: 500;

      .dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #2a9d8f;
        box-shadow: 0 0 0 0 rgba(42, 157, 143, 0.6);
        animation: pool-pulse-green 2.4s ease-out infinite;
      }
    }

    .claim--dark {
      color: rgb(var(--black));
      font-size: 28px;
      font-weight: 700;
      line-height: 1.25;
      margin-top: 24px;
      margin-bottom: 16px;
      @media (min-width: 1200px) {
        font-size: 34px;
        margin-top: 32px;
      }
      @media (min-width: 1400px) {
        font-size: 38px;
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

    .business-description {
      color: rgba(var(--black), 0.85);
      font-size: 16px;
      line-height: 1.7;
      margin-bottom: 16px;
      @media (min-width: 1200px) {
        font-size: 17px;
      }
    }

    .tags--dark {
      margin-top: 8px;
      margin-bottom: 32px;
      span {
        padding: 6px 14px;
        border: 1px solid rgba(var(--black), 0.3);
        border-radius: 20px;
        color: rgba(var(--black), 0.85);
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }
    }

    .cta-primary--dark {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 24px;
      border-radius: 40px;
      background: rgb(var(--black));
      color: #fff;
      font-size: 16px;
      font-weight: 600;
      transition-duration: 300ms;

      svg {
        transition-duration: 300ms;
      }

      &:hover {
        background: rgba(var(--black), 0.85);
        color: #fff;
        svg {
          transform: translate(2px, -2px);
        }
      }

      &:focus-visible {
        outline: 2px solid rgb(var(--black));
        outline-offset: 3px;
      }
    }
  }

  .business-facts {
    display: flex;
    align-items: center;
    padding: 0 28px 32px;
    @media (min-width: 768px) {
      padding: 0 40px 40px;
    }
    @media (min-width: 992px) {
      padding: 40px 40px 40px 0;
    }
    @media (min-width: 1400px) {
      padding: 56px 56px 56px 0;
    }

    .facts-list {
      list-style: none;
      margin: 0;
      padding: 24px;
      width: 100%;
      border-radius: 16px;
      background: rgba(255, 255, 255, 0.55);
      border: 1px solid rgba(var(--black), 0.1);
      display: flex;
      flex-direction: column;
      gap: 20px;
      @media (min-width: 1400px) {
        padding: 32px;
      }

      li {
        display: flex;
        align-items: flex-start;
        gap: 14px;

        > svg {
          flex-shrink: 0;
          margin-top: 2px;
          opacity: 0.75;
        }

        div {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
      }

      .fact-label {
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        opacity: 0.6;
      }

      .fact-value {
        font-size: 15px;
        line-height: 1.5;
        color: rgb(var(--black));
      }
    }
  }

  // Dezenter NDA-Hinweis unter der geschäftlichen Karte
  .nda-note {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    max-width: 760px;
    margin-top: 20px;
    padding: 14px 18px;
    border-left: 2px solid rgba(var(--black), 0.35);
    background: rgba(255, 255, 255, 0.35);
    border-radius: 0 12px 12px 0;

    > svg {
      flex-shrink: 0;
      margin-top: 2px;
      opacity: 0.7;
    }

    p {
      margin: 0;
      font-size: 14px;
      line-height: 1.65;
      color: rgba(var(--black), 0.85);
      @media (min-width: 1200px) {
        font-size: 15px;
      }
    }

    a {
      color: rgb(var(--black));
      font-weight: 600;
      text-decoration: underline;
      text-underline-offset: 3px;
      text-decoration-color: rgba(var(--black), 0.4);
      transition-duration: 300ms;

      &:hover {
        text-decoration-color: rgb(var(--black));
      }
    }
  }

  // Karten-Hülle trägt den site-typischen Hover (rotierte Doppel-Outline)
  .showcase-wrap {
    position: relative;
    margin-top: 28px;

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

@keyframes pool-pulse-green {
  70% {
    box-shadow: 0 0 0 9px rgba(42, 157, 143, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(42, 157, 143, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .current-projects {
    .status-badge .dot,
    .status-badge--light .dot {
      animation: none;
    }
    .showcase-visual img,
    .showcase-wrap::before,
    .showcase-wrap::after,
    .business-card {
      transition: none;
    }
  }
}
</style>
