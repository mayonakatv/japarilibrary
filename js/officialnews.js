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
        { id: 3, href: 'https://twitter.com/kemono_matsuri/status/1021312627132194816', seen: false, remark: defaultValue.remark, text: '皆さんにお知らせでーす!明日7 / 25(水)から物販に新商品が登場します!がーでんオリジナルキャップ!! 枡!!それに伴い日本酒も販売しちゃいまーす。 ですが!!飲みすぎはダメですよ！ 明日も皆さんのご来場お待ちしておりまーす! - 22: 33 - 2018年7月24日' },
        { id: 4, href: 'https://twitter.com/kemono_matsuri/status/1022739201903616002', seen: false, remark: '<br /><span class="red-text">※返金方法は下記記載あり</span>', text: 'こんばんは〜！ 【7月28日（土）の返金手続き】 返金方法につきまして、記載しております楽天チケットＵＲＬよりご確認いただき、対象のチケットをお持ちの方は、期間中にお手続きをお願い致します。 （※対象外のお客様への返金はいたしかねますのでご了承ください）<a href="https://ticket.rakuten.co.jp/change" rel="external">https://ticket.rakuten.co.jp/change</a> #けもフレがーでん' },
        { id: 5, href: 'https://twitter.com/kemono_matsuri/status/1023419590917779456', seen: false, remark: defaultValue.remark, text: 'みなさーん がーでんジョッキ(ppp集合ver)ですが、完売致しました！！ 入荷次第Twitterにあげますので、要チェックでお願いしまーす！ - 2018年7月24日 13:06' },
        { id: 6, href: 'https://twitter.com/kemono_matsuri/status/1024561148840960000', seen: false, remark: defaultValue.remark, text: '皆さーん そして今日からなんとスタンプラリーのスタンプキャラが変わるのだー！！ 果たして誰になるのか、、、 スタンプも要チェックなのだー！！ - 2018年8月1日 16:43' },
        { id: 7, href: 'https://twitter.com/kemono_matsuri/status/1024928621704564736', seen: false, remark: defaultValue.remark, text: '皆さーん 今日も暑いけどみんなのこと待ってるのだー そして今日から去年も販売していたジャンボうちわを販売しまーす！！パチパチ このうちわで今年の夏も乗り切るのだー - 2018年8月2日 17:03' },
        { id: 8, href: 'https://twitter.com/kemono_matsuri/status/1027032997151760385', seen: false, remark: defaultValue.remark, text: '【営業中止のお知らせ】本日8/8(水)の営業ですが、台風の接近に伴い終日営業中止とさせて頂きます。ご来店予定だった皆様、大変申し訳ございません。またのご来店心よりお待ちしております。 #けもフレがーでん - 12:25 - 2018年8月8日' },
        { id: 9, href: 'https://twitter.com/kemono_matsuri/status/1028832142044745728', seen: false, remark: defaultValue.remark, text: '直前ですみません…！！ 明日からコースターのキャラクターが追加しま～す！！ なんと、16種もあります…… コラボドリンクでの配布とさせて頂いております。。 皆さん是非キャラクターを当ててみてくださいね～！ #けもフレがーでん - 11:34 - 2018年8月13日' },
        { id: 10, href: 'https://twitter.com/kemono_matsuri/status/1028876678271881216', seen: false, remark: defaultValue.remark, text: 'けものフレンズがーでん9月分(土日祝)のチケットは8月17日(金)18:00～販売開始です☆ もう9月の販売です…早いですね… 真夏のけものフレンズがーでんもいいですが、少し涼しくなったけものフレンズがーでんにも来てみてください☆！ <a href="http://r-t.jp/kf-garden2" rel="external">http://r-t.jp/kf-garden2</a> - 14:31 - 2018年8月13日' },
        { id: 11, href: 'https://twitter.com/kemono_matsuri/status/1029551107062652931', seen: false, remark: defaultValue.remark, text: 'そして！！×100 今日からスタンプも変わってるよー 何のスタンプに変わってるかは来てからのお楽しみなのだー みんなの事待ってるのだー - 11:11 - 2018年8月15日' },
        { id: 12, href: 'https://twitter.com/kemono_matsuri/status/1030350235036397568', seen: false, remark: defaultValue.remark, text: '★☆かき氷気温割引キャンペーン☆★  8月20日より、かき氷が気温により割引になるキャンペーンを実施！ 31℃は400円、32℃は300円、33℃は200円、34℃で100円… 35℃以上はなんと無料です！！ ※オープン時の気温を基準に決定いたします。 あつ～い夏を乗り越えましょう！！ #けもフレがーでん - 16:06 - 2018年8月17日' },
        { id: 13, href: 'https://twitter.com/kemono_matsuri/status/1031752014701637637', seen: false, remark: defaultValue.remark, text: 'けものフレンズがーでんのグッズ表が完成しました～～！ 皆さんけものフレンズがーでんにご来店した際はぜひぜひお立ち寄りくださーい！！！ 皆様のご来店心よりお待ちしております☆！！ #けもフレがーでん - 12:57 - 2018年8月21日' },
        { id: 14, href: 'https://twitter.com/kemono_matsuri/status/1032462650179911680', seen: false, remark: defaultValue.remark, text: '【店内新イベント①】８月２７日(月)より「ハッピーアワー」を導入！ 平日限定で１７時、１８時にご来店いただきましたお客様に大人気の「セルリアンのたこ焼き」をおひとり様１つプレゼント！！！ 是非来てくださいねーー☆ #けもフレがーでん - 12:00 - 2018年8月23日' },
        { id: 15, href: 'https://twitter.com/kemono_matsuri/status/1032553113289285633', seen: false, remark: defaultValue.remark, text: '【店内新イベント②】８月２７日(月)より「フィーバータイム」を導入！毎日行います！ 射的がいつもより前で打てます！！ジャパまん投げのコインがなんどCDサイズ？！？ 各回２０分間限定です！いつスタートするかはスタッフの気分次第？！ 縁日も楽しんでいって下さ～い(^^)/ #けもフレがーでん - 18:00 - 2018年8月23日' },
        { id: 16, href: 'https://twitter.com/kemono_matsuri/status/1033965044931784704', seen: false, remark: defaultValue.remark, text: 'けものフレンズがーでん2がたくさんキャンペーンをしちゃいます！【全日】フレンズ紹介特典・縁日フィーバータイム 【平日限定】ハッピーアワー・クイズ大会・パッカァーン大会 開催日などの詳細は随時ツイッターにてお知らせしますので皆さんご覧ください！ #けもフレがーでん 15:30 - 2018年8月27日' },
        { id: 17, href: 'https://twitter.com/kemono_matsuri/status/1034713093396254721', seen: false, remark: defaultValue.remark, text: 'みなさーん！！ 今日からスタンプラリーのスタンプが変わってるよー！！ 今回は何のフレンズかなー？？ 楽しみだねっ！！ みんなが来るの楽しみに待ってるのだー - 17:03 - 2018年8月29日' },
        { id: 18, href: 'https://twitter.com/kemono_matsuri/status/1038336549933334528', seen: false, remark: defaultValue.remark, text: 'みなさーん！！ 本日の2部からアルコール・ドリンクバーのボタン表記が変わったのだーパチパチ！！ 今回はどんなのかなー？？ 写真はあえてアップしないよーw がーでんに遊びに来て確認するのだーーー -17:01 - 2018年9月8日' },
        { id: 19, href: 'https://twitter.com/kemono_matsuri/status/1038435566834999296', seen: false, remark: defaultValue.remark, text: 'みなさーん！！ 夜遅くにごめんなのだ〜！！ 明日から小鉢第2弾がスタートになるのよ！ ランダム配布で第1弾も混ざってるけど楽しみにしててね☆ 第1弾が来ても喜んで欲しいのだ！ 明日もみんなのこと待ってるのだーーー！！ - 23:35 - 2018年9月8日' },
        { id: 20, href: 'https://twitter.com/kemono_matsuri/status/1039041830677934080', seen: true, remark: '<br /><span class="red-text">※<a href="#sect-notice">諸注意</a>に詳細あります</span>', text: 'フレンズの皆様へお願いです。 本日より店内の360度カメラ及びビデオ撮影を禁止とさせていただきます。 理由としては他のお客様から写りたくないという声が多く出ております。 皆様全員が楽しんでいただけるように今回このような形とさせていただきます。 ご理解ご協力の程宜しくお願い申し上げます。 - 15:44 - 2018年9月10日' },
        { id: 21, href: 'https://twitter.com/kemono_matsuri/status/1040537354895671296', seen: true, remark: '<a href="http://r-t.jp/kf-garden2" rel="external">楽天チケット</a>', text: '【10月分チケット販売のお知らせ】 本日の18時より10月土日祝分のチケットが販売されました～！！！ 寒くなったがーでんも是非楽しんでくださいね～！ #けもフレがーでん - 18:46 - 2018年9月14日' },
        { id: 22, href: 'https://twitter.com/kemono_matsuri/status/1047767517056229376', seen: true, remark: defaultValue.remark, text: 'みなさーん 今日からなんとコースター第3弾の配布が開始になったよー！ (第2弾とランダムにて配布だよ)みんなオリジナルドリンクを買うのだー！ そして射的・じゃぱまん投げの外れの景品に第1弾のコースターがおまけで付いたよ！これもランダムだけど頑張ってコンプリートするのだー！！ 17:36 - 2018年10月4日' },
        { id: 23, href: 'https://twitter.com/kemono_matsuri/status/1050247670881636353', seen: true, remark: '<a href="http://r-t.jp/kf-garden2" rel="external">楽天チケット</a>', text: '【皆さんにお知らせ】 けもフレがーでん最終日は事前チケット制です。 10月12日(金)の18時から販売開始です！ 最後のがーでんをみなさんで盛り上がりましょう(^^)/  #けもフレがーでん 13:52 - 2018年10月11日' },
        { id: 24, href: 'https://twitter.com/kemono_matsuri/status/1050285078838824960', seen: true, remark: defaultValue.remark, text: 'みんなー！！ 14日(日)はネコ科の日を開催するのだー！パチパチ なんとこの日はネコ科のコスプレをしてくれたフレンズみんなにプレゼントがあるよ！ そして更に1部・2部共にとある時間に☆★☆大会をするよー みんなが来るの楽しみに待ってるのだー！ 16:20 - 2018年10月11日' },
        { id: 25, href: 'https://twitter.com/kemono_matsuri/status/1050913685047103489', seen: true, remark: defaultValue.remark, text: 'みんなー 今日からホットメニュー販売開始だよ！ 屋台からは焼きおにぎり・味噌汁セットを！！ オリジナルドリンクからはコーンスープ・オニオンスープ・ココア・熱燗なのだ！ そしてなんと全部にコースターが付くよ！ みんなであたたまるのだー！ 9:58 - 2018年10月13日' }
      ]
    }
  }
})