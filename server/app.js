const axios = require("axios");

const Firebase = require("../src/firebase")

const bookedTimeslots = [{
        time: "00.00-02.00",
        booked: false,
        bookedBy: ""
    },
    {
        time: "02.00-04.00",
        booked: false,
        bookedBy: ""
    },
    {
        time: "04.00-06.00",
        booked: false,
        bookedBy: ""
    },
    {
        time: "06.00-08.00",
        booked: false,
        bookedBy: ""
    },
    {
        time: "08.00-10.00",
        booked: false,
        bookedBy: ""
    },
    {
        time: "10.00-12.00",
        booked: false,
        bookedBy: ""
    },
    {
        time: "12.00-14.00",
        booked: false,
        bookedBy: ""
    },
    {
        time: "14.00-16.00",
        booked: false,
        bookedBy: ""
    },
    {
        time: "16.00-18.00",
        booked: false,
        bookedBy: ""
    },
    {
        time: "18.00-20.00",
        booked: false,
        bookedBy: ""
    },
    {
        time: "20.00-22.00",
        booked: false,
        bookedBy: null
    },
    {
        time: "22.00-00.00",
        booked: false,
        bookedBy: ""
    }
];

axios.delete("https://" + Firebase.firebase() + ".firebaseio.com/data.json")
    .then(
        response => {
            console.log("Successfull delete!");
        },
        error => {
            console.log("Faulty Delete!");
        }
    );
    
setTimeout(function() {
    for (var i = 0; i < bookedTimeslots.length; i++) {
        axios.put("https://" + Firebase.firebase() + ".firebaseio.com/data/" + i + ".json", bookedTimeslots[i])
    .then(
        response => {
            console.log("Successfull PUT!");
        },
        error => {
            console.log("Faulty PUT!");
        }
    );
    }
}, 1*1000)