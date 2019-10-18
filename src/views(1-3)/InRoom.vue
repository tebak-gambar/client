<template>
    <div>
        <center> <div id="roomlist-title">{{ roomtitle }}</div> </center>
        <div class="table-wrapper">
            <div class="thead-wrapper">
                <div class="head-item">No.</div>
                <div class="head-item">Player's Name</div>
                <div class="head-item">Role</div>
    
            </div>
            <div class="tbody-wrapper"> <!-- looping body item -->
                <div class="body-item">
                    <div class="body-item-number">1</div>
                    <div class="body-item-name">Rizki</div> 
                    <div class="body-item-name">Room Master</div> 
                </div>
                <div class="body-item">
                    <div class="body-item-number">2</div>
                    <div class="body-item-name">Aiman</div>
                    <div class="body-item-name">Participant</div> 
                </div>
            </div>
        </div>
        <center>
            <button class="start-room-btn">Start</button>
            <button @click="toHome()" class="leave-room-btn">Leave</button>

        </center>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            roomtitle: ''
        }
    },
    methods: {
      toHome () {
          this.$router.push('/home')
          localStorage.removeItem('room')
      }  
    },
    created() {
        this.roomtitle = localStorage.getItem('room')
    }
}
</script>

<style scoped>

.table-wrapper {
    margin: 80px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: aquamarine;
    box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
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
    border-bottom: 3px solid rgba(24,211,175, 0.5);
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
    background-color: #eb4d4b
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
    background-color: #eb4d4b
}

#roomlist-title {
    font-family: "Trebuchet MS", Helvetica, sans-serif;
    font-size: 49px;
    letter-spacing: -1.4px;
    word-spacing: -1.4px;
    color: #FFFFFF;
    font-weight: normal;
    text-decoration: overline;
    font-style: oblique;
    font-variant: small-caps;
    text-transform: capitalize;
    padding-top: 50px;
    padding-left: 50px;
}

</style>