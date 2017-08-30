<template>
    <div class="bagcarrier">

        <div class="card card-primary">
            <div class="card-header">{{airline.carrier}}</div>

            <div class="card-body">


                <div v-for="bag of airline.bags">

                    <selectbag :bag="bag"
                               :leg="leg"
                               :airline="airline.carrier"
                               :passengerid="passengerid"></selectbag>

                </div>

            </div>


        </div>

    </div>
</template>

<style>


    .mybtn {
        padding: 3px 5px;
        font-size: 10px;
        border-radius: 2px;
    }

    .bagcarrier {
        margin-bottom: 4%;
    }

</style>

<script>


    import SelectBag from './SelectBag.vue';


    export default {
        props: ['airline' ,'passengerid', 'leg'],
        components: {
            'selectbag': SelectBag
        },
        data() {
            return {}
        }

    }
</script>

