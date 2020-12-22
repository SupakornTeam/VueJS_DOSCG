<template>
  <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
  <img alt="Vue logo" src="./assets/man.png" width="100" height="100"><br>
  <img alt="Vue logo" src="./assets/logo.png" width="80" height="80" >
  <HelloWorld msg="Welcome to My first time Vue.js App"/>
  <Header/>
  <app-footer v-bind:title="title"></app-footer>
</template>

<script>
// Imports
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import HelloWorld from './components/HelloWorld.vue';

export default {
    components: {
        'app-header': Header,
         HelloWorld , 
        'app-footer': Footer,
    },
    data () {
        return {
          title: 'First time form Vue.js'
        }
    },
    methods: {
      updateTitle: function(updatedTitle){
        this.title = updatedTitle;
      }
    }
}


// // import Header from './components/Header.vue';
// import HelloWorld from './components/HelloWorld.vue';
// // import Footer from './components/Footer.vue';


// export default {
//   //name: 'App',
//   components: {
//    // Header
//     HelloWorld
//    // Footer    
//     }
// }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
