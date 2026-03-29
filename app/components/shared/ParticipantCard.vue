<script setup>
const props = defineProps({
  name: String,
  description: String,
  logo: String,
  level: String,
  href: String,
  type: {
    type: String,
    default: "sponsor",
  },
});

const getBadgeStyle = (level) => {
  const l = level?.toLowerCase() || "";

  if (l.includes("gold")) {
    return {
      background:
        "linear-gradient(90deg, #caa000 0%, #ffd84d 50%, #caa000 100%)",
    };
  }

  if (l.includes("silver")) {
    return {
      background: "radial-gradient(circle, #f0f0f0 0%, #c0c0c0 100%)",
    };
  }

  if (l.includes("bronze")) {
    return {
      background: "radial-gradient(circle, #f5e1d3 0%, #cd7f32 100%)",
    };
  }

  return {
    background: "radial-gradient(circle, #e6f3ff 0%, #b9dcff 100%)",
  };
};
</script>

<template>
  <article class="sponsorCard">
    <div class="sponsorCard__line"></div>

    <div
      class="sponsorCard__badge"
      :style="type !== 'exhibitor' ? getBadgeStyle(level) : null"
      :class="type === 'exhibitor' ? 'bg-[var(--primary)]' : ''"
    >
      {{ level }}
    </div>

    <div class="sponsorCard__grid">
      <div class="sponsorCard__logoWrap">
        <img v-if="logo" :src="logo" :alt="name" class="sponsorCard__logo" />
      </div>

      <div class="sponsorCard__content">
        <h2 class="sponsorCard__name">
          {{ name }}
        </h2>

        <div
          v-if="description"
          class="sponsorCard__desc"
          v-html="description"
        ></div>

        <a
          v-if="href && href !== '#'"
          :href="href"
          target="_blank"
          class="sponsorCard__link"
        >
          Visit Website
          <span class="sponsorCard__linkArrow">→</span>
        </a>
      </div>
    </div>
  </article>
</template>
