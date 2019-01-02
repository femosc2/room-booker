const axios = require("axios")

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

axios.delete("https://room-booker-37ff4.firebaseio.com/data.json")
    .then(
        response => {
            console.log("response");
        },
        error => {
            console.log("error");
        }
    );
    
setTimeout(function() {
    for (var i = 0; i < bookedTimeslots.length; i++) {
        axios.put("https://room-booker-37ff4.firebaseio.com/data/" + i + ".json", bookedTimeslots[i])
    .then(
        response => {
            console.log(response);
        },
        error => {
            console.log(error);
        }
    );
    }
}, 1*1000)