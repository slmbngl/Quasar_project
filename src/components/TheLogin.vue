<script lang="ts">
import { ref } from 'vue';
export default {
  setup() {
    return {
      slide: ref('style'),
    };
  },
};
</script>

<template>
  <q-layout>
    <q-header></q-header>
    <div class="login-box">
      <div class="outer-box row">
        <div>
          <q-img
            col-12
            src="src\assets\images\login.jpg"
            style="position: relative; margin: 0; padding: 0"
          >
          </q-img>
        </div>
        <q-btn to="/login" text-color="black" label="Log in"></q-btn>
        <q-btn
          to="/createAccount"
          text-color="black"
          label=" Create a Bonanza Account"
        ></q-btn>
        <q-space> </q-space>
        <q-btn text-color="black" icon="facebook"></q-btn>
        <q-btn text-color="black" icon="instagram"></q-btn>
        <input type="text" placeholder="Email address" />
        <input type="text" placeholder="Password" />
        <q-btn
          style="background-color: #529a00; color: white; width: 100%; height 100%; :white "
          label="Log in"
        ></q-btn>
        <div style="text-align: center">
          <q-btn to="/" text-color="black" label="Home"> </q-btn>
          <q-btn text-color="black" label="Contact"> </q-btn>
          <q-btn text-color="black" label="Privacy Policy"> </q-btn>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<style>
body {
  box-sizing: border-box;
  text-align: center;
  color: #e5e5e5;
}

input {
  display: block;
  width: 98%;
  height: 30px;
  margin-top: 1em;
  padding: 4px;
}

.login-box {
  padding: 1em 1em 1em 1em;
  margin: auto;
  text-align: center;
  display: block;
  background-color: white;
  /*border: 1px dashed white;*/
  width: 60%;
  height: auto;
}

.outer-box {
  display: block;
  width: 100%;
  height: 100%;
  margin: auto;
  background: #e5e5e5;
  border-radius: 5px;

  height: 20em;
  height: auto;
}

#btn-login {
  display: block;
  width: 100%;
  height: 40px;
  margin-top: 2em;
  border-radius: 4px;
  background-color: #e5e5e5;
  color: #fff;
}

#btn-forgot {
  display: block;
  width: 100%;
  margin-top: 1em;
  border-radius: 2px;
  color: #fff;
  background-color: #000d36;
}
</style>
