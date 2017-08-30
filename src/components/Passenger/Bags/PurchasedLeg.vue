<template>
    <div class="col-md-6">
        <div class="purchasedLeg">


            <!-- shows what you have purchased -->
            <div class="card">
                <div class="card-header bg-info">{{route}}</div>

                <div class="card-body">

                    <div v-if="boughtBags.length >0">


                        <div v-for="bag in boughtBags">

                            <div v-if="bag.count >0">

                                <div class="row">

                                    <div class="col-md-10">

                                        <bagremoval :bag="bag"
                                                    :passengerid="passengerid"
                                                    :leg="leg"></bagremoval>

                                    </div>

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

    .purchasedLeg {
        margin-top: 4%;
    }

</style>

<script>

    import BagRemoval from './BagRemoval.vue';


    export default {
        components: {
            'bagremoval': BagRemoval
        },
        props: ['route', 'passengerid', 'leg'],
        data() {
            return {}
        },
        computed: {
            boughtBags() {
                return this.$store.state.passengers[this.passengerid].bags[this.leg].types;
            }
        }
    }
</script>

