<template>

    <div class="row">
        <div class="col-md-12">

            <div class="upgradefare">

                <div class="alert alert-success" role="alert">

                    <div class="row">

                        <div class="col-md-5">
                            Upgrade your seat!
                        </div>

                        <div class="col-md-5"></div> <!-- offset does not work -->

                        <div class="col-md-2">
                            <button class="btn btn-sm btn-dark btn-block" @click="toggleMe"> Hide </button>
                        </div>


                    </div>

                </div>

                <div v-if="showMe">

                    <div v-for="carrier of carriers">



                                <div v-for="airline of upgradeOptions">
                                    <div v-if="airline.carrier == carrier ">
                                        <div v-if="airline.options.length  >0 ">

                                            <airline-services :airline="carrier"
                                                              :options="airline.options"
                                            ></airline-services>

                                        </div>


                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>

    </div>
</template>


<style>


    .upgradefare {
        margin-top: 5%;
    }


</style>

<script>

    import AirlineServices from './AirlineServices.vue'

    export default {
        props: ['passengerid'],
        components: {
            'airlineServices': AirlineServices
        },
        data() {
            return {}
        },
        computed: {
            startAirport() {
                return this.$store.state.depAirport
            },
            endAirport() {
                return this.$store.state.arrAirport
            },
            upgradeOptions() {
                return this.$store.state.upgradeFare
            },
            carriers() {
                return this.$store.state.carriers
            },
            showMe() {
                return this.$store.state.passengers[this.passengerid - 1].showUpgrade
            }
        },
        methods: {
            toggleMe() {
                this.$store.commit('toggleFarePanel', this.passengerid);
            }
        }

    }
</script>

<style>


    .free_package {
        color: #5fb334;
    }

    .notincl_package {
        color: #ff0000;
    }

    .fee_package {
        color: #ffba3b;
    }


</style>
