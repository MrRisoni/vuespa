<template>
    <div class="name">

        <div class="row">
            <div class="col-md-12">

                <div class="panel panel-primary">
                    <div class="panel-heading">Fill in your name</div>
                    <div class="panel-body">

                        <div class="row">

                            <div class="col-md-2">
                                <select class="form-control" id={this.props.selectID} onChange={this.changePrefix}>
                                    <option></option>
                                    <option value="MR">Male</option>
                                    <option value="MS">Female</option>
                                </select>
                            </div>


                            <div class="col-md-5">
                                <input type="text" value={this.state.surname} placeholder="Surname"
                                       onChange={this.changeSurName} class="form-control"/>
                            </div>


                            <div class="col-md-5">
                                <input type="text" value={this.state.name} placeholder="Name" onChange={this.changeName}
                                       class="form-control"/>
                            </div>


                        </div>


                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        data() {
            return {
               
            }
        }
    }
</script>

