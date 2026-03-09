<script setup>
import AppContainer from "../ui/AppContainer.vue";

const {
  public: { blobBaseUrl },
} = useRuntimeConfig();
const getInvolvedItems = [
  {
    icon: "bx:envelope",
    label: "info@revivemeexpo.com",
    href: "mailto: info@revivemeexpo.com",
  },
  {
    icon: "mynaui:telephone",
    label: "+971 522269761",
    href: "tel:+971522269761",
  },
];

const socialLinks = [
  {
    icon: "ri:linkedin-fill",
    url: "https://www.linkedin.com/company/revivemeexpo",
  },
  {
    icon: "gg:facebook",
    url: "https://www.facebook.com/revivemeexpo",
  },
  {
    icon: "ri:instagram-fill",
    url: "https://www.instagram.com/revivemeexpo/",
  },
  // {
  //   icon: "ri:twitter-x-fill",
  //   url: "",
  // },
  {
    icon: "iconoir:youtube-solid",
    url: "https://www.youtube.com/@revivemeexpo",
  },
];

const quickLinks = [
  { label: "About", path: "/about" },
  { label: "Why Exhibit", path: "/exhibition/why-exhibit" },
  { label: "Why Sponsor", path: "/sponsors/why-sponsor" },
  { label: "Why Attend", path: "/conference/why-attend" },
  { label: "Startup Launchpad", path: "/startup-launchpad" },
  { label: "VIP Experience", path: "/longevity-connect" },
  { label: "Info Hub", path: "/blog" },
];
</script>

<template>
  <section class="footer pt-20 pb-10">
    <div class="orb orb-left"></div>
    <div class="orb orb-right"></div>
    <AppContainer>
      <div class="newsletter-grid">
        <div class="get-involved-container">
          <h5 class="get-involved-title">Get Involved</h5>
          <div
            v-for="(item, index) in getInvolvedItems"
            :key="index"
            class="flex mb-6"
          >
            <div class="icon-wrapper">
              <Icon :name="item.icon" class="text-[var(--orange)] w-6 h-6" />
            </div>
            <a :href="item.href" class="self-center">{{ item.label }}</a>
          </div>
        </div>
      </div>

      <!-- Footer content -->
      <div class="footer-wrapper">
        <div class="footer-grid">
          <div>
            <NuxtImg
              :src="`${blobBaseUrl}/images/logo.png`"
              alt="Revive ME"
              class="w-[90px] lg:w-[140px] mb-6"
              loading="lazy"
            />
            <a
              v-for="(social, index) in socialLinks"
              :key="index"
              :href="social.url"
              target="_blank"
              aria-label="Follow us on social media"
            >
              <Icon :name="social.icon" class="w-6 h-6 me-1" />
            </a>
          </div>

          <div>
            <h1 class="footer-item-title">Get in touch</h1>

            <div class="flex mb-1">
              <Icon name="bx:envelope" class="w-6 h-6" />
              <a href="mailto:info@revivemeexpo.com" class="self-center ms-2"
                >info@revivemeexpo.com</a
              >
            </div>
            <div class="flex mb-1">
              <Icon name="openmoji:flag-united-arab-emirates" class="w-6 h-6" />

              <a href="tel:+971522269761" class="self-center ms-2"
                >+971 522269761</a
              >
            </div>
            <div class="flex mb-1">
              <Icon name="openmoji:flag-united-kingdom" class="w-6 h-6" />

              <a href="tel:+442039292043" class="self-center ms-2">
                +44 2039292043</a
              >
            </div>

            <div class="w-fit mt-6">
              <UiButton
                variant="primary"
                size="regular"
                shape="pill"
                href="/register"
                >Request Call back</UiButton
              >
            </div>
          </div>
          <div>
            <h5 class="footer-item-title">Quick Links</h5>
            <ul class="list-unstyled">
              <li v-for="(link, index) in quickLinks" :key="index" class="mb-1">
                <NuxtLink :to="link.path">{{ link.label }}</NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <h5 class="footer-item-title">Head Office</h5>
            <div>
              Al Saqr Business Tower, <br />
              Sheikh Zayed Road, DIFC,<br />
              Dubai, United Arab Emirates
            </div>
            <h5 class="footer-item-title mt-4">UK Office</h5>
            <div>
              124 City Road, EC1V 2NX<br />
              London, UK
            </div>
          </div>
        </div>
      </div>
      <!-- Footer content -->
    </AppContainer>
  </section>
</template>
