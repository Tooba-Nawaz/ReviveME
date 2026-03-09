<script setup>
import { computed } from "vue";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const props = defineProps({
  href: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    default: "primary",
  },
  size: {
    type: String,
    default: "regular",
  },
  shape: {
    type: String,
    default: "rounded",
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
});
const classes = computed(() =>
  cn(
    "button",
    `button-${props.variant}`,
    `button-${props.size}`,
    `button-${props.shape}`,
  ),
);
</script>

<template>
  <NuxtLink
    :disabled="props.isLoading"
    :class="classes"
    v-bind="$attrs"
    :to="props.href"
  >
    <slot />
    <Icon
      v-if="props.isLoading"
      name="eos-icons:loading"
      class="animate-spin text-current"
    />
  </NuxtLink>
</template>
