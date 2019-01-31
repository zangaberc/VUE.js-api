<template>
  <div>
    <h1 id="naslov"> Trenutna vrednost kripto valut </h1>
    <div id="konteiner" v-for="(value, key) in kriptovalute">
      <span class="ime">{{key}}</span>
      <p>Trenutna vrednost 1 coina </p>
      <span class="znesek">€ {{value.EUR}}</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'KriptoValute',
  data () {
    return {
      kriptovalute: []
    }
  },
  created () {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=EUR')
      .then(response => {
        this.kriptovalute = response.data
        console.log(response)
      })
  }
}
</script>

<style>
body {
  background: #f1f1f1;
}
div#konteiner {
  background: white;
  width: 40%;
  margin: 0 auto 20px auto;
  padding: 2em;
}
span.ime {
  font-weight: bold;

}
span.znesek {
  text-align: center;
  color: red;
}
#naslov{
  text-align: center;
  background: white;
  width: 100%;
}
</style>
