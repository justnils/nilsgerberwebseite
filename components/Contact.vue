<script lang="ts" setup>
import { ref, computed, onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "~/components/SectionTitle.vue";

gsap.registerPlugin(ScrollTrigger);

// Reactive form data and button state
const formData = ref({
  name: "",
  company: "",
  email: "",
  message: "",
});

// Captcha
const captchaAnswer = ref("");
const correctCaptchaAnswer = "5";
const isCaptchaValid = computed(() => captchaAnswer.value.trim() === correctCaptchaAnswer);

const submitBtn = ref("Senden");
const submitError = ref("");

// Success popup
const showSuccessPopup = ref(false);
let popupTimer: ReturnType<typeof setTimeout> | null = null;

const closePopup = () => {
  showSuccessPopup.value = false;
  if (popupTimer) clearTimeout(popupTimer);
};

const openPopup = () => {
  showSuccessPopup.value = true;
  popupTimer = setTimeout(closePopup, 5000);
};

// Handle form submission via Brevo API
const form = ref<HTMLFormElement | null>(null);
const handleSubmit = async () => {
  submitBtn.value = "Wird gesendet...";
  submitError.value = "";
  
  try {
    const response = await $fetch("/api/contact", {
      method: "POST",
      body: {
        name: formData.value.name,
        company: formData.value.company,
        email: formData.value.email,
        message: formData.value.message,
        captcha: captchaAnswer.value,
      },
    });
    
    console.log("SUCCESS!", response);
    formData.value = { name: "", company: "", email: "", message: "" };
    captchaAnswer.value = "";
    submitBtn.value = "Senden";
    openPopup();
  } catch (error: any) {
    console.log("FAILED...", error);
    submitBtn.value = "Fehler!";
    submitError.value =
      error?.data?.message || "Fehler beim Senden. Bitte versuche es erneut oder schreibe direkt an kontakt@nils-gerber.de";
    setTimeout(() => {
      submitBtn.value = "Senden";
    }, 3000);
  }
};

// GSAP animations on mounted
onMounted(() => {
  gsap.fromTo(
    ".section-title-overlay-text",
    { y: "50%" },
    {
      y: "-50%",
      scrollTrigger: {
        trigger: ".contact",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    }
  );

  gsap.from(".submit-btn", {
    scale: 0,
    duration: 3.5,
    ease: "elastic",
    delay: 0.2,
    scrollTrigger: {
      trigger: ".submit-btn",
    },
  });

  gsap.from(".contact-item", {
    scale: 0,
    duration: 0.8,
    ease: "back",
    scrollTrigger: {
      trigger: ".contact-items",
    },
  });

  gsap.from(".contact-input", {
    opacity: 0,
    scale: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: ".contact-input",
    },
  });
});
</script>
<template>
  <span class="section-title-overlay-text">Kontakt</span>
  <SectionTitle subtitle="Lass uns sprechen" title="Wenn du KI willst, die im Alltag funktioniert." />

  <p class="contact-intro mb-5">
    Schreib mir kurz deinen Namen, dein Unternehmen und deine E-Mail-Adresse – dann melde ich mich zeitnah.
  </p>

  <div class="row pb-60 contact-items">
    <div class="row">
      <div class="col-sm-6 col-xl-4 col-xxl-3 mb-3">
        <div class="contact-item">
          <div class="icon-box">
            <PhosphorIconMapPin :size="28" />
          </div>
          <div>
            <span class="contact-label">Standort</span>
            <span class="contact-value">Alsdorf bei Aachen, NRW</span>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-xl-4 col-xxl-3 mb-3">
        <div class="contact-item">
          <div class="icon-box">
            <PhosphorIconEnvelopeOpen :size="28" />
          </div>
          <a href="mailto:kontakt@nils-gerber.de">kontakt@nils-gerber.de</a>
        </div>
      </div>
      <div class="col-sm-12 col-xl-4 col-xxl-6 d-flex align-items-center">
        <div class="social-block">
          <span class="contact-label">Finde mich auch unter</span>
          <div class="d-flex gap-3 social-icons">
            <a href="https://de.linkedin.com/in/nils-gerber" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <PhosphorIconLinkedinLogo :size="24" />
            </a>
            <a href="https://www.instagram.com/justnils/" target="_blank" rel="noopener noreferrer" title="Instagram">
              <PhosphorIconInstagramLogo :size="24" />
            </a>
            <a href="https://www.facebook.com/justnils" target="_blank" rel="noopener noreferrer" title="Facebook">
              <PhosphorIconFacebookLogo :size="24" />
            </a>
            <a href="https://x.com/justnils888" target="_blank" rel="noopener noreferrer" title="X (Twitter)">
              <PhosphorIconXLogo :size="24" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <form ref="form" @submit.prevent="handleSubmit" id="contact-form" class="contact-form">
    <h4>Nachricht senden</h4>
    <div class="row g-4 g-xl-5">
      <div class="col-sm-6 contact-input">
        <label for="name">Name</label>
        <input type="text" id="user_name" name="name" v-model="formData.name" placeholder="Dein Name" required />
      </div>
      <div class="col-sm-6 contact-input">
        <label for="company">Unternehmen</label>
        <input type="text" id="company" name="company" v-model="formData.company" placeholder="Dein Unternehmen" />
      </div>
      <div class="col-12 contact-input">
        <label for="email">E-Mail-Adresse</label>
        <input type="email" id="user_email" name="email" v-model="formData.email" placeholder="Deine E-Mail-Adresse" required />
      </div>
      <div class="col-12 contact-input">
        <label for="message">Nachricht (optional)</label>
        <textarea id="message" name="message" v-model="formData.message" placeholder="Deine Nachricht"></textarea>
      </div>
      
      <!-- Captcha -->
      <div class="col-12 contact-input captcha-section">
        <label for="captcha">Sicherheitsfrage</label>
        <div class="captcha-wrapper">
          <div class="captcha-question">
            <span class="captcha-number">5</span>
            <span class="captcha-operator plus">plus</span>
            <span class="captcha-number">1</span>
            <span class="captcha-text">und dann</span>
            <span class="captcha-operator minus">minus</span>
            <span class="captcha-number">1</span>
            <span class="captcha-text">ergibt?</span>
          </div>
          <input 
            type="text" 
            id="captcha" 
            v-model="captchaAnswer" 
            placeholder="?" 
            required 
            autocomplete="off"
            :class="{ 'captcha-valid': isCaptchaValid && captchaAnswer.length > 0, 'captcha-invalid': !isCaptchaValid && captchaAnswer.length > 0 }"
          />
        </div>
        <small v-if="!isCaptchaValid && captchaAnswer.length > 0" class="captcha-hint">
          Bitte löse die Rechenaufgabe korrekt.
        </small>
        <small v-if="isCaptchaValid" class="captcha-success">
          ✓ Richtig!
        </small>
      </div>
      
      <div class="col-12">
        <button type="submit" class="submit-btn position-relative" :disabled="!isCaptchaValid" :class="{ 'btn-disabled': !isCaptchaValid }">
          <div class="waves-top-md">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          {{ submitBtn }}
          <div class="waves-bottom-md">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <p v-if="submitError" class="error-message mt-3">{{ submitError }}</p>
      </div>
    </div>
  </form>

  <div class="col mt-5 pt-5 next-chapter">
    <span class="page">Ende</span>
  </div>

  <Teleport to="body">
    <Transition name="toast">
      <div v-if="showSuccessPopup" class="success-toast" role="status" @click="closePopup">
        <div class="toast-icon">
          <PhosphorIconCheckCircle :size="32" weight="fill" />
        </div>
        <div class="toast-content">
          <strong>Danke!</strong>
          <span>Wir haben deine Nachricht erhalten und melden uns zeitnah.</span>
        </div>
        <button class="toast-close" aria-label="Schließen" @click.stop="closePopup">
          <PhosphorIconX :size="18" />
        </button>
        <div class="toast-progress"></div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss">
// contact section
.contact {
  padding-top: 60px;
  @media (min-width: 1200px) {
    padding-top: 120px;
  }
  padding-bottom: 40px;
  .contact-intro {
    font-size: 18px;
    @media (min-width: 768px) {
      font-size: 20px;
    }
    line-height: 1.7;
    max-width: 600px;
  }
  .contact-item {
    display: flex;
    align-items: center;
    gap: 16px;
    @media (min-width: 992px) {
      gap: 24px;
    }
    .icon-box {
      height: 60px;
      width: 60px;
      @media (min-width: 992px) {
        width: 80px;
        height: 80px;
        svg {
          font-size: 2.2rem;
        }
      }
      border-radius: 50%;
      border: 1px solid rgb(var(--black));
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      svg {
        font-size: 1.6rem;
      }
    }
    .contact-label {
      display: block;
      font-size: 14px;
      opacity: 0.7;
      margin-bottom: 2px;
    }
    .contact-value {
      display: block;
      font-size: 16px;
      @media (min-width: 992px) {
        font-size: 18px;
      }
      font-weight: 500;
    }
    p {
      @media (min-width: 992px) {
        font-size: 20px;
      }
      font-weight: 500;
    }
  }
  .social-block {
    .contact-label {
      display: block;
      font-size: 14px;
      opacity: 0.7;
      margin-bottom: 12px;
    }
  }
  .social-icons {
    a {
      width: 42px;
      height: 42px;
      @media (min-width: 992px) {
        width: 60px;
        height: 60px;
        svg {
          font-size: 32px;
        }
      }
      border-radius: 50%;
      border: 1px solid rgb(var(--black));
      display: flex;
      align-items: center;
      justify-content: center;
      transition-duration: 400ms;
      &:hover {
        background-color: #000;
        color: #fff;
      }
      svg {
        font-size: 24px;
      }
    }
  }
}
.contact-form {
  max-width: 856px;
  
  .error-message {
    color: #c53030;
    font-size: 14px;
    background: rgba(197, 48, 48, 0.1);
    padding: 12px 16px;
    border-radius: 8px;
    max-width: 400px;
  }
  h4 {
    font-weight: 600;
    font-size: 28px;
    margin-bottom: 50px;
    @media (min-width: 992px) {
      font-weight: 700;
      font-size: 40px;
      margin-bottom: 80px;
    }
  }
  label {
    font-size: 20px;
    font-weight: 500;
    color: rgb(var(--black));
  }
  input,
  textarea {
    margin-top: 20px;
    display: block;
    background-color: transparent;
    border: none;
    padding-bottom: 16px;
    width: 100%;
    border-bottom: 1px solid rgb(var(--black));
    &:focus {
      outline: none;
    }
  }
  textarea {
    height: auto;
    margin-bottom: 40px;
    @media (min-width: 992px) {
      margin-bottom: 60px;
    }
  }
  .captcha-section {
    margin-top: 20px;
    
    .captcha-wrapper {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-top: 16px;
      
      @media (min-width: 576px) {
        flex-direction: row;
        align-items: center;
        gap: 24px;
      }
    }
    
    .captcha-question {
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      gap: 8px;
      font-family: 'Georgia', serif;
      font-size: 20px;
      padding: 16px 20px;
      background: rgba(var(--black), 0.03);
      border: 1px solid rgba(var(--black), 0.15);
      border-radius: 8px;
      
      @media (min-width: 576px) {
        font-size: 24px;
      }
      
      .captcha-number {
        font-size: 28px;
        font-weight: 700;
        font-style: italic;
        
        @media (min-width: 576px) {
          font-size: 32px;
        }
      }
      
      .captcha-operator {
        font-style: italic;
        font-weight: 500;
        
        &.plus {
          color: #dc2626;
        }
        
        &.minus {
          color: #dc2626;
        }
      }
      
      .captcha-text {
        font-weight: 400;
      }
    }
    
    input {
      max-width: 80px;
      text-align: center;
      font-size: 28px;
      font-weight: 700;
      margin-top: 0;
      padding: 8px;
      
      &.captcha-valid {
        border-bottom-color: #22c55e;
        border-bottom-width: 3px;
      }
      
      &.captcha-invalid {
        border-bottom-color: #ef4444;
        border-bottom-width: 3px;
      }
    }
    
    .captcha-hint {
      display: block;
      margin-top: 8px;
      color: #ef4444;
      font-size: 14px;
    }
    
    .captcha-success {
      display: block;
      margin-top: 8px;
      color: #22c55e;
      font-size: 14px;
      font-weight: 500;
    }
  }
  
  .submit-btn {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 1px solid rgb(var(--black));
    display: flex;
    background-color: transparent;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;

    &.btn-disabled {
      opacity: 0.4;
      cursor: not-allowed;

      &:hover {
        background-color: transparent;
        color: inherit;
      }
    }

    &:hover:not(.btn-disabled) {
      background-color: #000;
      color: white;
      svg {
        filter: brightness(0) invert(1);
      }
      .waves-top-md,
      .waves-bottom-md {
        opacity: 0;
      }
    }
  }
}

.success-toast {
  position: fixed;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px 48px 18px 20px;
  background: rgb(var(--white));
  color: rgb(var(--black));
  border: 1px solid rgb(var(--black));
  border-radius: 16px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  max-width: min(440px, calc(100vw - 32px));
  cursor: pointer;
  overflow: hidden;

  .toast-icon {
    color: #22c55e;
    flex-shrink: 0;
    display: flex;
  }

  .toast-content {
    display: flex;
    flex-direction: column;
    gap: 2px;
    strong {
      font-size: 16px;
      font-weight: 600;
    }
    span {
      font-size: 14px;
      opacity: 0.75;
      line-height: 1.5;
    }
  }

  .toast-close {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    padding: 4px;
    color: inherit;
    transition: opacity 0.2s;
    &:hover {
      opacity: 1;
    }
  }

  .toast-progress {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    background: rgb(var(--black));
    animation: toast-countdown 5s linear forwards;
  }
}

@keyframes toast-countdown {
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
}

.toast-enter-active,
.toast-leave-active {
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(24px);
}
</style>
