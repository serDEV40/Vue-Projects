<template>
    <div>
        <div :style="{
            'display' : 'grid', 'gridTemplateColumns' : 'repeat(4,1fr)', 'gridTemplateRows' : 'repeat(4,1fr)',
            'gridGap' : '0.5rem', 'margin' : '0.5rem'}">
            <button v-for="index of buttons" :class="index.btnClass" @click.native="btnClick(index.text)">{{ index.text }}</button>
        </div> 
    </div>
</template>

<script>
    export default{
        data(){
            return{
                buttons : [
                    { text : 9, btnClass : "btn btn-primary" },
                    { text : 8, btnClass : "btn btn-primary" },
                    { text : 7, btnClass : "btn btn-primary" },
                    { text : "+", btnClass : "btn btn-primary" },
                    { text : 6, btnClass : "btn btn-primary" },
                    { text : 5, btnClass : "btn btn-primary" },
                    { text : 4, btnClass : "btn btn-primary" },
                    { text : "-", btnClass : "btn btn-primary" },
                    { text : 3, btnClass : "btn btn-primary" },
                    { text : 2, btnClass : "btn btn-primary" },
                    { text : 1, btnClass : "btn btn-primary" },
                    { text : "*", btnClass : "btn btn-primary" },
                    { text : 0, btnClass : "btn btn-primary" },
                    { text : "CE", btnClass : "btn btn-primary"},
                    { text : "/", btnClass : "btn btn-primary" },
                    { text : "=", btnClass : "btn btn-primary" }
                ],
                machine : ""
            }
        },

        methods : {
            btnClick : function(data){
                this.machine+=data;
                
                if(data === '='){
                    let equal = eval(this.machine);
                    console.log(equal);
                }

                console.log(this.machine)
            }
        }
    }
</script>