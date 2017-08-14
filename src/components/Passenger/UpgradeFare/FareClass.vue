<template>
    <div class="col-md-12">

    <div class="FareClass">



            <div class="card">
                <div class="card-header">{{FareClassName}}</div>

                <div class="card-body">


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
            }
        }
    }
</script>

