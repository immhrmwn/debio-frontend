<style scoped>
.title-text-color{
    color: #FDC0FF;
}
.center-all{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
}
</style>

<template>
   <v-container :class="!isLabAccountExist ? 'center-all' : ''">
       <v-container
        v-if="!isLabAccountExist"
        >
         <h1 class="title-text-color">You don't have a lab account yet</h1>
         <v-btn
          color="primary"
          @click="$router.push({name:'lab-registration'})"
        >Register Now!</v-btn>
       </v-container>
       <v-row v-else>
        <v-col cols="12" md="4">
          <MenuCard
              :height="120"
              class="mb-2"
              icon="mdi-microscope"
              title="Account"
              sub-title="Account page"
              @click="$router.push({ name: 'lab-dashboard-account' })"
          ></MenuCard>
          <MenuCard
              :height="120"
              class="mb-2"
              icon="mdi-hand-heart"
              title="Services"
              sub-title="Services list"
              @click="$router.push({ name: 'lab-dashboard-services' })"
          ></MenuCard>
          <MenuCard
              :height="120"
              class="mb-2"
              icon="mdi-clipboard-plus"
              title="Orders"
              sub-title="Order history"
              @click="$router.push({ name: 'lab-dashboard-order-history' })"
          ></MenuCard>
          </v-col>
          <v-col cols="12" md="4">
            <OrderHistory />
          </v-col>
          <v-col cols="12" md="4">
            <TestResults />
          </v-col>
          <!-- <v-col cols="12" md="8">
            <v-card class="dg-card" elevation="0" outlined>
              <div class="secondary--text mt-5 ml-8"><b>Lab Verification</b></div>
              <v-card-text class="px-8">
                  <p class="black--text">
                      You need to go through the lab verification process in order to receive the verified badge
                      <v-icon 
                        inline
                        color="primary"
                        :size="16"
                      >mdi-check-decagram</v-icon>.
                  </p>
                  <v-row>
                      <v-col cols="12" md="12">
                              <v-btn
                                  color="primary"
                                  block
                                  medium>Verify Account</v-btn>
                      </v-col>
                  </v-row>
              </v-card-text>
            </v-card>
          </v-col> -->
       </v-row>
   </v-container>
</template>

<script>
import { mapState } from 'vuex'
import MenuCard from '@/components/MenuCard'
import OrderHistory from "./OrderHistory";
import TestResults from "./TestResults";

export default {
  name: 'Lab',
  components: {
    MenuCard,
    OrderHistory,
    TestResults,
  },
  computed: {
    ...mapState({
      isLabAccountExist: (state) => state.substrate.isLabAccountExist,
    }),
  },
}
</script>