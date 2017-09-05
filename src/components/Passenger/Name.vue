<template>
    <div class="name">

        <div class="row">
            <div class="col-md-12">

                <div class="alert alert-success" role="alert">Fill in your name</div>

                <div class="row">


                    <div class="col-md-2">
                        <select v-model="selectedPaxType" @change="changePaxType" class="form-control" >
                            <option value="">Age</option>
                            <option value="ADT">Adult</option>
                            <option value="CNN">Child</option>
                            <option value="INF">Infant</option>
                        </select>
                    </div>


                    <div class="col-md-2">
                        <select class="form-control" >
                            <option value="">Gender</option>
                            <option value="MR">Male</option>
                            <option value="MS">Female</option>
                        </select>
                    </div>


                    <div class="col-md-4">
                        <input type="text"   placeholder="Surname"
                               class="form-control"/>
                    </div>


                    <div class="col-md-4">
                        <input type="text"   placeholder="Name"
                               class="form-control"/>
                    </div>


                </div>



                <passport></passport>



            </div>
        </div>
        <br/>
        <br/>

    </div>


</template>

<script>


    import Passport from './Passport.vue';



    export default {
        props: ['passengerid'],
        components: {
            'Passport': Passport
        },
        data() {
            return {
                selectedPaxType: ''
            }
        },
        methods: {
            changePaxType(passengerid)
            {
                console.log('Name Component', this.selectedPaxType, this.passengerid);
                this.$store.commit('changePaxType',  { psgrid: this.passengerid , type: this.selectedPaxType});
            }
        }
    }
</script>

