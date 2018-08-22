Vue.component('dd-item', {
  // todo-item コンポーネントはカスタム属性のような "プロパティ" で受け取ります。
  // このプロパティは todo と呼ばれます。
  props: ['todo'],
  template: `<li>
              <a v-bind:href="todo.href">{{ todo.title }}</a>
            </li>`
})

var dd = new Vue({
  el: '#dropdown1',
  data: {
    ddGroceryList: [
      { id: 0, href: '#sect-officialNews', title: '公式ニュース' },
      { id: 1, href: '#sect-about', title: 'がーでんとは' },
      { id: 2, href: '#sect-map', title: '場所と行き方' },
      { id: 3, href: '#sect-way', title: '行き方' },
      { id: 4, href: '#sect-admissionTicket', title: '入場券' },
      { id: 5, href: '#sect-faq', title: 'よくある質問' },
      { id: 6, href: 'firstEntry.php', title: '初めての方へ' },
      { id: 7, href: '#sect-numberedTickets', title: '当日整理券' },
      { id: 8, href: '#sect-100', title: '100倍楽しむ！' },
      { id: 9, href: '#sect-foods', title: 'フード' },
      { id: 10, href: '#sect-coaster', title: 'コースター' },
      { id: 11, href: '#sect-kobachi', title: '小鉢' },
      { id: 12, href: '#sect-shateki', title: '射的' },
      { id: 13, href: '#sect-goods', title: '物販' },
      { id: 14, href: '#sect-games', title: 'ガチャ等' },
      { id: 15, href: '#sect-japaman', title: 'ジャパまん投げ' },
      { id: 16, href: '#sect-ornament', title: '装飾' },
      { id: 17, href: '#sect-shatekiGame', title: '射的' },
      { id: 18, href: '#sect-notice', title: '諸注意' },
      { id: 19, href: 'siteInfo.php', title: 'サイトについて' },
    ]
  }
})
var sidenav = new Vue({
  el: '#mobileSide',
  data: {
    ddGroceryList: [
      { id: 0, href: '#sect-officialNews', title: '公式ニュース' },
      { id: 1, href: '#sect-about', title: 'がーでんとは' },
      { id: 2, href: '#sect-map', title: '場所と行き方' },
      { id: 3, href: '#sect-way', title: '行き方' },
      { id: 4, href: '#sect-admissionTicket', title: '入場券' },
      { id: 5, href: '#sect-faq', title: 'よくある質問' },
      { id: 6, href: 'firstEntry.php', title: '初めての方へ' },
      { id: 7, href: '#sect-numberedTickets', title: '当日整理券' },
      { id: 8, href: '#sect-100', title: '100倍楽しむ！' },
      { id: 9, href: '#sect-foods', title: 'フード' },
      { id: 10, href: '#sect-coaster', title: 'コースター' },
      { id: 11, href: '#sect-kobachi', title: '小鉢' },
      { id: 12, href: '#sect-shateki', title: '射的' },
      { id: 13, href: '#sect-goods', title: '物販' },
      { id: 14, href: '#sect-games', title: 'ガチャ等' },
      { id: 15, href: '#sect-japaman', title: 'ジャパまん投げ' },
      { id: 16, href: '#sect-ornament', title: '装飾' },
      { id: 17, href: '#sect-shatekiGame', title: '射的' },
      { id: 18, href: '#sect-notice', title: '諸注意' },
      { id: 19, href: 'siteInfo.php', title: 'サイトについて' },
    ]
  }
})