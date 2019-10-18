<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <form @submit.prevent="postRoom" action="#">
          <div class="form-group">
            <label for="#">Room Name</label>
            <input v-model="roomForm.name" type="text" class="form-control" />
          </div>
          <button class="btn btn-primary">Create Room</button>
        </form>
      </div>
    </div>
    <div class="row mt-5">
      <div v-for="room in rooms" :key="room.id" class="col-md-4">
        {{ room.name }}
        <br />
        <button @click="join(room.id)" class="btn btn-primary">Join Room</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    roomForm: {
      get() {
        return this.$store.state.roomForm;
      },
      set(val) {
        return this.$store.commit("updateRoomForm", val);
      }
    },
    rooms: {
      get() {
        return this.$store.state.rooms;
      }
    },
    questions: {
      get() {
        return this.$store.state.questions;
      }
    }
  },
  methods: {
    postRoom() {
      this.$store.dispatch("postRoom");
    },
    getRooms() {
      this.$store.dispatch("getRooms");
    },
    getQuestions() {
      this.$store.dispatch("getQuestions");
    },
    join(id) {
      this.$store.dispatch("join", id);
    }
  },
  created() {
    this.getRooms();
    this.getQuestions();
  }
};
</script>

<style>
</style>