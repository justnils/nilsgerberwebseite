<script lang="ts" setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="site-footer">
    <div class="footer-content">
      <span class="copyright">© {{ currentYear }} Nils Gerber</span>
      <span class="separator">|</span>
      <NuxtLink to="/impressum" class="footer-link">Impressum</NuxtLink>
    </div>
  </footer>
</template>

<style lang="scss">
.site-footer {
  padding: 24px 0;
  border-top: 1px solid rgba(var(--black), 0.1);
  margin-top: 60px;
  
  .footer-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    font-size: 14px;
    opacity: 0.6;
    
    .copyright {
      font-weight: 400;
    }
    
    .separator {
      opacity: 0.5;
    }
    
    .footer-link {
      color: rgb(var(--black));
      text-decoration: none;
      transition: opacity 0.2s ease;
      
      &:hover {
        opacity: 0.7;
        text-decoration: underline;
      }
    }
  }
}
</style>



