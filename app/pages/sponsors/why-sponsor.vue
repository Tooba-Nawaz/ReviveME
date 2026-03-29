<script setup>
import "@/assets/css/components/WhySponsor.css";
import AppContainer from "~/components/ui/AppContainer.vue";
import UiButton from "~/components/ui/Button.vue";

const {
  public: { blobBaseUrl },
} = useRuntimeConfig();

useHead({
  title: "Sponsor | Revive ME",
});

const benefitIcon = `${blobBaseUrl}/images/why-sponsor/benefit.png`;
const sponsorBenefits = [
  {
    title: "Direct Access to Decision-Makers",
    desc: "Position your solutions before hospital CEOs, government officials, longevity investors, biotech executives, and wellness leaders with procurement authority.",
    icon: benefitIcon,
  },
  {
    title: "Premium Brand Visibility",
    desc: "Gain prominent placement across event website, conference materials, exhibition signage, marketing communications, and all digital channels for maximum brand exposure.",
    icon: benefitIcon,
  },
  {
    title: "Thought Leadership Opportunities",
    desc: "Secure keynote opportunities, panel participation, clinical roundtables, and innovation workshops to establish your brand authority in front of key industry stakeholders.",
    icon: benefitIcon,
  },
  {
    title: "Exclusive Networking Platforms",
    desc: "Receive exclusive invitations to gala receptions, C-suite dinners, and closed-door strategy sessions with policymakers and global longevity pioneers for high-level relationship building.",
    icon: benefitIcon,
  },
  {
    title: "Accelerated Lead Generation",
    desc: "Leverage enhanced exhibition presence, branded networking zones, and premium positioning to capture qualified leads and advance partnership conversations with healthcare innovators and investors.",
    icon: benefitIcon,
  },
  {
    title: "Regional Vision Alignment",
    desc: "Demonstrate commitment to Abu Dhabi’s ambition to lead in longevity, regenerative medicine, and health tech innovation through strategic sponsorship alignment.",
    icon: benefitIcon,
  },
  {
    title: "Market Leadership Positioning",
    desc: "Distinguish your organization through premium visibility, establishing category leadership and top-of-mind awareness among stakeholders evaluating longevity solutions.",
    icon: benefitIcon,
  },
  {
    title: "Digital Content Amplification",
    desc: "Benefit from extensive pre-event marketing, live summit coverage, post-event content distribution, and sustained digital presence across event channels and industry partnerships.",
    icon: benefitIcon,
  },
  {
    title: "Showcase Innovation Excellence",
    desc: "Align your brand with breakthrough regenerative therapies, world-renowned speakers, and pioneering health research, reinforcing your credibility as a leader in advancing human healthspan.",
    icon: benefitIcon,
  },
];
</script>

<template>
  <main class="sponsorPage">
    <section class="sponsorHero">
      <NuxtImg
        :src="`${blobBaseUrl}/images/why-sponsor/sponsor-hero.webp`"
        alt="Audience at Revive ME"
        class="sponsorHero__image"
      />
    </section>

    <section class="sponsorIntro">
      <AppContainer>
        <div class="sponsorIntro__grid">
          <div class="sponsorIntro__left">
            <h1 class="sponsorIntro__title">
              <span class="sponsorIntro__titleTop">WHY</span>
              <span class="sponsorIntro__titleBottom">SPONSOR</span>
            </h1>
          </div>

          <div class="sponsorIntro__right">
            <p class="sponsorIntro__desc">
              Position your organization at the center of Abu Dhabi’s emergence
              as a global longevity hub. As the emirate continues its ambitious
              investments in regenerative medicine, advanced health
              technologies, and preventive care innovation, sponsors gain
              visibility with the right audiences, access to strategic
              partnership opportunities, and alignment with one of the world’s
              most forward-thinking health transformation movements.
            </p>
          </div>
        </div>
      </AppContainer>
    </section>

    <section class="sponsorBenefits">
      <AppContainer>
        <div class="sponsorBenefits__head">
          <h2 class="sponsorBenefits__title">
            <span class="sponsorBenefits__titleTop">STRATEGIC BENEFITS OF</span>
            <span class="sponsorBenefits__titleBottom">SPONSORSHIP</span>
          </h2>
        </div>

        <div class="sponsorBenefits__grid">
          <article
            v-for="item in sponsorBenefits"
            :key="item.title"
            class="sponsorBenefitCard"
          >
            <div class="sponsorBenefitCard__iconWrap">
              <NuxtImg
                :src="item.icon"
                :alt="item.title"
                class="sponsorBenefitCard__icon"
              />
            </div>

            <h3 class="sponsorBenefitCard__title">{{ item.title }}</h3>
            <p class="sponsorBenefitCard__desc">{{ item.desc }}</p>
          </article>
        </div>

        <div class="sponsorBenefits__actions">
          <UiButton
            variant="primary"
            size="regular"
            shape="pill"
            to="/register"
          >
            REQUEST SPONSORSHIP PROSPECTUS
          </UiButton>

          <UiButton
            variant="border-gradient"
            size="regular"
            shape="pill"
            to="/register"
          >
            SCHEDULE CONSULTATION
          </UiButton>
        </div>
      </AppContainer>
    </section>
  </main>
</template>
