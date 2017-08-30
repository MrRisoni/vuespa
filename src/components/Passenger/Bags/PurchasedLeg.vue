<template>
    <div class="col-md-6">
        <div class="purchasedLeg">


            <!-- shows what you have purchased -->
            <div class="card">
                <div class="card-header bg-info">{{route}}</div>

                <div class="card-body">

                    <div v-for="bag in boughtBags">

                        <div class="row">

                            <div class="col-md-10">

                                <button type="button" class="btn mybtn btn-danger" @click="">
                                    -
                                </button> {{bag.count}} x {{bag.title}}  {{bag.carrier}} {{bag.convertedPrice}}

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
    export default {
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

