<?php
  require 'header.php';
?>
  <!-- <div id="carousel" class="carousel carousel-slider hide-on-med-and-down">
    <carousel-item v-for="item in carouselGroceryList" v-bind:todo="item" v-bind:target="carousel"></carousel-item>
  </div> -->
  <div class="cyclotron cycle hide-on-med-and-down" style="background:url(img/panorama/panorama_<?php echo mt_rand(1,2); ?>-min.jpg);height:512px"></div>

  <?php
    require 'contents/sect-about.html';
    require 'contents/sect-officialNews.html';
  ?>

  <div class="addLazyloadCss">

    <?php
      require 'contents/sect-map.html';
      require 'contents/sect-faq.html'
    ?>

    <section id="sect-first">
      <h2>初めての方へ / 楽しみ方のご提案</h2>
      <p>そもそも「けものフレンズ」って何？と言う方は
        <a href="firstEntry.php" title="初参加者の方へ！">こちらから！</a>
        <br />きっとあなたも好きになる！
      </p>
    </section>

    <?php
      require 'contents/sect-numberedTickets.html';
      require 'contents/sect-100.html';
    ?>

    <div id="gardengoods">

      <?php
        require 'contents/sect-gardengoods.html';
        require 'contents/sect-facility.html'
      ?>

    </div>
    <!--[end]gardengoods-->

    <?php
      require 'contents/sect-notice.html';
      require 'contents/sect-ads.html'
    ?>

  </div>
  <!--[end]lazyload-->
<?php
require 'footer.php';