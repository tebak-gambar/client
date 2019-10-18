<template>
  <section>
    <div v-if="playingRoom.status === 'waiting' ">
      <center>
        <div id="roomlist-title">{{ playingRoom.name }}</div>
      </center>
      <div class="table-wrapper">
        <div class="thead-wrapper">
          <div class="head-item">No.</div>
          <div class="head-item">Player's Name</div>
        </div>
        <div class="tbody-wrapper">
          <!-- looping body item -->
          <div class="body-item" v-for="(player, index) in playingRoom.players" :key="player.id">
            <div class="body-item-number">{{ index + 1 }}</div>
            <div class="body-item-name">{{ player.name }}</div>
          </div>
        </div>
      </div>
      <center>
        <button @click="start" class="start-room-btn">Start</button>
        <button @click="toHome()" class="leave-room-btn">Leave</button>
      </center>
    </div>

    <!-- playing -->
    <div v-if="playingRoom.status === 'playing' " class="container mt-5">
      <div class="row">
        <div class="col-8 mx-auto tes">
          <div class="img_section">
            <img :src="playingRoom.question.image" alt="img1" />
            <div class="col-8 mx-auto my-5">
              <form @submit.prevent="answer">
                <fieldset class="answerText">
                  <input v-model="myanswer" id="answerText" type="text" required="required" />
                  <label for="answerText">Answer</label>
                  <div class="after"></div>
                </fieldset>
                <div>
                  <button class="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <b-modal class="modal-header" ref="my-modal" hide-footer title="Congratulations!">
      <div class="d-block text-center">
        <img id="patrick" :src="meme" />
      </div>
      <b-button class="mt-3 mx-auto" variant="secondary" block @click="hideModal">Close</b-button>
    </b-modal>

    <!-- waiting -->
    <!-- <div v-if="playingRoom.status === 'waiting' " id="waiting" class="container">
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
    </div>-->

    <!-- playing -->
    <!-- <div v-if="playingRoom.status === 'playing'">
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
    </div>-->
  </section>
</template>

<script>
const memeArr = [
  "https://media.giphy.com/media/ely3apij36BJhoZ234/giphy.gif",
  "https://media.giphy.com/media/1GTZA4flUzQI0/giphy.gif",
  "https://media.giphy.com/media/xDpB3lRInUYla/giphy.gif",
  "https://media.giphy.com/media/3o7bu57lYhUEFiYDSM/giphy.gif",
  "https://media.giphy.com/media/gFccuw5vFkc9trBiQ1/giphy.gif",
  "https://media.giphy.com/media/GK7grZYLG7cs0/giphy.gif",
  "https://media.giphy.com/media/H8EiECaJ0rG8k1X2Bg/giphy.gif",
  "https://media.giphy.com/media/WRQH9JNSLmGLHjH1oH/giphy.gif"
];

export default {
  data() {
    return {
      myanswer: "",
      meme: ""
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
    toHome() {
      this.$router.push("/home");
    },
    start() {
      if (this.playingRoom.master === localStorage.getItem("userId")) {
        this.$store.dispatch("start", {
          id: this.$route.params.id,
          status: "playing",
          winner: null
        });
      } else console.log("not authorized");
    },
    answer() {
      if (
        this.playingRoom.winner === null &&
        this.myanswer === this.playingRoom.question.answer
      ) {
        this.randomMeme();
        this.$store.dispatch("answer", {
          id: this.$route.params.id,
          winner: localStorage.getItem("userName"),
          status: "waiting"
        });
        this.showModal();
        this.myanswer = "";
      } else {
        this.myanswer = "";
      }
    },

    //meme
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    randomMeme() {
      this.meme = memeArr[Math.floor(Math.random() * 5)];
    }
  },
  created() {}
};
</script>

<style scoped>
.table-wrapper {
  margin: 80px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: aquamarine;
  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.thead-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
}

.head-item {
  text-align: left;
  font-size: 20px;
  font-weight: 700;
  padding-left: 15px;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 3px solid rgba(24, 211, 175, 0.5);
}

.head-item:first-child {
  background-color: #ecd2af;
  width: 10%;
  color: #444c5c;
}

.head-item:nth-child(2) {
  background-color: #444c5c;
  width: 90%;
  color: #ecd2af;
}

.head-item:nth-child(3) {
  background-color: #444c5c;
  width: 90%;
  color: #ecd2af;
}

.tbody-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.body-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
}

.body-item-number {
  background-color: #ecd2af;
  width: 10%;
  color: #444c5c;
  text-align: left;
  font-size: 16px;
  padding-left: 15px;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.body-item-name {
  background-color: #444c5c;
  width: 90%;
  color: #ecd2af;
  text-align: left;
  font-size: 16px;
  padding-left: 15px;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
}

.body-item-name:hover {
  background-color: #20b2aa;
  color: #f5f5f5;
}

.enter-room-btn {
  width: 30%;
  background-color: #444c5c;
  height: 40px;
  border: none;
  color: #ffa500;
  font-weight: 500;
  transition: all 0.5s ease-in-out;
}

.enter-room-btn:hover {
  height: 60px;
  width: 18%;
}

.start-room-btn {
  width: 20%;
  background-color: rgb(41, 194, 41);
  height: 40px;
  border: none;
  color: white;
  font-weight: 500;
  transition: all 0.5s ease-in-out;
  margin: 25px;
  border-radius: 2px;
  font-weight: bold;
}

.start-room-btn:hover {
  height: 60px;
  width: 18%;
  background-color: #eb4d4b;
}

.leave-room-btn {
  width: 20%;
  background-color: rgb(182, 23, 23);
  height: 40px;
  border: none;
  color: white;
  font-weight: 500;
  transition: all 0.5s ease-in-out;
  margin: 50px;
  border-radius: 2px;
  font-weight: bold;
}

.leave-room-btn:hover {
  height: 60px;
  width: 18%;
  background-color: #eb4d4b;
}

#roomlist-title {
  font-family: "Trebuchet MS", Helvetica, sans-serif;
  font-size: 49px;
  letter-spacing: -1.4px;
  word-spacing: -1.4px;
  color: #ffffff;
  font-weight: normal;
  text-decoration: overline;
  font-style: oblique;
  font-variant: small-caps;
  text-transform: capitalize;
  padding-top: 50px;
  padding-left: 50px;
}

.img_section {
  box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.5);
  height: 300px;
}
img {
  width: 100%;
  height: 300px;
  /* object-fit: cover; */
}

fieldset {
  position: relative;
}

.fa-search {
  position: relative;
  top: 0;
  font-size: 20px !important;
}

.answerText {
  /* margin: 20px 50px; */
  /* padding-left: 50px; */
  -webkit-box-flex: 5;
  -ms-flex-positive: 5;
  flex-grow: 5;
}

.enter {
  margin: 20px;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

label {
  position: absolute;
  top: -5px;
  letter-spacing: 10px;
  font-size: 20px;
  font-weight: bold;
  color: RGBA(55, 73, 87, 0.8);
  -webkit-transform-origin: left;
  -ms-transform-origin: left;
  transform-origin: left;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

input:focus ~ label {
  color: RGBA(254, 253, 255, 1);
  text-shadow: 1px 1px 1px black;
  font-weight: bold;
}

input:focus ~ label,
input:valid ~ label {
  top: 0;
  letter-spacing: 5px;
  -webkit-transform: translate(0, -30px) scale(0.7, 0.7);
  -ms-transform: translate(0, -30px) scale(0.7, 0.7);
  transform: translate(0, -30px) scale(0.7, 0.7);
}

input {
  font-family: system-ui, Helvetica, Arial, sans-serif;
  font-size: 20px !important;
  width: 100%;
  border: none;
  margin-top: 0;
  background-color: transparent;
  color: aliceblue;
  font-weight: bold;
  text-shadow: 1px 1px 1px black;
}

input:focus {
  outline: none;
}

.after {
  width: 100%;
  height: 2px;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(50%, RGBA(254, 253, 255, 1)),
    color-stop(50%, transparent)
  );
  background: -webkit-linear-gradient(
    left,
    RGBA(254, 253, 255, 1) 50%,
    transparent 50%
  );
  background: -o-linear-gradient(
    left,
    RGBA(254, 253, 255, 1) 50%,
    transparent 50%
  );
  background: linear-gradient(
    to right,
    RGBA(254, 253, 255, 1) 50%,
    transparent 50%
  );
  background-color: RGBA(55, 73, 87, 0.8);
  background-size: 200% 100%;
  background-position: 100% 0;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

#patrick {
  width: 300px;
  height: 300px;
}

.modal-body {
  background-color: red !important;
}

.btn-secondary {
  width: 100px;
}

.modal-header {
  background-color: black;
}
</style>