<script setup lang="ts"></script>
<template>
  <q-toolbar class="bg-white row">
    <q-item class="col-md-3" style="margin: 0; padding: 0">
      <q-img
        to="/"
        src="src/assets/images/logo.jpg"
        style="
          position: relative;
          width: 235px;
          height: 95px;
          margin: 0;
          padding: 0;
        "
      ></q-img>
    </q-item>

    <q-item
      class="col-md-6"
      style="justify-content: center; align-items: center; position: relative"
    >
      <q-input
        dense
        outlined
        square
        v-model="search"
        placeholder="Search help topics"
        class="bg-white col"
      />
      <q-btn
        class="GPLAY__toolbar-input-btn"
        color="primary"
        icon="search"
        unelevated
      />
    </q-item>
    <q-space></q-space>
    <q-item class="col-md-3">
      <q-space></q-space>
      <q-btn square color="primary" icon="shopping_cart" />
    </q-item>
  </q-toolbar>
</template>
<style>
.special .q-focus-helper {
  display: none;
}
</style>
