<template>
    <div class="passenger">


        <div class="row">
            <div class="col-md-12">

                <div class="card panel-primary">
                    <div class="panel-heading">

                        <div class="row">
                            <div class="col-md-5">
                                Passenger # {{id}}
                            </div>


                            <div class="col-md-2 col-md-offset-4">
                                <button class="btn btn-xs btn-warning" @click="toggleMe"> Hide </button>
                            </div>
                        </div>
                    </div>

                    <div class="panel-body">

                        <div v-if="showMyPanel">

                            <name></name>

                            <upgradefare :passengerid="id"></upgradefare>

                            <bags :passengerid="id"></bags>

                            <insurance :passengerid="id"></insurance>

                            <button class="btn btn-primary btn-success"
                                    @click="increment"
                            >Add Passenger
                            </button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Name from './Name.vue'
    import Bags from './Bags/Bags.vue'
    import UpgradeFare from './UpgradeFare/UpgradeFare.vue'
    import Insurance from './Insurance.vue'


    export default {
        props: ['id'],
        components: {
            'name': Name,
            'bags': Bags,
            'upgradefare': UpgradeFare,
            'insurance': Insurance
        },
        data() {
            return {}
        },
        computed: {
            showMyPanel() {
                return this.$store.state.passengers[this.id - 1].showMyPanel
            }

        },
        methods: {
            increment() {
                this.$store.commit('addPassenger');
            },
            toggleMe() {
                console.log('toggle me');
                console.log(this.id);

                this.$store.commit('togglePassengerPanel', this.id);
            }
        }

    }
</script>

