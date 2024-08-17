<template>
  <div id="q-app">
    <h4>
      {{ baslik1 }} <br />
      <span style="font-size: x-large">{{ baslik2 }}</span>
    </h4>
    <div class="row">
      <q-btn
        @click="addTask($event)"
        class="card col-md-2"
        v-for="product in products"
        :key="product.urunId"
        style="margin-left: 5px; width: 16%"
      >
        <img
          :src="product.urun_resim"
          alt="Product Image"
          style="height: 197px; width: 235px"
        />

        <div class="product-name">{{ product.urun_isim }}</div>

        <div class="row justify-center">
          <div class="col-4">
            <div class="original-price">{{ product.fiyat }}</div>
          </div>
        </div>
      </q-btn>
    </div>
    <div class="row" style="background-color: #edf5f3">
      <q-btn
        color="primary"
        class="special col-md-2"
        label="Healty & Beauty"
        no-caps
        :ripple="false"
        style="min-height: 70px"
      ></q-btn>
      <q-btn
        color="primary"
        class="special col-md-2"
        label="Jewelry"
        :ripple="false"
        no-caps
      ></q-btn>
      <q-btn
        color="primary"
        class="special col-md-2"
        label="Home & Garden"
        :ripple="false"
        no-caps
      ></q-btn>
      <q-btn
        color="primary"
        class="special col-md-2"
        label="Parts & Accessories"
        :ripple="false"
        no-caps
      ></q-btn>
      <q-btn
        color="primary"
        class="special col-md-2"
        :ripple="false"
        label="Fashion"
        no-caps
      ></q-btn>
      <q-btn
        color="primary"
        class="special col-md-2"
        :ripple="false"
        label="Yard, Garden & Outdoor Living"
        no-caps
      ></q-btn>
    </div>
    <div class="row">
      <q-card
        class="col-md-2"
        v-for="img in images"
        :key="img.id"
        style="margin-top: 0px; padding: 0px; background-color: #ecf5f2"
      >
        <div style="background-color: #ecf5f2; text-align: center">
          <q-img :src="img.imageSrc" style="height: 250px" />
          <p style="font-size: large; text-align: center">{{ img.title }}</p>
        </div>
      </q-card>
    </div>
    <h4>Curated Guides</h4>
    <div class="row">
      <div class="col-md-4" style="text-align: left; padding: 15px">
        <q-img
          src="public/img/7.jpg"
          style="display: block; margin: 0 auto"
        ></q-img>
        <h4 style="text-align: left; margin-bottom: 20px">For the Makers</h4>
        <p style="text-align: left; font-size: 19px">
          For someone who just wants to do it themselves!
        </p>
        <ul style="text-align: left; list-style-type: none; padding: 0">
          <li>
            <q-icon name="arrow_forward"></q-icon
            ><a class="link-hover-underline" href="">The Crafter</a>
          </li>
          <li>
            <q-icon name="arrow_forward"></q-icon
            ><a class="link-hover-underline" href="">The Crafter</a>
          </li>
          <li>
            <q-icon name="arrow_forward"></q-icon
            ><a class="link-hover-underline" href="">The Crafter</a>
          </li>
        </ul>
      </div>
      <div class="col-md-4" style="text-align: left; padding: 15px">
        <q-img
          src="public/img/8.jpg"
          style="display: block; margin: 0 auto"
        ></q-img>
        <h4 style="text-align: left; margin-bottom: 20px">
          For the Trendsetters
        </h4>
        <p style="text-align: left; font-size: 19px">
          For someone who always knows what's on trend!
        </p>
        <ul style="text-align: left; list-style-type: none; padding: 0">
          <li>
            <q-icon name="arrow_forward"></q-icon
            ><a class="link-hover-underline" href="">The Glam Squad</a>
          </li>
          <li>
            <q-icon name="arrow_forward"></q-icon
            ><a class="link-hover-underline" href="">The Sneakerhead</a>
          </li>
          <li>
            <q-icon name="arrow_forward"></q-icon
            ><a class="link-hover-underline" href="">The Fashionista</a>
          </li>
        </ul>
      </div>
      <div class="col-md-4" style="text-align: left; padding: 15px">
        <q-img
          src="public/img/9.jpg"
          style="display: block; margin: 0 auto"
        ></q-img>
        <h4 style="text-align: left; margin-bottom: 20px">
          For the Adventurous
        </h4>
        <p style="text-align: left; font-size: 19px">
          For someone who is always on the go!
        </p>
        <ul style="text-align: left; list-style-type: none; padding: 0">
          <li>
            <q-icon name="arrow_forward"></q-icon
            ><a class="link-hover-underline" href="">The World Traveller</a>
          </li>
          <li>
            <q-icon name="arrow_forward"></q-icon
            ><a class="link-hover-underline" href="">The Mountaineer</a>
          </li>
          <li>
            <q-icon name="arrow_forward"></q-icon
            ><a class="link-hover-underline" href="">The Concert goer</a>
          </li>
        </ul>
      </div>
    </div>
    <h4>Shop Styles for You and the Family</h4>
    <div class="row">
      <div
        class="col-md-6"
        style="background-color: #f1f1f1; padding-left: 50px"
      >
        <h4 style="text-align: left; margin-bottom: 20px">Sweater Weather</h4>
        <p style="text-align: left; font-size: 19px">
          Stay wrapped up in warmth and style this fall.
        </p>
        <a style="color: green; font-size: large" href="#">Shop Now </a>
        <br />
        <q-img
          src="public/img/10.jpg"
          style="height: 296px; width: 465px; margin: 100px"
        ></q-img>
      </div>
      <div class="col-md-6">
        <div class="row" style="margin-left: 30px">
          <div
            class="col-md-12"
            style="
              background-color: #f6efec;
              height: 400px;
              position: relative;
              margin-bottom: 20px;
            "
          >
            <div
              style="
                position: absolute;
                bottom: 0;
                display: flex;
                justify-content: space-between;
                align-items: flex-end;
                width: 100%;
              "
            >
              <div style="text-align: left; margin-bottom: 40px">
                <h4 style="text-align: left; margin-bottom: 20px">Denim</h4>
                <p style="text-align: left; font-size: 19px">
                  Classic? Vintage? Designer? Find your fit.
                </p>
                <a style="color: green; font-size: large" href="#">Shop Now </a>
              </div>
              <q-img
                style="height: 200px; width: 200px"
                src="public/img/11.jpg"
              ></q-img>
            </div>
          </div>
          <div
            class="col-md-5"
            style="background-color: #eef5f3; margin-right: 30px"
          >
            <div>
              <div style="text-align: left; margin-bottom: 40px">
                <h4 style="text-align: left; margin-bottom: 20px">
                  Kicks for Kids
                </h4>
                <p style="text-align: left; font-size: 19px">
                  Stylish from the start.
                </p>
                <a style="color: green; font-size: large" href="#">Shop Now </a>
              </div>
              <q-img src="public/img/12.jpg"></q-img>
            </div>
          </div>
          <div class="col-md-6" style="background-color: #e9e9e9">
            <div>
              <div style="text-align: left; margin-bottom: 40px">
                <h4 style="text-align: left; margin-bottom: 20px">
                  Vintage Accessories
                </h4>
                <p style="text-align: left; font-size: 19px">
                  A timeless touch.
                </p>
                <a style="color: green; font-size: large" href="#">Shop Now </a>
              </div>
              <q-img src="public/img/13.jpg"></q-img>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row" style="background-color: #08263f; margin-top: 20px">
      <div
        class="col-md-7"
        style="color: white; margin-top: 70px; margin-left: 150px"
      >
        <h5 style="margin-bottom: 10px">Subscribe To Our Newsletter</h5>
        <h6 style="margin-top: 0px; margin-bottom: 0px">
          Subscribe to our newsletter to receive exclusive offers, latest news
          and updates.
        </h6>
        <br />
        <div class="row" style="">
          <div class="col-md-6" style="">
            <q-item
              class=""
              style="
                padding: 0px;
                justify-content: center;
                align-items: center;
                position: relative;
              "
            >
              <q-input
                dense
                outlined
                square
                v-model="search"
                placeholder="Your Email Address"
                class="col"
                style="background-color: #213c53"
              ></q-input>
              <q-btn
                square
                no-caps
                style="
                  background-color: white;
                  color: black;
                  :white ;
                  margin-left: 10px;
                  padding-top: 0px;
                "
                label="Subscribe"
              ></q-btn>
            </q-item>
          </div>
        </div>
      </div>
      <q-img
        src="public/img/14.jpg"
        style="width: 432px; height: 287px"
      ></q-img>
    </div>

    <div
      class="row"
      style="margin-left: 0px; padding-left: 0px; background-color: #f5fbf8"
    >
      <div class="col-md-2" style="margin-top: 60px; margin-left: 20px">
        <q-img
          src="public/img/15.jpg"
          style="width: 295px; height: 90px"
        ></q-img>
        <br />
        <div style="margin-top: 40px; text-align: left">
          <q-btn round color="primary" icon="facebook"></q-btn>
          <q-btn round color="primary" icon="img:public/img/16.jpg"></q-btn>
          <q-btn round color="primary" icon="img:public/img/17.jpg"></q-btn>
          <q-btn round color="primary" icon="img:public/img/18.jpg"></q-btn>
        </div>
      </div>
      <div class="col-md-3" style="margin-left: 100px">
        <ul style="list-style-type: none">
          <li style="text-decoration: none">
            <h4 style="margin-bottom: 5px; margin: 0px">Quick Links</h4>
          </li>
          <li style="margin-bottom: 12px">
            <a
              class="link-hover-underline"
              style="font-size: large; color: black"
              href=""
              >About</a
            >
          </li>
          <li style="margin-bottom: 12px">
            <a
              class="link-hover-underline"
              style="font-size: large; color: black"
              href=""
              >Affiliates</a
            >
          </li>
          <li style="margin-bottom: 12px">
            <a
              class="link-hover-underline"
              style="font-size: large; color: black"
              href=""
              >API</a
            >
          </li>
          <li style="margin-bottom: 12px">
            <a
              class="link-hover-underline"
              style="font-size: large; color: black"
              href=""
              >Selling Blog</a
            >
          </li>
          <li style="margin-bottom: 12px">
            <a
              class="link-hover-underline"
              style="font-size: large; color: black"
              href=""
              >Shopping Blog</a
            >
          </li>
          <li style="margin-bottom: 12px">
            <a
              class="link-hover-underline"
              style="font-size: large; color: black"
              href=""
              >Contact</a
            >
          </li>
        </ul>
      </div>
      <div class="col-md-3">
        <ul style="list-style-type: none">
          <li style="text-decoration: none">
            <h4 style="margin-bottom: 5px; margin: 0px">Information</h4>
          </li>
          <li style="margin-bottom: 12px">
            <a
              class="link-hover-underline"
              style="font-size: large; color: black"
              href=""
              >About</a
            >
          </li>
          <li style="margin-bottom: 12px">
            <a
              class="link-hover-underline"
              style="font-size: large; color: black"
              href=""
              >Affiliates</a
            >
          </li>
          <li style="margin-bottom: 12px">
            <a
              class="link-hover-underline"
              style="font-size: large; color: black"
              href=""
              >API</a
            >
          </li>
          <li style="margin-bottom: 12px">
            <a
              class="link-hover-underline"
              style="font-size: large; color: black"
              href=""
              >Selling Blog</a
            >
          </li>
          <li style="margin-bottom: 12px">
            <a
              class="link-hover-underline"
              style="font-size: large; color: black"
              href=""
              >Shopping Blog</a
            >
          </li>
          <li style="margin-bottom: 12px">
            <a
              class="link-hover-underline"
              style="font-size: large; color: black"
              href=""
              >Contact</a
            >
          </li>
        </ul>
      </div>
      <div class="col-md-3">
        <ul style="list-style-type: none">
          <li style="text-decoration: none">
            <h4 style="margin-bottom: 5px; margin: 0px">Support</h4>
          </li>
          <li style="margin-bottom: 12px">
            <a
              class="link-hover-underline"
              style="font-size: large; color: black"
              href=""
              >About</a
            >
          </li>
          <li style="margin-bottom: 12px">
            <a
              class="link-hover-underline"
              style="font-size: large; color: black"
              href=""
              >Affiliates</a
            >
          </li>
          <li style="margin-bottom: 12px">
            <a
              class="link-hover-underline"
              style="font-size: large; color: black"
              href=""
              >API</a
            >
          </li>
          <li style="margin-bottom: 12px">
            <a
              class="link-hover-underline"
              style="font-size: large; color: black"
              href=""
              >Selling Blog</a
            >
          </li>
          <li style="margin-bottom: 12px">
            <a
              class="link-hover-underline"
              style="font-size: large; color: black"
              href=""
              >Shopping Blog</a
            >
          </li>
          <li style="margin-bottom: 12px">
            <a
              class="link-hover-underline"
              style="font-size: large; color: black"
              href=""
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { ref } from 'vue';

import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  onSnapshot,
} from 'firebase/firestore';

export default defineComponent({
  setup() {
    return {
      baslik1: 'What People are Viewing Right Now',
      baslik2: 'Get them before they are gone!',
      slide: ref(1),
      autoplay: ref(true),
      images: [
        {
          id: 1,
          imageSrc: 'public/img/1.jpg',
          title: 'Bath & Body',
        },
        {
          id: 2,
          imageSrc: 'public/img/2.jpg',
          title: 'Fragrances',
        },
        {
          id: 3,
          imageSrc: 'public/img/3.jpg',
          title: 'Hair Care',
        },
        {
          id: 4,
          imageSrc: '/public/img/4.jpg',
          title: 'Makeup',
        },
        {
          id: 5,
          imageSrc: 'img/5.jpg',
          title: 'Nail Care',
        },
        {
          id: 6,
          imageSrc: 'public/img/6.jpg',
          title: 'Skin Care',
        },
      ],
    };
  },
  data() {
    return {
      products: [],
      productsColRef: 'products',
      selectedGenre: '',
      newTask: '',
      tasks: [],
    };
  },

  async created() {
    await this.getproducts();
    this.getTasks();
  },
  methods: {
    handleClick(genre: string) {
      this.selectedGenre = genre;
      this.getproducts();
    },

    async getproducts() {
      this.loading = true;
      this.products = [];
      let q;
      if (this.selectedGenre === '') {
        q = query(collection(this.$db, 'products'));
      } else {
        q = query(
          collection(this.$db, 'products'),

          where('urun_tur', '==', this.selectedGenre)
        );
      }
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((product) => {
        this.products.push({ ...product.data(), id: product.id });
      });

      this.loading = false;
    },

    async getTasks() {
      this.loading = true;
      this.tasks = [];

      const q = query(
        collection(this.$db, 'Tasks'),
        where('done', '==', false)
      );
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((todo) => {
        this.tasks.push({ ...todo.data(), id: todo.id });
      });

      this.loading = false;
    },

    async addTask(event) {
      this.loading = true;
      const target = event.target;
      const listItem = target.closest('.card');
      const productPrice =
        listItem.querySelector('.original-price').textContent;
      const productName = listItem.querySelector('.product-name').textContent;
      const productImage = listItem.querySelector('img').getAttribute('src');

      let todo = {
        kitapIsim: productName,
        kitapFiyat: productPrice,
        kitapResim: productImage,
        done: false,
      };

      try {
        const docRef = await addDoc(collection(this.$db, 'Tasks'), todo);
        todo.id = docRef.id;
        this.tasks.push(todo);
      } catch (error) {
        console.error('Error adding document: ', error);
      } finally {
        this.loading = false;
      }
    },

    getTotalPrice() {
      let totalPrice = 0;
      this.tasks.forEach((task) => {
        totalPrice += parseFloat(task.kitapFiyat as string);
      });
      return totalPrice;
    },
  },
});
</script>
<style>
.special .q-focus-helper {
  display: none;
}
.yazi {
  font-size: large;
  color: black;

  margin-left: 5px;
}
.link-hover-underline {
  text-decoration: none;
  color: black;
  font-size: large;
  transition: text-decoration 0.3s;
}

.link-hover-underline:hover {
  text-decoration: underline;
}
</style>
