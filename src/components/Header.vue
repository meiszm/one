<template>
  <header class="Header">
    <h1>{{msg}}</h1>
    <h1 v-on:click="changeTitle">{{title}}</h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
    props:{
      title:{
          type:String,
          required:true
      }
    },
  data () {
    return {
      msg: 'Header'
    }
  },
    methods:{
      changeTitle:function () {
          this.title = 'hahahah';
//          this.$emit('changeTitle',' change Title');
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
  background: lightgreen;
  padding:10px;
}
  h1{
    color: #222;
    text-align:center;
  }

</style>
