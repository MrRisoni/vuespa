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


        </div>


        <div class="row">

            <div class="col-md-4">

                Filters
            </div>

            <div class="col-md-8">

                <div v-if="carCarouselVisible">
                    <carcarousel></carcarousel>
                </div>
            </div>
        </div>


        <button class="btn btn-primary btn-success" @click="searchClicked">Search a bundle ticket</button>

    </div>
</template>


<script>

    import NavBar from '../NavBar.vue';
    import CarCarousel from './CarCarousel.vue';

    export default {
        components: {
            'navbar': NavBar,
            'carcarousel': CarCarousel
        },
        data() {
            return {
                msg: '',
                carCarouselVisible: false
            }
        },
        methods: {
            searchClicked() {
                this.msg = ' Searching...';

                var self = this;

                setTimeout(function () {
                    self.mgs = 'OK';
                    self.carCarouselVisible = true;
                }, 2000);
            }
        }

    }
</script>

