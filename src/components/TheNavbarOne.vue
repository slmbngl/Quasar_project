  <script setup lang="ts">
  import { ref } from 'vue';
import Foo from 'components/TheNavbarOneDotZero.vue';
import Zoo from 'components/TheNavbarOneDotOne.vue';
import TheContent from 'components/TheContent.vue';
import TheProducts from 'components/TheProducts.vue';



const helpers = ref([
    { id: 0, name: 'Visit the help center' },
    { id: 1, name: 'Contact support' },
    { id: 2, name: 'Seller success tips' },
    { id: 3, name: 'Read the Bonanza Selling blog' },
    { id: 4, name: 'Read the Bonanza Shopping blog' },
    { id: 5, name: 'How Bonanza works' },
    { id: 6, name: 'Ask the community' },
    { id: 7, name: 'Submit an idea' }
  ])

const products = ref([
    {id: 0, name: 'Add or edit items'},
    {id: 1, name: 'Import from Amazon'},
    {id: 2, name: 'Import from eBay'},
    {id: 3, name: 'Import from Etsy'},
    {id: 4, name: 'Import from Shopify'},
    {id: 5, name: 'Import from inventory file'},
    {id: 6, name: 'Open a Webstore'}
  ])


  </script>
  <template>
    <q-toolbar class="GPLAY__toolbar bg-primary">
      <div class="q-pa-md">
        <q-item-label>
          <q-btn-dropdown
            class="special"
            flat
            :ripple="false"
            round
            dense
            no-caps
            color: primary
            text-color="white"
            label="Sell in Bonanza"
          >
            <q-list>
              <q-btn v-close-popup color="primary" no-caps>Start selling in one click</q-btn>
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
            style="margin-left: 10px;"
            flat
            :ripple="false"
            round
            dense
            no-caps
            color: primary
            text-color="white"
            label="Bonanza Lending " />

            <q-btn-dropdown
            style="margin-left: 20px;
            overflow: hidden;"
            class="special"
            flat
            :ripple="false"
            round
            dense
            no-caps
            color: primary
            text-color="white"
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
            dense
            no-caps
            color: primary
            text-color="white"
            label="Log in">
        </q-btn>

        <q-btn
            class="special"
            flat
            :ripple="false"
            round
            dense
            no-caps
            color: primary
            text-color="white"
            label="Register">
        </q-btn>
      </div>

    </q-toolbar>
    <Foo/>
    <Zoo/>
    <TheContent/>
    <TheProducts/>
  </template>
  <style>
  .special .q-focus-helper {
    display: none;
  }
  </style>
