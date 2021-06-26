<template>
<div>
    <Header v-on:search:hsalon_name="SearchHairsalons" />
    <br /><br />
    <div class="container">
        <div class="row">
            <div v-bind:key="hairsalon.hsalon_id" v-for="hairsalon in HairsalonInSearch">
                <HairsalonItem v-bind:hairsalon="hairsalon" v-on:delete:hairsalon = "DeleteSalons" />
            </div>
        </div>
    </div>
    <br /><br />
</div>
</template>

<script>
import HairsalonItem from './HairsalonItem';
import Header from './Header';
import axios from "axios";

export default {

    name: "Hairsalons",
    components: {
        HairsalonItem,
        Header
    },
    data() {
        return {
            search: "",
            hairsalons: []
        }
    },
    async created() {

    },
    async mounted() {
        //Code for GET Books from API
        const response = await axios.get('http://localhost:3000/api/v1/hairsalons/');
        this.hairsalons = await response.data.data;
        this.hairsalonsearch = this.hairsalons;
        
    },
    methods: {
        SearchHairsalons: function (searchvalue) {
            this.search = searchvalue;
        },
        async DeleteSalons(hsalon_id) {
            await axios.delete('http://localhost:3000/api/v1/hairsalon/' + hsalon_id);
            var HairsaonIndex = this.hairsalons.findIndex(x => x.hsalon_id === hsalon_id);
            this.hairsalons.splice(HairsaonIndex, 1);
        },

    },
    computed: {

        HairsalonInSearch: function () {
            if (this.search != "") {
                return this.Hairsalons.filter((hairsalon) => {
                    return hairsalon.hsalon_name.toLowerCase().includes(this.search.toLowerCase())
                });

            } else {
                return this.hairsalons;
            }
        }

    },
    filters: {

    }
}
</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
