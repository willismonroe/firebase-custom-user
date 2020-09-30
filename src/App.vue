<template>
  <div class="container pt-3">
    <div class="row pt-3">
      <div class="col-2"></div>
      <div class="col">
        <Navbar v-bind:name="appName" />
      </div>
      <div class="col-2"></div>
    </div>
    <div class="row pt-3">
      <div class="col-2"></div>
      <div class="col">
        <div class="container border p-3">
          <router-view></router-view>
        </div>
      </div>
      <div class="col-2"></div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: { Navbar },
  data() {
    return {
      appName: "CustomUserApp",
      appContents: "Hello World",
    };
  },
};
</script>

<style></style>
