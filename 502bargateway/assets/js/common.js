// JavaScript Document
$(function () {
  /*** 上に戻るボタン ***/
  let topBtn = $('#arrow-top');
  // topBtn.hide();
  // ある程度スクロールされたら、上に戻るボタンを表示する
  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
      topBtn.fadeIn(); // フェードインで表示
    } else {
      topBtn.fadeOut(); // フェードアウトで非表示
    }
  });
  topBtn.on("click", function (event) {
    event.preventDefault(); // ページ内リンクの挙動をキャンセル
    $('body,html').animate({ // スムーズにスクロールする設定
      scrollTop: 0
    }, 500);
  });
});

// 上側はjqueryを使用した記述、下側は使ってない記述。それについて、以下添削コメント。
// jQueryの処理と、jQueryを使用しないjsの処理が混在しているのが気になりました。予期せぬ不具合が起きたり、メンテナンスがしにくかったりということがあるため、統一できない場合には、別ファイルで管理する方が良いかもしれません。

// Webフォントが一瞬ちらつく対策。adobe fontsのフォントが全部読まれるとhtmlにwf-activeクラスが与えられることを利用した記述。
$(function () {
  setTimeout(function() {
    if (document.getElementsByTagName("html")[0].classList.contains('wf-active') != true) {
        document.getElementsByTagName("html")[0].classList.add('loading-delay');
    }
}, 500);
});

document.addEventListener('DOMContentLoaded', function() {
  let filenameandhash = window.location.href.split('/').pop();
  // ハッシュタグを削除
  let hash_length = location.hash.length;
  let filename;
  if(hash_length != 0){
    filename = filenameandhash.slice(0, -hash_length);
  }else{
    filename = filenameandhash;
  }
  // .htmlを削除
  let pagename = filename.slice(0,-5);
  // ネオン効果をつけるidを生成
  let selectedid = pagename + '_navlink';
  // クラスを付与
  let selectedelement = document.getElementById(selectedid);
  if ( selectedelement == null ){}else{
    selectedelement.classList.add("selected-neon-effect");
  }
});
