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

    <h1>bootstrap vue</h1>
    <b-alert show>Default Alert</b-alert>
    <b-alert show variant="danger" dismissible>
      Dismissible Alert!
    </b-alert>
     <b-alert show variant="success">Success Alert</b-alert>
  </div>
</template>

<script>
/* eslint-disable */
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
