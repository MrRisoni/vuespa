<template>
    <div class="passenger">

        <div class="row">
            <div class="col-md-12">


                <div class="card bg-light">
                    <div class="card-header">

                        <div class="row">

                            <div class="col-md-5">
                                Passenger # {{humanID}}
                            </div>

                            <div class="col-md-5"></div> <!-- offset does not work -->


                            <div class="ol-md-2">
                                <button class="btn btn-sm btn-dark btn-block" @click="toggleMe"> {{label}} </button>
                            </div>
                        </div>
                    </div>

                    <div class="card-body">

                        <transition name="slide-fade">


                            <div v-if="showMe">

                                <name :passengerid="id"></name>

                                <upgradefare :passengerid="id"></upgradefare>

                                <bags :passengerid="id"></bags>

                                <insurance :passengerid="id"></insurance>


                                <br>

                                <button class="btn btn-primary btn-success"
                                        @click="increment"
                                >Add Passenger
                                </button>
                            </div>

                        </transition>
                    </div>

                </div>
            </div>
        </div>


    </div>
</template>

<style>

    .passenger {
        margin-top: 4%;
    }

    .slide-fade-enter-active {
        transition: all .3s ease;
    }

    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */
    {
        transform: translateX(10px);
        opacity: 0;
    }


</style>

<script>

    import Name from './Name.vue'
    import Bags from './Bags/Bags.vue'
    import UpgradeFare from './UpgradeFare/UpgradeFare.vue'
    import Insurance from './Insurance.vue'


    export default {
        props: ['id', 'humanID'],
        components: {
            'name': Name,
            'bags': Bags,
            'upgradefare': UpgradeFare,
            'insurance': Insurance
        },
        data() {
            return {
                showMe: true,
                label: 'Hide'
            }
        },
        methods: {
            increment() {
                this.$store.commit('addPassenger');
            },
            toggleMe() {
                this.showMe = !this.showMe;
                this.label = (this.showMe) ? 'Hide' : 'Show'
            }
        }

    }
</script>

