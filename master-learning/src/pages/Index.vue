<template>
  <q-page class="flex column flex-center container justify-around">
    <q-img 
      src="https://cdn-icons-png.flaticon.com/512/8090/8090646.png"
      spinner-color="white" 
      style="max-width: 200px; max-height: 200px;"/>

    <h5 class="title q-ma-sm text-center">{{phrases[index]}}</h5>
    <q-btn
      rounded 
      class="button q-ma-sm"
      label="Gerar Frase" 
      stack 
      @click="randomPosition"
    />
  </q-page>
</template>

<script>

export default {
  name: 'DailyPhrase', 
  data(){
    return {
      phrases: ['Levanta, sacode a poeira, dá a volta por cima.',
                'Respire fundo e fique atento às surpresas deliciosas que a vida preparou para você!',
                'Nem todos os dias são bons, mas há algo bom em cada dia.',
                'Respeite sua mente e trate seu corpo com carinho.',
                'Um passo de cada vez. Até meio passo serve. Siga firme, não há motivo para ter pressa.',
                'Suba o primeiro degrau com fé. Não é necessário que você veja toda a escada, apenas dê o primeiro passo.',
                'Para hoje, vou usar minha melhor roupa: a fé.'
      ],
      index: 0,
    };
  },
  methods: {
    randomPosition(){
      let index = parseInt(Math.random() * 7 + 0);
      this.index = index;
    },
  },
  beforeMount(){
    this.randomPosition();
  },
}
</script>

<style lang="stylus" scoped>
.container{
  background-color: #f95179;
}

.title{
  color: #fff
}

.button{
  width: 90%;
  color: #fff;
  height: 50px;
  background-color: #262525;
}
</style>