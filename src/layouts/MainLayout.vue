<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated> </q-header>

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
  {
    title: 'Cart Page',
    caption: 'Last version of this project',
    icon: 'favorite',
    link: '/comp9',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
