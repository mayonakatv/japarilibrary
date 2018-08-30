Vue.component('thanks-item', {
  // todo-item コンポーネントはカスタム属性のような "プロパティ" で受け取ります。
  // このプロパティは todo と呼ばれます。
  props: ['todo'],
  template: `<li>{{ todo.title }}：
              <a v-bind:href="todo.url" rel="external" title="Twitter">{{ todo.text }}</a>
            </li>`
})

var spthx = new Vue({
  el: '#spthx',
  data: {
    spthxGroceryList: [
      { id: 0, title: '情報提供', url: 'https://twitter.com/mamedaikichi', text: '豆大吉@mamedaikichi' },
      { id: 1, title: '情報提供', url: 'https://twitter.com/tosyokanmusume', text: '白玉兎@tosyokanmusume' },
      { id: 2, title: '情報提供', url: 'https://twitter.com/trn0w', text: 'あーる㌠@trn0w' },
      { id: 3, title: '情報提供', url: 'https://twitter.com/minamiotari', text: 'みなみおたり@minamiotari' },
      { id: 4, title: '画像提供', url: 'https://twitter.com/Simonov_117', text: 'Simonov-117@Simonov_117' },
      { id: 5, title: '画像提供', url: 'https://twitter.com/Kdatlyno', text: 'クダトリノ@Kdatlyno' },
      { id: 6, title: '画像提供', url: 'https://twitter.com/HiKampfer', text: 'KAMPFER@HiKampfer' },
      { id: 7, title: '画像提供', url: 'https://twitter.com/PUYO_RW01', text: 'PUYO@PUYO_RW01' },
      { id: 8, title: '404画像提供', url: 'https://twitter.com/runeOmega', text: 'るね~Type Omega~@runeOmega' },
      { id: 9, title: '404画像リンク', url: 'https://twitter.com/runeOmega/status/1021330435882676224', text: '404画像へ飛ぶ' }
    ]
  }
})
