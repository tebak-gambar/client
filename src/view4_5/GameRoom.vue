<template>
  <div>
    <Navbar />
    <div class="col-8 mx-auto tes">
        <div class="img_section">
          <img src="../assets/capchai.png" alt="img1">
          <AnswerForm />
        </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../view4_5/Navbar'
import AnswerForm from '../view4_5/AnswerForm'

export default {
  components: {
    Navbar,
    AnswerForm
  }

}
</script>

<style scoped>
/* .tes {
  border: 1px solid red;
} */
.img_section {
  box-shadow: 5px 5px 4px rgba(0, 0, 0, .5);
  height: 300px;
}
img {
  width: 100%;
  height: 300px;
  /* object-fit: cover; */
}
</style>
