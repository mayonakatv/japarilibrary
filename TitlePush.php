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