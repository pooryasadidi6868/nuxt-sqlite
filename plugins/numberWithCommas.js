// injected to vue prototype and nuxt context
// usage nuxt & vue     context.app.$numberWithCommas(2000)    - $numberWithCommas(2000)

export default ({ app }, inject) => {
  inject('numberWithCommas', (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  })
}
