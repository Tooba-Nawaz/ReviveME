<script setup>
import AppContainer from "~/components/ui/AppContainer.vue";

const {
  public: { blobBaseUrl },
} = useRuntimeConfig();

const whyJoin = [
  {
    title: "Present Your Vision to Investors",
    description:
      "Take the stage in a dedicated pitch session where selected companies share their story with a panel of investors and industry partners, followed by meaningful Q&A and follow-up discussions.",
  },
  {
    title: "Meet the Right People One-on-One",
    description:
      "Enjoy pre-scheduled meetings with investors, potential clients, and strategic partners who match your technology focus, growth stage, and funding needs.",
  },
  {
    title: "Get Valuable Guidance",
    description:
      "Receive honest feedback from experienced industry leaders, investors, and advisors about your business approach, approval pathway, and growth strategy.",
  },
  {
    title: "Find the Support You Need",
    description:
      "Meet with research partners, manufacturing specialists, legal advisors, market entry experts, and regulatory consultants who can help you move from idea to reality and from small-scale to market-ready.",
  },
  {
    title: "Explore Regional Growth Opportunities",
    description:
      "Discover Abu Dhabi and the broader Gulf region as launch or expansion markets, with introductions to government organizations, healthcare systems, and programs designed to support health tech growth.",
  },
  {
    title: "Build Your Company's Brand Authority",
    description:
      "Strengthen your brand through inclusion in summit materials, visible presence at the event, and opportunities to participate in panel discussions, group conversations, or innovation showcases.",
  },
];

const startupAudience = [
  "Early-stage longevity and health tech companies",
  "Digital health and technology-driven care solutions with strong scientific foundations",
  "Diagnostic, genomics and personalized medicine companies",
  "Companies providing tools, products, and technologies that support research and development",
  "University-originated companies and research-based ventures moving toward market",
];
</script>
<template>
  <section
    class="startup-bg"
    :style="{
      backgroundImage: `url(${blobBaseUrl}/images/startup-bg.webp)`,
    }"
  >
    <AppContainer>
      <div id="launchpad-intro" class="launchpad-grid">
        <div class="launchpadIntro-wrapper">
          <div class="startup-title">Startup</div>
          <div class="launchpad-title font-ethnocentric">Launchpad</div>

          <p class="startup-desc">
            The Startup Launchpad at Revive ME is a dedicated platform for
            emerging and growing longevity and health tech companies to present
            their innovations, meet with investors, and accelerate meaningful
            partnerships. Created for founders developing breakthrough
            treatments, diagnostic tools, wellness platforms, and health
            technologies, this program puts your company in front of the right
            people during two high-impact days in Abu Dhabi.
          </p>
        </div>

        <NuxtImg
          :src="`${blobBaseUrl}/images/startup-rocket.webp`"
          class="h-auto object-contain"
        />
      </div>

      <!--Why Join Startup-->
      <div id="whyJoin-startup" class="py-10">
        <h1 class="whyJoin__titleTop">Why Join the</h1>
        <h1 class="whyJoin__titleBottom">Startup Launchpad</h1>

        <section class="py-12">
          <div class="whyJoin-grid">
            <div class="md:row-span-2">
              <div class="whyJoin-wrapper min-h-[540px]">
                <img
                  :src="`${blobBaseUrl}/images/why-join-startup/1.webp`"
                  alt=""
                  class="whyJoin-image"
                />

                <div class="whyJoin-contentWrapper">
                  <NuxtImg
                    :src="`${blobBaseUrl}/images/why-join-startup/icons/1.png`"
                    class="whyJoin-icon"
                    loading="lazy"
                  />

                  <h3 class="whyJoin-title">Connect with Decision-Makers</h3>
                  <p class="whyJoin-desc">
                    Present your company to healthcare executives, investment
                    professionals, government-backed funds, hospital leaders,
                    and innovation organizations actively looking for new
                    technologies and collaboration opportunities.
                  </p>
                </div>
              </div>
            </div>

            <div class="md:col-span-2">
              <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div
                  v-for="(item, index) in whyJoin"
                  :key="index"
                  class="whyJoin-wrapper min-h-[280px]"
                >
                  <img
                    :src="`${blobBaseUrl}/images/why-join-startup/${index + 2}.webp`"
                    alt=""
                    class="whyJoin-image"
                  />

                  <div class="whyJoin-contentWrapper">
                    <NuxtImg
                      :src="`${blobBaseUrl}/images/why-join-startup/icons/${index + 2}.png`"
                      class="whyJoin-icon"
                      loading="lazy"
                    />

                    <h3 class="whyJoin-title">
                      {{ item.title }}
                    </h3>
                    <p class="whyJoin-desc">
                      {{ item.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </AppContainer>
  </section>

  <!--Startup Audience-->
  <AppContainer class="py-10 md:py-20">
    <div id="startup-audience" class="startupAudience-grid">
      <div>
        <h1 class="startupAudience__titleTop">WHO IS THE</h1>
        <h1 class="startupAudience__titleBottom">Startup Launchpad For?</h1>
      </div>

      <div
        v-for="(item, index) in startupAudience"
        :key="index"
        class="startupAudience-card"
      >
        <NuxtImg
          :src="`${blobBaseUrl}/images/why-join-startup/startupAudience-icon.png`"
          class="startupAudience-icon"
        />
        <p class="text-sm">
          {{ item }}
        </p>
      </div>
    </div>
    <p class="startupAudience-desc">
      Companies participating in the Launchpad will gain qualified leads,
      genuine investor interest, potential pilot program discussions,
      partnership opportunities, and clearer direction for their next steps. The
      Startup Launchpad is designed to turn attention into action and
      conversations into real progress.
    </p>

    <div class="button-wrapper">
      <UiButton
        variant="primary"
        size="regular"
        shape="pill"
        to="/register"
        class="flex-1"
      >
        apply now
      </UiButton>

      <UiButton
        variant="border-gradient"
        size="regular"
        shape="pill"
        to="/register"
        class="flex-1"
      >
        REQUEST STARTUP PACKAGES
      </UiButton>
    </div>
  </AppContainer>
</template>
