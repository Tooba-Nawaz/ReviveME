<script setup>
import AppContainer from "../ui/AppContainer.vue";

const previousParticipants = [
  {
    title: "SPONSORS",
    bg: "bg-[#FFF8F0]",
    items: [
      "102",
      "204",
      "216",
      "221",
      "296",
      "225",
      "242",
      "246",
      "277",
      "172",
      "175",
      "319",
      "183",
      "185",
      "103",
      "196",
      "154",
      "162",
    ],
  },
  {
    title: "EXHIBITORS",
    bg: "bg-[#FCEBFF]",
    items: [
      "90",
      "91",
      "209",
      "211",
      "238",
      "250",
      "259",
      "272",
      "279",
      "294",
      "303",
      "305",
      "92",
      "93",
      "188",
      "95",
      "97",
      "180",
    ],
  },
  {
    title: "PARTNERS",
    bg: "bg-[#F6DEE7]",
    items: [
      "324",
      "41",
      "38",
      "214",
      "223",
      "4",
      "11",
      "13",
      "48",
      "47",
      "44",
      "45",
      "158",
      "159",
      "42",
      "12",
      "46",
      "52",
    ],
  },
];
</script>

<template>
  <section>
    <div class="participants-wrapper">
      <div
        v-for="participant in previousParticipants"
        :key="participant.title"
        :class="[participant.bg, 'py-10']"
      >
        <AppContainer>
          <div class="text-center mb-6">
            <span class="title-prefix"> PREVIOUS </span>

            <h1 class="participant-title">
              {{ participant.title }}
            </h1>
          </div>

          <div class="participant-grid">
            <div
              v-for="item in participant.items"
              :key="item"
              class="participant-image-wrapper"
            >
              <NuxtImg
                class="participant-image"
                :src="`https://resolutemarkets.blob.core.windows.net/onboardings/logo_${item}.png`"
              />
            </div>
          </div>
        </AppContainer>
      </div>
    </div>
  </section>
</template>
