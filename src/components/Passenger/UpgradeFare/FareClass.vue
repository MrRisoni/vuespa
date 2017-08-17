<template>
    <div class="col-md-12">

        <div class="FareClass">


            <div class="card">
                <div class="card-header">

                    <div class="row">

                        <div class="col-md-5">
                            {{FareClassName}}
                        </div>

                        <div class="col-md-5"></div> <!-- offset does not work -->

                        <div class="col-md-2">
                            <button class="btn btn-sm btn-dark btn-block" @click="toggleMe"> {{toggleButton}} </button>
                        </div>


                    </div>


                </div>

                <div class="card-body">


                    <div v-if="showMe">
                        <div v-for="pkg of packages">


                        <div v-if="pkg.status === 'free'">
                            <div class="free_package">
                                v
                                {{pkg.title}}
                            </div>
                        </div>


                        <div v-if="pkg.status === 'notincl'">
                            <div class="notincl_package">
                                X
                                {{pkg.title}}
                            </div>
                        </div>

                        <div v-if="pkg.status === 'fee'">
                            <div class="fee_package">
                                $
                                {{pkg.title}}
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

    .FareClass {
        margin-top: 5%;
    }

</style>

<script>
    export default {
        props: ['FareClassName', 'packages'],
        data() {
            return {
                toggleButton: 'Hide',
                showMe: true
            }
        },
        methods: {
            toggleMe() {
                this.showMe = !this.showMe;
                if (this.showMe) {
                    this.toggleButton = 'Hide';
                }
                else{
                    this.toggleButton = 'Show';
                }
            }
        }

    }
</script>

