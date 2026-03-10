<script setup>
import '@/assets/css/components/Exhibition.css'

const getIconSrc = (name) => `/why-exhibit/icons/${name}.png`

const cards = [
  {
    title: 'Direct Access To Decision-makers',
    desc: 'Engage C-suite executives, clinic directors, hospital procurement leaders, and technology decision-makers who control budgets and vendor selection.',
    icon: 'decision'
  },
  {
    title: 'Demonstrate Commercial Readiness',
    desc: 'Move beyond presentations to product demonstrations, technical discussions, integration requirements, and implementation roadmaps that build buyer confidence.',
    icon: 'readiness'
  },
  {
    title: 'Accelerate Partnership Development',
    desc: 'Build a qualified pipeline of prospective clients, partners, and collaborators actively seeking solutions deployable across UAE and throughout wider GCC healthcare systems.',
    icon: 'partnership'
  },
  {
    title: 'Establish Regional Market Presence',
    desc: 'Position your organization within Abu Dhabi’s longevity ecosystem, creating tangible expansion opportunities across the GCC.',
    icon: 'market'
  },
  {
    title: 'Connect with Global Investors',
    desc: 'Showcase your solutions to venture capital firms, sovereign wealth funds, and institutional investors funding longevity and health tech innovations.',
    icon: 'investors'
  },
  {
    title: 'Gain Critical Market Insights',
    desc: 'Analyze competitive landscapes, identify emerging trends, and uncover customer priorities shaping the longevity and health tech sectors.',
    icon: 'insights'
  }
]

const exhibitors = [
  {
    text: 'Longevity Clinic Operators & Medical Directors',
    icon: 'clinic'
  },
  {
    text: 'Healthcare Providers & Hospital Executives',
    icon: 'hospital'
  },
  {
    text: 'Health Tech & AI Platform Developers',
    icon: 'health-tech'
  },
  {
    text: 'Digital Health & Wearable Technology Leaders',
    icon: 'wearable'
  },
  {
    text: 'Preventive Medicine & Wellness Practitioners',
    icon: 'wellness'
  },
  {
    text: 'Pharmaceutical & Biotech Company Leaders',
    icon: 'pharma'
  },
  {
    text: 'Diagnostics & Precision Health Companies',
    icon: 'diagnostics'
  },
  {
    text: 'Longevity Investors, VCs & Sovereign Funds',
    icon: 'investor'
  },
  {
    text: 'Regenerative & Aesthetic Medicine Specialists',
    icon: 'regenerative'
  },
  {
    text: 'Nutrition, Supplements & Metabolic Health Companies',
    icon: 'nutrition'
  },
  {
    text: 'Government Health Officials & Regulators',
    icon: 'government'
  }
]
</script>

<template>
  <section class="exHero">
    <NuxtImg
      src="/why-exhibit/exhibition-hero.webp"
      alt="Exhibition"
      class="exHero-bg"
      width="1920"
      height="385"
    />

    <div class="exHero-overlay"></div>

    <div class="exHero-content">
      <h1 class="exHero-title">
        EXHIBITING AT REVIVE ME 2026
      </h1>

      <p class="exHero-desc">
        Exhibiting at Revive ME is designed to support qualified commercial outcomes; pipeline creation, partnership development, and strategic positioning within the longevity and health tech sector. The exhibition is designed for B2B credibility: a professional environment where demonstrations lead to dialogue, where technical conversations support evaluation, and where booth presence translates into pipeline development.
      </p>

      <p class="exHero-desc">
        Revive ME attracts decision-makers across the longevity value chain: clinic operators expanding service lines, healthcare providers advancing preventive models, technology leaders deploying AI and digital health solutions, investors seeking validated opportunities, and researchers exploring commercialization pathways.
      </p>
    </div>
  </section>

  <section class="whyExhibit">
    <div class="whyExhibit-wrap">
      <div class="whyExhibit-grid">
        <div class="whyExhibit-left">
          <h2 class="whyExhibit-title">
            <span class="whyExhibit-title-line">WHY</span>
            <span class="whyExhibit-title-line">
              <span class="whyExhibit-title-primary">EXHIBIT</span> AT
            </span>
            <span class="whyExhibit-title-line">REVIVE ME</span>
          </h2>

          <p class="whyExhibit-text">
            Engage C-suite executives, clinic directors, hospital procurement leaders, and technology decision-makers who control budgets and vendor selection.
          </p>
        </div>

        <div class="whyExhibit-cards">
          <div
            v-for="card in cards"
            :key="card.icon"
            class="whyExhibit-card"
          >
            <NuxtImg
              :src="getIconSrc(card.icon)"
              :alt="card.title"
              width="46"
              height="46"
              class="whyExhibit-icon"
            />

            <h3 class="whyExhibit-cardTitle">
              {{ card.title }}
            </h3>

            <p class="whyExhibit-cardDesc">
              {{ card.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="meetExhibitors">
    <div class="meetExhibitors-bg">
      <div class="meetOrb meetOrb-left"></div>
      <div class="meetOrb meetOrb-right"></div>
    </div>

    <div class="meetExhibitors-wrap">
      <h2 class="meetExhibitors-title">
        WHO EXHIBITORS WILL MEET?
      </h2>

      <div class="meetExhibitors-grid">
        <div
          v-for="item in exhibitors"
          :key="item.icon"
          class="meetExhibitors-pill"
        >
          <div class="meetExhibitors-iconWrap">
            <NuxtImg
              :src="getIconSrc(item.icon)"
              :alt="item.text"
              class="meetExhibitors-icon"
            />
          </div>

          <span class="meetExhibitors-text">
            {{ item.text }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>