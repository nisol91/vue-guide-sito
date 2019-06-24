<template>
  <div>
    <ion-app>
      <ion-header>
        <ion-toolbar color="danger">
          <ion-title> TODO_singletodo</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        
        <div>singolo todo</div>
       
        <div>{{todoid}}</div>
        
        <div>{{todos.title}}</div>

        
        <ion-fab vertical="bottom" horizontal="end" slot="fixed">
          <router-link to="/Ionic_1">
            <ion-fab-button>
              <ion-icon name="arrow-back"></ion-icon>
            </ion-fab-button>
          </router-link>
        </ion-fab>
      </ion-content>
    </ion-app>
  </div>
</template>

<script>
/* eslint-disable */
  export default {
    name: 'singlepost',
    props: ['contenuto'],
    data() {
      return {
        todoid: this.$route.params.todoid,
        todos: [],
        isActive: true,
        inizio: 'componente creato',
        mex: 'ionic',
      }
    },
    created: function () {
      // `this` points to the vm instance
      console.log('stato: ' + this.inizio)
      console.log(this.todoid);

      setTimeout(
        () => (
          this.getDataFromAPI()
        ), 100)

    },
    methods: {
      async getDataFromAPI() {
        try {
          const req = await fetch('https://jsonplaceholder.typicode.com/todos/' + this.todoid)

          this.todos = await req.json()
          console.log(this.todos);

        } catch (e) {
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