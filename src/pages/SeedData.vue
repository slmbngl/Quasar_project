<template>
  <q-page class="flex flex-center">
    <div v-if="loading"><q-spinner /> Fetching data...</div>

    <div v-else>
      <q-list>
        <q-item-label header>Products/Production</q-item-label>
        <q-item v-for="(product, index) in products" :key="index">
          <q-item-label>
            {{ product.title }}
          </q-item-label>
        </q-item>
      </q-list>
    </div>

    <q-btn
      v-if="!products.length && !loading"
      label="Seed Data"
      class="q-mt-md"
      @click="seedData()"
    />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
  addDoc,
} from 'firebase/firestore';
import seedData from 'src/data/products.json';
//product bunu düzelt
export default defineComponent({
  name: 'IndexPage',
  data() {
    return {
      loading: true,
      products: [],
    };
  },

  created() {
    this.getData();
  },

  methods: {
    async getData() {
      this.loading = true;
      this.products = [];

      const q = query(
        collection(this.$db, 'products'),
        where('completed', '==', true)
      );
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((product) => {
        this.products.push(product.data());
      });

      this.loading = false;
    },

    async seedData() {
      for (const product of seedData) {
        await addDoc(collection(this.$db, 'products'), product);
      }

      this.getData();
    },
  },
});
</script>
