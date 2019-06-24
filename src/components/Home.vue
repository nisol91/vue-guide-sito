<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ mex }}</h1>
    <h1 v-bind:title="message">Hover on me</h1>
    <h1 v-if="visto">You see me</h1>
    <p v-bind:key="el.text" v-for="el in todos">{{el.text}}</p>
    <div class="btn btn-danger" v-on:click="inverti">Cliccami per invertire {{mex}}</div>
    <div><input type="text" v-model="mex"></div>
    <p>{{foo}}</p>
    <button v-on:click="foo = 'foooz'" class="btn btn-success">cliccami</button>
    <div v-bind:class="{active: isActive}" >Sono attivo?</div>
    <b-alert show>Default Alert</b-alert>
    <b-alert show variant="danger" dismissible>
      Dismissible Alert!
    </b-alert>
     <b-alert show variant="success">Success Alert</b-alert>

    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },
  data() {
    return {
      isActive: true,
      inizio: 'componente creato',
      foo: 'bar',
      mex: 'ciaone',
      message: 'You loaded this page on ' + new Date().toLocaleString(),
      visto: true,
      todos: [
        {text: 'learn oop'},
        {text: 'learn vue'},
        {text: 'learn java'},
      ]
    }
  },
  created: function () {
    // `this` points to the vm instance
    console.log('stato: ' + this.inizio)
  },
  methods: {
    inverti: function () {
      this.mex = this.mex.split('').reverse().join('')
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.active {
  color: red;
}
</style>
