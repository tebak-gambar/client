<template>
  <section>
    <!-- waiting -->
    <div v-if="playingRoom.status === 'waiting' " id="waiting" class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>Waiting Room</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <ul>
            <li v-for="player in playingRoom.players" :key="player.id">{{player.name}}</li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <button @click="start" class="btn btn-primary">Start</button>
        </div>
      </div>
    </div>

    <!-- playing -->
    <div v-if="playingRoom.status === 'playing'">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <img :src="playingRoom.question.image" alt="#" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <form @submit.prevent="answer" action="#">
              <div class="form-group">
                <label for="#">Answer</label>
                <input v-model="myanswer" type="text" />
              </div>
              <button class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      myanswer: ""
    };
  },
  computed: {
    playingRoom() {
      let result = {};
      this.$store.state.rooms.forEach(el => {
        if (el.id == this.$route.params.id) result = el;
      });
      return result;
    }
  },
  methods: {
    start() {
      if (this.playingRoom.master === localStorage.getItem("userId")) {
        this.$store.dispatch("start", {
          id: this.$route.params.id,
          status: "playing",
          winner: null
        });
      } else console.log("not authenticated");
    },
    answer() {
      if (
        this.playingRoom.winner === null &&
        this.myanswer === this.playingRoom.question.answer
      ) {
        this.$store.dispatch("answer", {
          id: this.$route.params.id,
          winner: localStorage.getItem("userName"),
          status: "waiting"
        });
      } else {
        this.myanswer = "";
      }
    }
  },
  created() {}
};
</script>

<style>
</style>