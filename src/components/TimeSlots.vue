<template>
    <ul>
        <li v-for="(slot, index) in timeslots" :key="index" @click="book(index)" v-if="!slot.booked">{{ slot.time }}</li>
    </ul>
</template>

<script>
import Firebase from "../firebase.js"

export default {
  data: function() {
    return {
      timeslots: []
    };
  },
  methods: {
    book(id) {
      if (this.timeslots[id].booked === true) {
        alert("This time is already booked!");
      } else {
        this.timeslots[id].booked = true;
        this.timeslots[id].bookedBy = this.name;
        console.log(
          this.timeslots[id].time +
            "is booked by " +
            this.name +
            this.timeslots[id].booked
        );
        let booking = {
          booked: this.timeslots[id].booked,
          time: this.timeslots[id].time,
          bookedBy: this.timeslots[id].bookedBy
        };
        this.$http
          .put(
            "https://" + Firebase.firebase() + ".firebaseio.com/data/" + id + ".json",
            booking
          )
          .then(
            response => {
              console.log("Successfull GET request!!");
            },
            error => {
              console.log("Faulty GET Request");
            }
          );
      }
    },
    getBookings() {
      this.$http
        .get("https://" + Firebase.firebase() + ".firebaseio.com/data.json")
        .then(response => {
          return response.json();
        })
        .then(data => {
          const resultArray = [];
          for (let key in data) {
            resultArray.push(data[key]);
          }
          this.timeslots = resultArray;
        });
    }
  },
  props: ["name"],
  created() {
    this.getBookings();
  }
};
</script>

<style>
ul {
  list-style-type: none;
  padding: 50px;
  display: block;
  background-color: red;
}
li {
  height: 50px;
  background-color: white;
  margin: 20px;
  justify-content: center;
  align-content: center;
  align-items: center;
  justify-items: center;
  width: 100%;
}
</style>
