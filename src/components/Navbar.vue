<template>
  <nav class="navbar navbar-expand-sm bg-light">
    <router-link :to="{ name: 'home' }" class="navbar-brand">{{
      name
    }}</router-link>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item dropdown">
        <a
          href="#"
          class="nav-link dropdown-toggle"
          id="navbarDropdownMenuLink"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          v-if="$store.state.user"
        >
          {{ user.name }}
        </a>
        <router-link
          tag="a"
          :to="{ name: 'signin' }"
          class="nav-link"
          role="button"
          v-else
        >
          Signin
        </router-link>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a href="#" class="dropdown-item">Profile</a>
          <a href="#" class="dropdown-item">Logout</a>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["name"],
};
</script>

<style></style>
