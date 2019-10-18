<template>
    <div>
        <center> <div id="roomlist-title">Room List</div> </center>
        <div class="table-wrapper">
            <div class="thead-wrapper">
                <div class="head-item">No.</div>
                <div class="head-item">Room Name</div>
            </div>
            <div class="tbody-wrapper"> <!-- looping body item -->
                <div class="body-item">
                    <div class="body-item-number">1</div>
                    <div class="body-item-name" @click="setRoomName('Room Name')">Room Name</div> <!-- @click disini -->
                </div>
                <div class="body-item">
                    <div class="body-item-number">2</div>
                    <div class="body-item-name" @click="setRoomName('Room Name 2')">Room Name 2</div>
                </div>
            </div>
        </div>
        <div class="select-room">
            <div class="selected-room-name">{{ roomName }}</div> <!-- Isi room name di sini -->
            <button @click="toRoom()" class="enter-room-btn">Enter Room</button>
        </div>
        <center>
                <div>
                    <b-button v-b-modal.modal-prevent-closing>Create a Room</b-button>
                    <button @click="exit()" class="leave-room-btn">Quit</button>
                    <b-modal
                    id="modal-prevent-closing"
                    ref="modal"
                    title="Create a Room"
                    @show="resetModal"
                    @hidden="resetModal"
                    @ok="handleOk"
                    >
                    <form ref="form" @submit.stop.prevent="">
                        <b-form-group
                        label="Name"
                        label-for="name-input"
                        >
                        <b-form-input
                            id="name-input"
                        ></b-form-input>
                        </b-form-group>
                    </form>
                    </b-modal>
                </div>
                
        </center>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            roomName: ''
        }
    },
    methods: {
        setRoomName: function(toBeRoom) {
            console.log('jalan')
            console.log('tobeRoom', toBeRoom)
            this.roomName = toBeRoom
        },
        toRoom () {
            this.$router.push(`/room/${this.roomName}`)
            localStorage.setItem('room', this.roomName)
        }, 
        exit() {
            this.$router.push('/')
        }
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

.select-room {
    margin: 50px 80px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    background-color: #ffa500;
    align-items: center;
    box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
}

.selected-room-name {
    width: 70%;
    background-color: #ffa500;
    height: 40px;
    padding-left: 15px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #444c5c;
    font-weight: 500;
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

.btn-secondary {
    width: 20%;
    background-color: rgb(41, 194, 41);
    height: 40px;
    border: none;
    color: white;
    transition: all 0.5s ease-in-out;
    font-weight: bold;
}

.btn-secondary:hover {
    height: 60px;
    width: 18%;
    background-color: #eb4d4b;
    font-weight: bold;
    
}

.leave-room-btn {
    width: 20%;
    background-color: rgb(182, 23, 23);
    height: 40px;
    border: none;
    color: white;
    font-weight: bold;
    transition: all 0.5s ease-in-out;
    margin: 50px;
    border-radius: 2px;
}

.leave-room-btn:hover {
    height: 60px;
    width: 18%;
    background-color: #eb4d4b;
    font-weight: bold;
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