<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" xl="8" lg="8" md="8" order-md="1" order="2">
            <v-card class="dg-card" elevation="0" outlined>
                <v-card-text class="px-8 pb-8 pt-10">              
                    <v-text-field
                      dense
                      label="Service Name"
                      placeholder="Service Name"
                      outlined
                      v-model="name"
                    ></v-text-field>
                    
                    <v-text-field
                      dense
                      label="Price"
                      placeholder="Price"
                      outlined
                      v-model="price"
                    ></v-text-field>

                    <v-text-field
                      dense
                      label="Description"
                      placeholder="Description"
                      outlined
                      v-model="description"
                    ></v-text-field>
                    
                    <v-textarea
                      label="Long Description"
                      placeholder="Long Description"
                      outlined
                      v-model="longDescription"
                    ></v-textarea>
                        
                    <v-file-input
                      dense
                      label="Image"
                      placeholder="Image"
                      prepend-icon="mdi-image"
                      outlined
                      v-model="files"
                    ></v-file-input>

                    <v-btn
                      color="primary"
                      block
                      large
                      @click="createService"
                    >Submit</v-btn>
                </v-card-text>
            </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { createService } from '@/lib/polkadotProvider/command/services'

export default {
  name: 'AddLabServices',
  data: () => ({
    name: '',
    price: '',
    description: '',
    longDescription: '',
    files: [],
  }),
  computed: {
    ...mapGetters({
      api: 'substrate/getAPI',
      pair: 'substrate/wallet',
    }),
  },
  methods: {
    async createService() {
      await createService(
        this.api,
        this.pair,
        {
          name: this.name,
          price: this.price,
          description: this.description,
          long_description: this.longDescription
        }
      )
      // Wait for transaction to finish before refreshing Vuex store
      await this.$store.dispatch('substrate/getLabAccount')
      this.$router.push('/lab/services')
    },
  },
}
</script>

<style lang="scss" scoped>
.on-hover {
  cursor: pointer;
}
</style>
