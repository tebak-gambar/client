<template>
  <div class="container">
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
  </div>
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

<style>
</style>