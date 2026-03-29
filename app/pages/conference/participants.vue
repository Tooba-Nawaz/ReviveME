<script setup>
import AppContainer from "~/components/ui/AppContainer.vue";

useHead({
  title: "2025 Attendees | Revive ME",
  meta: [
    {
      name: "description",
      content:
        "Connect and collaborate with industry enthusiasts at the Middle East’s upcoming longevity summit. Engage in dynamic discussions & forge valuable connections.",
    },
  ],
});

const {
  data: apiAttendees,
  pending: loading,
  error,
  refresh,
} = await useFetch(
  `https://revorocrmsgr-ceeuddeqfdevbfas.centralindia-01.azurewebsites.net/OnBoardings/GetByOnBoardingType/Revive ME/2025/Attendee`,
  {
    key: "attendees",
    lazy: true,
  },
);

const attendees = computed(() => apiAttendees.value || []);
</script>

<template>
  <AppContainer class="py-10 md:py-20">
    <section>
      <h1 class="text-4xl font-bold uppercase">ATTENDEES</h1>
      <p class="text-sm">2025</p>

      <div v-if="loading" class="text-center py-10">
        <p class="text-lg">Loading attendees, please wait...</p>
      </div>

      <div v-else-if="error" class="text-center py-10">
        <p class="text-red-500 mb-4">Failed to load attendees.</p>
        <button
          @click="refresh()"
          class="px-4 py-2 bg-black text-white rounded"
        >
          Retry
        </button>
      </div>

      <div v-else-if="attendees.length === 0" class="text-center py-10">
        No attendees available at the moment.
      </div>

      <div v-else class="flex justify-center mt-10">
        <div
          class="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-7 gap-4 w-full"
        >
          <div
            v-for="(attendee, index) in attendees"
            :key="attendee.logo || index"
            class="mb-4"
          >
            <div
              class="flex justify-center items-center h-full border border-black rounded-2xl min-h-[180px] md:min-h-[140px] lg:min-h-[160px]"
            >
              <img
                v-if="attendee.logo"
                :src="attendee.logo"
                alt="Attendee Logo"
                class="px-3 py-4 max-w-full max-h-[100px] object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </AppContainer>
</template>
