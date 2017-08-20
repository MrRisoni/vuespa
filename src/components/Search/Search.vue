<template>
    <div class="Search">
        <navbar></navbar>


        <div class="row">


            <div class="col-md-4">
                <input type="text" class="form-control" id="fromAirport" placeholder="From">
            </div>

            <div class="col-md-3"></div>

            <div class="input-group col-md-4">
                <input type="text" class="form-control" id="toAirport" placeholder="To">
            </div>


        </div>

        <br>
        <br>


        <div class="row">

            Search for Hotel Car
            <div class="col-md-4">
                Hotel

            </div>

            <div class="col-md-4">
                Car

                {{msg}}
            </div>


            <button class="btn btn-primary btn-success" @click="searchClicked">Search a bundle ticket</button>


        </div>


        <div class="row">

            <div class="col-md-4">

                Filters
            </div>

            <div class="col-md-8">


                <div class="row">
                    <div class="col-md-12">

                        <div v-if="hotelResultsFetched">
                            <hotelresults></hotelresults>
                        </div>
                    </div>

                </div>


                <div class="row">
                    <div class="col-md-12">

                        <div v-if="carResultsFetched">
                            <carcarousel></carcarousel>
                        </div>
                    </div>
                </div>
            </div>

        </div>


        <div class="row">


            <div class="col-md-4">
            </div>

            <div class="col-md-8">

                Bundle

                <button class="btn btn-primary btn-success">Proceed to Booking </button>

            </div>

        </div>





    </div>
</template>


<script>

    import NavBar from '../NavBar.vue';
    import CarCarousel from './CarCarousel.vue';
    import HotelResults from './Hotel/HotelResults.vue';

    export default {
        components: {
            'navbar': NavBar,
            'carcarousel': CarCarousel,
            'hotelresults': HotelResults
        },
        data() {
            return {
                msg: '',
                carResultsFetched: false,
                hotelResultsFetched: false,

            }
        },
        methods: {
            searchClicked() {
                this.msg = ' Searching...';

                var self = this;

                setTimeout(function () {
                    self.carResultsFetched = true;

                    setTimeout(function () {
                        self.mgs = 'OK';
                        self.hotelResultsFetched = true;
                    }, 3000);
                }, 2000);
            }
        }

    }
</script>

