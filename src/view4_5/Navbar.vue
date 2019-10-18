<template>
    <div class="container-fluid">
        <b-navbar variant="faded" type="light">
            <b-navbar-brand href="#">
                <img class="logo" src="../assets/logotebakgambar.png" alt="logo"></b-navbar-brand>

                <b-navbar-nav class="ml-auto">
                    <countdown :end-time="new Date().getTime() + 60000">
                        <span class="timer" slot="process" slot-scope="timeObjInfo">{{ `${timeObjInfo.timeObj.ceil.s}` }}</span>
                        <span class="timeOut" slot="finish">time-out</span>
                    </countdown>

                </b-navbar-nav>
            </b-navbar>
        </div>
    </template>

<script>
    export default {
        name:'Navbar'
    }
</script>

<style>
    .navbar_container {
        padding: 50px 0;
    }

    .logo {
        width: 6.5vw;
    }
    .timer {
        font-weight: bold;
        color: white;
        font-size: 5vw;
        text-shadow: 3px 3px 3px black;
    }
    .timeOut {
        font-weight: bold;
        color: white;
        font-size: 3vw;
        text-shadow: 3px 3px 3px black;
    }
</style>