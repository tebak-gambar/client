<template>
  <div class="score container">
    <NavbarScore />
    <div class="row">
      <ScoreBoard />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import NavbarScore from '../view4_5/NavbarScore.vue'

import ScoreBoard from '@/view4_5/ScoreBoard.vue'


export default {
  name: 'home',
  components: {
    NavbarScore, ScoreBoard
  }
}
</script>
