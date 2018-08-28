<template>
  <footer class="Footer">
    <p>{{ msg }}</p>
    <h3>{{title}}</h3>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
    props:{
      title:{
          type:String,
          required:true
      }
    },
  data () {
    return {
      msg: 'Footer'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer{
  background: #222;
  padding: 6px;
}
  p{
    color:lightgreen;
    text-align:center;
  }
</style>
