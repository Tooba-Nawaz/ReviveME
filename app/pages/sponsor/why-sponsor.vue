<script setup>
import "@/assets/css/components/Sponsor.css";
import AppContainer from "~/components/ui/AppContainer.vue";
import UiButton from "~/components/ui/Button.vue";

useHead({
  title: "Sponsor | Revive ME",
  meta: [
    {
      name: "description",
      content:
        "Sponsor Revive ME and position your organization at the center of Abu Dhabi’s growing longevity and health technology ecosystem.",
    },
  ],
});

const sponsorBenefits = [
  {
    title: "Direct Access to Decision-Makers",
    desc: "Position your solutions before hospital CEOs, government officials, longevity investors, biotech executives, and wellness leaders with procurement authority.",
    icon: "/why-sponsor/benefit.png",
  },
  {
    title: "Premium Brand Visibility",
    desc: "Gain prominent placement across event website, conference materials, exhibition signage, marketing communications, and all digital channels for maximum brand exposure.",
    icon: "/why-sponsor/benefit.png",
  },
  {
    title: "Thought Leadership Opportunities",
    desc: "Secure keynote opportunities, panel participation, clinical roundtables, and innovation workshops to establish your brand authority in front of key industry stakeholders.",
    icon: "/why-sponsor/benefit.png",
  },
  {
    title: "Exclusive Networking Platforms",
    desc: "Receive exclusive invitations to gala receptions, C-suite dinners, and closed-door strategy sessions with policymakers and global longevity pioneers for high-level relationship building.",
    icon: "/why-sponsor/benefit.png",
  },
  {
    title: "Accelerated Lead Generation",
    desc: "Leverage enhanced exhibition presence, branded networking zones, and premium positioning to capture qualified leads and advance partnership conversations with healthcare innovators and investors.",
    icon: "/why-sponsor/benefit.png",
  },
  {
    title: "Regional Vision Alignment",
    desc: "Demonstrate commitment to Abu Dhabi’s ambition to lead in longevity, regenerative medicine, and health tech innovation through strategic sponsorship alignment.",
    icon: "/why-sponsor/benefit.png",
  },
  {
    title: "Market Leadership Positioning",
    desc: "Distinguish your organization through premium visibility, establishing category leadership and top-of-mind awareness among stakeholders evaluating longevity solutions.",
    icon: "/why-sponsor/benefit.png",
  },
  {
    title: "Digital Content Amplification",
    desc: "Benefit from extensive pre-event marketing, live summit coverage, post-event content distribution, and sustained digital presence across event channels and industry partnerships.",
    icon: "/why-sponsor/benefit.png",
  },
  {
    title: "Showcase Innovation Excellence",
    desc: "Align your brand with breakthrough regenerative therapies, world-renowned speakers, and pioneering health research, reinforcing your credibility as a leader in advancing human healthspan.",
    icon: "/why-sponsor/benefit.png",
  },
];
</script>

<template>
  <main class="sponsorPage">
    <section class="sponsorHero">
      <NuxtImg
        src="/why-sponsor/sponsor-hero.webp"
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
            href="/register"
          >
            REQUEST SPONSORSHIP PROSPECTUS
          </UiButton>

          <UiButton
            variant="border-gradient"
            size="regular"
            shape="pill"
            href="/register"
          >
            SCHEDULE CONSULTATION
          </UiButton>
        </div>
      </AppContainer>
    </section>
  </main>
</template>