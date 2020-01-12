<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">Login</v-card-title>
        <v-card-text>
          <v-btn @click="signIn">
            <nuxt-link to="/">signIn</nuxt-link>
          </v-btn>
          isAuthenticated: {{ isAuthenticated }}
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  computed: {
    ...mapGetters("user", ["isAuthenticated"])
  },
  methods: {
    ...mapActions("user", ["signIn"])
  }
};
</script>
