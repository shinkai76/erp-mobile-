<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div style="width: 100px;height:2px;background-color: red"></div>
    <div style="width: 1rem;height:2px;background-color: red"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from 'components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
