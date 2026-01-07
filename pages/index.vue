<script setup lang="ts">
const navOpen = ref(false);
const toggleNav = () => {
  navOpen.value = !navOpen.value;
};
const closeNav = () => {
  navOpen.value = false;
};
</script>
<template>
  <Header :nav-open="navOpen" :toggle-nav="toggleNav" />
  <Navigation :nav-open="navOpen" :close-nav="closeNav" />
  
  <!-- Triangle Background -->
  <TriangleBg />

  <main class="container-fluid">
    <div class="row gx-xxl-6">
      <div class="col col-xl-9" data-bs-spy="scroll" data-bs-target="#navigation">
        <!-- Hero -->
        <Hero />
        
        <!-- Hero Photo (lachendes Foto) -->
        <HeroPhoto />
        
        <!-- Value Proposition -->
        <ValueProposition />
        
        <!-- Vertrauensanker -->
        <AboutMe />
        
        <!-- Für wen ich arbeite -->
        <ClientOnly>
          <TargetAudience />
        </ClientOnly>
        
        <!-- Was du mit mir erreichst -->
        <ClientOnly>
          <Outcomes />
        </ClientOnly>
        
        <!-- Leistungen -->
        <Services />
        
        <!-- So arbeite ich -->
        <section id="how_i_work" class="how-i-work section position-relative">
          <ClientOnly>
            <HowIWork />
          </ClientOnly>
        </section>
        
        <!-- Prinzipien -->
        <ClientOnly>
          <Principles />
        </ClientOnly>
        
        <!-- Über mich -->
        <ClientOnly>
          <AboutMeDetailed />
        </ClientOnly>
        
        <!-- FAQ -->
        <ClientOnly>
          <FAQ />
        </ClientOnly>
        
        <!-- Kontakt -->
        <section id="contact" class="contact section position-relative">
          <ClientOnly>
            <Contact />
          </ClientOnly>
        </section>
        
        <!-- Footer -->
        <Footer />
      </div>
    </div>
  </main>
</template>

