Vue.component('notice-item', {
  // todo-item コンポーネントはカスタム属性のような "プロパティ" で受け取ります。
  // このプロパティは todo と呼ばれます。
  props: ['todo'],
  template: `<li>{{ todo.text }}</li>`
})

var notice = new Vue({
  el: '#notice',
  data: {
    noticeGroceryList: [
      { id: 0, text: '待機列を10分より前で形成してはいけません' },
      { id: 1, text: '晴天時は激烈な暑さになるため、帽子、長袖、うちわ、タオル、保冷剤等を用意です' },
      { id: 2, text: 'トイレは会場外、楽園ビル内の4階を使用しましょう' },
      { id: 3, text: 'ジョッキ、グラスを持っている方は水分補給用に持っていくと良いです' },
      { id: 4, text: '3階のガチャガチャとクレーンゲームのために楽園側の両替機を使用してはいけません' },
      { id: 5, text: '<span class="red-text">更衣室はない。</span>トイレで更衣することは許されません。運営側としては「家からのコスプレ」を推奨しているが、含意や行間の意味がわからない方はコスプレをすべきではありません' },
      { id: 6, text: '楽園3階の休憩スペースは楽園(パチンコ屋)を利用するためのスペースであるため使用してはいけません' },
      { id: 7, text: 'リバースするまで飲まないように。周りの人もスタッフさんも大変です。自分の適量は自分しか把握できません。' }
    ]
  }
})
