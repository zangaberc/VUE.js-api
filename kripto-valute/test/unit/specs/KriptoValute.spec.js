import Vue from 'vue'
import KriptoValute from '@/components/KriptoValute'

describe('KriptoValute.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(KriptoValute)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
