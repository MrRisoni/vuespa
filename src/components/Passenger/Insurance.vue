<template>

    <div class="row">
        <div class="col-md-12">

            <div class="insurance">

                <div class="alert alert-success" role="alert">

                    <div class="row">

                        <div class="col-md-5">
                            Select an Insurance
                        </div>

                        <div class="col-md-5"></div>

                        <div class="col-md-2">
                            <button class="btn btn-sm btn-dark btn-block" @click="toggleMe"> {{label}} </button>
                        </div>

                    </div>

                </div>

                <div v-if="showMe">

                    <div class="row">


                        <div class="col-md-3" v-for="ins in InsuranceOptions">

                            <div class="card text-center">
                                <div class="card-header bg-warning ">
                                    {{ins.title}}  <input type="radio" :id="ins.id" :value="0" v-model="picked">
                                </div>
                                <div class="card-body">
                                    Basic card example
                                </div>
                                <div class="card-footer">
                                    {{ins.convertedPrice}} {{getCurrency}}
                                </div>
                            </div>

                        </div>


                    </div>

                </div>


            </div>
        </div>

    </div>
</template>

<style>


    .insurance {
        margin-top: 5%;
    }


</style>

<script>
    export default {
        props: ['passengerid'],
        data() {
            return {
                showMe: false,
                label: 'Hide'
            }
        },
        computed: {
            InsuranceOptions() {
                return this.$store.state.insuranceInfo;
            },
            getCurrency() {
                return this.$store.state.currency
            }
        },
        methods: {
            toggleMe() {
                this.showMe = !this.showMe;
                this.toggleButton = (this.showMe) ? 'Hide' : 'Show';
            }

        }

    }
</script>

