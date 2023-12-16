<script lang="ts">
export default {
  data() {
    return {
      hover: false,
    };
  },
};
</script>
<template>
  <q-btn
    @mouseenter="hover = true"
    @mouseleave="hover = false"
    class="div"
    :class="{ 'div-hover': hover }"
    text-color="black"
    label="Women"
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
</template>

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
</style>
