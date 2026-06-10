<script lang="ts" setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="site-footer">
    <div class="footer-social">
      <span class="footer-social-label">Finde mich auch unter</span>
      <div class="footer-social-icons">
        <a href="https://de.linkedin.com/in/nils-gerber" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <PhosphorIconLinkedinLogo :size="22" />
        </a>
        <a href="https://www.instagram.com/justnils/" target="_blank" rel="noopener noreferrer" title="Instagram">
          <PhosphorIconInstagramLogo :size="22" />
        </a>
        <a href="https://www.facebook.com/justnils" target="_blank" rel="noopener noreferrer" title="Facebook">
          <PhosphorIconFacebookLogo :size="22" />
        </a>
        <a href="https://x.com/justnils888" target="_blank" rel="noopener noreferrer" title="X (Twitter)">
          <PhosphorIconXLogo :size="22" />
        </a>
      </div>
    </div>
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

  .footer-social {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    margin-bottom: 24px;

    .footer-social-label {
      font-size: 14px;
      opacity: 0.6;
    }

    .footer-social-icons {
      display: flex;
      gap: 14px;

      a {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        border: 1px solid rgb(var(--black));
        color: rgb(var(--black));
        display: flex;
        align-items: center;
        justify-content: center;
        transition-duration: 400ms;

        &:hover {
          background-color: #000;
          color: #fff;
        }
      }
    }
  }

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




