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
            <div class="col-md-12">

            </div>
        </div>


            <button class="btn btn-primary btn-success" @click="searchClicked">Search a bundle ticket</button>

    </div>
</template>


<script>

    import NavBar from '../NavBar.vue';

    export default {
        components: {
            'navbar': NavBar,
        },
        data() {
            return {
                msg: 'dsds'
            }
        },
        computed : {
            getCarResults(){
                return this.$store.state.carResultsFetched ? this.$store.state.carResults : [];
            }
        },
        methods: {
            searchClicked()
            {
                this.msg =' Searching...';
                var self = this;
                setTimeout( function () {
                    self.msg =' OK!!';

                },6000);
            }
        }

    }
</script>

