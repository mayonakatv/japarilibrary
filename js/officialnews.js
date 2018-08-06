Vue.component('officialnews-item', {
  // todo-item コンポーネントはカスタム属性のような "プロパティ" で受け取ります。
  // このプロパティは todo と呼ばれます。
  props: ['todo', 'target'],
  template: `<p class="yellow lighten-5 blue-grey-text" style="padding: 1em;margin-bottom: 2px;" v-if="todo.seen">
              <span v-html="todo.text"></span>
              <a v-bind:href="todo.href" rel="external" v-if="todo.seen"></a>
              <span v-html="todo.remark" v-if="todo.seen"></span>
            </p>`
})

defaultValue = {
  remark: '',
}

var officialnews = new Vue({
  el: '#officialnews',
  data: function () {
    return {
      newsGroceryList: [
        { id: 0, href: 'https://twitter.com/kemono_matsuri/status/1020954202221174784', seen: false, remark: defaultValue.remark, text: 'こんばんは〜！ 皆さんに残念なお知らせがあります。 スピーカーが熱中症なのだー もりのおんがくかいの音楽を楽しみにしていたフレンズのみんなごめんねー 早く直すからね みんなの楽しんでる声をBGMにしてくださーい -2018年7月22日' },
        { id: 1, href: 'https://twitter.com/kemono_matsuri/status/1021272190451236869', seen: false, remark: defaultValue.remark, text: 'こんばんは〜！ 皆様に朗報です! もりのおんがくかいサーバルビアグラス入荷しました～! お待たせしてごめんなさい！ 本日も沢山のご来場おまちしておりーす　-14:53 - 2018年7月23日' },
        { id: 2, href: 'https://twitter.com/kemono_matsuri/status/1021312627132194816', seen: false, remark: defaultValue.remark, text: 'こんばんは〜！ 皆様ー！！ かばんちゃんのジョッキがたった今売り切れてしまいました。。。 ご了承下さい。。 宜しくお願い致します。 - 17:34 - 2018年7月23日' },
        { id: 3, href: 'https://twitter.com/kemono_matsuri/status/1021312627132194816', seen: true, remark: defaultValue.remark, text: '皆さんにお知らせでーす!明日7 / 25(水)から物販に新商品が登場します!がーでんオリジナルキャップ!! 枡!!それに伴い日本酒も販売しちゃいまーす。 ですが!!飲みすぎはダメですよ！ 明日も皆さんのご来場お待ちしておりまーす! - 22: 33 - 2018年7月24日' },
        { id: 4, href: 'https://twitter.com/kemono_matsuri/status/1022739201903616002', seen: true, remark: '<br /><span class="red-text">※返金方法は下記記載あり</span>', text: 'こんばんは〜！ 【7月28日（土）の返金手続き】 返金方法につきまして、記載しております楽天チケットＵＲＬよりご確認いただき、対象のチケットをお持ちの方は、期間中にお手続きをお願い致します。 （※対象外のお客様への返金はいたしかねますのでご了承ください）<a href="https://ticket.rakuten.co.jp/change" rel="external" title="return">https://ticket.rakuten.co.jp/change</a> #けもフレがーでん' },
        { id: 5, href: 'https://twitter.com/kemono_matsuri/status/1023419590917779456', seen: false, remark: defaultValue.remark, text: 'みなさーん がーでんジョッキ(ppp集合ver)ですが、完売致しました！！ 入荷次第Twitterにあげますので、要チェックでお願いしまーす！ - 2018年7月24日 13:06' },
        { id: 6, href: 'https://twitter.com/kemono_matsuri/status/1024561148840960000', seen: true, remark: defaultValue.remark, text: '皆さーん そして今日からなんとスタンプラリーのスタンプキャラが変わるのだー！！ 果たして誰になるのか、、、 スタンプも要チェックなのだー！！ - 2018年8月1日 16:43' },
        { id: 7, href: 'https://twitter.com/kemono_matsuri/status/1024928621704564736', seen: true, remark: defaultValue.remark, text: '皆さーん 今日も暑いけどみんなのこと待ってるのだー そして今日から去年も販売していたジャンボうちわを販売しまーす！！パチパチ このうちわで今年の夏も乗り切るのだー - 2018年8月2日 17:03' }
      ]
    }
  }
})