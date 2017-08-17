<template>

    <div class="airlineservices">

        <div class="row">
            <div class="col-md-12">

                <div class="card">
                    <div class="card-header bg-info ">

                        <div class="row">
                            <div class="col-md-4">
                                {{airline}}
                            </div>


                            <div class="col-md-5"></div> <!-- offset does not work -->

                            <div class="col-md-2">
                                <button class="btn btn-sm btn-dark btn-block" @click="toggleMe"> {{toggleButton}}
                                </button>
                            </div>

                        </div>

                    </div>


                    <div class="card">
                        <div class="card-header">


                        </div>

                        <div class="card-body">

                            <div class="row">

                                <div class="col-md-5">
                                    Pick service
                                </div>

                                <div class="col-md-7">

                                    <select v-model="selectedFare" class="form-control">
                                        <option v-for="option in options" v-bind:value="option.name">
                                            {{ option.name }}
                                        </option>
                                    </select>

                                </div>
                            </div>


                        </div>
                    </div>


                </div>

                <div v-if="showMe">
                    <div class="card-body">


                        <div v-for="opt of options">

                            <div v-if="opt.name == selectedFare">
                                <div class="row">

                                    <fare-class :FareClassName="opt.name"
                                                :packages="opt.packages"></fare-class>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="card-footer">
                        Price : {{getFarePrice}} {{getCurrency}}
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>


<style>

    .airlineservices {
        margin-top: 4%;
    }

</style>


<script>

    import FareClass from './FareClass.vue'


    export default {
        props: ['airline', 'options'],
        components: {
            'FareClass': FareClass
        },
        data() {
            return {
                toggleButton: 'Hide',
                showMe: true,
                selectedFare: ''
            }
        },
        methods: {
            toggleMe() {
                this.showMe = !this.showMe;
                this.toggleButton = (this.showMe) ? 'Hide' : 'Show';
            }
        },
        computed: {
            getCurrency()
            {
                return  this.$store.state.currency;
            },
            getFarePrice()
            {
                let fares = this.$store.state.upgradeFare;
                let currency = this.$store.state.currency;
                let currencyData = this.$store.state.currencyData;


                let rate = 1;
                let price = 0;


                currencyData.forEach( (cur) => {
                    if (cur.trigram ===  currency) {
                        rate = cur.rate;
                    }
                });


                fares.forEach((fr) => {

                    if (fr.carrier === this.airline) {
                        fr.options.forEach((opt) => {
                            if (opt.name === this.selectedFare) {
                                price = opt.netPrice * rate;
                            }
                        });
                    }
                });

                return price.toFixed(2);

            }
        }
    }
</script>

