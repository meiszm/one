<template>
  <div id="app">
    <Header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></Header>
    <User v-bind:users="users"></User>
    <Footer v-bind:title="title"></Footer>
  </div>
</template>

<script>
    import HelloWorld from './HelloWorld'
    import Header from './Header.vue'
    import Footer from './Footer.vue'
    import User from './User.vue'

    export default {
        name: 'App',
        components: {
            "HelloWorld":HelloWorld,
            "Header":Header,
            "Footer":Footer,
            "User":User
        },
        data(){
            return {
                users :[{name:'Jim',positon:"PHP",age:'18',show:false},
                    {name:'Jim',positon:"PHP",age:'18',show:false},
                    {name:'Jim',positon:"PHP",age:'18',show:false},
                    {name:'Jim',positon:"PHP",age:'18',show:false},
                    {name:'Jim',positon:"PHP",age:'18',show:false},
                    {name:'Jim',positon:"PHP",age:'18',show:false}
                ],
                title:"wo shi Title"
            }
        },
        methods:{
            updateTitle:function (updatedTitle) {
                this.title=updatedTitle;
            }
        }
    }
</script>

<style scoped>
  body{
    margin:10%;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
