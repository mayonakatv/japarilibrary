<?php
  require 'header.php';
?>
    <div id="carousel" class="carousel carousel-slider">
      <carousel-item v-for="item in carouselGroceryList" v-bind:todo="item" v-bind:target="carousel"></carousel-item>
    </div>

    <section id="sect-about" style="margin-bottom: 2em;">
      <h2>けもフレがーでんとは？</h2>
      <div class="center-align quote-text">
        <p>「けものフレンズ」の屋外フードパーク</p>
        <p>「お祭だよ！けものフレンズがーでん2」は、屋台が並ぶお祭りスタイルで</p>
        <p>オリジナルフードやドリンクが楽しむことができます。</p>
        <p>さらに店内には「けものフレンズ」の 世界観が満載！</p>
        <p class="right-align">---けもフレがーでんHPより引用</p>

        <h6 class="bold">けものフレンズ　×　ビアガーデン</h6>
        <p>けものフレンズというメディアミックス作品の新しい形</p>
        <p>食べるもよし、飲むでもよし、仲間と語らうのもよしの新感覚イベント！</p>
      </div>
    </section>

    <div id="sect-officialNews" class="card yellow darken-2">
      <div class="card-content white-text">
        <span class="card-title">
          <a class="btn-floating orange pulse" style="margin: 0 1em 0 0;">
            <i class="fas fa-volume-up"></i>
          </a>がーでん公式Twitterで発表されている重要なお知らせ
        </span>

        <div id="officialnews">
          <div id="news">
            <officialnews-item v-for="item in newsGroceryList" v-bind:todo="item" v-bind:target="news"></officialnews-item>
          </div>
        </div>

        <h6>その他主筆よりお知らせ</h6>
        <p>現在のお知らせはありません。情報をお待ちしています！</p>
      </div>
      <div class="card-action">
        <i class="fas fa-home"></i>
        <a href="http://matsuri-kf-garden.jp/" class="light-blue-text" rel="external">matsuri-kf-garden.jp/</a>
        <i class="fab fa-twitter"></i>
        <a href="https://twitter.com/kemono_matsuri" class="light-blue-text" rel="external">twitter.com/kemono_matsuri</a>
      </div>
    </div>

    <div class="addLazyloadCss">
      <section id="sect-map">
        <h2>場所と行き方、入場券</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.887714421604!2d139.71097491524054!3d35.72897993495928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d687600e97d%3A0xc0be4490db0cb6e6!2z44GK56Wt44Gg44KI77yB44GR44KC44Gu44OV44Os44Oz44K644GM44O844Gn44KT!5e0!3m2!1sja!2sjp!4v1533069980471"
          width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
        <h5>場所</h5>
        <p>
          <span class="bold">お祭だよ！けものフレンズがーでん</span>
          <br />〒171-0022 東京都豊島区南池袋1丁目24−5 楽園タウン 屋上
        </p>
        <h5>営業時間（変更することもあります）</h5>
        <p>平日：17:00 - 22:00
          <br />土日祝および予約日：11:00 - 15:00, 16:00 - 22:00
        </p>
        <figure>
          <img src="img/other/timeTable-min.png" alt="タイムテーブル" />
          <figcaption>タイムテーブル
            <a href="img/other/timeTable.png" title="100%" rel="nofollow">
              <i class="fas fa-expand-arrows-alt"></i>
            </a>
          </figcaption>
        </figure>

        <section id="sect-way">
          <h5>行き方</h5>
          <ol>
            <li>池袋駅42番出口を目指す
              <br />42番出口は池袋駅東口の南寄りにある出口です。
              <br />41番出口を目指しても42番出口の正面に出ることが出来ます。
              <br />
              <a href="https://www.tokyometro.jp/support/metronavi/pdf/navi_97_98.pdf" rel="external" title="池袋駅構内図">東京メトロHP：池袋駅構内図（他路線をご利用の方も参考になります）</a>
              <div class="flex-container">
                <div class="flex-item">
                  <figure>
                    <img src="img/other/exit42-min.png" alt="42番出口" />
                    <figcaption>42番出口
                      <a href="img/other/exit42.png" title="100%" rel="nofollow">
                        <i class="fas fa-expand-arrows-alt"></i>
                      </a>
                    </figcaption>
                  </figure>
                </div>
                <div class="flex-item">
                  <figure>
                    <img src="img/other/exit42_2-min.png" alt="42番出口_階段" />
                    <figcaption>42番出口の階段
                      <a href="img/other/exit42_2.png" title="100%" rel="nofollow">
                        <i class="fas fa-expand-arrows-alt"></i>
                      </a>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </li>
            <li>地上に出てすぐ左側にある路地に入る
              <br />※服部珈琲舎とSPPSの間です
              <figure>
                <img src="img/other/between-min.png" alt="42番出口すぐの路地" />
                <figcaption>42番出口すぐの路地
                  <a href="img/other/between.png" title="100%" rel="nofollow">
                    <i class="fas fa-expand-arrows-alt"></i>
                  </a>
                </figcaption>
              </figure>
            </li>
            <li>小さな交差点をまっすぐ前の路地へ
              <br />西武高速バス池袋チケットセンターとサンマルクカフェの間です
              <figure>
                <img src="img/other/between2-min.png" alt="小さな交差点" />
                <figcaption>小さな交差点
                  <a href="img/other/between2.png" title="100%" rel="nofollow">
                    <i class="fas fa-expand-arrows-alt"></i>
                  </a>
                </figcaption>
              </figure>
            </li>
            <li>楽園タウンというパチンコ屋の屋上になります
              <div class="flex-container">
                <div class="flex-item">
                  <figure>
                    <img src="img/other/landmark-min.png" alt="がーでん目印" />
                    <figcaption>がーでん目印
                      <a href="img/other/landmark.png" title="100%" rel="nofollow">
                        <i class="fas fa-expand-arrows-alt"></i>
                      </a>
                    </figcaption>
                  </figure>
                </div>
                <div class="flex-item">
                  <figure>
                    <img src="img/other/gaikan-min.png" alt="楽園入口外観" />
                    <figcaption>楽園タウン入口外観
                      <a href="img/other/gaikan.png" title="100%" rel="nofollow">
                        <i class="fas fa-expand-arrows-alt"></i>
                      </a>
                    </figcaption>
                  </figure>
                </div>
                <div class="flex-item">
                  <figure>
                    <img src="img/other/gardenMap-min.png" alt="がーでん地図" />
                    <figcaption>がーでん内部地図
                      <a href="img/other/gardenMap.png" title="100%" rel="nofollow">
                        <i class="fas fa-expand-arrows-alt"></i>
                      </a>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </li>
          </ol>
          <h6>✔︎ 時間帯によって使えたり使えなかったりするルート</h6>
          <p>40番出口へ向かえ！
            <br />
            <span class="red-text">※このルートでは営業中のパチンコ店内を通行します。未成年および御子様連れの方はお使いいただけません。</span>
            <br />利用可能時間：7時 − 21時
            <br />地上にも出られます
          </p>
          <div class="flex-container">
            <div class="flex-item">
              <figure>
                <img src="img/other/exit40-min.png" alt="40番出口" />
                <figcaption>40番出口と楽園タウン入り口（地下）
                  <a href="img/other/exit40.png" title="100%" rel="nofollow">
                    <i class="fas fa-expand-arrows-alt"></i>
                  </a>
                </figcaption>
              </figure>
            </div>
            <div class="flex-item">
              <figure>
                <img src="img/other/exit40_2-min.png" alt="40番出口" />
                <figcaption>40番出口と楽園タウン入り口（地上）
                  <a href="img/other/exit40_2.png" title="100%" rel="nofollow">
                    <i class="fas fa-expand-arrows-alt"></i>
                  </a>
                </figcaption>
              </figure>
            </div>
        </section>

        <section id="sect-admissionTicket">
          <h5>入場券</h5>
          <h6>ソフトドリンク入場券：2,500円</h6>
          <h6>アルコール入場券：3,500円（ソフトドリンクも可）</h6>
          <p>どちらも90分飲み放題です。アルコール希望の方は年齢が確認できる身分証等を持参ください。
            <br />
            <span class="red-text">※入場時に渡されるお通しの入った小鉢は
              <span class="kenten">もらえます</span>。忘れずに持ち帰ってね。</span>
              <br />※今期はジョッキ、グラスは<span class="kenten">もらえません</span>。物販コーナーでの購入あるいはレンタルジョッキとなります。マイジョッキ・マイグラスの持ち込みも可能です。
          </p>

        </section>
      </section>

      <section id="sect-faq">
        <h2>よくありそうな質問 / FAQ</h2>
        <div class="faq-container">
          <h5 class="red-text bold center-align" style="margin: .5em;padding: .5em;border:1px dotted red;">ここを見る前に
            <a href="http://matsuri-kf-garden.jp/#notes" rel="external">公式ページの注意事項</a>をしっかり読んでね</h5>
          <h6>Q.池袋駅でいつも迷う...</h6>
          <p>A.
            <span class="red-text">42番出口</span>を目指すのです。
            <br />路線によっては41番出口の方が目指しやすいです（42番出口と同じ場所に出ます）。
            <a href="#sect-way" title="nofollow"> ◉ここを見るのだ！</a>
          </p>

          <h6>Q.お金下ろすの忘れた...</h6>
          <p>A. わーい！　楽園タウンの近隣にファミマがあるよー！
            <br />その他の銀行の位置関係も
            <a href="http://as.chizumaru.com/famima/detailMap?account=famima&accmd=0&bid=20592&adr=13&x=502979.343&y=128610.682&lscl=400&lrot=0&staid=529%40002837&pgret=1&c2=1"
              title="bank" rel="external">こちらのページで</a>。
          </p>

          <h6>Q.一緒に入る予定の友達が遅れそう...</h6>
          <p>A. なんだよー！　合流できてから入ってよー！
            <br />整理券をその場にいない人の分までもらうことはできません。
          </p>

          <h6>Q.時間前に来て、立て看板にはもう整理券配付中って出てるんだけど...？</h6>
          <p>A. 公式Twitterが最も正確な情報でござるよ。
            <br />立て看板はあまり正確ではありません。事前に公式Twitterで配布時間と場所を確認しましょう。
          </p>

          <h6>Q.公式Twitterのヘッダー画像の数字って何...？</h6>
          <p>A. "何か"のイベントへのカウントダウン？ というのだそうだ。
            <br />このままカウントダウンしていくと10/6（土）に0になるよ！　もしかしたら2018年も「幕張が〜で〜ん」があるのかも！
          </p>

          <h6>Q.がーでん公式の言っている"例の場所"ってどこ？</h6>
          <p>A. 会場の楽園タウンビル1階に入っている蕎麦屋横の路地のことだぜ☆
            <br />整理券の配布等はこの蕎麦屋横の路地でやってます。
          </p>

          <h6>Q.クレジットカード使えますか？</h6>
          <p>A. 使えないのだ。
            <br />公式サイトにも書いてあるけど現金しか取り扱ってないです。
          </p>

          <h6>Q.ジョッキじゃない方にアルコール入れても大丈夫？</h6>
          <p>A.
            <span class="red-text">大丈夫！</span> 今年(2期)は"ビア"グラスです！
            <br /><span class="del-text">ただビールサーバとサイズが合わないため、グラスをビールサーバに向かって横向きにずらして注ぎましょう。</span>
            <br />調整されてちゃんと入れられるようになりました！<a href="https://twitter.com/Kdatlyno/status/1031389958077014016" rel="external"></a>
          </p>

          <h6>Q.ジョッキにビール注ぐと泡が溢れる...</h6>
          <p>A.
            <span class="red-text">停止ボタン</span>を押すのですよ。
            <br />溢れる前にビールサーバの一番右のボタンを押すと止まります。
          </p>

          <h6>Q.日本酒ってカワウソ升とか物販の酒器に入れてもらえる？</h6>
          <p>A.できるんですけど！
            <br />どちらかの酒器をもっている方は注文時に提出しておけば、その酒器に入れてもらえます。
          </p>

          <h6>Q.18時に入場しても追加料金で延長して閉店まで居られますか？</h6>
          <p>A. できないにぇー。
            <br />延長サービスが受けられるのは19時の入場回のみです。なぜなら、19時で入ると21時で退場になりそこから1時間は20時入場組のみになります。その分人が入れるので延長サービスがあるのです。
            <br />なお、昼営業の12時回、夜営業の18時回には延長サービスは
            <span class="kenten">ありません</span>。
          </p>

          <h6>Q.任意特典（
            <a href="#sect-tokuten" title="任意特典" rel="nofollow">◉ここをみるのだ！</a>
            ）のもらい方がわからない...</h6>
          <p>A.入口受付のスタッフに対応をお願いしてみたらどうでしょう？
            <br />お花見がーでんの半券は特典と交換になります。半券を残しておきたい方は諦めましょう。
          </p>

          <h6>Q.星のついた昨年の500円フードチケットは...？</h6>
          <p>A.2018年(2期)のフードチケットと交換ですのよ</p> 

          <h6>Q.フードチケット足りない / 余った...</h6>
          <p>A.足りない時は受付のスタッフにお願いするんだよぉ！
            <br />現金500円とフードチケット500円分を交換できます。（交換は500円ずつ）
            <br />換金はできないので余ったら次回来る予定を立てましょう！
          </p>

          <h6>Q.フードチケットが使えるところと現金が使えるところがあるの？</h6>
          <p>A.物販と追加のフードチケット購入が現金のみ、それ以外はフードチケットのみなのさー。</p>

          <h6>Q.小鉢帰っている最中に割りそう...</h6>
          <p>A.物販スタッフにプチプチをモラウトイイヨ。ﾏｶｾﾃ。</p>

          <h6>Q.がーでんっていつまでやってるの？</h6>
          <p>A.わからん。ぜんぜんわからん...
            <br />企画運営企業のプレスには2018 年秋(予定)と書かれています。
            <a href="http://tp-co.jp/wp/wp-content/uploads/2018/06/4fa23c39ec48a9a2a0f5f0ad5670c1e72.pdf" rel="external"></a>
          </p>
        </div>
      </section>

      <section id="sect-first">
        <h2>初めての方へ / 楽しみ方のご提案</h2>
        <p>別ページをご用意いたしました！
          <a href="firstEntry.php" title="初参加者の方へ！">こちらからご確認ください！</a>
        </p>
      </section>

      <section id="sect-numberedTickets">
        <h2>当日整理券および待機列</h2>
        <h5>整理券配布</h5>
        <ul class="dot-list">
          <li>（平日）16時30分より蕎麦屋横で配布開始</li>
          <li>（平日）17時以降は屋上で配布　←実際は17時入場待機列が移動後（16時50分頃以降）は屋上で配布</li>
          <li>（予約設定日）10時30分より屋上で配布開始</li>
          <li>場合によって蕎麦屋横、屋上のどちらになるかは変更になることがあるので注意です（パチンコ店入り口すぐの階段のところに立て看板あり）、特に月曜日はパチンコ店の新台入荷待ち行列と混ざらないように場所が変更になることが多いようです</li>
          <li>その場にいない人の分まで整理券をもらうことはできません。合流できた次の回のものをもらうか、いない人だけ次の時間のものをもらってください。</li>
          <li>異なる入場時間の整理券を同時にもらうことはできます（同一人物が使用することが原則）。ただし入場時間が
            <span class="red-text">2時間</span>異なる時間のものをもらいましょう（1時間違いだと入場時間が被ります。3時間以上空けると間に空き時間が生じます）
            <br />なお、15時から16時は営業時間外なので注意です！
          </li>
        </ul>
        <figure>
          <img src="img/other/gardenWaitingInfo-min.png" class="responsive-img" alt="立て看板" />
          <figcaption>入り口すぐの看板
            <a href="img/other/gardenWaitingInfo.png" title="100%" rel="nofollow">
              <i class="fas fa-expand-arrows-alt"></i>
            </a>
          </figcaption>
        </figure>

        <h5>待機列形成（蕎麦屋横）</h5>
        <ul class="dot-list">
          <!--li>各回入場10分前から形成開始　←実際には30分程前から形成されている（ただし昨年程人がいないのでおとがめ無し）</li-->
          <li>列形成は原則1列（スタッフにより異なります）。前売り券優先にして後ろに当日券となるが、列移動直前などは混ざることもあるのでお覚悟を。
            <a href="https://twitter.com/minamiotari/status/1025732315828301827" rel="external"></a>
          </li>
          <li>各回入場10分前にスタッフさんによる誘導開始で、階段から屋上に向かう</li>
          <li>以降並ぶ人は直接屋上から伸びている列の後ろに付けば良い</li>
        </ul>

        <h5>注意</h5>
        <ul class="dot-list">
          <li>各回入場待機列が屋上に移動したあと、「当日整理券が欲しい人」は屋上からの待機列の横をすり抜けて屋上に上がって整理券をもらえば良い</li>
          <li>この時にその回の整理券をもらった人は屋上からの待機列の最後尾にまわること</li>
        </ul>
      </section>

      <section id="sect-100">
        <h2>けもフレがーでんを100倍楽しむための補足情報</h2>
        <section id="sect-present">
          <h5>入場時に配布しているもの</h5>
          <div class="flex-container">
            <div class="flex-item">
              <figure>
                <img src="img/other/stampCard-min.png" class="responsive-img" alt="スタンプカード" />
                <figcaption>スタンプカード(名刺型)
                  <a href="img/other/stampCard.png" title="100%" rel="nofollow">
                    <i class="fas fa-expand-arrows-alt"></i>
                  </a>
                </figcaption>
              </figure>
            </div>
            <div class="flex-item">
              <figure>
                <img src="img/other/stampRally-min.png" class="responsive-img" alt="スタンプラリーシート" />
                <figcaption>スタンプラリーシート(A4)
                  <a href="img/other/stampRally.png" title="100%" rel="nofollow">
                    <i class="fas fa-expand-arrows-alt"></i>
                  </a>
                </figcaption>
              </figure>
            </div>
            <div class="flex-item">
              <figure>
                <img src="https://pbs.twimg.com/media/DjMldGdU4AUeVYI.jpg" class="responsive-img" alt="小鉢" />
                <figcaption>小鉢(お通し付き, 種類があります)
                  <a href="https://pbs.twimg.com/media/DjMldGdU4AUeVYI.jpg" title="100%" rel="nofollow">
                    <i class="fas fa-expand-arrows-alt"></i>
                  </a>
                </figcaption>
              </figure>
            </div>
            <div class="flex-item">
              <figure>
                <img src="img/other/listband-min.png" class="responsive-img" alt="リストバンド" />
                <figcaption>リストバンド(時間やアルコールによって色が違います)
                  <a href="img/other/listband.png" title="100%" rel="nofollow">
                    <i class="fas fa-expand-arrows-alt"></i>
                  </a>
                </figcaption>
              </figure>
            </div>
            <div class="flex-item">
              <figure>
                <img src="img/other/food100-min.png" class="responsive-img" alt="100円フードチケット" />
                <figcaption>フードチケット100円*5枚
                  <a href="img/other/food100.png" title="100%" rel="nofollow">
                    <i class="fas fa-expand-arrows-alt"></i>
                  </a>
                </figcaption>
              </figure>
            </div>
            <div class="flex-item">
              <figure>
                <img src="img/other/food500-min.png" class="responsive-img" alt="500円フードチケット" />
                <figcaption>フードチケット500円*1枚
                  <a href="img/other/food500.png" title="100%" rel="nofollow">
                    <i class="fas fa-expand-arrows-alt"></i>
                  </a>
                </figcaption>
              </figure>
            </div>
            <div class="flex-item">
              <figure>
                <img src="img/other/rentaljug-min.png" class="responsive-img" alt="貸しジョッキ" />
                <figcaption>貸しジョッキ（買わない方のみ）
                  <a href="img/other/rentaljug.png" title="100%" rel="nofollow">
                    <i class="fas fa-expand-arrows-alt"></i>
                  </a>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section id="sect-tokuten">
          <h5>現在の任意特典</h5>
          <div class="flex-container">
            <div class="flex-item">
              <figure>
                <img src="img/other/gardenSeal-min.png" class="responsive-img" alt="がーでんシール" />
                <figcaption>3つの冷や水！のチラシでニコニコ超会議2018で配布していたがーでんシール
                  <a href="img/other/gardenSeal.png" title="100%" rel="nofollow">
                    <i class="fas fa-expand-arrows-alt"></i>
                  </a>
                </figcaption>
              </figure>
            </div>
            <div class="flex-item">
              <figure>
                <img src="img/coaster/habu-min.png" class="responsive-img" alt="特典コースター" />
                <figcaption>お花見がーでんの半券でコラボドリンクでももらえるコースター ※主筆非推奨
                  <a href="img/coaster/habu.png" title="100%" rel="nofollow">
                    <i class="fas fa-expand-arrows-alt"></i>
                  </a>
                </figcaption>
              </figure>
            </div>
            <div class="flex-item">
              <figure>
                <img src="" class="responsive-img" alt="スタンプラリー" />
                <figcaption>スタンプラリーコンプで粗品？</figcaption>
              </figure>
            </div>
            <div class="flex-item">
              <figure>
                <img src="img/other/stampCard10-min.png" class="responsive-img" alt="ステッカー" />
                <figcaption>スタンプカード：コラボドリンクやステッカー
                  <a href="#sect-stampcard" title="スタンプカード" rel="nofollow">◉ここをみるのだ！</a>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section id="sect-19">
          <h5>19時回延長サービス</h5>
          <p>19時入場に対する1時間延長サービスは、アルコール：2,000円、ソフトドリンク：1,000円で閉店まで延長できます。(前年と変更あり)
            <span>
              <a href="https://twitter.com/mamedaikichi/status/1020670514799390721" rel="external"></a>
            </span>
          </p>
          <!-- <p>受付開始は、運用を見ていると以下のようです（全て19時回の方を対象としています）</p>
          <ul class="dot-list">
            <li>「あと10分でラストオーダー」アナウンスあたりでは「21時から延長受け付けます」の案内が入り</li>
            <li>「20時半のラストオーダー」アナウンス後に「延長受け付けます」の案内が入り</li>
            <li>「あと10分で退場願います」アナウンスのときに「延長受け付けてます」の案内が入る</li>
          </ul> -->
      </section>

      <section id="sect-canceled">
        <h5>開催中止時の返金</h5>
        <p>このようなメールが楽天チケット登録メール宛に届きます。返金手続きを行うと「チケット代金」が返金されます。手数料は返金されません。</p>
        <figure>
          <img src="img/other/canceledMail-min.png" alt="メール" class="responsive-img" />
          <figcaption>返金案内メール
            <a href="img/other/canceledMail.png" title="100%" rel="nofollow">
              <i class="fas fa-expand-arrows-alt"></i>
            </a>
          </figcaption>
        </figure>

        <button class="openBtn2 btn btn-large">過去の中止事例を表示する</button>
        <div class="figure-explains textArea">
          <div class="figure-explain">
            <h6 class="bold">7月28日（土）中止の概要</h6>
            <figure>
              <img src="img/other/typhoon12.png" alt="current position" class="responsive-img" />
              <figcaption>台風12号(2018.7.28-2:45)</figcaption>
            </figure>
            <p>理由：台風12号の接近
              <br />返金期間：
              <span class="red-text bold">8月1日10時から8月14日23時59分まで</span>
              <br />チケットを発券した店舗（券面下部に記載あり）で現金での返金になります。
            </p>
          </div>
          <div class="figure-explain">
            <h6 class="bold">8月8日（水）中止の概要</h6>
            <figure>
              <img src="img/other/typhoon13.png" alt="current position" class="responsive-img" />
              <figcaption>台風13号(2018.8.8-13:45)</figcaption>
            </figure>
            <p>理由：台風13号の接近
              <br />チケットの予約はないので返金はありません
            </p>
          </div>
        </div>
      </section>

      <section id="sect-stampcard">
        <h5>スタンプカード</h5>
        <p>スタンプカードは初回参加者に配布、1回目の分はすでに押されているので押してもらう必要はないです。
          <br />2回目以降、入場時にスタンプを押してもらう。
          <br />20個貯まってもカードは回収されません。交換を行うと日付と済のサインが入ります。
          <br />ドリンク交換はドリンクコーナーで、ステッカー交換は受付です。
        </p>
        <h6>達成報酬</h6>
        <ul>
          <li>&ensp;5個：お好きなコラボドリンク1杯</li>
          <li>10個：絶滅危惧種（EN）ステッカー1枚</li>
          <li>15個：お好きなコラボドリンク1杯</li>
          <li>20個：絶滅寸前種（CR）ステッカー1枚</li>
        </ul>
        <div class="flex-container">
          <div class="flex-item">
            <figure>
              <img src="img/other/stampCard10-min.png" alt="ENcard" class="responsive-img" />
              <figcaption>絶滅危惧種（EN）ステッカー
                <a href="img/other/stampCard10.png" title="100%" rel="nofollow">
                  <i class="fas fa-expand-arrows-alt"></i>
                </a>
              </figcaption>
            </figure>
          </div>
          <div class="flex-item">
            <figure>
              <img src="img/other/stampCard20-min.png" alt="CRcard" class="responsive-img" />
              <figcaption>絶滅寸前種（CR）ステッカー
                <a href="img/other/stampCard20.png" title="100%" rel="nofollow">
                  <i class="fas fa-expand-arrows-alt"></i>
                </a>
              </figcaption>
            </figure>
          </div>
          <div class="flex-item">
            <figure>
              <img src="img/other/stampCardCompleted-min.png" alt="stampCardCompleted" class="responsive-img" />
              <figcaption>全て埋まったスタンプカード
                <a href="img/other/stampCardCompleted.png" title="100%" rel="nofollow">
                  <i class="fas fa-expand-arrows-alt"></i>
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="sect-stamprally">
        <h5>スタンプラリー</h5>
        <p>毎日設置場所が変わるスタンプを押そう！2週間ごとに絵柄が変わるよ！
          <br />同じ柄のスタンプはダメだそうです。2週間ごとに1回押せます。（先日まで間違った情報を掲載しておりました。申し訳ありません。）
        </p>
        <ul>
          <li>第一弾：サーバル</li>
          <li>第二弾：リョコウバト</li>
          <li>第三弾：ジャイアントペンギン</li>
          <li>第四弾：？？？</li>
          <li>第五弾：？？？</li>
          <li>第六弾：？？？</li>
        </ul>
      </section>

      <!-- <section id="sect-changed">
        <h5>昨年からの変更点</h5>
        <p>昨年の入場券は3,000円にジョッキまたはグラス、および1,000円分のフードチケットがついていました。
          <br />2018年(2期)は3,500円でお通し付きの小鉢と1,000円分のフードチケットです。(初参加者であれば)ジョッキを別途購入するため実質5,000円(2,000円弱の値上げに相当)です。
        </p>
        <p>ジョッキやグラスはイベントスペース最奥物販コーナーにて購入
          <br />ジョッキは1日1個限定、グラスは購入制限なし</p>
        <p>ジョッキを持参して来ていない参加者へは貸しジョッキあり（物販ジョッキを購入推奨）</p>
      </section> -->

      <section id="sect-test-info">
        <h5>要検証の情報</h5>
        <ul class="dot-list">
          <li>大阪もりのおんがくかいの半券対応はまだ決まっていない（スタッフにも聞かされていない）
            <a href="https://twitter.com/kemono_matsuri/status/937895359237328896" rel="external"></a>
          </li>
          <li>クレーンゲームは確立機（技術関係なく一定の金額を出さないと取れない仕組み）？</li>
        </ul>
      </section>
      </section>

      <div id="gardengoods">
        <section id="sect-gardengoods">
          <h2>コラボフード / 景品 / グッズ</h2>
          <section id="sect-foods">
            <h5>フードメニュー</h5>
            <p>
              <a href="http://matsuri-kf-garden.jp/images/menu/kemono_menu2018.pdf" rel="external">クリックして詳細を確認(公式サイトPDF)</a>
            </p>
            <button class="openBtn btn btn-large">表示する</button>
            <div class="textArea">
              <div id="food" class="flex-container">
                <gardengoods-item v-for="item in foodGroceryList" v-bind:todo="item" v-bind:target="food"></gardengoods-item>
              </div>
            </div>
          </section>

          <section id="sect-coaster">
            <h5>コースター
              <span>全25種類(9+未確認16種類)</span>
            </h5>
            <button class="openBtn btn btn-large">表示する</button>
            <div class="textArea">
              <div id="coaster" class="flex-container">
                <gardengoods-item v-for="item in coasterGroceryList" v-bind:todo="item" v-bind:target="coaster"></gardengoods-item>
              </div>
            </div>
            <!--[end]textArea-->
          </section>

          <section id="sect-kobachi">
            <h5>小鉢
              <span>全11種類</span>
            </h5>
            <button class="openBtn btn btn-large">表示する</button>
            <div class="textArea">
              <div id="kobachi" class="flex-container">
                <gardengoods-item v-for="item in kobachiGroceryList" v-bind:todo="item" v-bind:target="kobachi"></gardengoods-item>
              </div>
            </div>
            <!--[end]textArea-->
          </section>

          <section id="sect-shateki">
            <h5>射的景品
              <span>全59種類</span>
            </h5>
            <button class="openBtn btn btn-large">表示する</button>
            <div class="textArea">
              <div id="shateki" class="flex-container">
                <gardengoods-item v-for="item in shatekiGroceryList" v-bind:todo="item" v-bind:target="shateki"></gardengoods-item>
              </div>
            </div>
          </section>

          <section id="sect-goods">
            <h5>物販商品</h5>
            <p>去年の商品はこちらからも購入できます！
              <br />オンラインショップで売り切れになっていてもがーでん物販ブースにて販売されているものもあります！
              <br />※物販のみの利用はできません
              <br />
              <a href="https://kemono-friends-shop.net/" rel="external" title="がーでんショップ">けものフレンズがーでんショップ</a>
              <br /><a href="http://matsuri-kf-garden.jp/images/goods/goods_list.jpg" rel="external">公式の物販情報（2018年分）</a>
              <!-- <br />
              <a href="https://japaricafe.shop/" rel="external" title="けもフレカフェショップ">けものフレンズカフェショップ</a> -->
            </p>
            <a href="goods.php" title="物販商品">
              <figure>
                <img src="img/glass/comparison.png" alt="物販商品画像" class="responsive-img" />
                <figcaption class="center-align">
                  <button class="btn btn-large">
                    物販の取り扱い商品一覧へ
                  </button>
                </figcaption>
              </figure>
            </a>
          </section>
        </section>

        <section id="sect-facility">
          <h2>施設関連</h2>
          <section id="sect-games">
            <h5>ガチャガチャとクレーンゲーム</h5>
            <div class="flex-container">
              <div class="flex-item">
                <figure>
                  <img src="img/games/gamesPlace-min.png" class="responsive-img" alt="ゲームコーナー" />
                  <figcaption>クレーンゲーム&amp;ガチャコーナー
                    <a href="img/games/gamesPlace.png" title="100%" rel="nofollow">
                      <i class="fas fa-expand-arrows-alt"></i>
                    </a>
                  </figcaption>
                </figure>
              </div>
              <div class="flex-item">
                <figure>
                  <img src="https://pbs.twimg.com/media/DkjDGBeU4AAaJBD.jpg" class="responsive-img" alt="ガチャガチャ筐体" />
                  <figcaption>ガチャガチャの筐体
                    <a href="https://twitter.com/tosyokanmusume/status/1029287034861449217" rel="external"></a>
                  </figcaption>
                </figure>
              </div>
              <div class="flex-item">
                <figure>
                  <img src="img/games/crane-min.png" class="responsive-img" alt="クレーンゲーム筐体" />
                  <figcaption>クレーンゲームの筐体
                    <a href="img/games/crane.png" title="100%" rel="nofollow">
                      <i class="fas fa-expand-arrows-alt"></i>
                    </a>
                  </figcaption>
                </figure>
              </div>
              <div class="flex-item">
                <figure>
                  <img src="img/games/exchange-min.png" class="responsive-img" alt="両替機" />
                  <figcaption>クレーンゲームの筐体
                    <a href="img/games/exchange.png" title="100%" rel="nofollow">
                      <i class="fas fa-expand-arrows-alt"></i>
                    </a>
                  </figcaption>
                </figure>
              </div>
              <div class="flex-item">
                <figure>
                  <img src="img/games/craneNotice-min.png" class="responsive-img" alt="注意書き" />
                  <figcaption>クレーンゲームの注意書き
                    <a href="img/games/craneNotice.png" title="100%" rel="nofollow">
                      <i class="fas fa-expand-arrows-alt"></i>
                    </a>
                  </figcaption>
                </figure>
              </div>
            </div>
            <h6>設置場所：楽園タウンビル3階</h6>
            <p>クレーンゲーム：300円/回
              <br />ガチャガチャ：400/回
            </p>
            <p>クレーンゲーム（およびガチャガチャ）は混雑時3回までです。譲り合って楽しみましょう！
              <br />両替機は1,000円のみ崩すことができます。
              <br />スタッフが常に立っていますので、何かあれば尋ねてください。指示には従ってね！
            </p>
          </section>

          <section id="sect-japaman">
            <h5>ジャパまん投げコーナー</h5>
            <figure>
              <img src="img/ornaments/japaman-min.png" class="responsive-img" alt="ジャパまん投げ筐体" />
              <figcaption>筐体
                <a href="img/ornaments/japaman.png" title="100%" rel="nofollow">
                  <i class="fas fa-expand-arrows-alt"></i>
                </a>
              </figcaption>
            </figure>
            <h6>設置場所：物販横</h6>
            <p>500フードチケット/回</p>
            <p>一回で重量の違うジャパまん2つを投げられます。
              <br />フレンズの顔の上にジャパまんが1/3以上乗ったら成功です。
              <!-- <br />景品は重い方のジャパまんが1つ、軽い方のジャパまんが2つもらえます。 -->
            </p>
            <p>2018/8/15 もらえる景品の数が2倍になる「はーどもーど」が実装されました。投げる位置が通常の2倍離れています。</p>

            <p>2018/7/20 あまりに難易度が高すぎたため、重量が変更されました。</p>
            <figure>
              <img src="img/ornaments/japamanComparison-min.png" class="responsive-img" alt="重量変更" />
              <figcaption>変更前（左）→ 変更後（右）
                <a href="img/ornaments/japamanComparison.png" title="100%" rel="nofollow">
                  <i class="fas fa-expand-arrows-alt"></i>
                </a>
              </figcaption>
            </figure>
          </section>

          <section id="sect-shatekiGame">
            <h5>パッカァーン！２（射的）こーなー</h5>
            <figure>
              <img src="img/ornaments/shatekiBooth-min.png" class="responsive-img" alt="射的こーなー筐体" />
              <figcaption>射的筐体
                <a href="img/ornaments/shatekiBooth.png" title="100%" rel="nofollow">
                  <i class="fas fa-expand-arrows-alt"></i>
                </a>
              </figcaption>
            </figure>
            <h6>設置場所：物販横</h6>
            <p>500フードチケット/回</p>
            <p>一回で2発打てます。当たればスタンドパネルがもらえます。
              <a href="#sect-shateki" rel="nofollow" title="射的景品">◉ここを見るのだ！</a>
            </p>
          </section>

          <section id="sect-ornaments">
            <h5>装飾等</h5>
            <ul class="dot-list">
              <li>昨年度掲示のパネル展示あり</li>
              <li>としょかんのモニュメントが中央に設置</li>
              <li>2018年7月21日(土)に開催された、もりのおんがくかいFinalの非売予定音源を放送予定
                <a href="https://twitter.com/kemono_matsuri/status/1020662363605745664" rel="external"></a>
                <br />のはずでしたが、放送を確認できず...(2018/8/18現在)
              </li>
            </ul>
          </section>
        </section>
        <!--[end]sect-facility-->
      </div>
      <!--[end]gardengoods-->

      <section id="sect-notice">
        <h2>諸注意</h2>
        <div id="notice">
          <ol>
            <notice-item v-for="item in noticeGroceryList" v-bind:todo="item" v-html="item.text"></notice-item>
          </ol>
          <div class="flex-container">
            <div class="flex-item">
              <figure>
                <img src="img/other/temp42_2-min.png" class="responsive-img" alt="Too hot!" />
                <figcaption>超絶高温です...
                  <a href="img/other/temp42_2.png" title="100%" rel="nofollow">
                    <i class="fas fa-expand-arrows-alt"></i>
                  </a>
                </figcaption>
              </figure>
            </div>
            <div class="flex-item">
              <figure>
                <img src="img/other/washPlace-min.png" class="responsive-img" alt="洗い場" />
                <figcaption>洗い場は譲り合って使いましょう
                  <a href="img/other/washPlace.png" title="100%" rel="nofollow">
                    <i class="fas fa-expand-arrows-alt"></i>
                  </a>
                </figcaption>
              </figure>
            </div>
            <div class="flex-item">
              <figure>
                <img src="img/other/drinkArea-min.png" class="responsive-img" alt="ドリンク販売エリア" />
                <figcaption>コラボドリンクはこちらで！
                  <a href="img/other/drinkArea.png" title="100%" rel="nofollow">
                    <i class="fas fa-expand-arrows-alt"></i>
                  </a>
                </figcaption>
              </figure>
            </div>
          </div>

        </div>
      </section>

      <section id="sect-ads" class="Ads">
        <h2>がーでんのお供にどうぞ（宣伝）</h2>
        <p>がーでんに持って行ってみたり聞いたりすると楽しそうな公式商品をいくつかピックアップ！
          <br />こちらも定期的に更新します。
          <br />こちらのセクションはAdBlock等の広告非表示プラグインで表示されなくなったり表示されてたりします（未調整）。</p>
        <div class="adsArea-Amazon">
          <iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=tf_til&t=japarilibrary-22&m=amazon&o=9&p=8&l=as1&IS2=1&detail=1&asins=B079M9H94Z&linkId=b1b5ca6faa809fd3ee2d3d0bdcaf937e&bc1=000000&lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr"></iframe>
          <iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=tf_til&t=japarilibrary-22&m=amazon&o=9&p=8&l=as1&IS2=1&detail=1&asins=B07D8Z7ZHD&linkId=55acfbae93230c0d0b2d9350066fb41c&bc1=000000&lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr"></iframe>
          <iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=tf_til&t=japarilibrary-22&m=amazon&o=9&p=8&l=as1&IS2=1&detail=1&asins=B07CKSJNL3&linkId=3e40a24787075080d0428f676ae6d2aa&bc1=000000&lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr"></iframe>
          <iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=tf_til&t=japarilibrary-22&m=amazon&o=9&p=8&l=as1&IS2=1&detail=1&asins=B07CFM8525&linkId=2792e1d87bf279c16a9338803eb876b3&bc1=000000&lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr"></iframe>
          <iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=tf_til&t=japarilibrary-22&m=amazon&o=9&p=8&l=as1&IS2=1&detail=1&asins=4065122503&linkId=b430f1424c5df59ca65095399370d80f&bc1=000000&lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr"></iframe>
          <iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=tf_til&t=japarilibrary-22&m=amazon&o=9&p=8&l=as1&IS2=1&detail=1&asins=B07D1GQ9WJ&linkId=dbff3e098ed1191888f69c04ef8d515b&bc1=000000&lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr"></iframe>
          <iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=tf_til&t=japarilibrary-22&m=amazon&o=9&p=8&l=as1&IS2=1&detail=1&asins=B07F7G44JQ&linkId=61f02acf8695e4020f4e6724be99f9fe&bc1=000000&lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr"></iframe>
          <iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=tf_til&t=japarilibrary-22&m=amazon&o=9&p=8&l=as1&IS2=1&detail=1&asins=B07D3W43BT&linkId=839fa910a5d2d4e16175d5c0c0f6de3e&bc1=000000&lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr"></iframe>
        </div>
        <div class="adsArea-Rakuten">
          <div class="item-container">
            <table border="0" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <p style="font-size:12px;line-height:1.4em;margin:5px;word-wrap:break-word"></p>
                </td>
                <td>
                  <div style="border:1px solid #000000;background-color:#FFFFFF;margin:0px;padding-top:6px;text-align:center;overflow:auto;">
                    <a href="https://hb.afl.rakuten.co.jp/hgc/16ebcdbd.e194ae48.16ebcdbe.598873fd/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F15583246%2F&m=http%3A%2F%2Fm.rakuten.co.jp%2Fbook%2Fi%2F19280918%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIxMjh4MTI4IiwibmFtIjoxLCJuYW1wIjoiZG93biIsImNvbSI6MSwiY29tcCI6ImxlZnQiLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjB9"
                      target="_blank" rel="nofollow" style="word-wrap:break-word;">
                      <img src="https://hbb.afl.rakuten.co.jp/hgb/16ebcdbd.e194ae48.16ebcdbe.598873fd/?me_id=1213310&item_id=19280918&m=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F3527%2F4988002773527.jpg%3F_ex%3D80x80&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F3527%2F4988002773527.jpg%3F_ex%3D128x128&s=128x128&t=picttext"
                        border="0" style="margin:2px" alt="" title="">
                    </a>
                    <p style="font-size:12px;line-height:1.4em;text-align:left;margin:0px;padding:2px 6px;word-wrap:break-word">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/16ebcdbd.e194ae48.16ebcdbe.598873fd/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F15583246%2F&m=http%3A%2F%2Fm.rakuten.co.jp%2Fbook%2Fi%2F19280918%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIxMjh4MTI4IiwibmFtIjoxLCJuYW1wIjoiZG93biIsImNvbSI6MSwiY29tcCI6ImxlZnQiLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjB9"
                        target="_blank" rel="nofollow" style="word-wrap:break-word;">どうぶつ！よーいドン！ (初回生産盤 CD＋DVD) [ ちく☆たむ ]</a>
                    </p>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div class="item-container">
            <table border="0" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <p style="font-size:12px;line-height:1.4em;margin:5px;word-wrap:break-word"></p>
                </td>
                <td>
                  <div style="border:1px solid #000000;background-color:#FFFFFF;margin:0px;padding-top:6px;text-align:center;overflow:auto;">
                    <a href="https://hb.afl.rakuten.co.jp/hgc/16ebcdbd.e194ae48.16ebcdbe.598873fd/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F15565216%2F&m=http%3A%2F%2Fm.rakuten.co.jp%2Fbook%2Fi%2F19235153%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIxMjh4MTI4IiwibmFtIjoxLCJuYW1wIjoiZG93biIsImNvbSI6MSwiY29tcCI6ImxlZnQiLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjB9"
                      target="_blank" rel="nofollow" style="word-wrap:break-word;">
                      <img src="https://hbb.afl.rakuten.co.jp/hgb/16ebcdbd.e194ae48.16ebcdbe.598873fd/?me_id=1213310&item_id=19235153&m=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F5858%2F2100011125858.gif%3F_ex%3D80x80&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fbook%2Fcabinet%2F5858%2F2100011125858.gif%3F_ex%3D128x128&s=128x128&t=picttext"
                        border="0" style="margin:2px" alt="" title="">
                    </a>
                    <p style="font-size:12px;line-height:1.4em;text-align:left;margin:0px;padding:2px 6px;word-wrap:break-word">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/16ebcdbd.e194ae48.16ebcdbe.598873fd/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F15565216%2F&m=http%3A%2F%2Fm.rakuten.co.jp%2Fbook%2Fi%2F19235153%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIxMjh4MTI4IiwibmFtIjoxLCJuYW1wIjoiZG93biIsImNvbSI6MSwiY29tcCI6ImxlZnQiLCJwcmljZSI6MCwiYm9yIjoxLCJjb2wiOjB9"
                        target="_blank" rel="nofollow" style="word-wrap:break-word;">【早期予約特典】さふぁりどらいぶ♪ (初回限定盤 2CD) (直筆サイン入り！どうビスプラチナメッセージカード付き) [ どうぶつビスケッツ ]</a>
                    </p>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>

        <section id="sect-siteinfo">
          <h2>本サイト、およびその情報について</h2>
          <h5 class="center-align orange darken-2 white-text bold" style="padding:1em;">作成理念「初めてでも不安なくがーでんへゆく為に」</h5>
          <!-- <p class="black center-align bold" style="padding: 1em;overflow: hidden;position: relative;">
            <i class="far fa-square yellow-text darken-3" style="position: absolute;left:5%;"></i>
            <a href="http://dic.nicovideo.jp/a/%E3%83%95%E3%82%A3%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%98%E3%82%83%E3%81%AA%E3%81%84%E3%81%AE%E3%81%8B%E3%82%88%21%E9%A8%99%E3%81%95%E3%82%8C%E3%81%9F%21"
              rel="external" title="FND!" class="white-text">
              本サイト#がーでんいんふぉの情報は
              <br />公式サイト、公式Twitter、がーでん参加者の
              <br />ツイートをもとに構成された真実の物語です
            </a>
          </p> -->
        </section>

        <section id="sect-crawling">
          <h5>情報収集手法</h5>
          <ol>
            <li>
              <a href="https://twitter.com/htktkgt" rel="external">ななみ隣@htktkgt</a>が手動にて検索し、ツイート投稿者へ確認が取れたもの</li>
            <li>DMにていただいた情報を掲載</li>
            <li>
              <a href="https://twitter.com/search?q=%23%E3%81%8C%E3%83%BC%E3%81%A7%E3%82%93%E3%81%84%E3%82%93%E3%81%B5%E3%81%89&src=typd"
                title="Twitter_Trend" rel="external">#がーでんいんふぉ</a>をつけて投稿されたツイート</li>
          </ol>

          <p>#がーでんいんふぉ はけもフレがーでんの情報共有、また本ページ作成と情報共有を目的として作成されたものです。本ページ作成の際にツイート(ご案内)をいたしました
            <a href="https://twitter.com/htktkgt/status/1021121729127518208" rel="external"></a>が、こちらに掲載されることを希望されない場合はこちらのハッシュタグを使用しないでツイートをお願いいたします。</p>
        </section>

        <section id="sect-reliability">
          <h5>各情報の信頼性</h5>
          <p>都度確認して行きますが、利用については各人の自己判断においてお願いいたします。
            <br />平易な用語を用いるよう心がけていますが、わかりにくい箇所ありましたら上記よりご連絡ください。
            <br />なお、#けもフレがーでん で
            <a href="https://twitter.com/search?q=%23けもフレがーでん" rel="external" title="Twitter">Twitter検索</a>をかけますと、公式や参加者のつぶやきが確認できます。ハッシュタグをつけて疑問を投稿すると解決するかもしれません。</p>
        </section>

        <section id="sect-research">
          <h5>けものフレンズに関する調査</h5>
          けものフレンズ、けもフレがーでん、および当サイトに関する調査を行なっております。
          <br />ご協力いただける方は以下のリンクよりご回答をお願いいたします。
          <br />なお、いただいた情報はいかなる理由でも公開いたしません。サイト制作のためのみに活用させていただきます。
          <br />
          <a href="https://goo.gl/forms/mbeUeTy2m3VPBkHZ2" rel="nofollow" title="GoogleForm">
            <button class="btn btn-large">
              <i class="fab fa-wpforms"></i>
              調査フォームへ </button>
          </a>
        </section>

        <section id="sect-env">
          <h5>推奨環境</h5>
          <p>macOS, WindowsのChrome最新版
            <br />macOS, WindowsのFirefoxの最新版
            <br />macOSのSafariの最新版を推奨ブラウザとします。
            <br />
            <br />Microsoft Edgeの最新版も閲覧できる環境だと確認できています。
            <br />また、1200px以上の横幅のモニタを推奨します。
          </p>
          <p>特にIE11以下は表示がされない箇所がありますので非推奨としています。</p>
        </section>

        <section id="sect-licence">
          <h5>ライセンス</h5>
          <p>こちらで使用しているアイコンには、一部に外部提供のものがあります。</p>
          <ul>
            <li>FontAwsome:
              <ul class="dot-list">
                <li>website:
                  <a href="https://fontawesome.com/" rel="external">https://fontawesome.com/</a>
                </li>
                <li>licence:
                  <a href="https://fontawesome.com/license/free" rel="external">https://fontawesome.com/license/free</a>
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section id="sect-reason">
          <h5>本ページを作成した理由</h5>
          <p>本章は人により不快になる可能性があるため非表示になっています。非表示推奨対象者：けものフレンズ、がーでんを無条件に肯定している方</p>
          <button class="openBtn btn btn-large">表示する</button>
          <div class="textArea">
            <p>
              まず最初に明言しておきたいことは、
              <span class="kenten">わたしはけものフレンズが大好きです。そしてそれと同じくらいがーでんが大好きです</span>。
              <br />しかし、けものフレンズ(@KFP)にも、がーでんにも問題があると私は思います。ただしこれは、「たつき監督が...」 や「KADOKAWAが...」といったこととは
              <span class="bold">違います</span>。
              <br />例えば、けものフレンズやがーでんにはフットワークの軽さが非常によく表れていると思います。急遽イベントに参加したり、参加特典をつけたりなど他の企画であればできないようなスピードで物事が決定されているのは皆さんも知るところだと思います。
              <br />ですが、物事をあまりに素早く進めようとし、拙速になっている点があると言わざるを得ません。ツイートでお知らせしていながら当日に間に合っていなかったり、特典をつけるといいながらその後お知らせがなかったりすることがあります。
              <br />また、そんな点をフレンズのみなさん（ファンコミュニティ）や初期ではけものフレンズチャンネルが支えていることも長短あると考えています。
              <br />本来であれば企画会社や運営スタッフが先んじて手を打っていなければいけないことがなおざりになっていることが多々あります。そんな点をコミュニティの皆さんで情報共有し合い、補完しているのは2017年の段階でけものフレンズチャンネルにけものフレンズ（公式）がTwitter上で感謝している点でもわかるかと思います。
              <br />また、お知らせの告知方法にも問題があると感じています。Twitterは宣伝には大いに役に立つところであることは異論ありません。が、その性質上情報がすぐにネットの大海に埋もれてしまい、誰もが完全な情報にアクセスできずにいます。
              <br />本来ならそういった情報はウェブサイトにてまとめて掲載し、がーでんに行きたいと考えている何人でも等しく得られなければ、新規のファンを得ることは叶わず、ひいてはコミュニティや作品の衰退を招くと考えています。
              <br />そしてその役目はコミュニティの有志ではなく、公式であるけもフレがーでんが担わなければならないと考えています。
              <br />公式アカウントがツイートで"例の場所"と言った表現は特にその最たるものだと思います。公式自身はもはや新規顧客（ファン）を獲得しようという考えがなく、「もう言わなくてもわかるよね？（≒みんなもそうでしょ？）」という無意識の排他性が出ていると見えます。
              <br />結論として、前述のような一覧性に欠け新規ファンを蔑ろにするような不甲斐ない告知方法しかできてない、また、組織として体系だった情報の共有とマネジメントができていないけもフレがーでん公式に不満を覚えました。
              <br />異論はあるでしょうが、これがわたしの意見です。
            </p>
            <p>
              しかしない以上、その役目は誰かがやらねばならないと思いましたし、
              <span class="bold">そういった文句を再生産することなく消費するだけの人間が言うべきではない。</span>その矜恃と相反しないためにわたしは今回、このページを作成した次第です。
              <br />なお、この矜恃に関してはあなたや第三者が同様に思う必要は全くないことは明記しておきます。ただし、この「再生産」には、例えば今回の問題で言うならば「過去のツイートを掘り返して積極的にRTする」などの比較的簡単な活動であっても含まれると考えています。得意なことは違えど、やれることはやろうという考えです。
              <br />
              <br />深夜帯アニメというのは時間の関係上、見る人間はある程度年齢のいった方ですし、１クールだけのアニメが多い以上、コミュニティは放送当時の人がほとんどでしょう。
              <br />しかし、わたしはけものフレンズにドラえもんや、ポケモン、プリキュアといった作品になってもらいたいと思っています。
              <br />意味として二つあり、一つは作品が長く続いて欲しいという意味です。どのような形であれ多くの人に楽しんでもらえ、例えば動物や自然科学の初学者の教科書になりうる作品になれば素晴らしいなと思っています。
              <br />二つめは、常に流動性のあるコミュニティであることです。長く続くには同じ人が支え続けるのではなく、新しい人がコミュニティに参画することが必須だと考えます。同じ人たちで支えるということは、時間とともにコミュニティ全体の年齢が上がることを意味します。それは確実に規模の縮小を起こします。
              <br />そして、同じ人たちであるということはコミュニティの硬直を招き、排他的になります。「ファンならこれを知っているべき」「これがこの作品の常識」そういった意識が、無意識にコミュニティの外の人を遠ざけます。そうなれば、もう新しくファンがコミュニティに参加することはできないでしょう。
              <br />常に新しいファンを入れるという点において、上にあげた作品は大いに参考になるでしょう。共通点は「常に同じ年齢層の子どもがファンになっている」という点です。プリキュアには大人がファンになっている点もありますが、作品のコンセプトとして「4~6歳女児」をメインターゲットにしてますのでこの際は無視してください。
              <br />新しいファンとなった子ども達が子ども達同士の会話において好きを語り合い、グッズを買い支え、そして成長とともにコミュニティから卒業していく。その基本サイクルがあるからこそ、どの段階で入ったファンであってもその作品を楽しむことができます。卒業した子どもも、記憶の中に作品があれば時折それを思い出しますし、何より「子どもの頃に見たものはなんであれ肯定する」というところは大きいでしょう。
              <br />
              <br />けものフレンズ2期で大きく揺れていますが、わたしとしては綺麗なまま死んでもらってもいいかなと思っています。しかしやるならもはやスティーブン・スピルバーグ監督が監督になったとしても、たつき監督が戻っても大きな批判にさらされるでしょう。
              <br />ですから、わたしはプリキュアのように1期のキャラクタは一切出さずに、けものフレンズの概念だけを引き継いだ作品になってもいいと思っています。
            </p>
            <p>
              また、参加者の皆さんにも少し考えものな点もあります。けものフレンズの公式イベントは放送が終わってしまったこともありあまり多くありませんでした。そのため有志がオフ会を頻繁に開催していました。
              <br />その流れをそのまま公式のがーでん2期に持ってきてはいないですか？正直
              <span class="bold">内輪ネタ（排他性の高い話題）や、そのノリ（雰囲気）を公式に持ち込むのはわたしは違う</span>と思います。
              <br />たしかに、オフ会という存在が公式の存続に与えた影響は少なくないと言えるでしょう。Twitterの#自宅がーでん に公式がレシピを公開するなどする点からそれが言えます。そう考えれば、無下に否定することはできません。
              <br />たとえば、大量のけもフレグッズを持ち寄り祭壇を作り楽しむことは公式もある種公認しているような点もありますし、みていてすごいなと思います。でも同時に、
              <span class="bold">「けもフレグッズが一つもなくったって楽しめるんだよ！」</span>という環境も用意できなければ、単に内輪で盛り上がっているに過ぎず無意識に排他的になっていると言わざるを得ません。
              <br />久しぶりに公式イベントが行われて楽しい気持ち、嬉しい気持ちは十分にわかります。わたしもオフ会に参加、主催した経験からそれは十二分に理解できます。ですが、オフ会に参加していなかった人や初参加の人たちにとってその雰囲気は決してがーでんにとっていい思い出として残らないと感じています。参加意識を変えろとは言いません。しかし自身の行動を少し省みていただければと思っています。
            </p>
            <p>
              さて、色々な話に飛んでしまいましたが、わたしが皆さんにいいたいことは一つ。「
              <span class="bold kenten">あなたはけものがお好きですか？</span>」
              <br />みなさんに善き一日があらんことを。御清覧に感謝します。
            </p>
          </div>
        </section>

        <section id="sect-contact">
          <h5>お問い合わせ</h5>
          当サイト、およびその管理者へのお問い合わせは下記ページより行うことができます。
          <br />ご感想や、ご意見なども受け付けていますのでお気軽にお願いいたします。
          <br />いたずら目的と思われる問い合わせに関しては、法的な措置も取らせていただくことがあります。
          <br />なお、いただいた情報はいかなる理由でも公開いたしませんが、公開の許可をいただいた場合はその限りでありません。
          <br />
          <a href="contact.php" rel="nofollow" title="contactform">
            <button class="btn btn-large">
              <i class="fab fa-wpforms"></i>
              お問い合わせページへ </button>
          </a>
        </section>

        <?php require 'specialthanks.html'; ?>
      </section>

      </div>
      <!--[end]lazyload-->
<?php
require 'footer.php';