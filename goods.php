<?php
require_once 'header.php';
?>
<section>
  <h2>物販商品</h2>
  <div class="addLazyloadCss">
    <div class="flex-container">
      <div class="flex-item">
        <figure>
          <img src="https://pbs.twimg.com/media/DjQI2IJU4AA1a-v.jpg" alt="goods space" class="responsive-img" />
          <figcaption>タオルやリストバンドなど
            <a href="https://twitter.com/mamedaikichi/status/1023452822770077696" rel="external"></a>
          </figcaption>
        </figure>
      </div>
      <div class="flex-item">
        <figure>
          <img src="https://pbs.twimg.com/media/DjQI2IIUcAAUZA-.jpg" alt="goods space" class="responsive-img" />
          <figcaption>帽子など
            <a href="https://twitter.com/mamedaikichi/status/1023452822770077696" rel="external"></a>
          </figcaption>
        </figure>
      </div>
      <div class="flex-item">
        <figure>
          <img src="https://pbs.twimg.com/media/DjQI2JMV4AAkSy2.jpg" alt="goods space" class="responsive-img" />
          <figcaption>ジョッキや傘など
            <a href="https://twitter.com/mamedaikichi/status/1023452822770077696" rel="external"></a>
          </figcaption>
        </figure>
      </div>
    </div>

    <a href="/" title="back to top">
      <button class="btn btn-large">
        <i class="fas fa-home"></i> トップページへ戻る
      </button>
    </a>


    <div id="gardengoods">
      <a id="sect-goods"></a>
      <p class="red-text">全て税込価格</p>
      <p>去年の商品はこちらからも購入できます！
        <br />オンラインショップで売り切れになっていてもがーでん物販ブースにて販売されているものもあります！
        <br />
        <a href="https://kemono-friends-shop.net/" rel="external" title="がーでんショップ">けものフレンズがーでんショップ</a>
        <br />
        <a href="https://japaricafe.shop/" rel="external" title="けもフレカフェショップ">けものフレンズカフェショップ</a>
      </p>

      <a id="sect-jug"></a>
      <h6 class="bold">ジョッキ [各種 1,500円]
        <span class="red-text"> ※昨年度販売あり</span>
        <span class="red-text"> ※1日1個限定</span>
      </h6>
      <div id="jug" class="flex-container">
        <gardengoods-item v-for="item in jugGroceryList" v-bind:todo="item" v-bind:target="jug"></gardengoods-item>
      </div>

      <a id="sect-glass"></a>
      <h6 class="bold">ビアグラス [各種 1,500円] ※昨年のものより大きくなりました！(名称も変更されています)
        <a href="https://twitter.com/kemono_matsuri/status/1016264121912721410 " rel="external"></a>
      </h6>

      <div class="">
        <figure>
          <img src="img/glass/comparison.png" alt="昨年のグラスとの比較" class="responsive-img" />
          <figcaption>昨年のグラスとの比較</figcaption>
        </figure>
      </div>
      <div id="glass" class="flex-container">
        <gardengoods-item v-for="item in glassGroceryList" v-bind:todo="item" v-bind:target="glass"></gardengoods-item>
      </div>

      <figure>
        <img src="img/goods/tsuchinokoGlass-min.png" alt="goods space" class="responsive-img" />
        <figcaption>冷酒用グラス [1,500円]
          <a href="img/goods/tsuchinokoGlass.png" rel="nofollow" title="100%">
            <i class="fas fa-expand-arrows-alt"></i>
          </a>
        </figcaption>
      </figure>

      <figure>
        <img src="img/goods/gardenMasu-min.png" alt="goods space" class="responsive-img" />
        <figcaption>升[1,000円]
          <a href="img/goods/gardenMasu.png" rel="nofollow" title="100%">
            <i class="fas fa-expand-arrows-alt"></i>
          </a>
        </figcaption>
      </figure>

      <figure>
        <img src="img/goods/gardenPlate-min.png" alt="goods space" class="responsive-img" />
        <figcaption>お皿 [1,800円] ※昨年度販売あり
          <a href="img/goods/gardenPlate.png" rel="nofollow" title="100%">
            <i class="fas fa-expand-arrows-alt"></i>
          </a>
        </figcaption>
      </figure>

      <ul>
        <li>マスクヘッズ [各種 3,000円]</li>
        <ul>
          <li>ラッキービースト</li>
          <li>セルリアン</li>
        </ul>

        <li>コンパクトミラー [各種 1,500円]
          <span class="red-text"> ※昨年度販売あり</span>
        </li>
        <ul style="text-indent:1em;">
          <li>サーバル</li>
          <li>アライさん</li>
          <li>フェネック</li>
          <li>プリンセス</li>
          <li>ジェーン</li>
          <li>イワビー</li>
          <li>コウテイ</li>
          <li>フルル</li>
        </ul>


        <li>歯ブラシ [各種 800円]
          <span class="red-text"> ※昨年度販売あり</span>
        </li>
        <ul style="text-indent:1em;">
          <li>サーバル</li>
          <li>アライさん</li>
          <li>フェネック</li>
          <li>プリンセス</li>
          <li>ジェーン</li>
          <li>イワビー</li>
          <li>コウテイ</li>
          <li>フルル</li>
        </ul>

        <li>
          <!-- <span class="new">new</span> -->ジャンボうちわ [各種 600円]
          <span class="red-text"> ※昨年度販売あり</span>
        </li>
        <figure>
          <img src="img/goods/uchiwaServal-min.png" alt="goods space" class="responsive-img" />
          <figcaption>サーバル(ジョッキは大きさ比較用)
            <a href="img/goods/uchiwaServal.png" rel="nofollow" title="100%">
              <i class="fas fa-expand-arrows-alt"></i>
            </a>
          </figcaption>
        </figure>
        <ul style="text-indent:1em;">
          <li>アライさん</li>
          <li>フェネック</li>
          <li>プリンセス</li>
          <li>ジェーン</li>
          <li>イワビー</li>
          <li>コウテイ</li>
          <li>フルル</li>
        </ul>

        <li>手ぬぐい [各種 1,000円]</li>
        <ul style="text-indent:1em;">
          <li>2017年度縦版
            <span class="red-text"> ※昨年度販売あり</span>
          </li>
          <li>2017年度横版
            <span class="red-text"> ※昨年度販売あり</span>
          </li>
          <li>2018年度縦版</li>
          <li>2018年度横版</li>
        </ul>

        <li>クリアファイル [各種 350円]
          <span class="red-text"> ※昨年度販売あり</span>
        </li>
        <ul style="text-indent:1em;">
          <li>サーバル</li>
          <li>アライさん</li>
          <li>フェネック
            <span class="red-text bold">※売り切れ中(入荷未定)</span>
          </li>
          <li>プリンセス</li>
          <li>ジェーン</li>
          <li>イワビー
            <span class="red-text bold">※売り切れ中(入荷未定)</span>
          </li>
          <li>コウテイ</li>
          <li>フルル</li>
        </ul>

        <li>リストバンド [各種 900円]</li>
        <ul style="text-indent:1em;">
          <li>サーバル</li>
          <li>アライさん</li>
          <li>フェネック</li>
          <li>トキ</li>
          <li>アルパカ・スリ</li>
        </ul>

        <li>巾着 [1,500円]</li>

        <li>木札 [各種 400円]
          <span class="red-text"> ※昨年度販売あり</span>
        </li>
        <ul style="text-indent:1em;">
          <li>サーバル</li>
          <li>アライさん</li>
          <li>フェネック</li>
          <li>プリンセス</li>
          <li>ジェーン</li>
          <li>イワビー</li>
          <li>コウテイ</li>
          <li>フルル</li>
          <li>セルリアン</li>
        </ul>

        <li>メタルチャーム [各種 400円]
          <span class="red-text"> ※昨年度販売あり</span>
        </li>
        <ul style="text-indent:1em;">
          <li>サーバル</li>
          <li>アライさん</li>
          <li>フェネック</li>
          <li>プリンセス</li>
          <li>ジェーン</li>
          <li>イワビー</li>
          <li>コウテイ</li>
          <li>フルル</li>
          <li>セルリアン</li>
        </ul>

        <li>コルクコースター [各種 500円]
          <span class="red-text"> ※昨年度販売あり</span>
        </li>
        <ul style="text-indent:1em;">
          <li>プリンセス</li>
          <li>ジェーン</li>
          <li>イワビー</li>
          <li>コウテイ</li>
          <li>フルル</li>
        </ul>

        <figure>
          <img src="img/goods/domburi-min.png" alt="goods space" class="responsive-img" />
          <figcaption>どんぶりセット [2,500円]
            <a href="img/goods/domburi.png" rel="nofollow" title="100%">
              <i class="fas fa-expand-arrows-alt"></i>
            </a>
          </figcaption>
        </figure>

        <figure>
          <img src="img/goods/gardenKasa-min.png" alt="goods space" class="responsive-img" />
          <figcaption>がーでん2傘 [2,000円]
            <a href="img/goods/gardenKasa.png" rel="nofollow" title="100%">
              <i class="fas fa-expand-arrows-alt"></i>
            </a>
          </figcaption>
        </figure>

        <li>レインコート [2,500円]</li>

        <li>もりのおんがくかい 東京公演2017 Blu-ray [5,000円]</li>

        <li>もりのおんがくかい 東京公演2017 CD [3,000円]</li>
      </ul>
  </div>
  <!--[end]lazyload-->
</section>

<?php require_once 'specialthanks.php'; ?>

<a href="/" title="back to top">
  <button class="btn btn-large">
    <i class="fas fa-home"></i> トップページへ戻る
  </button>
</a>

<?php
require_once 'footer.php';