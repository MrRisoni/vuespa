<template>
    <div class="row">

        <div class="col-md-10">

            <div class="bookapp">

                <h1>{{ msg }}</h1>

                <button class="btn btn-primary btn-success">Go</button>

            </div>


        </div>


        <div class="col-md-2">
                <pricebox></pricebox>
        </div>


    </div>

</template>

<script>
    import PriceBox from '../components/PriceBox.vue'
    export default {
        components: {
            'pricebox' : PriceBox
        },
        data() {
            return {
                msg: 'Fill the data'
            }
        }
    }
</script>

