<template>
  <div>
    <p>Signin:</p>
    <section id="firebase-auth-container"></section>
  </div>
</template>

<script>
import firebase from "firebase";
import * as firebaseui from "firebaseui";
export default {
  mounted() {
    let ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebase-auth-container", {
      signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
    });
  },
};
</script>

<style></style>
