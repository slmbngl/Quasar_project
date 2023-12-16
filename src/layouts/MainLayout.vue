<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Bonanza </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <component-link
          v-for="link in componentLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ComponentLink, {
  ComponentLinkProps,
} from 'components/ComponentLink.vue';

const componentLinks: ComponentLinkProps[] = [
  {
    title: 'Comp1',
    caption: '',
    icon: 'school',
    link: '/comp1',
  },
  {
    title: 'Comp2',
    caption: '',
    icon: 'code',
    link: '/comp2',
  },
  {
    title: 'Comp3',
    caption: '',
    icon: 'chat',
    link: '/comp3',
  },
  {
    title: 'Comp4',
    caption: '',
    icon: 'record_voice_over',
    link: '/comp4',
  },
  {
    title: 'Comp5',
    caption: '',
    icon: 'rss_feed',
    link: '/comp5',
  },
  {
    title: 'Comp6',
    caption: '',
    icon: 'public',
    link: '/comp6',
  },
  {
    title: 'Comp7',
    caption: '',
    icon: 'favorite',
    link: '/comp7',
  },
  {
    title: 'Main Page',
    caption: 'Last version of this project',
    icon: 'favorite',
    link: '/comp8',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
