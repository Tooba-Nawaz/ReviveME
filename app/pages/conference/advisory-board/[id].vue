<script setup>
import SpeakerDetails from "~/components/shared/SpeakerDetails.vue";

const route = useRoute();
</script>

<template>
  <SpeakerDetails
    :id="route.params.id"
    title="Advisory Board Details"
    loadingText="Loading advisory board details..."
    errorText="Failed to load advisory board data"
    aboutTitle="About"
  />
</template>
