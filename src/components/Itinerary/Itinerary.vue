<template>
    <div class="itinerary">

        <h1></h1>


        <div class="panel panel-primary">
            <div class="panel-heading">
                <div class="row">
                    <div class="col-md-2">
                        Athens - London
                    </div>


                    <div class="col-md-2">
                       Duration 6h 45m
                    </div>


                    <div class="col-md-2">
                        Stops :3
                    </div>


                    <div class="col-md-2 col-md-offset-4">
                        Monday 7 Aug 2017
                    </div>


                </div>
            </div>

            <div class="panel-body">

                <dep-airport :trigram="depAirport" ></dep-airport>


                <arr-airport :trigram="arrAirport" ></arr-airport>

            </div>
        </div>

    </div>
</template>

<script>

    import Airport from './Airport.vue'



    export default {
        components: {
            'depAirport' : Airport,
            'arrAirport' : Airport,
        },
        data() {
            return {

            }
        },
        computed: {
            depAirport() {
                return this.$store.state.depAirport
            },
            arrAirport() {
                return this.$store.state.arrAirport
            }
        }
    }
</script>

