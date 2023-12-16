<template>
  <div class="q-pa-md">
    <div class="row q-gutter-md">
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="black"
        height="470px"
        navigation
        padding
        arrows
        class="col-8 text-white shadow-1 rounded-borders"
        style="background-color: #f1f1f1"
      >
        <q-carousel-slide name="style" class="column no-wrap flex-left">
          <div class="row">
            <div class="col-6 flex-left">
              <ul>
                <li style="list-style-type: none">
                  <h3 style="color: #396353">
                    Visit our shopping blog, The Bonanza Buzz
                  </h3>
                </li>
                <li style="list-style-type: none">
                  <h7 style="color: #396353">
                    Keep up on the latest trends and explore the diverse array
                    of products, from daily essentials to one-of-a-kind handmade
                    items, offered by Bonanza sellers.
                  </h7>
                </li>
              </ul>
              <ul>
                <br />
                <br />
                <ul>
                  <li style="list-style-type: none">
                    <a
                      href="#"
                      style="
                        font-size: large;
                        text-decoration: none;
                        color: #396353;
                      "
                      >Read now</a
                    >
                  </li>
                </ul>
              </ul>
            </div>
            <div class="col-6 flex-left">
              <q-img
                style="margin-top: 20px"
                src="src\assets\images\carousel.jpg"
              ></q-img>
            </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-img src="src\assets\images\carousel2.jpg"></q-img>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <q-img src="src\assets\images\carousel3.jpg"></q-img>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <q-img src="src\assets\images\carousel4.jpg"></q-img>
        </q-carousel-slide>
      </q-carousel>
      <q-card clickable vertical class="col" style="margin: 0px; padding: 0px">
        <q-img
          to="/"
          style="margin-top: 20px"
          src="src\assets\images\index.jpg"
        ></q-img>
        <q-img to="/" src="src\assets\images\index2.jpg"></q-img>
      </q-card>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      slide: ref('style'),
      lorem:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.',
    };
  },
};
</script>
