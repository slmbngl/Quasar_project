<template>
  <q-toolbar class="GPLAY__toolbar bg-white">
      <div class="q-pa-md" >
        <q-item-label>
          <q-btn-dropdown
            class="special"
            flat
            :ripple="false"
            round
            no-caps
            dense
           label="Sell in Bonanza"
          >
            <q-list>
              <q-btn v-close-popup color="primary" text-color="black" no-caps>Start selling in one click</q-btn>
              <q-item clickable v-close-popup v-for='product in products' :key="product.id">
                <q-item-section>
                  <q-item-label  >
                    {{ product.name }}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>

          <q-btn
          class="special"
            flat
            :ripple="false"
            round
            square
            no-caps

           label="Bonanza Lending" />

            <q-btn-dropdown
            style="margin-left: 20px;
            overflow: hidden;"
            class="special"
            flat
            :ripple="false"
            round
            square
            no-caps
            color: primary
            text-color="black"
            label="Help"
          >
            <q-list>
              <div class="GPLAY__toolbar-input-container row no-wrap">
        <q-input
          dense
          outlined
          v-model="search"
          square
          placeholder="Search help topics"
          class="bg-white col"
        />
        <q-btn
          class="GPLAY__toolbar-input-btn"
          color="primary"
          icon="search"
          unelevated
        />
      </div>

              <q-item clickable v-close-popup v-for='helper in helpers' :key="helper.id">
                <q-item-section>
                  <q-item-label  >
                    {{helper.name}}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </q-item-label>
      </div>

      <q-space />

      <q-space />

      <div class="q-pl-md q-gutter-sm row no-wrap items-center">
        <q-btn to="/login"
            style="margin-right: 20px;"
            class="special"
            flat
            :ripple="false"
            round
            square
            no-caps
            color: black
            text-color="black"
            label="Log in">
        </q-btn>

        <q-btn
            class="special"
            flat
            :ripple="false"
            round
            square
            no-caps
            color: primary
            text-color="black"
            label="Register">
        </q-btn>

        <q-icon style="width: 30px; height: 30px; font-size: medium; font-weight: 500;">Cart</q-icon><q-img src="public/img/20.jpg" style="width: 30px; height: 30px;"></q-img>
      </div>

    </q-toolbar>
    <q-toolbar class="row" style="background-color: #EAEBDE;padding-left: 200px; padding-right: 200px; height: 90px;">
    <q-item class="col-md-3" style="margin: 0; padding: 0">
      <q-img
        to="/"
        src="public/icons/logo.svg"
        style="
          position: relative;
          width: 200px;
          height: 60px;
          margin: 0;
          padding: 0;
        "
      ></q-img>
    </q-item>
    <q-space></q-space>
    <q-item
      class="col-md-4"
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
  </q-toolbar>
  <q-toolbar style="background-color: #F9FAF2 ;padding-left: 200px; padding-right: 200px; height: 50px;">
    <q-btn
    outline
    flat
    push
    @mouseenter="hover = true"
    @mouseleave="hover = false"
    class="div"
    :class="{ 'div-hover': hover }"
    text-color="black"
    no-caps
    label="Women's Fashion"
  >
    <div v-if="hover" class="row q-col-gutter-md q-pt-md">
      <div class="col-xs-12 col-sm-6 col-md-6">
        <q-card class="my-card">
          <q-card-section horizontal>
            <div style="margin-top: 10px">
              <ul class="navbar-nav me-auto mb-2" style="padding;: 10px">
                <li
                  class="nav-item"
                  style="list-style-type: none; margin-top: 5px"
                >
                  <a
                    style="text-decoration: none; color: #396353"
                    class="nav-link hrrem"
                    href="#"
                    >Clothing</a
                  >
                </li>
                <li
                  class="nav-item"
                  style="list-style-type: none; margin-top: 5px"
                >
                  <a
                    style="text-decoration: none; color: black"
                    class="nav-link hrrem"
                    href="#"
                    >Shoes</a
                  >
                </li>
                <li
                  class="nav-item"
                  style="list-style-type: none; margin-top: 5px"
                >
                  <a
                    style="text-decoration: none; color: black"
                    class="nav-link hrrem"
                    href="#"
                    >Accessories</a
                  >
                </li>
                <li
                  class="nav-item"
                  style="list-style-type: none; margin-top: 5px"
                >
                  <a
                    style="text-decoration: none; color: black"
                    class="nav-link hrrem"
                    href="# "
                    >Vintage</a
                  >
                </li>
                <li
                  class="nav-item"
                  style="list-style-type: none; margin-top: 5px"
                >
                  <a
                    style="text-decoration: none; color: black"
                    class="nav-link hrrem"
                    href="#"
                    >Formal & Wedding</a
                  >
                </li>
              </ul>
              <q-separator></q-separator>
              <q-space></q-space>
              <q-btn
                v-close-popup
                color="primary"
                no-caps
                style="position: absolute; bottom: 0px"
                >Start selling in one click</q-btn
              >
            </div>
            <div style="margin-top: 10px">
              <ul class="navbar-nav me-auto mb-2" style="padding;: 10px">
                <li
                  class="nav-item"
                  style="list-style-type: none; margin-top: 5px"
                >
                  <a
                    style="text-decoration: none; color: #396353"
                    class="nav-link hrrem"
                    href="#"
                    >Top Brands</a
                  >
                </li>
                <li
                  class="nav-item"
                  style="list-style-type: none; margin-top: 5px"
                >
                  <a
                    style="text-decoration: none; color: black"
                    class="nav-link hrrem"
                    href="#"
                    >Anthropologie</a
                  >
                </li>
                <li
                  class="nav-item"
                  style="list-style-type: none; margin-top: 5px"
                >
                  <a
                    style="text-decoration: none; color: black"
                    class="nav-link hrrem"
                    href="#"
                    >Ann Toylor</a
                  >
                </li>
                <li
                  class="nav-item"
                  style="list-style-type: none; margin-top: 5px"
                >
                  <a
                    style="text-decoration: none; color: black"
                    class="nav-link hrrem"
                    href="#"
                    >Banana
                  </a>
                </li>
                <li
                  class="nav-item"
                  style="list-style-type: none; margin-top: 5px"
                >
                  <a class="hrrem" style="color: black" href="#"
                    >Calvin Klein</a
                  >
                </li>
              </ul>
              <q-separator></q-separator>
            </div>
            <q-img
              class="col-4"
              src="src\assets\images\Ekran görüntüsü 2023-12-10 124227.jpg"
            />
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6"></div>
    </div>
  </q-btn>
<q-btn outline
    flat
    push
    label="Men's Fashion"
    no-caps></q-btn>
<q-btn outline
    flat
    push
    label="Home & Garden"
    no-caps></q-btn>
<q-btn outline
    flat
    push
    label="Health & Beauty
"
    no-caps></q-btn>
<q-btn outline
    flat
    push
    label="Collectibles & Art
"
    no-caps></q-btn>
<q-btn outline
    flat
    push
    label="Handbags"
    no-caps></q-btn>
<q-btn outline
    flat
    push
    label="Jewelry"
    no-caps></q-btn>
<q-btn outline
    flat
    push
    label="Coupons"
    no-caps></q-btn>

    </q-toolbar>


  <div class="row" style="padding-left: 200px; padding-right: 200px; align: start;align-items: left;">
      <q-btn class="alisveris-sepet-product-list-item col-md-12"
        v-for="task in tasks"
        :key="task.id"
        style="margin-left: 0px;"><q-btn
          @click.stop="deleteTask(task)"
          flat
          round
          style="background-color: #58a600"
          dense
          color="primary"
          icon="img:public/img/19.jpg"
        />
        <img :src="task.kitapResim" style="height: 100px; width: 100px;" class="alisveris-sepet-resim col-2" />
        <p style="font-size: small;color: green;text-transform: none;">
          Added to your cart:
        </p>
        <br />
        <div style=" text-align: left">
          {{ task.kitapIsim }}
        </div>
        <div>
          {{ task.kitapFiyat }}
        </div>
      </q-btn>


  </div>
  <div class="row" style="padding-right: 200px;padding-left: 200px;"><h5>More great items from this seller</h5> <q-space></q-space><q-btn style="height: 50px; margin-top: 25px;" no-caps label="Shop all 6282 items"></q-btn> </div>
<div class="row">
      <q-btn
        class="col-md-2"
        v-for="img in images"
        :key="img.id"
        style="margin-top: 0px; padding: 0px; background-color: #ecf5f2"
      >
        <div style="background-color: #ecf5f2; text-align: center">
          <q-img :src="img.imageSrc" style="height: 250px" />
          <p style="font-size: large; text-align: center">{{ img.title }}</p>
        </div>
      </q-btn>
    </div>
    <div class="row" style="padding-right: 200px;padding-left: 200px;"><h5>Top-Rated in Non-Alcoholic Drinks >> Squash & Syrups</h5> <q-space></q-space><q-btn style="height: 50px; margin-top: 25px;" no-caps label="Shop all 6282 items"></q-btn> </div>
    <div class="row">
      <q-btn
        class="col-md-2"
        v-for="img in images"
        :key="img.id"
        style="margin-top: 0px; padding: 0px; background-color: #ecf5f2"
      >
        <div style="background-color: #ecf5f2; text-align: center">
          <q-img :src="img.imageSrc" style="height: 250px" />
          <p style="font-size: large; text-align: center">{{ img.title }}</p>
        </div>
      </q-btn>
    </div>
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
  onSnapshot,
  deleteDoc,
} from 'firebase/firestore';


export default defineComponent({
  name: 'TodoPage',

  data() {

    return {
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
      hover: false,
      products:[
    {id: 0, name: 'Add or edit items'},
    {id: 1, name: 'Import from Amazon'},
    {id: 2, name: 'Import from eBay'},
    {id: 3, name: 'Import from Etsy'},
    {id: 4, name: 'Import from Shopify'},
    {id: 5, name: 'Import from inventory file'},
    {id: 6, name: 'Open a Webstore'}
  ], helpers :[
    { id: 0, name: 'Visit the help center' },
    { id: 1, name: 'Contact support' },
    { id: 2, name: 'Seller success tips' },
    { id: 3, name: 'Read the Bonanza Selling blog' },
    { id: 4, name: 'Read the Bonanza Shopping blog' },
    { id: 5, name: 'How Bonanza works' },
    { id: 6, name: 'Ask the community' },
    { id: 7, name: 'Submit an idea' }
  ],
      loading: false,
      newTask: '',
      tasks: [],
    };

  },
  created() {
    this.getTasks();
  },
  methods: {
    async getTasks() {
      this.loading = true;
      this.tasks = [];

      const q = query(
        collection(this.$db, 'Tasks'),
        where('done', '==', false)
      );

      const unsubscribe = onSnapshot(q, (snapshot) => {
        this.tasks = [];
        snapshot.forEach((todo) => {
          this.tasks.push({ ...todo.data(), id: todo.id });
        });
        this.loading = false;
      });
    },
    deleteTask(task) {
      this.$q;

      const taskId = task.id;
      deleteDoc(doc(this.$db, 'Tasks', taskId));
    },
    async satinal() {
      const querySnapshot = await getDocs(collection(this.$db, 'Tasks'));

      this.$q;

      persistent: true,
        querySnapshot.forEach((doc) => {
          deleteDoc(doc.ref);
        });

      this.tasks = [];
    },
    async addTask(event) {
      this.loading = true;
      const target = event.target;
      const listItem = target.closest('.card');

      const discountPrice =
        listItem.querySelector('.discount-price').textContent;
      const productName = listItem.querySelector('.product-name').textContent;
      const productImage = listItem.querySelector('img').getAttribute('src');

      let todo = {
        kitapIsim: productName,
        kitapFiyat: discountPrice,
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
        totalPrice += parseFloat(task.kitapFiyat);
      });
      return totalPrice;
    },
  },
});
</script>

<style>
.my-card {
  width: 500px;
}
.hrrem {
  text-decoration: none;
  position: relative;
}
.hrrem::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0px;
  height: 1px;
  background: #000;
  opacity: 0;
}

.hrrem:hover:before {
  opacity: 1;
  width: 100%;
}

.custom-icon::before {
  content: url('/public/icons/1.jpg');
  width: 24px; /* İstenilen genişlik ve yükseklik değerlerini belirleyin */
  height: 24px;
}</style>
