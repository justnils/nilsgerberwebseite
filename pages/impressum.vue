<script lang="ts" setup>
useHead({
  title: "Impressum | Nils Gerber",
  meta: [
    {
      name: "description",
      content: "Impressum und rechtliche Angaben zur Website von Nils Gerber, KI-Berater aus Alsdorf bei Aachen.",
    },
    {
      name: "robots",
      content: "noindex, follow",
    },
  ],
});
</script>

<template>
  <div class="impressum-page">
    <Header />
    
    <main class="impressum-content container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-8">
          <h1>Impressum</h1>
          
          <p class="legal-notice">
            Angaben gemäß § 5 Telemediengesetz (TMG) und § 18 Abs. 2 Medienstaatsvertrag (MStV)
          </p>
          
          <section class="impressum-section">
            <h2>Diensteanbieter und inhaltlich verantwortlich:</h2>
            <address>
              Nils Gerber<br />
              Ehrestraße 20a<br />
              52477 Alsdorf<br />
              Deutschland
            </address>
          </section>
          
          <section class="impressum-section">
            <h2>Kontakt:</h2>
            <p>
              E-Mail: <a href="mailto:kontakt@nils-gerber.de">kontakt@nils-gerber.de</a>
            </p>
            <p>
              Telefon: 01704sechs2acht91sechs
            </p>
          </section>
          
          <section class="impressum-section">
            <h2>Berufliche Tätigkeit:</h2>
            <p>
              Angestellt als Head of AI Consultant<br />
              INFORM DataLab GmbH, Aachen
            </p>
            <p class="disclaimer">
              (Diese Website steht in keinem geschäftlichen Zusammenhang mit dem Arbeitgeber.)
            </p>
          </section>
          
          <section class="impressum-section">
            <h2>Zweck der Website:</h2>
            <p>
              Diese Website dient ausschließlich der persönlichen Darstellung und dem fachlichen Austausch.
              Es erfolgt keine geschäftsmäßige oder gewerbliche Tätigkeit über diese Website.
            </p>
          </section>
          
          <section class="impressum-section">
            <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:</h2>
            <address>
              Nils Gerber<br />
              Ehrestraße 20a<br />
              52477 Alsdorf<br />
              Deutschland
            </address>
          </section>
          
          <div class="back-link">
            <NuxtLink to="/" class="btn btn-outline-secondary">
              <PhosphorIconArrowLeft :size="18" class="me-2" />
              Zurück zur Startseite
            </NuxtLink>
          </div>
        </div>
      </div>
    </main>
    
    <Footer />
  </div>
</template>

<style lang="scss">
.impressum-page {
  min-height: 100vh;
  background: rgb(var(--primary));
  
  .impressum-content {
    padding-top: 120px;
    padding-bottom: 60px;
    
    @media (min-width: 992px) {
      padding-top: 160px;
    }
    
    h1 {
      font-size: 36px;
      @media (min-width: 768px) {
        font-size: 48px;
      }
      font-weight: 700;
      margin-bottom: 16px;
    }
    
    .legal-notice {
      font-size: 16px;
      opacity: 0.8;
      margin-bottom: 48px;
      padding-bottom: 24px;
      border-bottom: 1px solid rgba(var(--black), 0.1);
    }
    
    .impressum-section {
      margin-bottom: 32px;
      
      h2 {
        font-size: 18px;
        @media (min-width: 768px) {
          font-size: 20px;
        }
        font-weight: 600;
        margin-bottom: 12px;
      }
      
      p, address {
        font-size: 16px;
        line-height: 1.7;
        font-style: normal;
        margin-bottom: 8px;
      }
      
      a {
        color: rgb(var(--black));
        text-decoration: underline;
        
        &:hover {
          opacity: 0.7;
        }
      }
      
      .disclaimer {
        font-size: 14px;
        opacity: 0.7;
        font-style: italic;
      }
    }
    
    .back-link {
      margin-top: 48px;
      padding-top: 32px;
      border-top: 1px solid rgba(var(--black), 0.1);
    }
  }
}
</style>

