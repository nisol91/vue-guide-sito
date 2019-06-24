<template>
  <ion-app>
    <ion-header>
      <ion-toolbar color="danger">
        <ion-title> TODO</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list v-if="todos.length > 0">
        <ion-item v-for="todo in todos" :key="todo.id">
          <router-link :to="{ name: 'singlepost', params: { todoid: todo.id } }">
            <ion-label>{{todo.title}}</ion-label>
          </router-link>
        </ion-item>
      </ion-list>
      <ion-list v-else>
        <ion-item v-for="i in 20" :key="i">
          <ion-label>
            <ion-skeleton-text animated>
            </ion-skeleton-text>
          </ion-label>
        </ion-item>
      </ion-list>
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <router-link to="/">
      <ion-fab-button>
        <ion-icon name="home"></ion-icon>
      </ion-fab-button>
</router-link>
    </ion-fab>
    </ion-content>
  </ion-app>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Ionic_1',
  props: {
    msg: String
  },
  data() {
    return {
      todos: [],
      isActive: true,
      inizio: 'componente creato',
      mex: 'ionic',
    }
  },
  created: function () {
    // `this` points to the vm instance
    console.log('stato: ' + this.inizio)
    setTimeout(
      () => (
        this.getDataFromAPI()
        ), 1000)
      
  },
  methods: {
    async getDataFromAPI() {
      try {
        const req = await fetch('https://jsonplaceholder.typicode.com/todos')
        
        this.todos = await req.json()
        console.log(this.todos);
        
      }
      catch(e) {
        console.error(`Error: ${e}`)
      }
    },
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
