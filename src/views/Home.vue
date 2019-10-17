<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <GameRoom />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import GameRoom from '@/view4_5/GameRoom.vue'


export default {
  name: 'home',
  components: {
    HelloWorld,GameRoom
  }
}
</script>
