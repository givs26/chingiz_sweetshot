<template>
    <div class="cardflex" @click="this.$emit('change-main-concept', Title, $event, Group)">

                    <div class="card" >

                            <img v-bind:src="img_path" style="width: 80px">
<!--                        <img src="models/model2/mod2.png" style="width: 80px">-->
                                    <div class="title-card">
                                        <h4>{{Title}}</h4>
                                    </div>
                        <div class="title-price">
                            <h5>{{Price}}</h5>


                        <svg v-if="cheked" style="margin-left: 50px"
                                width="20px"
                                height="20px"
                                viewBox="0 0 14 14">

                            <g
                                    id="layer1"
                                    transform="translate(-81.223251,-101.13284)">
                                <circle
                                        style="fill:#5bb125;fill-opacity:1;stroke-width:0.264583"
                                        id="path1"
                                        cx="88.223251"
                                        cy="108.13284"
                                        r="7" />
                                <path
                                        style="fill:#cd2a13;fill-opacity:1;stroke-width:0.158616"
                                        id="path2"
                                        d="m 85.14303,104.37264 c 0.325823,0.99796 0.504693,2.04432 0.771336,3.06199 0.214785,0.61966 0.34533,1.27681 0.599977,1.87926 0.224429,0.34658 0.502916,0.63286 0.661495,1.02512 0.313849,0.93788 0.176457,0.61509 1.751696,1.92982 0.06447,0.0537 0.139581,-0.10248 0.198642,-0.16635 0.201536,-0.21796 0.279908,-0.55879 0.375254,-0.83222 0.21617,-0.73781 0.441982,-1.46888 0.705278,-2.19101 0.216668,-0.65968 0.41792,-1.31082 0.775586,-1.90559 0.17594,-0.26387 0.341589,-0.53435 0.502081,-0.80858 0,0 -1.657303,-1.63121 -1.657303,-1.63121 v 0 c -0.155539,0.27524 -0.316649,0.54659 -0.492978,0.80816 -0.376363,0.60641 -0.598299,1.26215 -0.807103,1.9463 -0.258757,0.72392 -0.504437,1.44944 -0.709005,2.19125 -0.478572,1.3715 -0.653452,0.43131 1.224563,2.31625 0.04483,0.045 -0.04571,-0.12194 -0.06852,-0.18289 -0.106336,-0.42943 -0.328487,-0.76628 -0.641227,-1.05762 -0.330568,-0.56173 -0.40027,-1.25652 -0.652477,-1.85967 -0.287377,-1.00673 -0.477234,-2.04182 -0.736475,-3.05667 z" />
                            </g>
                        </svg>

                        </div>
                    </div>


    </div>
</template>

<script>
    export default {
        name: "CardVar",
        data(){
            return{
                host:'localhost:8080/',

            }
        },
        methods:{
            SetCheckIcon(){

            }
        },
        props:{
            Title: String,
            Price: String,
            img_path: String,
            cheked: Boolean,
            Group:{}
        }
    }
</script>

<style scoped>
.cardflex{
   display: flex;
    margin: 15px;

}
    .card{
        background: #dce0e3;
        padding: 15px;
        width: 120px;
        height: 200px;
        border-radius: 5px;
    }
    .title-card{

    }
.title-price{
 display: inline-flex;
    margin: 2px;

}

</style>