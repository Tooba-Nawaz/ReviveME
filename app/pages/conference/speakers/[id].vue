<script setup>
import SpeakerDetails from "~/components/shared/SpeakerDetails.vue";

const route = useRoute();
</script>

<template>
  <SpeakerDetails
    :id="route.params.id"
    title="Speaker Details"
    loadingText="Loading speaker details..."
    errorText="Failed to load speaker data"
    aboutTitle="About the Speaker"
  />
</template>
