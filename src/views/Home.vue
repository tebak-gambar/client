<template>
  <div class="home container">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Navbar />
    <div class="row">
      <GameRoom />
      <AnswerForm />
      <!-- <ScoreBoard /> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import GameRoom from '@/view4_5/GameRoom.vue'
import Navbar from '../view4_5/Navbar.vue'
import AnswerForm from '@/view4_5/AnswerForm.vue'
import ScoreBoard from '@/view4_5/ScoreBoard.vue'


export default {
  name: 'home',
  components: {
    HelloWorld, GameRoom, Navbar, AnswerForm, ScoreBoard
  }
}
</script>
