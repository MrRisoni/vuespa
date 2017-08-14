<template>
    <div class="itinerary">

        <h1></h1>


        <div class="card card-primary">
            <div class="card-header">
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


                    <div class="col-md-2 col-md-offset-2">
                        Monday 7 Aug 2017
                    </div>


                </div>
            </div>

            <div class="card-body">

                <div class="row">
                    <div class="col-md-3">
                        <dep-airport :data="depDetails"></dep-airport>

                    </div>


                    <div class="col-md-3">
                        <arr-airport :data="retDetails"></arr-airport>

                    </div>


                    <div class="col-md-3">

                        <div class="row">
                            <div class="col-md-8">
                                Stops: {{stops}}
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-8">
                                Duration:
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-8">
                                Wait time:
                            </div>
                        </div>
                    </div>


                    <div class="col-md-1">
                        <button class="btn btn-sm btn-primary">Expand </button>
                    </div>


                </div>


            </div>
        </div>

    </div>
</template>

<script>

    import Airport from './Airport.vue'


    export default {
        components: {
            'depAirport': Airport,
            'arrAirport': Airport,
        },
        data() {
            return {}
        },
        computed: {
            depDetails() {
                return this.$store.state.itinerary.info.departure
            },
            retDetails() {
                return this.$store.state.itinerary.info.return
            },
            stops()
            {
                return this.$store.state.itinerary.info.stops
            }
        }
    }
</script>

