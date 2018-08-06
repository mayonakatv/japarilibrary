Vue.config.devtools = true
Vue.component('gardengoods-item', {
  // todo-item コンポーネントはカスタム属性のような "プロパティ" で受け取ります。
  // このプロパティは todo と呼ばれます。
  props: ['todo', 'target'],
  template: `<div class="flex-item">
              <figure>
                <img v-bind:src="todo.src" v-bind:alt="todo.alt" class="responsive-img" />
                <figcaption>{{ todo.name }}
                  <a v-bind:href="todo.srcparent" v-bind:title="todo.title" v-bind:rel="todo.rel" v-if="todo.srcparent">
                    <i v-bind:class="todo.icon" v-if="todo.icon"></i>
                  </a>
                </figcaption>
              </figure>
            </div>`
})

defaultValue = {
  external: {
    rel: 'external',
    title: 'source',
    icon: false
  },
  internal: {
    rel: 'nofollow',
    title: '100%',
    icon: 'fas fa-expand-arrows-alt'
  },
}

var gardengoods = new Vue({
  el: '#gardengoods',
  data: function () {
    return {
      foodGroceryList: [
        { id: 0, name: 'Drink [各種 500円]', rel: defaultValue.external.rel, alt: 'food', title: defaultValue.external.title, src: '', srcparent: '', icon: '' },
        { id: 1, name: 'サーバルのチョコバナナミルク', rel: defaultValue.external.rel, alt: 'food', title: defaultValue.external.title, src: 'https://pbs.twimg.com/media/Djbs3LgU0AAgB-r.jpg', srcparent: 'https://twitter.com/mamedaikichi/status/1024266419695964160', icon: defaultValue.external.icon },
        { id: 2, name: 'アライグマのブルーベリーヨーグルト', rel: defaultValue.internal.rel, alt: 'food', title: defaultValue.internal.title, src: 'https://kemono-matsuri.japarilibrary.com/img/foods/araiBlueberryYogurt.png', srcparent: 'https://kemono-matsuri.japarilibrary.com/img/foods/araiBlueberryYogurt.png', icon: defaultValue.internal.icon },
        { id: 3, name: 'PPPのミルクコーヒー', rel: defaultValue.internal.rel, alt: 'food', title: defaultValue.internal.title, src: 'https://kemono-matsuri.japarilibrary.com/img/foods/PPPMilkCoffee.png', srcparent: 'https://kemono-matsuri.japarilibrary.com/img/foods/PPPMilkCoffee.png', icon: defaultValue.internal.icon },
        { id: 4, name: 'ツチノコのショコララテ', rel: defaultValue.internal.rel, alt: 'food', title: defaultValue.internal.title, src: 'https://kemono-matsuri.japarilibrary.com/img/foods/tsuchinokoChocolatLatte.png', srcparent: 'https://kemono-matsuri.japarilibrary.com/img/foods/tsuchinokoChocolatLatte.png', icon: defaultValue.internal.icon },
        { id: 5, name: 'リョコウバトのストロベリーカルピス', rel: defaultValue.internal.rel, alt: 'food', title: defaultValue.internal.title, src: 'https://kemono-matsuri.japarilibrary.com/img/foods/ryokouStrawberryCalpis.png', srcparent: 'https://kemono-matsuri.japarilibrary.com/img/foods/ryokouStrawberryCalpis.png', icon: defaultValue.internal.icon },
        { id: 6, name: '冷酒（日本酒） [300円]', rel: defaultValue.internal.rel, alt: 'food', title: defaultValue.internal.title, src: '', srcparent: '', icon: '' },
        { id: 7, name: 'Desert [各種 500円]', rel: defaultValue.internal.rel, alt: 'food', title: defaultValue.internal.title, src: '', srcparent: '', icon: '' },
        { id: 8, name: 'セルリアンかき氷・赤', rel: defaultValue.internal.rel, alt: 'food', title: defaultValue.internal.title, src: '', srcparent: '', icon: '' },
        { id: 9, name: 'セルリアンかき氷・青', rel: defaultValue.external.rel, alt: 'food', title: defaultValue.external.title, src: 'https://pbs.twimg.com/media/DjcdunWVAAAR87Y.jpg', srcparent: 'https://twitter.com/htktkgt/status/1024320136356843520', icon: defaultValue.external.icon },
        { id: 10, name: 'セルリアンソフトクリーム', rel: defaultValue.internal.rel, alt: 'food', title: defaultValue.external.title, src: '', srcparent: '', icon: '' },
        { id: 11, name: 'セルリアン綿あめ', rel: defaultValue.internal.rel, alt: 'food', title: defaultValue.external.title, src: '', srcparent: '', icon: '' },
        { id: 12, name: 'セルリアンクレープ', rel: defaultValue.internal.rel, alt: 'food', title: defaultValue.external.title, src: '', srcparent: '', icon: '' },
      ],
      coasterGroceryList: [
        { id: 0, name: 'イリオモテヤマネコ', rel: defaultValue.internal.rel, alt: 'coaster', title: defaultValue.internal.title, src: 'https://kemono-matsuri.japarilibrary.com/img/coaster/iriomoteyamaneko.png', srcparent: 'https://kemono-matsuri.japarilibrary.com/img/coaster/iriomoteyamaneko.png', icon: defaultValue.internal.icon },
        { id: 1, name: 'シーサー・レフティ', rel: defaultValue.internal.rel, alt: 'coaster', title: defaultValue.internal.title, src: 'https://kemono-matsuri.japarilibrary.com/img/coaster/shisalefty.png', srcparent: 'https://kemono-matsuri.japarilibrary.com/img/coaster/shisalefty.png', icon: defaultValue.internal.icon },
        { id: 2, name: 'シーサー・ライト', rel: defaultValue.internal.rel, alt: 'coaster', title: defaultValue.internal.title, src: 'https://kemono-matsuri.japarilibrary.com/img/coaster/shisaright.png', srcparent: 'https://kemono-matsuri.japarilibrary.com/img/coaster/shisaright.png', icon: defaultValue.internal.icon },
        { id: 3, name: 'シーサーバル・レフティ', rel: defaultValue.external.rel, alt: 'coaster', title: defaultValue.external.title, src: 'https://pbs.twimg.com/media/DjMm9i5U4AEwVL2.jpg', srcparent: 'https://twitter.com/Kdatlyno/status/1023204388704141313', icon: defaultValue.external.icon },
        { id: 4, name: 'シーサーバル・ライト', rel: defaultValue.internal.rel, alt: 'coaster', title: defaultValue.internal.title, src: 'https://kemono-matsuri.japarilibrary.com/img/coaster/shisarvalright.png', srcparent: 'https://kemono-matsuri.japarilibrary.com/img/coaster/shisarvalright.png', icon: defaultValue.internal.icon },
        { id: 5, name: 'ダイトウオオコウモリ', rel: defaultValue.internal.rel, alt: 'coaster', title: defaultValue.internal.title, src: 'https://kemono-matsuri.japarilibrary.com/img/coaster/daitookomori.png', srcparent: 'https://kemono-matsuri.japarilibrary.com/img/coaster/daitookomori.png', icon: defaultValue.internal.icon },
        { id: 6, name: 'ハブ', rel: defaultValue.internal.rel, alt: 'coaster', title: defaultValue.internal.title, src: 'https://kemono-matsuri.japarilibrary.com/img/coaster/habu.png', srcparent: 'https://kemono-matsuri.japarilibrary.com/img/coaster/habu.png', icon: defaultValue.internal.icon },
        { id: 7, name: 'ヤンバルクイナ', rel: defaultValue.internal.rel, alt: 'coaster', title: defaultValue.internal.title, src: 'https://kemono-matsuri.japarilibrary.com/img/coaster/yambarukuina.png', srcparent: 'https://kemono-matsuri.japarilibrary.com/img/coaster/yambarukuina.png', icon: defaultValue.internal.icon },
        { id: 8, name: 'リュウキュウケン', rel: defaultValue.internal.rel, alt: 'coaster', title: defaultValue.internal.title, src: 'https://kemono-matsuri.japarilibrary.com/img/coaster/ryukyuken.png', srcparent: 'https://kemono-matsuri.japarilibrary.com/img/coaster/ryukyuken.png', icon: defaultValue.internal.icon }
      ],
      kobachiGroceryList: [
        { id: 0, name: 'がーでん２ロゴ (がーでん２)', rel: defaultValue.external.rel, alt: 'kobachi', title: defaultValue.external.title, src: 'https://pbs.twimg.com/media/DijX1q3VAAARVjA.jpg', srcparent: 'https://twitter.com/mamedaikichi/status/1020302641916653568', icon: defaultValue.external.icon },
        { id: 1, name: 'がーでん２ロゴ （が） ※存在未確認', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 2, name: 'ボス', rel: defaultValue.external.rel, alt: 'kobachi', title: defaultValue.external.title, src: 'https://pbs.twimg.com/media/DjMldGdUUAESbY1.jpg', srcparent: 'https://twitter.com/Kdatlyno/status/1023202733761785857', icon: defaultValue.external.icon },
        { id: 3, name: 'サーバル', rel: defaultValue.external.rel, alt: 'kobachi', title: defaultValue.external.title, src: 'https://pbs.twimg.com/media/DjMldGdU4AUeVYI.jpg', srcparent: 'https://twitter.com/Kdatlyno/status/1023202733761785857', icon: defaultValue.external.icon },
        { id: 4, name: 'かばんちゃん', rel: defaultValue.internal.rel, alt: 'kobachi', title: defaultValue.internal.title, src: 'https://kemono-matsuri.japarilibrary.com/img/kobachi/kaban.png', srcparent: 'https://kemono-matsuri.japarilibrary.com/img/kobachi/kaban.png', icon: defaultValue.internal.icon },
        { id: 5, name: 'アライさん', rel: defaultValue.external.rel, alt: 'kobachi', title: defaultValue.external.title, src: 'https://pbs.twimg.com/media/DjGseZEUcAApJkA.jpg', srcparent: 'https://twitter.com/mamedaikichi/status/1022788236672815105', icon: defaultValue.external.icon },
        { id: 6, name: 'フェネック', rel: defaultValue.external.rel, alt: 'kobachi', title: defaultValue.external.title, src: 'https://pbs.twimg.com/media/DjMldGhUYAEZV9o.jpg', srcparent: 'https://twitter.com/Kdatlyno/status/1023202733761785857', icon: defaultValue.external.icon },
        { id: 7, name: 'プリンセス', rel: defaultValue.internal.rel, alt: 'kobachi', title: defaultValue.internal.title, src: 'https://kemono-matsuri.japarilibrary.com/img/kobachi/princess.png', srcparent: 'https://kemono-matsuri.japarilibrary.com/img/kobachi/princess.png', icon: defaultValue.internal.icon },
        { id: 8, name: 'ジェーン', rel: defaultValue.internal.rel, alt: 'kobachi', title: defaultValue.internal.title, src: 'https://kemono-matsuri.japarilibrary.com/img/kobachi/gentoo.png', srcparent: 'https://kemono-matsuri.japarilibrary.com/img/kobachi/gentoo.png', icon: defaultValue.internal.icon },
        { id: 9, name: 'イワビー', rel: defaultValue.internal.rel, alt: 'kobachi', title: defaultValue.internal.title, src: 'https://kemono-matsuri.japarilibrary.com/img/kobachi/iwabi.png', srcparent: 'https://kemono-matsuri.japarilibrary.com/img/kobachi/iwabi.png', icon: defaultValue.internal.icon },
        { id: 10, name: 'コウテイ', rel: defaultValue.internal.rel, alt: 'kobachi', title: defaultValue.internal.title, src: 'https://kemono-matsuri.japarilibrary.com/img/kobachi/koutei.png', srcparent: 'https://kemono-matsuri.japarilibrary.com/img/kobachi/koutei.png', icon: defaultValue.internal.icon },
        { id: 11, name: 'フルル', rel: defaultValue.internal.rel, alt: 'kobachi', title: defaultValue.internal.title, src: 'https://kemono-matsuri.japarilibrary.com/img/kobachi/fululu.png', srcparent: 'https://kemono-matsuri.japarilibrary.com/img/kobachi/fululu.png', icon: defaultValue.internal.icon }
      ],
      shatekiGroceryList: [
        { id: 0, name: '吉崎観音コンセプトデザイン柄', rel: '', alt: '', title: '', src: 'sysimg/map-marked-alt-solid.svg', srcparent: '', icon: '' },
        { id: 1, name: 'サーバル', rel: defaultValue.rel, alt: '', title: defaultValue.internal.title, src: 'https://kemono-matsuri.japarilibrary.com/img/shateki/serval.png', srcparent: 'https://kemono-matsuri.japarilibrary.com/img/shateki/serval.png', icon: defaultValue.internal.icon },
        { id: 2, name: 'アライさん', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 3, name: 'フェネック', rel: defaultValue.internal.rel, alt: 'shateki', title: defaultValue.internal.title, src: 'https://kemono-matsuri.japarilibrary.com/img/shateki/fenec.png', srcparent: 'https://kemono-matsuri.japarilibrary.com/img/shateki/fenec.png', icon: defaultValue.internal.icon },
        { id: 4, name: 'プリンセス', rel: defaultValue.internal.rel, alt: 'shateki', title: defaultValue.internal.title, src: 'https://kemono-matsuri.japarilibrary.com/img/shateki/princess.png', srcparent: 'https://kemono-matsuri.japarilibrary.com/img/shateki/princess.png', icon: defaultValue.internal.icon },
        { id: 5, name: 'ジェーン', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 6, name: 'イワビー', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 7, name: 'コウテイ', rel: defaultValue.internal.rel, alt: 'shateki', title: defaultValue.internal.title, src: 'https://kemono-matsuri.japarilibrary.com/img/shateki/koutei.png', srcparent: 'https://kemono-matsuri.japarilibrary.com/img/shateki/koutei.png', icon: defaultValue.internal.icon },
        { id: 8, name: 'フルル', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 9, name: 'シーサーバル・レフティ', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 10, name: 'シーサーバル・ライト', rel: defaultValue.internal.rel, alt: 'shateki', title: defaultValue.internal.title, src: 'https://kemono-matsuri.japarilibrary.com/img/shateki/shisarvalright.png', srcparent: 'https://kemono-matsuri.japarilibrary.com/img/shateki/shisarvalright.png', icon: defaultValue.internal.icon },
        { id: 11, name: 'シーサー・レフティ', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 12, name: 'シーサー・ライト', rel: defaultValue.internal.rel, alt: 'shateki', title: defaultValue.internal.title, src: 'https://kemono-matsuri.japarilibrary.com/img/shateki/shisaright.png', srcparent: 'https://kemono-matsuri.japarilibrary.com/img/shateki/shisaright.png', icon: defaultValue.internal.icon },
        { id: 13, name: 'ヤンバルクイナ', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 14, name: 'ダイトウオオコウモリ', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 15, name: 'イリオモテヤマネコ', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 16, name: 'ハブ', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 17, name: 'リュウキュウケン', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },

        { id: 18, name: 'パビリオン柄', rel: '', alt: '', title: '', src: 'sysimg/fort-awesome-brands.svg', srcparent: '', icon: '' },
        { id: 19, name: 'サーバル', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 20, name: 'アライさん', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 21, name: 'フェネック', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 22, name: 'プリンセス', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 23, name: 'ジェーン', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 24, name: 'イワビー', rel: defaultValue.internal.rel, alt: defaultValue.internal.alt, title: defaultValue.internal.title, src: 'https://kemono-matsuri.japarilibrary.com/img/shateki/p_iwabi.png', srcparent: 'https://kemono-matsuri.japarilibrary.com/img/shateki/p_iwabi.png', icon: defaultValue.internal.icon },
        { id: 25, name: 'コウテイ', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 26, name: 'フルル', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 27, name: 'カバ', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 28, name: 'ジャガー', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 29, name: 'トキ', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 30, name: 'ハシビロコウ', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 31, name: 'アフリカオオコノハズク', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 32, name: 'ワシミミズク ※未確認', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 33, name: 'キタキツネ', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 34, name: 'ギンギツネ', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 35, name: 'コンゴウインコ', rel: defaultValue.internal.rel, title: defaultValue.internal.title, src: 'https://kemono-matsuri.japarilibrary.com/img/shateki/p_kongouinko.png', srcparent: 'https://kemono-matsuri.japarilibrary.com/img/shateki/p_kongouinko.png', icon: defaultValue.internal.icon },
        { id: 36, name: 'パフィン', rel: defaultValue.internal.rel, title: defaultValue.internal.title, src: 'https://kemono-matsuri.japarilibrary.com/img/shateki/p_puffin.png', srcparent: 'https://kemono-matsuri.japarilibrary.com/img/shateki/p_puffin.png', icon: defaultValue.internal.icon },
        { id: 37, name: 'コモドドラゴン', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 38, name: 'ハクトウワシ', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 39, name: 'ピューマ', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 40, name: '総外れ', rel: defaultValue.internal.rel, alt: 'shateki', title: defaultValue.internal.title, src: 'shateki/garden_seal.png', srcparent: 'shateki/garden_seal.png', icon: defaultValue.internal.icon }
      ],
      jugGroceryList: [
        { id: 0, name: 'ボス', rel: defaultValue.internal.rel, alt: 'jug', title: defaultValue.internal.title, src: 'https://kemono-matsuri.japarilibrary.com/img/jug/boss.png', srcparent: 'https://kemono-matsuri.japarilibrary.com/img/jug/boss.png', icon: defaultValue.internal.icon },
        { id: 1, name: 'サーバル', rel: defaultValue.internal.rel, alt: 'jug', title: defaultValue.internal.title, src: 'https://kemono-matsuri.japarilibrary.com/img/jug/serval.png', srcparent: 'https://kemono-matsuri.japarilibrary.com/img/jug/serval.png', icon: defaultValue.internal.icon },
        { id: 2, name: 'かばんちゃん ※売り切れ中', rel: defaultValue.internal.rel, alt: 'jug', title: defaultValue.internal.title, src: 'https://kemono-matsuri.japarilibrary.com/img/jug/kaban.png', srcparent: 'https://kemono-matsuri.japarilibrary.com/img/jug/kaban.png', icon: defaultValue.internal.icon },
        { id: 3, name: 'アライさん', rel: defaultValue.internal.rel, alt: 'jug', title: defaultValue.internal.title, src: 'https://kemono-matsuri.japarilibrary.com/img/jug/araisan.png', srcparent: 'https://kemono-matsuri.japarilibrary.com/img/jug/araisan.png', icon: defaultValue.internal.icon },
        { id: 4, name: 'フェネック', rel: defaultValue.internal.rel, alt: 'jug', title: defaultValue.internal.title, src: 'https://kemono-matsuri.japarilibrary.com/img/jug/fenec.png', srcparent: 'https://kemono-matsuri.japarilibrary.com/img/jug/fenec.png', icon: defaultValue.internal.icon },
        { id: 5, name: 'PPP', rel: defaultValue.internal.rel, alt: 'jug', title: defaultValue.internal.title, src: 'https://kemono-matsuri.japarilibrary.com/img/jug/PPP.png', srcparent: 'https://kemono-matsuri.japarilibrary.com/img/jug/PPP.png', icon: defaultValue.internal.icon },
        { id: 6, name: 'マーゲイ', rel: defaultValue.internal.rel, alt: 'jug', title: defaultValue.internal.title, src: 'https://kemono-matsuri.japarilibrary.com/img/jug/margay.png', srcparent: 'https://kemono-matsuri.japarilibrary.com/img/jug/margay.png', icon: defaultValue.internal.icon },
        { id: 7, name: 'アフリカオオコノハズク&ワシミミズク', rel: defaultValue.internal.rel, alt: 'jug', title: defaultValue.internal.title, src: 'https://kemono-matsuri.japarilibrary.com/img/jug/toshokans.png', srcparent: 'https://kemono-matsuri.japarilibrary.com/img/jug/toshokans.png', icon: defaultValue.internal.icon },
        { id: 8, name: 'キタキツネ&ギンギツネ', rel: defaultValue.internal.rel, alt: 'jug', title: defaultValue.internal.title, src: 'https://kemono-matsuri.japarilibrary.com/img/jug/yukiyamas.png', srcparent: 'https://kemono-matsuri.japarilibrary.com/img/jug/yukiyamas.png', icon: defaultValue.internal.icon },
        { id: 9, name: 'トキ', rel: defaultValue.internal.rel, alt: 'jug', title: defaultValue.internal.title, src: 'https://kemono-matsuri.japarilibrary.com/img/jug/toki.png', srcparent: 'https://kemono-matsuri.japarilibrary.com/img/jug/toki.png', icon: defaultValue.internal.icon },
        { id: 10, name: 'ツチノコ', rel: defaultValue.internal.rel, alt: 'jug', title: defaultValue.internal.title, src: 'https://kemono-matsuri.japarilibrary.com/img/jug/tsuchinoko.png', srcparent: 'https://kemono-matsuri.japarilibrary.com/img/jug/tsuchinoko.png', icon: defaultValue.internal.icon }
      ],
      glassGroceryList: [
        { id: 0, name: 'オオフラミンゴ', rel: defaultValue.internal.rel, alt: 'glass', title: defaultValue.internal.title, src: 'glass/oofuramingo.png', srcparent: 'glass/oofuramingo.png', icon: defaultValue.internal.icon },
        { id: 1, name: 'シヴァテリウム', rel: defaultValue.internal.rel, alt: 'glass', title: defaultValue.internal.title, src: 'glass/siva.png', srcparent: 'glass/siva.png', icon: defaultValue.internal.icon },
        { id: 2, name: 'タヌキ', rel: defaultValue.internal.rel, alt: 'glass', title: defaultValue.internal.title, src: 'glass/tanuki.png', srcparent: 'glass/tanuki.png', icon: defaultValue.internal.icon },
        { id: 3, name: 'ニホンオオカミ', rel: defaultValue.internal.rel, alt: 'glass', title: defaultValue.internal.title, src: 'glass/japanesewolf.png', srcparent: 'glass/japanesewolf.png', icon: defaultValue.internal.icon },
        { id: 4, name: 'ホワイトタイガー', rel: defaultValue.internal.rel, alt: 'glass', title: defaultValue.internal.title, src: 'glass/whitetiger.png', srcparent: 'glass/whitetiger.png', icon: defaultValue.internal.icon },
        { id: 5, name: 'リョコウバト', rel: defaultValue.internal.rel, alt: 'glass', title: defaultValue.internal.title, src: 'glass/ryokou.png', srcparent: 'glass/ryokou.png', icon: defaultValue.internal.icon },
        { id: 6, name: 'もりのおんがくかいのサーバル', rel: defaultValue.internal.rel, alt: 'glass', title: defaultValue.internal.title, src: 'glass/ongakukai.png', srcparent: 'glass/ongakukai.png', icon: defaultValue.internal.icon }
      ]
    }
  }
})