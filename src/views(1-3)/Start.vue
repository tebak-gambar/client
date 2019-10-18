<template>
    <div id="start">
        <center>
            <img src="./img/tebakgambar.png"> 
            <b-card
                    header="Input your name here to start the game!"
                    header-text-variant="black"
                    header-tag="header"
                    header-bg-variant="warning"
                    style="max-width: 35rem;"
                >
                    <input v-model="username" id="start-inputName" type="text"> <br>

                    <form @submit.prevent="toHome()" class="form-login">
                        <b-button type="submit" variant="success">Submit</b-button>
                    </form>
            </b-card>
        </center>
    </div>
</template>

<script>
export default {
    name: 'start',
    data () {
        return {
            username: ''
        }
    },
    methods: {
        toHome() {
            this.$router.push('/home')
            localStorage.setItem('name', this.username)
        }
    }

}
</script>

<style>
img{
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