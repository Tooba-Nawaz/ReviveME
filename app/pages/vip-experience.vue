<script setup>
import AppContainer from "~/components/ui/AppContainer.vue";
useHead({
  title: "VIP Experience | Revive ME",
  meta: [
    {
      name: "description",
      content:
        "Secure a VIP Pass for an exclusive networking and hospitality experience at Revive ME. Enjoy priority access, immersive hospitality, and elite networking opportunities.",
    },
  ],
});
const {
  public: { blobBaseUrl },
} = useRuntimeConfig();
const vipBenefits = [
  {
    title: "Enhanced Site Visit",
    description:
      "We've expanded access to more of Abu Dhabi's advanced longevity and health tech facilities. Visit cutting-edge research centers, clinical innovation labs, and wellness hubs that are establishing the region as a global leader in healthy aging and preventive medicine.",
  },
  {
    title: "Private Executive Dinner",
    description:
      "Last year was one of our highest-rated experiences. This year, we've made it even better. Join fellow VIP guests, featured speakers, government representatives, and leading investors at an upgraded venue for a private dinner designed to encourage the genuine connections and thoughtful conversations that led to several successful partnerships from our first edition.",
  },
  {
    title: "Waterfront Evening Reception",
    description:
      "Relax at a stunning waterfront venue with views of Abu Dhabi's skyline. Connect with industry leaders, investors, and innovators over excellent food and drinks in a comfortable yet refined atmosphere that encourages real conversation.",
  },
  {
    title: "Expanded Private VIP Majlis",
    description:
      "We've created a larger, more comfortable lounge reserved exclusively for VIP guests. Inspired by traditional Emirati hospitality, this space provides the perfect environment for the private discussions, important conversations, and focused meetings.",
  },
];
const otherBenefits = [
  {
    title: "Best Seats in the House",
    description:
      "Reserved seating at keynote presentations, front-row access to main stage talks, and guaranteed entry to all popular sessions and workshops.",
  },
  {
    title: "Private Events Only for VIPs",
    description:
      "Invitations to closed gatherings, and intimate events with senior executives, prominent investors, and international delegations.",
  },
  {
    title: "Improved 1:1 Introductions",
    description:
      "We've enhanced our system to connect you more precisely with the investors, partners, and decision-makers who align with your goals.",
  },
  {
    title: "Premium Food and Refreshments",
    description:
      "Complimentary high-quality catering throughout, including breakfast service, lunch selections, afternoon treats, and evening receptions.",
  },
  {
    title: "Personal Event Support",
    description:
      "Dedicated assistance including fast-track registration, help planning your schedule, meeting coordination, and on-site support.",
  },
  {
    title: "Visibility and Recognition",
    description:
      "Featured placement in event photography, media coverage, and summit communications to strengthen your professional presence.",
  },
];
</script>

<template>
  <section class="bg-[#190F24]">
    <AppContainer class="py-10 md:py-20">
      <!--Intro-->
      <h1 class="vipEx-title">
        THE VIP<br />
        <span class="font-light">EXPERIENCE</span>
      </h1>
      <p class="vipEx-desc">
        Building on the success of our inaugural edition, the VIP Experience at
        the 2nd edition of Revive ME has been designed based on the feedback
        from the attendees. Senior leaders, investors, and industry pioneers
        will enjoy an even more carefully curated journey that focuses on
        meaningful connections, valuable insights, and access to the people who
        shape the longevity industry. VIP guests receive special privileges
        across event days, with every detail refined to make your time as
        productive as possible. This years' experience features improved
        networking formats, more exclusive venues, and deeper opportunities for
        relationship-building that extend well beyond the event.
      </p>

      <!--VIP Benefits-->
      <div class="vipBenefits-mainTitle">VIP BENEFITS INCLUDE</div>
      <div class="vipBenefits-grid">
        <div
          v-for="(item, index) in vipBenefits"
          :key="index"
          class="relative rounded-2xl overflow-hidden h-[320px]"
        >
          <img
            :src="`${blobBaseUrl}/images/vip-benefits/${index + 1}.webp`"
            alt=""
            class="vipBenefits-image"
          />

          <div class="vipBenefits-contentWrapper">
            <div class="vipBenefits-iconWrapper">
              <Icon
                name="material-symbols:arrow-outward"
                class="vipBenefits-icon"
              />
            </div>

            <h3 class="vipBenefits-title">
              {{ item.title }}
            </h3>
            <p class="vipBenefits-desc">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>

      <!--VIP Other Benefits-->
      <div class="otherBenefits-mainTitle">
        Other Exclusive Benefits Include
      </div>

      <div class="otherBenefits-grid">
        <div
          v-for="(item, index) in otherBenefits"
          :key="index"
          class="otherBenefits-wrapper"
        >
          <img
            :src="`${blobBaseUrl}/images/vip-benefits/other-benefits-icons/${index + 1}.png`"
            alt=""
            class="otherBenefits-icon"
          />

          <h3 class="otherBenefits-title">
            {{ item.title }}
          </h3>
          <p class="otherBenefits-desc">
            {{ item.description }}
          </p>
        </div>
      </div>
      <NuxtLink to="/register">
        <img
          :src="`${blobBaseUrl}/images/vip-benefits/passes-left.webp`"
          alt=""
          class="passes-img"
        />
      </NuxtLink>
      <div class="passes-desc">
        <p>
          Last year's VIP attendees reported an average of 12 meaningful
          connections per person, with 68% securing follow-up meetings that led
          to partnerships or investments. The VIP pass transforms your
          experience from simply attending to strategically advancing your
          goals.
        </p>
        <p class="my-8">
          You'll benefit from better positioning at key sessions, exclusive
          spaces that encourage meaningful conversation, introductions to the
          right people at the right time, and dedicated support that takes care
          of the details so you can focus on what matters. This year, we've
          refined every element based on what worked best in our first edition.
        </p>
        <p>
          With only 100 VIP passes available to maintain the exceptional
          experience that our inaugural attendees praised, we encourage early
          registration to secure your access.
        </p>
      </div>
      <div class="button-wrapper">
        <UiButton variant="golden" size="regular" shape="pill" to="/register">
          BUY VIP DELEGATE PASS
        </UiButton>

        <UiButton
          variant="border-golden"
          size="regular"
          shape="pill"
          to="/register"
        >
          CONTACT VIP SERVICES TEAM
        </UiButton>
      </div>
    </AppContainer>
  </section>
</template>
