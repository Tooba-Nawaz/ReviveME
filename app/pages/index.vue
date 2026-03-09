<script setup>
useHead({
  title: "Revive ME | Global Longevity & Health Tech Summit",
  meta: [
    {
      name: "description",
      content:
        "Revive ME is a must-attend event redefining Healthy Longevity and wellness through Tech & AI.",
    },
  ],
});

import FocusSectors from "~/components/home/FocusSectors.vue";
import Gallery from "~/components/home/Gallery.vue";
import PreviousParticipants from "~/components/home/PreviousParticipants.vue";
import Venue from "~/components/home/Venue.vue";
import WhatsOn from "~/components/home/WhatsOn.vue";
</script>

<template>
  <HomeHeader />
  <HomeHeroSection />
  <HomeAbout />
  <HomeExpectedNumbers />
  <HomeWhyAbuDhabi />
  <!-- <HomeFocusSectors /> -->
  <WhatsOn />
  <HomeAttendees />
  <PreviousParticipants />
  <Gallery />
  <Venue />
</template>
