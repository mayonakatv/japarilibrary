Vue.component('carousel-item', {
  // todo-item コンポーネントはカスタム属性のような "プロパティ" で受け取ります。
  // このプロパティは todo と呼ばれます。
  props: ['todo'],
  template: `<a class="carousel-item">
              <img v-bind:src="todo.src" alt="carousel item" />
            </a>`
})

var carousel = new Vue({
  el: '#carousel',
  data: {
    carouselGroceryList: [
      { id: 0, src: 'https://kemono-matsuri.japarilibrary.com/img/carousel/c1.png' },
      { id: 1, src: 'https://kemono-matsuri.japarilibrary.com/img/carousel/c2.png' },
      { id: 2, src: 'https://kemono-matsuri.japarilibrary.com/img/carousel/c3.png' },
      { id: 3, src: 'https://kemono-matsuri.japarilibrary.com/img/carousel/c4.png' },
      { id: 4, src: 'https://kemono-matsuri.japarilibrary.com/img/carousel/c5.png' },
      { id: 5, src: 'https://kemono-matsuri.japarilibrary.com/img/carousel/c6.png' },
      { id: 6, src: 'https://kemono-matsuri.japarilibrary.com/img/carousel/c7.png' },
      { id: 7, src: 'https://pbs.twimg.com/media/DjMldGdU4AUeVYI.jpg' },
      { id: 8, src: 'glass/comparison.png' }
    ]
  }
})
