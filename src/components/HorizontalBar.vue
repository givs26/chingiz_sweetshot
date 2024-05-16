<template>
    <div class="bar">

        <span v-for="Button in ButtonsVar" v-bind:key="Button" v-on:click="OnGroupButtonClick(Button)">{{Button}}</span>
    </div>
    <div class="cards-flex" v-if="ShowGroup == 'Модель'">
       <CardVar v-for="Model in Models" v-bind:key="Model"  :Title="Model.title" :Price="Model.price" :img_path="Model.img" :Group="Models" @change-main-concept="ChangeMainConcept"/>
    </div>
    <div class="cards-flex" v-if="ShowGroup == 'Карман'">
        <CardVar v-for="Pocket in Pockets" v-bind:key="Pocket"  :Title="Pocket.title" :Price="Pocket.price" :img_path="Pocket.img" :Group="Pockets" @change-main-concept="ChangeMainConcept"/>
    </div>

</template>

<script>
    import CardVar from "@/components/CardVar";

    export default {
        name: "HorizontalBar",
        components: {CardVar},
        data(){
            return{
                ShowGroup: 'Модель',

                ButtonsVar:['Модель', 'Карман', 'Цвет', 'Шнур', 'Молния', 'Ушки', 'Принты и Вышивка'],
                Models:{
                    0:{
                        title:'Модель1',
                        price:'5000Р',
                        img: 'models/model1/mod1.png',
                        arr:['leftCuffColor', 'chestColor',  'insideHoodColor', 'bottomCuffColor', 'rightCuffColor', 'outsideHoodColor', 'leftSleeveColor', 'rightSleeveColor' ]
                        },
                    1:{
                        title:'Модель2',
                        price:'5000Р',
                        img:'models/model2/mod2.png',
                        arr:[ 'rightSleeveColor2','leftCuffColor', 'chestUpColor2', 'chestColor2',  'insideHoodColor', 'bottomCuffColor', 'rightCuffColor', 'outsideHoodColor', 'rightSleeveUpColor2', 'leftSleeveUpColor2', 'leftSleeveColor2' ]
                    },
                    2:{
                        title:'Модель3',
                        price:'5000Р',
                        img:'models/model3/mod3.png',
                        arr:['rightSleeveColor3', 'rightCuffColor','leftCuffColor',  'chestColor3', 'chestUpColor3', 'insideHoodColor', 'bottomCuffColor', 'rightCuffColor3', 'outsideHoodColor', 'rightSleeveUpColor3', 'leftSleeveUpColor3', 'leftSleeveColor3' ]
                    },

                }
                    ,
                Pockets:{
                    0:{
                       title:'Кенгуру',
                        price:'500P',
                        img:'kangaroo.svg',
                        arr:['kangarooColor']

                    },
                    1:{
                        title:'Горизонтальный',
                        price:'600P',
                        img:'in_kangoo.svg',
                        arr:['kangarooColor2']
                    },
                    2:{
                        title:'Внутренние',
                        price:'700P',
                        img:'inkangaroo.svg',
                        arr:['kangarooColor3']
                    }
                }

                ,
            }
        }
    ,
        methods:{




            ChangeMainConcept(Title, event, CardsGroup){
                console.log(event, CardsGroup);


               // console.log(this.Models["0"]);
                //slet Model;
             for(let i=0; i<3; i++){
               // console.log(this.Models[i])
              if (Title == CardsGroup[i].title ){
              let arr = [];
              if ((localStorage.getItem('OrdertoBay')) != null){
                  arr = localStorage.getItem('OrdertoBay');
              }
              arr.push(CardsGroup[i].arr);
              localStorage.setItem('OrdertoBay', arr.toString());
             this.$emit('hide-path', CardsGroup[i].arr);
              }
            }


            },

            OnGroupButtonClick(key){
                this.ShowGroup = key;
                console.log(this.ShowGroup);
                }
            }
        }


</script>

<style scoped>
.bar{
    width: 90%;
    height: 20px;
  align-content: center;
  margin-top: 15px;


}
    span{
        border-radius: 8px;
        padding: 10px;
        background: #c4c4c7;
        margin: 5px;
    }
    .cardflex{
       display: inline-flex;
    }
</style>