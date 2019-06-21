  <template>
  <div id="app">
    <div>
      <b-nav small>
        <router-link to="/">Home</router-link>
        <router-link to="/form">Form</router-link>
        <router-link to="/form_2">Form_2</router-link>

      </b-nav>
    </div>
    <!-- routes will be rendered here -->
    <router-view/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Form from './components/Form.vue'
import Form_2 from './components/Form_2.vue'





export default {
  name: 'app',
  components: {
    Home,
    Form,
    Form_2
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

a {
  margin: 0 10px;
}
</style>
