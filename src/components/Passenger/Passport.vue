<template>
    <div class="Passport">

        <div class="row">

            <div class="col-md-4">
                BirthDate
                <datepicker :bootstrapStyling="true"></datepicker>
            </div>


            <div class="col-md-4">
                Issue Date
                <datepicker :bootstrapStyling="true"></datepicker>
            </div>


            <div class="col-md-4">
                Expire Date
                <datepicker :bootstrapStyling="true"></datepicker>
            </div>

        </div>

        <br>

        <div class="row">

            <div class="col-md-4">

                <select class="form-control">
                    <option value="">Issue Country</option>
                </select>
            </div>


            <div class="col-md-4">
                <input type="text" placeholder="PassportID"
                       class="form-control"/>
            </div>

        </div>

    </div>
</template>

<style>

    .Passport {
        margin-top: 2%;
    }

</style>

<script>


    import Datepicker from 'vuejs-datepicker';


    export default {
        components: {
            'Datepicker': Datepicker
        },
        data() {
            return {}
        }
    }
</script>


