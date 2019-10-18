import Vue from "vue";
import Vuex from "vuex";
import router from "../router";

import Collection from "@/api/firebase";
const { User, Room, Question } = Collection;

import Swal from "sweetalert2";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //user
    landingForm: {
      name: ""
    },

    //room
    roomForm: {
      name: ""
    },
    rooms: [],

    //questions
    questions: []
  },
  mutations: {
    swalError(state, payload) {
      Swal.fire({
        type: "error",
        text: payload
      });
    },
    updateLandingForm(state, payload) {
      state.landingForm = {
        ...state.landingForm,
        ...payload
      };
    },
    updateRoomForm(state, payload) {
      state.roomForm = {
        ...state.roomForm,
        ...payload
      };
    },
    setRooms(state, payload) {
      state.rooms = payload;
    },
    updatePlayingRoom(state, payload) {
      state.playingRoom = {
        ...state.playingRoom,
        ...payload
      };
    },
    setQuestions(state, payload) {
      state.questions = payload;
    }
  },
  actions: {
    postUser({ commit, state }) {
      User.add({
        name: state.landingForm.name
      })
        .then(user => {
          localStorage.setItem("userId", user.id);
          localStorage.setItem("userName", state.landingForm.name);
        })
        .catch(err => {
          commit("swalError", err);
        });
    },
    postRoom({ commit, state }) {
      Room.add({
        name: state.roomForm.name,
        master: localStorage.getItem("userId"),
        players: [
          {
            id: localStorage.getItem("userId"),
            name: localStorage.getItem("userName"),
            score: 0
          }
        ],
        question: {
          image: "",
          answer: ""
        },
        status: "waiting",
        winner: null
      })
        .then(room => {
          router.push(`/waiting/${room.id}`);
        })
        .catch(err => {
          commit("swalError", err);
        });
    },
    getRooms({ commit, state }) {
      Room.onSnapshot(querySnapshot => {
        var results = [];
        querySnapshot.forEach(doc => {
          results.push({
            id: doc.id,
            ...doc.data()
          });
        });
        commit("setRooms", results);
      });
    },
    join({ commit, state }, payload) {
      Room.doc(payload)
        .get()
        .then(room => {
          let obj = room.data();
          let unique = true;
          obj.players.forEach(player => {
            if (player.id == localStorage.getItem("userId")) unique = false;
          });

          if (unique) {
            obj.players.push({
              id: localStorage.getItem("userId"),
              name: localStorage.getItem("userName"),
              score: 0
            });
          }
          localStorage.setItem("roomId", room.id);
          return Room.doc(payload).set(obj);
        })
        .then(room => {
          router.push(`/waiting/${localStorage.getItem("roomId")}`);
        })
        .catch(err => {
          commit("swalError", err);
        });
    },
    getQuestions({ commit, state }) {
      Question.onSnapshot(querySnapshot => {
        var results = [];
        querySnapshot.forEach(doc => {
          results.push({
            id: doc.id,
            ...doc.data()
          });
        });
        commit("setQuestions", results);
      });
    },
    start({ commit, state }, payload) {
      Room.doc(payload.id)
        .get()
        .then(room => {
          let obj = room.data();
          obj.status = payload.status;
          obj.winner = payload.winner;

          let random = Math.floor(Math.random() * 18);
          obj.question = state.questions[random];
          return Room.doc(payload.id).set(obj);
        })
        .catch(err => {
          commit("swalError", err);
        });
    },
    answer({ commit, state }, payload) {
      Room.doc(payload.id)
        .get()
        .then(room => {
          let obj = room.data();
          obj.status = payload.status;
          obj.winner = payload.winner;
          return Room.doc(payload.id).set(obj);
        })
        .catch(err => {
          commit("swalError", err);
        });
    }
  }
});
