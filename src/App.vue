<template>
  <div id="app">
    <div>
      <b-nav small>

        <router-link to="/">Home</router-link>
        <router-link to="/form">Form</router-link>
        <router-link to="/form_2">Form_2</router-link>
        <router-link to="/ionic_1">Ionic_1</router-link>
      </b-nav>
    </div>
    <main class="App__main">
      <transition
        name="fade"
        mode="out-in"
      >
    <!-- routes will be rendered here -->

        <router-view/>
      </transition>
    </main>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Form from './components/Form.vue'
import Form_2 from './components/Form_2.vue'
import Ionic_1 from './components/Ionic_1.vue'
import singlepost from './components/singlepost.vue'






export default {
  name: 'app',
  components: {
    Home,
    Form,
    Form_2,
    Ionic_1,
    singlepost,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* transition */
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}



a {
  margin: 0 10px;
  color: green!important;
}
a:hover {
  text-decoration: none!important;
}
</style>
