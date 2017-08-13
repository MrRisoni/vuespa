<template>
    <div class="name">

        <div class="row">
            <div class="col-md-12">

                <div class="alert alert-success" role="alert">Fill in your name</div>

                <div class="row">

                    <div class="col-md-2">
                        <select class="form-control" >
                            <option></option>
                            <option value="MR">Male</option>
                            <option value="MS">Female</option>
                        </select>
                    </div>


                    <div class="col-md-5">
                        <input type="text"   placeholder="Surname"
                               class="form-control"/>
                    </div>


                    <div class="col-md-5">
                        <input type="text"   placeholder="Name"
                               class="form-control"/>
                    </div>


                </div>


            </div>
        </div>
        <br/>
        <br/>

    </div>


</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

