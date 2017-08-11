<template>
    <div class="passenger">


        <div class="row">
            <div class="col-md-12">

                <div class="panel panel-primary">
                    <div class="panel-heading">

                        <div class="row">
                            <div class="col-md-5">
                                Passenger # {{id}}
                            </div>


                            <div class="col-md-2 col-md-offset-5">
                                <button class="btn btn-xs btn-success"> this.state.buttonName </button>
                            </div>
                        </div>
                    </div>

                    <div class="panel-body">

                        <name></name>

                        <upgradefare></upgradefare>

                        <bags></bags>

                        <insurance></insurance>
                        Bags: {{bags}}

                        <button class="btn btn-primary btn-success"
                                @click="increment"
                        >Go</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Name from './Name.vue'
    import Bags from './Bags.vue'
    import UpgradeFare from './UpgradeFare/UpgradeFare.vue'
    import Insurance from './Insurance.vue'


    export default {
        props:['id'],
        components: {
            'name': Name,
            'bags' : Bags,
            'upgradefare' : UpgradeFare,
            'insurance' : Insurance
        },
        data() {
            return {}
        },
        computed: {
            bags() {
                return this.$store.state.bags
            }
        },
        methods : {
            increment() {
                this.$store.commit('addPassenger');
            }
        },

    }
</script>

