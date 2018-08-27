<?php
class TitlePush {
  protected $titleArray = array(
    'top'     => '#がーでんいんふぉ',
    'goods'   => '物販情報',
    'contact' => 'お問い合わせ',
    'first'   => '初参加の方へ',
    'info'    => '本サイトについて'
  );

  public  $uri;
  public function __construct() {
    $this->uri = $_SERVER['REQUEST_URI'];
  }

  public function titlePush(){
    $t      = '';
    $height = '64';
    if(preg_match('/goods/', $this->uri)){
      $t = $this->titleArray['goods'];
    }elseif(preg_match('/contact/', $this->uri)){
      $t = $this->titleArray['contact'];
    }elseif(preg_match('/firstEntry/', $this->uri)){
      $t = $this->titleArray['first'];
    }elseif(preg_match('/siteInfo/', $this->uri)){
      $t = $this->titleArray['info'];
    }else{
      $t = $this->titleArray['top'];
      $height = '140';
    }
    return array($t, $height);
  }
}
$obj         = new TitlePush();
$returnArray = $obj->titlePush();
$title       = $returnArray[0];
$height      = $returnArray[1];
?>

<!doctype html>
<html>

<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#">
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no" />
  <meta name="author" content="ななみ隣">

  <meta property="og:title" content="＃がーでんいんふぉ@じゃぱりとしょかん" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://kemono-matsuri.japarilibrary.com" />
  <meta property="og:image" content="https://kemono-matsuri.japarilibrary.com/ogp.jpg" />
  <meta property="og:site_name" content="じゃぱりとしょかん" />
  <meta property="og:description" content="けもフレがーでんの断片的な情報を集めたページです。公式のアナウンスや、参加者の発信した情報をまとめています！" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@htktkgt" />
  <meta name="twitter:player" content="@htktkgt" />
  <meta name="twitter:description" content="けもフレがーでんの断片的な情報を集めたページです。公式のアナウンスや、参加者の発信した情報をまとめています！">

  <meta name="description" content="けものフレンズの有志が作成するジャパリパークのオンライン図書館。けものフレンズ公式イベントである、けもフレがーでんの断片的な情報を集めたページです。公式のアナウンスや、参加者の発信した情報をまとめています！"
  />
  <meta name="keywords" content="けものフレンズ, けもフレ, けもフレがーでん, がーでん, ビアガーデン、まとめ, がーでんいんふぉ, #がーでんいんふぉ" />

  <title><?php echo $title; ?> | じゃぱりとしょかん</title>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.1/css/all.css" integrity="sha384-O8whS3fhG2OnA5Kas0Y9l3cfpmYjapjI0E4theH4iuMD+pLhbf6JI0jIMfYcK3yZ"
    crossorigin="anonymous" media="screen,projection">
  <!-- Compiled and minified CSS -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css">
  <link rel="stylesheet" href="style/style.css">
  <!--Vue.js導入-->
  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
  <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>
  <!--遅延読み込み(本体が下の順番守れ！)-->
  <script type="text/javascript" src="js/jquery.cyclotron.min.js"></script>
  <script type="text/javascript" src="js/addLazyloadCss.js"></script>
  <script type="text/javascript" src="js/addDomain.js"></script>
  <script type="text/javascript" src="js/lazysizes.min.js"></script>
  <script type="text/javascript" src="js/externalLinks.js"></script>
  <script type="text/javascript" src="js/kome-red.js"></script>
  <script type="text/javascript" src="js/myScript.js"></script>
  <script>
    //https://qiita.com/Takuya_Kouyama/items/b815eb5e1f85d819b4d8
    //http://cgsc.info/programming/20151222_fixed-header_scroll
    // #にダブルクォーテーションが必要
    $(function () {
      $('a[href^="#"]').click(function () {
        var speed = 400;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var headerHeight = <?php echo $height; ?>; //固定ヘッダーの高さ
        var position = target.offset().top - headerHeight; //ターゲットの座標からヘッダの高さ分引く
        $('body,html').animate({ scrollTop: position }, speed, 'swing');
        return false;
      });
    });
  </script>

  <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  <script type="text/javascript" src="js/ga.js" async></script>
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-123516140-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'UA-123516140-1');
  </script>
</head>

<body id="top" class="yellow lighten-5">
  <div class="container">
  <header>

<?php
if($title === '#がーでんいんふぉ'){
?>
  <ul id="dropdown1" class="dropdown-content">
    <dd-item v-for="item in ddGroceryList" v-bind:todo="item"></dd-item>
  </ul>
  <ul id="mobileSide" class="sidenav">
    <dd-item v-for="item in ddGroceryList" v-bind:todo="item"></dd-item>
  </ul>
<?php }?>
  <div class="navbar-fixed" <?php if($title !=='#がーでんいんふぉ'){echo "style='min-height:64px;'";}; ?>>
    <nav class="nav-extended">
      <div class="nav-wrapper">
        <a href="/" class="brand-logo">
          <img src="/favicon.ico" alt="Bland-logo" />
        </a>
        <ul class="right hide-on-med-and-down">
          <li>
            <h1 style="margin: 0;">
              <img src="img/sysimg/brandLogo.png" alt="brand-logo" style="height:64px;" />
            </h1>
          </li>
<?php if($title === '#がーでんいんふぉ') { ?>
          <li>
            <a class="dropdown-trigger" data-target="dropdown1" style="cursor: pointer;">
              <i class="fas fa-bars"></i>
            </a>
          </li>
<?php } ?>
        </ul>
<?php if($title === '#がーでんいんふぉ') { ?>
        <a class="sidenav-trigger" data-target="mobileSide" style="cursor: pointer;">
          <i class="fas fa-bars"></i>
        </a>
<?php } ?>
      </div>
<?php if($title === '#がーでんいんふぉ') { ?>
      <div class="tablist-container hide-on-med-and-down">
        <ul id="menu">
          <li>
            <a href="#sect-officialNews">ニュース</a>
          </li>
          <li>
            <a href="#sect-about">がーでん</a>
          </li>
          <li>
            <a href="#sect-map">地図</a>
            <ul>
              <li>
                <a href="#sect-way">行き方</a>
              </li>
              <li>
                <a href="#sect-admissionTicket">入場券</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#sect-faq">よくある質問</a>
          </li>
          <li>
            <a href="firstEntry.php">初参加の方へ</a>
          </li>
          <li>
            <a href="#sect-100">もっと楽しむ</a>
            <ul>
              <li>
                <a href="#sect-present">配布物</a>
              </li>
              <li>
                <a href="#sect-tokuten">特典</a>
              </li>
              <li>
                <a href="#sect-19">延長</a>
              </li>
              <li>
                <a href="#sect-canceled">開催中止</a>
              </li>
              <li>
                <a href="#sect-stampcard">スタンプカード</a>
              </li>
              <li>
                <a href="#sect-stamprally">スタンプラリー</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#sect-foods">フード/物販等</a>
            <ul>
              <li>
                <a href="#sect-foods">コラボフード</a>
              </li>
              <li>
                <a href="#sect-coaster">コースター</a>
              </li>
              <li>
                <a href="#sect-kobachi">小鉢</a>
              </li>
              <li>
                <a href="#sect-shateki">射的景品</a>
              </li>
              <li>
                <a href="#sect-goods">物販商品</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#sect-facility">施設関連</a>
            <ul>
              <li>
                <a href="#sect-games">クレーン&amp;ガチャ</a>
              </li>
              <li>
                <a href="#sect-japaman">ジャパまん投げ</a>
              </li>
              <li>
                <a href="#sect-shatekiGame">射的</a>
              </li>
              <li>
                <a href="#sect-ornaments">装飾</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="siteInfo.php">サイト情報</a>
          </li>
        </ul>
      </div>
<?php } ?>
    </nav>
  </div>
</header>