<template>
    <ul>
        <li v-for="(slot, index) in timeslots" :key="index" @click="book(index)" v-if="!slot.booked">{{ slot.time }} is booked</li>

        <button @click="log"> LOG </button>
    </ul>
</template>

<script>
export default {
  data: function() {
    return {
      timeslots: [],
      bookedTimeslots: [
        {
          time: "00.00-02.00",
          id: 0,
          booked: false,
          bookedBy: ""
        },
        {
          time: "02.00-04.00",
          id: 1,
          booked: false,
          bookedBy: ""
        },
        {
          time: "04.00-06.00",
          id: 2,
          booked: false,
          bookedBy: ""
        },
        {
          time: "06.00-08.00",
          id: 3,
          booked: false,
          bookedBy: ""
        },
        {
          time: "08.00-10.00",
          id: 4,
          booked: false,
          bookedBy: ""
        },
        {
          time: "10.00-12.00",
          id: 5,
          booked: false,
          bookedBy: ""
        },
        {
          time: "12.00-14.00",
          id: 6,
          booked: false,
          bookedBy: ""
        },
        {
          time: "14.00-16.00",
          id: 7,
          booked: false,
          bookedBy: ""
        },
        {
          time: "16.00-18.00",
          id: 8,
          booked: false,
          bookedBy: ""
        },
        {
          time: "20.00-22.00",
          id: 9,
          booked: false,
          bookedBy: ""
        },
        {
          time: "22.00-00.00",
          id: 10,
          booked: false,
          bookedBy: ""
        }
      ],
      availableTimes: []
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
          bookedBy: this.timeslots[id].bookedBy,
        };
        this.$http
          .put("https://room-booker-37ff4.firebaseio.com/data/" + id + ".json", booking)
          .then(
            response => {
              console.log(response);
            },
            error => {
              console.log(error);
            }
          );
      }
    },
    getBookings() {
      this.$http
        .get("https://room-booker-37ff4.firebaseio.com/data.json")
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
    },
    log() {
        console.log(this.timeslots)
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
  display: flex;
  background-color: red;
}
li {
  height: 100px;
  background-color: white;
  margin: 20px;
  justify-content: center;
  align-content: center;
  align-items: center;
  justify-items: center;
  width: 100%;
}
</style>
