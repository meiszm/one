<template>
  <div id="app">
    <ul>
      <li><router-link to="/">Home</router-link> </li>
      <li><router-link to="/helloworld">helloword</router-link> </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
    name: 'App',
    components: {
        data(){
            return {}
        },
        methods: {
            updateTitle: function (updatedTitle) {
                this.title = updatedTitle;
            }
        }
    }
}
</script>

<style>
  body{
    margin:10%;
  }
</style>
