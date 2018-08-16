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
        { id: 0, name: 'Food [各種 500円]', rel: '', alt: 'food', src: 'img/sysimg/utensils-solid.svg', srcparent: '', icon: '' },
        { id: 1, name: 'セルリアンの枝豆', rel: defaultValue.internal.rel, alt: 'food', src: 'img/foods/ceruleanEdamame-min.png', srcparent: 'img/foods/ceruleanEdamame.png', icon: defaultValue.internal.icon },
        { id: 2, name: 'セルリアンのフライドポテト', rel: defaultValue.internal.rel, alt: 'food', src: 'img/foods/ceruleanFriedPotato-min.png', srcparent: 'img/foods/ceruleanFriedPotato.png', icon: defaultValue.internal.icon },
        { id: 3, name: 'フランクフルト', rel: defaultValue.internal.rel, alt: 'food', src: 'img/foods/frankfurt-min.png', srcparent: 'img/foods/frankfurt.png', icon: defaultValue.internal.icon },
        { id: 4, name: 'セルリアンのたこ焼き', rel: defaultValue.internal.rel, alt: 'food', src: 'img/foods/ceruleanTakoyaki-min.png', srcparent: 'img/foods/ceruleanTakoyaki.png', icon: defaultValue.internal.icon },
        { id: 5, name: '肉まん', rel: defaultValue.internal.rel, alt: 'food', src: 'img/foods/gardenNikuman-min.png', srcparent: 'img/foods/gardenNikuman.png', icon: defaultValue.internal.icon },
        { id: 6, name: 'セルリアンのフライドチキン（黒）', rel: defaultValue.internal.rel, alt: 'food', src: 'img/foods/friedChickenBlack-min.png', srcparent: 'img/foods/friedChickenBlack.png', icon: defaultValue.internal.icon },
        { id: 7, name: 'セルリアンのフライドチキン（赤）', rel: defaultValue.internal.rel, alt: 'food', src: 'img/foods/friedChickenRed-min.png', srcparent: 'img/foods/friedChickenRed.png', icon: defaultValue.internal.icon },
        { id: 8, name: 'Food [各種 300円]', rel: '', alt: 'food', src: 'img/sysimg/utensils-solid.svg', srcparent: '', icon: '' },
        { id: 9, name: 'セルリアンの卵串焼き', rel: defaultValue.internal.rel, alt: 'food', src: 'img/foods/ceruleanEgg-min.png', srcparent: 'img/foods/ceruleanEgg.png', icon: defaultValue.internal.icon },
        { id: 10, name: '赤セルリアンのザーサイ', rel: '', alt: 'food', src: '', srcparent: '', icon: '' },
        { id: 11, name: '赤セルリアンのメンマ', rel: '', alt: 'food', src: '', srcparent: '', icon: '' },
        { id: 12, name: 'Food [各種 1,000円]', rel: '', alt: 'food', src: 'img/sysimg/utensils-solid.svg', srcparent: '', icon: '' },
        { id: 13, name: '野菜カレー', rel: defaultValue.internal.rel, alt: 'food', src: 'img/foods/gardenCurry-min.png', srcparent: 'img/foods/gardenCurry.png', icon: defaultValue.internal.icon },
        { id: 14, name: 'サーバルのオムそば', rel: defaultValue.internal.rel, alt: 'food', src: 'img/foods/servalOmusoba-min.png', srcparent: 'img/foods/servalOmusoba.png', icon: defaultValue.internal.icon },
        { id: 15, name: 'アヒージョ', rel: defaultValue.internal.rel, alt: 'food', src: 'img/foods/ahijo-min.png', srcparent: 'img/foods/ahijo.png', icon: defaultValue.internal.icon },
        { id: 16, name: 'Drink [各種 500円]', rel: '', alt: 'food', src: 'img/sysimg/coffee-solid.svg', srcparent: '', icon: '' },
        { id: 17, name: 'サーバルのチョコバナナミルク', rel: defaultValue.external.rel, alt: 'food', src: 'https://pbs.twimg.com/media/Djbs3LgU0AAgB-r.jpg', srcparent: 'https://twitter.com/mamedaikichi/status/1024266419695964160', icon: '' },
        { id: 18, name: 'アライグマのブルーベリーヨーグルト', rel: defaultValue.internal.rel, alt: 'food', title: defaultValue.internal.title, src: 'img/foods/araiBlueberryYogurt-min.png', srcparent: 'img/foods/araiBlueberryYogurt.png', icon: defaultValue.internal.icon },
        { id: 19, name: 'PPPのミルクコーヒー', rel: defaultValue.internal.rel, alt: 'food', title: defaultValue.internal.title, src: 'img/foods/PPPMilkCoffee-min.png', srcparent: 'img/foods/PPPMilkCoffee.png', icon: defaultValue.internal.icon },
        { id: 20, name: 'ツチノコのショコララテ', rel: defaultValue.internal.rel, alt: 'food', title: defaultValue.internal.title, src: 'img/foods/tsuchinokoChocolatLatte-min.png', srcparent: 'img/foods/tsuchinokoChocolatLatte.png', icon: defaultValue.internal.icon },
        { id: 21, name: 'リョコウバトのストロベリーカルピス', rel: defaultValue.internal.rel, alt: 'food', title: defaultValue.internal.title, src: 'img/foods/ryokouStrawberryCalpis-min.png', srcparent: 'img/foods/ryokouStrawberryCalpis.png', icon: defaultValue.internal.icon },
        { id: 22, name: 'Desert [各種 500円]', rel: defaultValue.external.rel, alt: 'food', title: defaultValue.internal.title, src: 'img/sysimg/cookie-bite-solid.svg', srcparent: 'img/sysimg/cookie-bite-solid.svg', icon: defaultValue.internal.icon },
        { id: 23, name: 'セルリアンかき氷・赤', rel: '', alt: 'food', title: defaultValue.internal.title, src: '', srcparent: '', icon: '' },
        { id: 24, name: 'セルリアンかき氷・青', rel: defaultValue.external.rel, alt: 'food', src: 'https://pbs.twimg.com/media/DjcdunWVAAAR87Y.jpg', srcparent: 'https://twitter.com/htktkgt/status/1024320136356843520', icon: '' },
        { id: 25, name: 'セルリアンソフトクリーム', rel: defaultValue.internal.rel, alt: 'food', src: '', srcparent: '', icon: '' },
        { id: 26, name: 'セルリアン綿あめ', rel: defaultValue.internal.rel, alt: 'food', src: '', srcparent: '', icon: '' },
        { id: 27, name: 'セルリアンクレープ', rel: defaultValue.internal.rel, alt: 'food', src: '', srcparent: '', icon: '' },
        { id: 28, name: '新着商品', rel: '', alt: 'food', title: 'new arrival', src: 'img/sysimg/plane-arrival-solid.svg', srcparent: 'img/sysimg/plane-arrival-solid.svg', icon: '' },
        { id: 29, name: '冷酒（日本酒/紙コップで提供） [300円]', rel: defaultValue.internal.rel, alt: 'food', title: defaultValue.internal.title, src: '', srcparent: '', icon: '' }
      ],
      coasterGroceryList: [
        { id: 0, name: '第一弾', rel: '', alt: '', title: '', src: 'img/sysimg/dice-one-solid.svg', srcparent: '', icon: '' },
        { id: 1, name: 'イリオモテヤマネコ', rel: defaultValue.internal.rel, alt: 'coaster', title: defaultValue.internal.title, src: 'img/coaster/iriomoteyamaneko-min.png', srcparent: 'img/coaster/iriomoteyamaneko.png', icon: defaultValue.internal.icon },
        { id: 2, name: 'シーサー・レフティ', rel: defaultValue.internal.rel, alt: 'coaster', title: defaultValue.internal.title, src: 'img/coaster/shisalefty-min.png', srcparent: 'img/coaster/shisalefty.png', icon: defaultValue.internal.icon },
        { id: 3, name: 'シーサー・ライト', rel: defaultValue.internal.rel, alt: 'coaster', title: defaultValue.internal.title, src: 'img/coaster/shisaright-min.png', srcparent: 'img/coaster/shisaright.png', icon: defaultValue.internal.icon },
        { id: 4, name: 'シーサーバル・レフティ', rel: defaultValue.external.rel, alt: 'coaster', title: defaultValue.external.title, src: 'https://pbs.twimg.com/media/DjMm9i5U4AEwVL2.jpg', srcparent: 'https://twitter.com/Kdatlyno/status/1023204388704141313', icon: defaultValue.external.icon },
        { id: 5, name: 'シーサーバル・ライト', rel: defaultValue.internal.rel, alt: 'coaster', title: defaultValue.internal.title, src: 'img/coaster/shisarvalright-min.png', srcparent: 'img/coaster/shisarvalright.png', icon: defaultValue.internal.icon },
        { id: 6, name: 'ダイトウオオコウモリ', rel: defaultValue.internal.rel, alt: 'coaster', title: defaultValue.internal.title, src: 'img/coaster/daitookomori-min.png', srcparent: 'img/coaster/daitookomori.png', icon: defaultValue.internal.icon },
        { id: 7, name: 'ハブ', rel: defaultValue.internal.rel, alt: 'coaster', title: defaultValue.internal.title, src: 'img/coaster/habu-min.png', srcparent: 'img/coaster/habu.png', icon: defaultValue.internal.icon },
        { id: 8, name: 'ヤンバルクイナ', rel: defaultValue.internal.rel, alt: 'coaster', title: defaultValue.internal.title, src: 'img/coaster/yambarukuina-min.png', srcparent: 'img/coaster/yambarukuina.png', icon: defaultValue.internal.icon },
        { id: 9, name: 'リュウキュウケン', rel: defaultValue.internal.rel, alt: 'coaster', title: defaultValue.internal.title, src: 'img/coaster/ryukyuken-min.png', srcparent: 'img/coaster/ryukyuken.png', icon: defaultValue.internal.icon },
        { id: 10, name: '第二弾', rel: '', alt: '', title: '', src: 'img/sysimg/dice-two-solid.svg', srcparent: '', icon: '' },
        { id: 11, name: 'サーバル', rel: defaultValue.internal.rel, alt: 'coaster', title: defaultValue.internal.title, src: 'img/coaster/serval-min.png', srcparent: 'img/coaster/serval.png', icon: defaultValue.internal.icon },
        { id: 12, name: 'アライさん', rel: defaultValue.internal.rel, alt: 'coaster', title: defaultValue.internal.title, src: 'img/coaster/arai-min.png', srcparent: 'img/coaster/arai.png', icon: defaultValue.internal.icon },
        { id: 13, name: 'フェネック', rel: defaultValue.internal.rel, alt: 'coaster', title: defaultValue.internal.title, src: 'img/coaster/fenec-min.png', srcparent: 'img/coaster/fenec.png', icon: defaultValue.internal.icon },
        { id: 14, name: 'プリンセス', rel: defaultValue.internal.rel, alt: 'coaster', title: defaultValue.internal.title, src: 'img/coaster/princess-min.png', srcparent: 'img/coaster/princess.png', icon: defaultValue.internal.icon },
        { id: 15, name: 'ジェーン', rel: defaultValue.internal.rel, alt: 'coaster', title: defaultValue.internal.title, src: 'img/coaster/gentoo-min.png', srcparent: 'img/coaster/gentoo.png', icon: defaultValue.internal.icon },
        { id: 16, name: 'イワビー', rel: defaultValue.internal.rel, alt: 'coaster', title: defaultValue.internal.title, src: 'img/coaster/iwabi-min.png', srcparent: 'img/coaster/iwabi.png', icon: defaultValue.internal.icon },
        { id: 17, name: 'コウテイ', rel: defaultValue.internal.rel, alt: 'coaster', title: defaultValue.internal.title, src: 'img/coaster/koutei-min.png', srcparent: 'img/coaster/koutei.png', icon: defaultValue.internal.icon },
        { id: 18, name: 'フルル', rel: defaultValue.internal.rel, alt: 'coaster', title: defaultValue.internal.title, src: 'img/coaster/fululu-min.png', srcparent: 'img/coaster/fululu.png', icon: defaultValue.internal.icon },
        { id: 19, name: 'シロナガスクジラ', rel: defaultValue.internal.rel, alt: 'coaster', title: defaultValue.internal.title, src: 'img/coaster/shironagasukujira-min.png', srcparent: 'img/coaster/shironagasukujira.png', icon: defaultValue.internal.icon }
      ],
      kobachiGroceryList: [
        { id: 0, name: 'がーでん２ロゴ (がーでん２)', rel: defaultValue.external.rel, alt: 'kobachi', title: defaultValue.external.title, src: 'https://pbs.twimg.com/media/DijX1q3VAAARVjA.jpg', srcparent: 'https://twitter.com/mamedaikichi/status/1020302641916653568', icon: defaultValue.external.icon },
        { id: 1, name: 'ボス', rel: defaultValue.external.rel, alt: 'kobachi', title: defaultValue.external.title, src: 'https://pbs.twimg.com/media/DjMldGdUUAESbY1.jpg', srcparent: 'https://twitter.com/Kdatlyno/status/1023202733761785857', icon: defaultValue.external.icon },
        { id: 2, name: 'サーバル', rel: defaultValue.external.rel, alt: 'kobachi', title: defaultValue.external.title, src: 'https://pbs.twimg.com/media/DjMldGdU4AUeVYI.jpg', srcparent: 'https://twitter.com/Kdatlyno/status/1023202733761785857', icon: defaultValue.external.icon },
        { id: 3, name: 'かばんちゃん', rel: defaultValue.internal.rel, alt: 'kobachi', title: defaultValue.internal.title, src: 'img/kobachi/kaban-min.png', srcparent: 'img/kobachi/kaban.png', icon: defaultValue.internal.icon },
        { id: 4, name: 'アライさん', rel: defaultValue.external.rel, alt: 'kobachi', title: defaultValue.external.title, src: 'https://pbs.twimg.com/media/DjGseZEUcAApJkA.jpg', srcparent: 'https://twitter.com/mamedaikichi/status/1022788236672815105', icon: defaultValue.external.icon },
        { id: 5, name: 'フェネック', rel: defaultValue.external.rel, alt: 'kobachi', title: defaultValue.external.title, src: 'https://pbs.twimg.com/media/DjMldGhUYAEZV9o.jpg', srcparent: 'https://twitter.com/Kdatlyno/status/1023202733761785857', icon: defaultValue.external.icon },
        { id: 6, name: 'プリンセス', rel: defaultValue.internal.rel, alt: 'kobachi', title: defaultValue.internal.title, src: 'img/kobachi/princess-min.png', srcparent: 'img/kobachi/princess.png', icon: defaultValue.internal.icon },
        { id: 7, name: 'ジェーン', rel: defaultValue.internal.rel, alt: 'kobachi', title: defaultValue.internal.title, src: 'img/kobachi/gentoo-min.png', srcparent: 'img/kobachi/gentoo.png', icon: defaultValue.internal.icon },
        { id: 8, name: 'イワビー', rel: defaultValue.internal.rel, alt: 'kobachi', title: defaultValue.internal.title, src: 'img/kobachi/iwabi-min.png', srcparent: 'img/kobachi/iwabi.png', icon: defaultValue.internal.icon },
        { id: 9, name: 'コウテイ', rel: defaultValue.internal.rel, alt: 'kobachi', title: defaultValue.internal.title, src: 'img/kobachi/koutei-min.png', srcparent: 'img/kobachi/koutei.png', icon: defaultValue.internal.icon },
        { id: 10, name: 'フルル', rel: defaultValue.internal.rel, alt: 'kobachi', title: defaultValue.internal.title, src: 'img/kobachi/fululu-min.png', srcparent: 'img/kobachi/fululu.png', icon: defaultValue.internal.icon }
      ],
      shatekiGroceryList: [
        { id: 0, name: '吉崎観音コンセプトデザイン柄', rel: '', alt: '', title: '', src: 'img/sysimg/map-marked-alt-solid.svg', srcparent: '', icon: '' },
        { id: 1, name: 'サーバル', rel: defaultValue.rel, alt: '', title: defaultValue.internal.title, src: 'img/shateki/serval-min.png', srcparent: 'img/shateki/serval.png', icon: defaultValue.internal.icon },
        { id: 2, name: 'アライさん', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 3, name: 'フェネック', rel: defaultValue.internal.rel, alt: 'shateki', title: defaultValue.internal.title, src: 'img/shateki/fenec-min.png', srcparent: 'img/shateki/fenec.png', icon: defaultValue.internal.icon },
        { id: 4, name: 'プリンセス', rel: defaultValue.internal.rel, alt: 'shateki', title: defaultValue.internal.title, src: 'img/shateki/princess-min.png', srcparent: 'img/shateki/princess.png', icon: defaultValue.internal.icon },
        { id: 5, name: 'ジェーン', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 6, name: 'イワビー', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 7, name: 'コウテイ', rel: defaultValue.internal.rel, alt: 'shateki', title: defaultValue.internal.title, src: 'img/shateki/koutei-min.png', srcparent: 'img/shateki/koutei.png', icon: defaultValue.internal.icon },
        { id: 8, name: 'フルル', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 9, name: 'シーサーバル・レフティ', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 10, name: 'シーサーバル・ライト', rel: defaultValue.internal.rel, alt: 'shateki', title: defaultValue.internal.title, src: 'img/shateki/shisarvalright-min.png', srcparent: 'img/shateki/shisarvalright.png', icon: defaultValue.internal.icon },
        { id: 11, name: 'シーサー・レフティ', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 12, name: 'シーサー・ライト', rel: defaultValue.internal.rel, alt: 'shateki', title: defaultValue.internal.title, src: 'img/shateki/shisaright-min.png', srcparent: 'img/shateki/shisaright.png', icon: defaultValue.internal.icon },
        { id: 13, name: 'ヤンバルクイナ', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 14, name: 'ダイトウオオコウモリ', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 15, name: 'イリオモテヤマネコ', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 16, name: 'ハブ', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 17, name: 'リュウキュウケン', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },

        { id: 18, name: 'パビリオン柄', rel: '', alt: '', title: '', src: 'img/sysimg/fort-awesome-brands.svg', srcparent: '', icon: '' },
        { id: 19, name: 'サーバル', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 20, name: 'アライさん', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 21, name: 'フェネック', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 22, name: 'プリンセス', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 23, name: 'ジェーン', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 24, name: 'イワビー', rel: defaultValue.internal.rel, alt: defaultValue.internal.alt, title: defaultValue.internal.title, src: 'img/shateki/p_iwabi-min.png', srcparent: 'img/shateki/p_iwabi.png', icon: defaultValue.internal.icon },
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
        { id: 35, name: 'コンゴウインコ', rel: defaultValue.internal.rel, title: defaultValue.internal.title, src: 'img/shateki/p_kongouinko-min.png', srcparent: 'img/shateki/p_kongouinko.png', icon: defaultValue.internal.icon },
        { id: 36, name: 'パフィン', rel: defaultValue.internal.rel, title: defaultValue.internal.title, src: 'img/shateki/p_puffin-min.png', srcparent: 'img/shateki/p_puffin.png', icon: defaultValue.internal.icon },
        { id: 37, name: 'コモドドラゴン', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 38, name: 'ハクトウワシ', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 39, name: 'ピューマ', rel: '', alt: '', title: '', src: '', srcparent: '', icon: '' },
        { id: 40, name: '総外れ', rel: defaultValue.internal.rel, alt: 'shateki', title: defaultValue.internal.title, src: 'img/shateki/garden_seal-min.png', srcparent: 'img/shateki/garden_seal.png', icon: defaultValue.internal.icon }
      ],
      jugGroceryList: [
        { id: 0, name: 'ボス', rel: defaultValue.internal.rel, alt: 'jug', title: defaultValue.internal.title, src: 'img/jug/boss-min.png', srcparent: 'img/jug/boss.png', icon: defaultValue.internal.icon },
        { id: 1, name: 'サーバル', rel: defaultValue.internal.rel, alt: 'jug', title: defaultValue.internal.title, src: 'img/jug/serval-min.png', srcparent: 'img/jug/serval.png', icon: defaultValue.internal.icon },
        { id: 2, name: 'かばんちゃん ※売り切れ中', rel: defaultValue.internal.rel, alt: 'jug', title: defaultValue.internal.title, src: 'img/jug/kaban-min.png', srcparent: 'img/jug/kaban.png', icon: defaultValue.internal.icon },
        { id: 3, name: 'アライさん', rel: defaultValue.internal.rel, alt: 'jug', title: defaultValue.internal.title, src: 'img/jug/araisan-min.png', srcparent: 'img/jug/araisan.png', icon: defaultValue.internal.icon },
        { id: 4, name: 'フェネック', rel: defaultValue.internal.rel, alt: 'jug', title: defaultValue.internal.title, src: 'img/jug/fenec-min.png', srcparent: 'img/jug/fenec.png', icon: defaultValue.internal.icon },
        { id: 5, name: 'PPP', rel: defaultValue.internal.rel, alt: 'jug', title: defaultValue.internal.title, src: 'img/jug/PPP-min.png', srcparent: 'img/jug/PPP.png', icon: defaultValue.internal.icon },
        { id: 6, name: 'マーゲイ', rel: defaultValue.internal.rel, alt: 'jug', title: defaultValue.internal.title, src: 'img/jug/margay-min.png', srcparent: 'img/jug/margay.png', icon: defaultValue.internal.icon },
        { id: 7, name: 'アフリカオオコノハズク&ワシミミズク', rel: defaultValue.internal.rel, alt: 'jug', title: defaultValue.internal.title, src: 'img/jug/toshokans-min.png', srcparent: 'img/jug/toshokans.png', icon: defaultValue.internal.icon },
        { id: 8, name: 'キタキツネ&ギンギツネ', rel: defaultValue.internal.rel, alt: 'jug', title: defaultValue.internal.title, src: 'img/jug/yukiyamas-min.png', srcparent: 'img/jug/yukiyamas.png', icon: defaultValue.internal.icon },
        { id: 9, name: 'トキ', rel: defaultValue.internal.rel, alt: 'jug', title: defaultValue.internal.title, src: 'img/jug/toki-min.png', srcparent: 'img/jug/toki.png', icon: defaultValue.internal.icon },
        { id: 10, name: 'ツチノコ', rel: defaultValue.internal.rel, alt: 'jug', title: defaultValue.internal.title, src: 'img/jug/tsuchinoko-min.png', srcparent: 'img/jug/tsuchinoko.png', icon: defaultValue.internal.icon }
      ],
      glassGroceryList: [
        { id: 0, name: 'オオフラミンゴ', rel: defaultValue.internal.rel, alt: 'glass', title: defaultValue.internal.title, src: 'img/glass/oofuramingo-min.png', srcparent: 'img/glass/oofuramingo.png', icon: defaultValue.internal.icon },
        { id: 1, name: 'シヴァテリウム', rel: defaultValue.internal.rel, alt: 'glass', title: defaultValue.internal.title, src: 'img/glass/siva-min.png', srcparent: 'img/glass/siva.png', icon: defaultValue.internal.icon },
        { id: 2, name: 'タヌキ', rel: defaultValue.internal.rel, alt: 'glass', title: defaultValue.internal.title, src: 'img/glass/tanuki-min.png', srcparent: 'img/glass/tanuki.png', icon: defaultValue.internal.icon },
        { id: 3, name: 'ニホンオオカミ', rel: defaultValue.internal.rel, alt: 'glass', title: defaultValue.internal.title, src: 'img/glass/japanesewolf-min.png', srcparent: 'img/glass/japanesewolf.png', icon: defaultValue.internal.icon },
        { id: 4, name: 'ホワイトタイガー', rel: defaultValue.internal.rel, alt: 'glass', title: defaultValue.internal.title, src: 'img/glass/whitetiger-min.png', srcparent: 'img/glass/whitetiger.png', icon: defaultValue.internal.icon },
        { id: 5, name: 'リョコウバト', rel: defaultValue.internal.rel, alt: 'glass', title: defaultValue.internal.title, src: 'img/glass/ryokou-min.png', srcparent: 'img/glass/ryokou.png', icon: defaultValue.internal.icon },
        { id: 6, name: 'もりのおんがくかいのサーバル', rel: defaultValue.internal.rel, alt: 'glass', title: defaultValue.internal.title, src: 'img/glass/ongakukai-min.png', srcparent: 'img/glass/ongakukai.png', icon: defaultValue.internal.icon }
      ]
    }
  }
})