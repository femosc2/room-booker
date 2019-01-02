<template>
    <ul>
        <li v-for="slot in timeslots" :key="slot.id" @click="book(slot.id)" v-if="slot.booked != true">{{ slot.time }}</li>
    </ul>
</template>

<script>
export default {
    data: function() {
        return {
        timeslots: [
            {
                time: "00.00-02.00",
                id: 0,
                booked: false,
                bookedBy: null
            },
            {
                time: "02.00-04.00",
                id: 1,
                booked: false,
                bookedBy: null
            },
            {
                time: "04.00-06.00",
                id: 2,
                booked: false,
                bookedBy: null
            },
            {
                time: "06.00-08.00",
                id: 3,
                booked: false,
                bookedBy: null
            },
            {
                time: "08.00-10.00",
                id: 4,
                booked: false,
                bookedBy: null
            },
            {
                time: "10.00-12.00",
                id: 5,
                booked: false,
                bookedBy: null
            },
            {
                time: "12.00-14.00",
                id: 6,
                booked: false,
                bookedBy: null
            },
            {
                time: "14.00-16.00",
                id: 7,
                booked: false,
                bookedBy: null
            },
            {
                time: "16.00-18.00",
                id: 8,
                booked: false,
                bookedBy: null
            },
            {
                time: "20.00-22.00",
                id: 9,
                booked: false,
                bookedBy: null
            },
            {
                time: "22.00-00.00",
                id: 10,
                booked: false,
                bookedBy: null
            },

        ],
    }
    },
    methods: {
        book(id) {
            this.timeslots[id].booked = true;
            this.timeslots[id].bookedBy = name
            console.log(this.timeslots[id].time + "is booked by " + this.name + this.timeslots[id].booked)
        }
    },
    props: ["name"]
}
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
