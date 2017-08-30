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


                        <div v-if="flightsResultsFetched">
                            <flightsresults></flightsresults>
                        </div>
                        <div v-else>
                            <div v-if="searchBtnClicked">
                                <VueAwesome name="spinner" scale="4" spin></VueAwesome>
                            </div>
                        </div>

                    </div>

                </div>


                <div class="row">
                    <div class="col-md-12">

                        <div v-if="hotelResultsFetched">
                            <hotelresults></hotelresults>
                        </div>
                        <div v-else>
                            <div v-if="searchBtnClicked">
                                <VueAwesome name="spinner" scale="4" spin></VueAwesome>
                            </div>
                        </div>
                    </div>

                </div>


                <div class="row">
                    <div class="col-md-12">

                        <div v-if="carResultsFetched">
                            <carcarousel></carcarousel>
                        </div>
                        <div v-else>
                            <div v-if="searchBtnClicked">
                                <VueAwesome name="spinner" scale="4" spin></VueAwesome>
                            </div>
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
    import FlightsResults from './Air/FlightsResults.vue';


    import 'vue-awesome/icons'
    import Icon from 'vue-awesome/components/Icon'

    export default {
        components: {
            'navbar': NavBar,
            'carcarousel': CarCarousel,
            'hotelresults': HotelResults,
            'flightsresults': FlightsResults,
            'VueAwesome': Icon

        },
        data() {
            return {
                msg: '',
                carResultsFetched: false,
                hotelResultsFetched: false,
                flightsResultsFetched: false,
                searchBtnClicked: false

            }
        },
        methods: {
            searchClicked() {
                this.msg = ' Searching...';
                this.searchBtnClicked = true;
                var self = this;

                setTimeout(function () {
                    self.flightsResultsFetched = true;

                    setTimeout(function () {
                        self.hotelResultsFetched = true;


                        setTimeout(function () {
                            self.msg = 'OK';
                            self.carResultsFetched = true;
                        }, 900);
                    }, 1000);
                }, 3000);
            }
        }

    }
</script>

