<template>
  <div class="home">
    <HelloWorld name="Locky Keaney" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { HelloWorld } from "../components";

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
});
</script>

<style lang="scss">
.home {
  height: 100vh;
}
</style>
