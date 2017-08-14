<template>
    <div class="bagcarrier">

        <div class="card card-primary">
            <div class="card-header">{{airline.carrier}}</div>

            <div class="card-body">


                <div v-for="bag of airline.bags">


                    <button type="button" class="btn mybtn btn-primary" @click="clickAddLuggage">
                        +
                    </button>

                    {{bag.title}} {{bag.price}}
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
    export default {
        props: ['airline' ,'passengerid'],
        data() {
            return {

            }
        },
        methods: {
            clickAddLuggage(passengerid)
            {
                console.log('Bag Carrier Compo ' + this.passengerid);
                this.$store.commit('addBaggage', this.passengerid);
            }
        }
    }
</script>

