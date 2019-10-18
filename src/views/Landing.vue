<template>
  <div id="start">
    <center>
      <img src="
            https://i.imgur.com/YqkbZ4J.png" />
      <b-card
        header="Input your name here to start the game!"
        header-text-variant="black"
        header-tag="header"
        header-bg-variant="warning"
        style="max-width: 35rem;"
      >
        <input v-model="landingForm.name" id="start-inputName" type="text" />
        <br />

        <form @submit.prevent="postUser()" class="form-login">
          <b-button type="submit" variant="success">Submit</b-button>
        </form>
      </b-card>
    </center>
  </div>
  <!-- <div class="container">
    <div class="row">
      <div class="col-md-12">
        <form @submit.prevent="postUser" action="#">
          <div class="form-group">
            <label for="#">Name</label>
            <input v-model="landingForm.name" class="form-control" type="text" />
          </div>
          <button class="btn btn-primary">Enter</button>
        </form>
      </div>
    </div>
  </div>-->
</template>

<script>
export default {
  computed: {
    landingForm: {
      get() {
        return this.$store.state.landingForm;
      },
      set(val) {
        return this.$store.commit("updateLandingForm", val);
      }
    }
  },
  methods: {
    postUser() {
      this.$store.dispatch("postUser").then(_ => {
        this.$router.push("/home");
      });
    }
  }
};
</script>

<style scoped>
img {
  height: 450px;
  width: 450px;
}
.card-header {
  font-weight: bold;
  color: black;
}

.card-body {
  height: 120px;
}

#start-inputName {
  height: 40px;
  margin-bottom: 10px;
}
</style>