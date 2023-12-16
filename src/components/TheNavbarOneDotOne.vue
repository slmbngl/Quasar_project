<script setup lang="ts">
import Voo from 'components/NavCon.vue';
import { ref } from 'vue';

const products = ref([
  { id: 0, name: 'Clothing' },
  { id: 1, name: 'Shoes' },
  { id: 2, name: 'Accessories' },
  { id: 3, name: 'Vintage' },
  { id: 4, name: 'Formal & Wedding' },
  { id: 0, name: 'Clothing' },
  { id: 1, name: 'Shoes' },
  { id: 2, name: 'Accessories' },
  { id: 3, name: 'Vintage' },
  { id: 4, name: 'Formal & Wedding' },
]);

const helpers = ref([
  { id: 0, name: 'Visit the help center' },
  { id: 1, name: 'Contact support' },
  { id: 2, name: 'Seller success tips' },
  { id: 3, name: 'Read the Bonanza Selling blog' },
  { id: 4, name: 'Read the Bonanza Shopping blog' },
  { id: 5, name: 'How Bonanza works' },
  { id: 6, name: 'Ask the community' },
  { id: 7, name: 'Submit an idea' },
]);
</script>
<template>
  <q-toolbar class="GPLAY__toolbar" style="background-color: #edf5f3">
    <Voo />
    <Voo />
    <Voo />
    <Voo />
    <Voo />
    <Voo />
    <Voo />
    <Voo />
    <Voo />

    <q-space />

    <q-space />

    <div class="q-pl-md q-gutter-sm row no-wrap items-center">
      <q-btn
        style="margin-right: 20px"
        class="special"
        flat
        :ripple="false"
        round
        dense
        no-caps
        color="black"
        icon="menu"
      >
        <q-tooltip class="bg-primary"
          ><div style="text-align: center">
            <ul>
              <li style="list-style-type: none">
                <a href="" style="text-decoration: none; color: white"
                  >Hand-Picked Lists</a
                >
              </li>
            </ul>
            <ul>
              <li style="list-style-type: none">
                <a href="" style="text-decoration: none; color: white"
                  >Curated Guides</a
                >
              </li>
            </ul>
            <ul>
              <li style="list-style-type: none">
                <a href="" style="text-decoration: none; color: white"
                  >New Items</a
                >
              </li>
            </ul>
            <ul>
              <li style="list-style-type: none">
                <a href="" style="text-decoration: none; color: white"
                  >Freebies</a
                >
              </li>
            </ul>
            <ul>
              <li style="list-style-type: none">
                <a href="" style="text-decoration: none; color: white"
                  >Hand-Picked Lists</a
                >
              </li>
            </ul>
            <ul>
              <li style="list-style-type: none">
                <a href="" style="text-decoration: none; color: white"
                  >Hand-Picked Lists</a
                >
              </li>
            </ul>
          </div>
        </q-tooltip>
      </q-btn>
    </div>
  </q-toolbar>
</template>
<style>
.special .q-focus-helper {
  display: none;
}
</style>
