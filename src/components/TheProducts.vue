<script lang="ts">
import { ref } from 'vue';
export default {
  setup() {
    return {
      slide: ref('style'),
      baslik1: 'What People are Viewing Right Now',
      baslik2: 'Get them before they are gone!',
    };
  },
};
</script>
<template>
  <div id="q-app">
    <div class="q-pa-md">
      <div class="q-col-gutter-md row items-start">
        <div class="col-2">
          <q-btn>
            <q-img src="src\assets\images\pro2.jpg" no-native-menu> </q-img>
            <div>
              <h6 style="text-align: center">
                AES Wholesale Lot of 6 Dominican Republic Country 100% Cotton
                22"x22" Ba...<br />
                $15.88 <br />
                Weather Stations
              </h6>
            </div>
          </q-btn>
        </div>
        <div class="col-2">
          <q-btn>
            <q-img src="src\assets\images\pro3.jpg" no-native-menu> </q-img>
            <div>
              <h6 style="text-align: center">
                Mighty Morphin Power Rangers Trading Card #53 Don’t Look Behind
                You <br />
                $1.97<br />
                Trading Card Singles
              </h6>
            </div>
          </q-btn>
        </div>
        <div class="col-2">
          <q-btn>
            <q-img src="src\assets\images\pro4.jpg" no-native-menu> </q-img>
            <div>
              <h6 style="text-align: center">
                Women's Star Print Hoodie Sweatshirt - Grayson Threads Green
                Size Large<br />
                $18.33<br />
                Hoodies & Sweatshirts
              </h6>
            </div>
          </q-btn>
        </div>
        <div class="col-2">
          <q-btn>
            <q-img src="src\assets\images\pro5.jpg" no-native-menu> </q-img>
            <div>
              <h6 style="text-align: center">
                Fonda Orange Green Autumn Fall Leaves Halloween Tablec...
                <br />$12.82<br />Party Tableware & Serveware<br />4 Views
              </h6>
            </div>
          </q-btn>
        </div>
        <div class="col-2">
          <q-btn>
            <q-img src="src\assets\images\pro6.jpg" no-native-menu> </q-img>
            <div>
              <h6 style="text-align: center">
                Aveda Full Spectrum Deep 6N Natural Dark Blonde Lift And Deposit
                Creme C..<br />$21.44<br />Other<br />4 Views
              </h6>
            </div>
          </q-btn>
        </div>
        <div class="col-2">
          <q-btn>
            <q-img src="src\assets\images\pro7.jpg" no-native-menu> </q-img>
            <div>
              <h6 style="text-align: center">
                Aveda Full Spectrum Deep 6N Natural Dark Blonde Lift And Deposit
                Creme C..<br />$21.44<br />Other<br />4 Views
              </h6>
            </div>
          </q-btn>
        </div>
      </div>
    </div>
  </div>
</template>
