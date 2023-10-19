$(function() {
  $(".works-modal").colorbox({
    iframe: true,
    speed: 300,
    width: "90%",
    height: "85%",
    maxWidth: "1000px",
    maxHeight: "665px",
    opacity: 0.8,
    fixed: true,
  onOpen: function() {
    var ycoord = $(window).scrollTop();
    $('#colorbox').data('ycoord',ycoord);
    ycoord = ycoord * -1;
    $('body').css('position','fixed').css('left','0px').css('right','0px').css('top',ycoord + 'px');
  },
  onClosed: function() {
    $('body').css('position','').css('left','auto').css('right','auto').css('top','auto');
    $(window).scrollTop($('#colorbox').data('ycoord'));
  }
  });
});

window.addEventListener('DOMContentLoaded', function(){
  //name 属性が categories の input 要素（ラジオボタン）を取得
  const input_categories = document.querySelectorAll("input[name=categories]");
  //全ての .target の要素（target クラスを指定された div 要素）を取得
  const targets = document.querySelectorAll(".target");
  //ラジオボタンの value の値（カテゴリ名）を格納する配列
  const category_array = [];
  for(let input_category of input_categories) {
    input_category.addEventListener('change',function(){
      for(let target of targets) {
        target.style.setProperty('display', 'inline-block');
      }
      if( this.checked ) {
        if(this.value !== 'All') {
          const not_checked_categories = document.querySelectorAll('.target:not([data-category~=' + '"' + this.value + '"])');
          for(let not_checked_category of not_checked_categories) {
            not_checked_category.style.setProperty('display', 'none');
          }
        }
      }
    });
    //ラジオボタンの value の値を配列（category_array）に追加
    category_array.push(input_category.getAttribute('value'));
  }

  //カテゴリ名（ラジオボタンの value の値）をキーとする連想配列（オブジェクト）の初期化
  const category_vars = {};
  //カテゴリ名をキーとする連想配列の要素を生成し値（カウント数）に初期値 0 を設定
  for(let cat of category_array){
      category_vars[cat] = 0;
  }

  //[data-category] 属性を持つ要素を取得
  const data_categories = document.querySelectorAll("[data-category]");
  //それぞれの要素の data-category の値を取得し、それぞれの値をカウントアップ
  for(let data_categoriy of data_categories){
    //data-category の値を取得
    let category_values = data_categoriy.getAttribute('data-category');
    //data-category の値を半角スペース（空白文字の正規表現）で分割
    let category_values_array = category_values.split(/\s/);
    //分割された data-category の値をキーとした連想配列の値をカウントアップ
    for(let category_value of category_values_array) {
      category_vars[category_value] ++;
    }
  }

  //ラジオボタンの value の値（カテゴリ名）から label 要素を取得してカウント数を表示
  for(let input_category of input_categories) {
    let input_value = input_category.getAttribute('value');
    //for 属性が value の値に一致する要素（label 要素）
    let label = document.querySelector('[for="'+ input_value + '"]');
    //label 要素のテキスト（ラベル）
    let label_text = label.textContent;
    if(input_value === 'All') {
      //All の場合に表示する値は .target の総数
      label.textContent = label_text + ' (' + document.querySelectorAll(".target").length +  ')';
    }else{
      //All以外の場合は value の値（カテゴリ名）をキーに持つ連想配列の値（カテゴリのカウント数）
      label.textContent = label_text + ' (' + category_vars[input_value] +  ')';
    }
  }
});
