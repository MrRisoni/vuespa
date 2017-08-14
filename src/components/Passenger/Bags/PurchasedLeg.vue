<template>
    <div class="col-md-6">
        <div class="purchasedLeg">


            <!-- shows what you have purchased -->
            <div class="card">
                <div class="card-header bg-info">{{route}}</div>

                <div class="card-body">

                    <div v-for="bag in boughtBagsDepart">

                        <div class="row">

                            <div class="col-md-10">

                                <button type="button" class="btn mybtn btn-danger" @click="">
                                    -
                                </button> {{bag.title}}  {{bag.carrier}}

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
        props: ['route', 'passengerid'],
        data() {
            return {}
        },
        computed: {
            boughtBagsDepart() {
                return this.$store.state.passengers[this.passengerid - 1].bags[0].types;
            }
        }
    }
</script>

