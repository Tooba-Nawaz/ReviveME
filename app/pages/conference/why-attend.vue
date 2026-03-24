<script setup>
useHead({
  title: "Attend The Top Digital Health Conference In UAE | 11 - 12 November",
  meta: [
    {
      name: "description",
      content:
        "Join top longevity experts at the Revive ME summit, featuring insightful keynotes and cutting-edge research in the global wellness industry.",
    },
  ],
});
const {
  public: { blobBaseUrl },
} = useRuntimeConfig();

const benefits = [
  {
    title: "Gain Knowledge from Industry Visionaries",
    description:
      "Participate in presentations and expert panels featuring longevity clinic directors, policymakers, capital deployment strategists, Department of Health administrators, biotechnology scientists, and personalized health specialists discussing healthy aging research, AI-enhanced prevention, genomic healthcare delivery, and Middle Eastern longevity initiatives.",
  },
  {
    title: "Build Valuable Industry Relationships",
    description:
      "Network with private equity professionals, govt. delegates, pharmaceutical decision-makers, healthcare network leaders, clinical trial companies, and public health authorities via organized networking sessions, exhibit floor conversations, and targeted partnership facilitation.",
  },
  {
    title: "Access Capital and Funding Sources",
    description:
      "Meet private equity firms, corporate venture arms, and governmental financing organizations currently allocating resources toward longevity companies, precision health platforms, cellular therapy innovators, and digital wellness solutions.",
  },
  {
    title: "Acquire Essential Industry Knowledge",
    description:
      "Learn about Abu Dhabi's HELM Cluster development, HealthX program rollout, public sector health funding priorities, longevity treatment approval processes, and critical information for entering markets, licensing innovations, and establishing competitive advantage.",
  },
  {
    title: "Identify Business Expansion Prospects",
    description:
      "Uncover benefits for launching longevity practices, life sciences innovation hubs, or personalized health operations, featuring biomedical infrastructure, streamlined approval pathways, favorable tax structures, access to the HELM Cluster ecosystem, and national wellness programs.",
  },
  {
    title: "Discover Practical Clinical Applications",
    description:
      "Join educational sessions addressing sophisticated biomarker assessment, cellular aging interventions, machine learning health enhancement, personalized nutrition frameworks, regenerative cosmetic procedures, and preventive care deployment, actionable expertise for your medical practice or innovation pipeline.",
  },
  {
    title: "Enhance Your Professional Expertise",
    description:
      "Deepen your understanding of anti-aging science, personalized medicine business, AI-transformed healthcare delivery, genomic information strategies, and regional health governance while strengthening your professional connections across the international longevity industry.",
  },
  {
    title: "Build Career-Advancing Connections",
    description:
      "Interact with colleagues, advisors, potential partners, and sector pioneers who can elevate your professional path in longevity healthcare, offer clinical mentorship, and create pathways to collaborative opportunities within the expanding healthspan field.",
  },
  {
    title: "Discover Next-Generation Technologies",
    description:
      "Experience 50+ exhibitors presenting revolutionary longevity biomarkers, artificial intelligence diagnostic platforms, cellular rejuvenation treatments, precision genomic tools, continuous health monitoring devices, age-reversal innovations, metabolic enhancement systems, and transformative anti-aging solutions that will reshape healthcare delivery.",
  },
];
import AppContainer from "~/components/ui/AppContainer.vue";
import Attendees from "../../components/home/Attendees.vue";
</script>
<template>
  <section>
    <div id="why-attend">
      <div class="why-attend-grid">
        <div class="why-attend-wrapper">
          <h1 class="why-attend-title">
            WHY <br />
            ATTEND
          </h1>

          <p class="text-white">
            Revive ME conference brings together longevity medicine
            practitioners, health tech innovators, precision medicine
            researchers, biotech entrepreneurs, sovereign investors, and
            wellness pioneers for two intensive days of discovery, strategic
            dialogue, and opportunity in Abu Dhabi, the emerging longevity
            capital of the Middle East. Whether you are a physician implementing
            cutting-edge longevity protocols, an executive exploring
            partnerships in Abu Dhabi's $32 billion longevity ecosystem, an
            investor sourcing opportunities in the region's health tech boom, or
            a policymaker shaping preventive healthcare transformation, the
            conference delivers the platform, connections, and intelligence
            essential for achieving your strategic objectives.
          </p>
        </div>
        <NuxtImg
          :src="`${blobBaseUrl}/images/why-attend-header.webp`"
          loading="lazy"
          class="w-full h-full"
        ></NuxtImg>
      </div>
    </div>
    <AppContainer>
      <div id="attendee-benefits" class="py-10">
        <h1 class="attendeeBenefits__titleTop">TOP BENEFITS FOR</h1>
        <h1 class="attendeeBenefits__titleBottom">ATTENDEES</h1>

        <div class="attendee-benefits-grid">
          <div
            v-for="(item, index) in benefits"
            :key="index"
            class="attendee-benefits-wrapper"
          >
            <NuxtImg
              :src="`${blobBaseUrl}/images/why-attend-benefits/${index + 1}.webp`"
              class="w-full object-cover"
              loading="lazy"
            />

            <div class="p-8">
              <NuxtImg
                :src="`${blobBaseUrl}/images/why-attend-benefits/icons/${index + 1}.png`"
                class="w-6 h-6 mb-3 object-contain"
                loading="lazy"
              />

              <h3 class="attendee-benefits-title">
                {{ item.title }}
              </h3>

              <p class="attendee-benefits-desc">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </AppContainer>
    <Attendees />
  </section>
</template>
