<script setup>
const {
  public: { blobBaseUrl },
} = useRuntimeConfig();
</script>
<template>
  <section>
    <div class="relative overflow-hidden">
      <NuxtImg
        :src="`${blobBaseUrl}/images/home-venue.webp`"
        class="w-full"
        loading="lazy"
      />

      <div class="venue-wrapper">
        <div class="venue-content-wrapper">
          <div class="flex items-center gap-4">
            <h5 class="text-xl font-light">Venue</h5>
            <div class="w-32 h-px bg-white"></div>
          </div>

          <h1 class="event-venue">
            ADNEC <br />
            Marina, Abu Dhabi
          </h1>
        </div>
      </div>
    </div>
  </section>
</template>
