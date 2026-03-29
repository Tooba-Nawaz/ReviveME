<script setup lang="ts">
import AppContainer from "~/components/ui/AppContainer.vue";
const {
  public: { blobBaseUrl },
} = useRuntimeConfig();
</script>

<template>
  <section>
    <AppContainer>
      <div class="about-grid">
        <div>
          <h1 class="about-title">
            WHAT IS <br />
            REVIVE ME?
          </h1>
          <p class="my-5">
            Revive ME is the region's only premier exhibition and conference
            dedicated to longevity and health technology, a specialized platform
            where innovation meets implementation. The event convenes key
            industry players advancing AI-powered diagnostics, precision
            medicine, preventive care delivery, metabolic health, digital health
            platforms, cognitive technologies, regenerative medicine, and
            evidence-based wellness.
          </p>
          <p>
            The inaugural edition established a strong foundation for this
            platform by convening the longevity ecosystem in Abu Dhabi through a
            combination of conference programming, interactive exhibition,
            startup pitches, and structured networking, supported by
            cross-industry participation and international attendance. Revive ME
            2026 builds on this foundation with an elevated standard of curation
            and experience: stronger conference architecture, a more
            solution-led exhibition showcase, and exclusive engagement formats
            designed to help stakeholders move from interest to implementation.
          </p>
          <p class="my-5">
            The event will bring together longevity-focused organizations,
            healthcare providers, technology innovators, institutional
            investors, researchers, regulators, and ecosystem enablers from
            across the globe to exchange knowledge, advance strategic
            partnerships, and accelerate the adoption of evidence-based
            longevity and health technology solutions across the region and
            beyond.
          </p>
          <NuxtImg
            :src="`${blobBaseUrl}/images/about-1.webp`"
            class="w-full"
            alt=""
          />
          <div class="button-lg-grid">
            <UiButton
              variant="primary"
              size="regular"
              shape="pill"
              to="/register"
            >
              register now
            </UiButton>

            <UiButton
              variant="border-gradient"
              size="regular"
              shape="pill"
              to="/register"
            >
              ENQUIRE NOW
            </UiButton>
          </div>
        </div>
        <div>
          <NuxtImg
            :src="`${blobBaseUrl}/images/about-2.webp`"
            class="w-full"
            alt=""
          />
          <p class="my-4">
            The exhibition at Revive ME provides a premier showcase for
            established leaders and emerging ventures to present deployable
            solutions and connect with qualified buyers, partners, and
            investors. The comprehensive conference delivers strategic insight
            through expert keynotes and implementation-focused panels addressing
            validation standards, deployment pathways, regulatory frameworks,
            and sustainable business models. This integrated approach enables
            delegates to move seamlessly between solution discovery and
            strategic intelligence, creating a cohesive experience designed for
            decision-making and partnership formation.
          </p>
          <p>
            Revive ME serves as a convergence point where technology providers,
            healthcare leaders, researchers, investors, and policymakers engage
            in substantive dialogue about credible innovation. The platform
            accelerates the translation of longevity science into deployable
            healthcare solutions while maintaining standards of rigor,
            transparency, and professionalism that define world-class industry
            platforms.
          </p>
          <div class="button-sm-grid">
            <UiButton
              variant="primary"
              size="regular"
              shape="pill"
              to="/register"
            >
              register now
            </UiButton>

            <UiButton
              variant="border-gradient"
              size="regular"
              shape="pill"
              to="/register"
            >
              ENQUIRE NOW
            </UiButton>
          </div>
        </div>
      </div>
    </AppContainer>
  </section>
</template>
