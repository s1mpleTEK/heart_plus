<template>
    <div>
        <h1 v-if="love >= 10000">
            CONGRATULATION!
        </h1>
        <h1 v-if="love >= 1000000000000">
            Now, go get a life and stop develop this stupid bot dude -_-
        </h1>
        <p v-if="love == 6969">
            You sent love to {{ love }} people!
            <br>
            Grrrrrrrr!
        </p>
        <p v-if="love == 1">
            You sent love to {{ love }} person!
        </p>
        <p v-else-if="love > 1">
            You sent love to {{ love }} people!
        <p v-else>
            Give some love
        </p>
        <button v-on:click="give_loves()">
            Love
        </button>
        <br><br>
        <button v-if="love >=100" v-on:click="give_loves_v2()">
            More love
        </button>
        <br><br>
        <button v-if="love >= 500" v-on:click="give_loves_v3()">
            More more love
        </button>
        <br><br>
        <button v-if="love >= 1000" v-on:click="give_loves_v4()">
            More more more love
        </button>
        <br><br>
        <button v-if="love >= 5000" v-on:click="give_loves_v5()">
            LOVE FOR EVERYONE
        </button>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            love: 0,
        }
    },

    methods: {
        give_loves() {
            this.love++;
        },
        give_loves_v2() {
            this.love = this.love + 5;
        },
        give_loves_v3() {
            this.love = this.love + 10;
        },
        give_loves_v4() {
            this.love = this.love + 50;
        },
        give_loves_v5() {
            this.love = this.love + 100;
        }
    }
}
</script>

<style>
html {
    background-color: peachpuff;
}
button {
    border-radius: 5in;
    background-color: pink;
    color: white;
}
</style>