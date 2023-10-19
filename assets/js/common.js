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
    }, 300);
  });
});

$(function() {
  $('#nav-drawer__content').on('click', function(event) {
      $('#nav-input').prop('checked', false);
  });
});

/* 読み込み時のフォントのちらつき対策 */
$(function () {
  setTimeout(function() {
    if (document.getElementsByTagName("html")[0].classList.contains('wf-active') != true) {
      console.log("aaa");
        document.getElementsByTagName("html")[0].classList.add('loading-delay');
    }
}, 500);
});
