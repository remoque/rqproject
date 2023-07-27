// JavaScript Document

$(function AutoSelectDetailStore(){
  let store_name_hash = location.hash;
  let store_name = store_name_hash.slice(1);
  if(store_name != ""){
    let option_name_array = store__select.options;
    for(i = 0; i < option_name_array.length; i++){
      let check_result = option_name_array[i].value.indexOf(store_name,0);
      if(check_result != -1){
        store__select.options[i].selected = true;
      }
    }
  };
  changeStoreContent();
});

function open_storelink(){
  let path = "storedetail.html#" + document.getElementById('store__select').value;
  window.location.href = path;
}

function changelinkhref(element) {
  // hrefを書き換える要素をget
  let link = document.getElementById(element.id);
  // 選択されている店をget
  let selected_value = document.getElementById('store__select').value;
  console.log(selected_value);
  // urlを作成
  let url = 'reserve.html#' + selected_value;
  //href属性の値を書き換える
  link.setAttribute('href', url);
};


function changeStoreContent() {
  let address_text = document.getElementById('address');
  let phonenumber_content = document.getElementById('phonenumber');
  let buisinesshour_text = document.getElementById('buisinesshour');
  let url_content = document.getElementById('url');
  let map_box_content = document.getElementById('map_box');

  let selected_value = document.getElementById('store__select').value;

  switch (selected_value){
    case "shinjuku":
      address_text.textContent = '住所：東京都新宿区新宿3-38-1';
      phonenumber_content.innerHTML = "電話番号：<a href='tel:'>XX-XXXX-XXXX</a>";
      buisinesshour_text.textContent = '営業時間：21:00〜翌7:00';
      url_content.textinnerHTML = "URL：<a href='https://example.com'>https://example.com</a>";
      map_box_content.innerHTML = "<iframe id='map' class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6480.981868285192!2d139.68775029429742!3d35.68953480421677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd0d6b1ba1f%3A0x1c32a1f1ecacfdd5!2z5paw5a6_6aeF!5e0!3m2!1sja!2spt!4v1687461404317!5m2!1sja!2spt' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>";
    break;
    case "shibuya":
      address_text.textContent = '住所：東京都渋谷区渋谷2-21-13';
      phonenumber_content.innerHTML = "電話番号：<a href='tel:'>XX-XXXX-XXXX</a>";
      buisinesshour_text.textContent = '営業時間：21:00〜翌7:00';
      url_content.textinnerHTML = "URL：<a href='https://example.com'>https://example.com</a>";
      map_box_content.innerHTML = "<iframe id='map' class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7265902279196!2d139.699358475746!3d35.65910728118913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b563b00109f%3A0x337328def1e2ab26!2z5riL6LC36aeF!5e0!3m2!1sja!2spt!4v1687461610253!5m2!1sja!2spt' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>";
    break;
    case "takadanobaba":
      address_text.textContent = '住所：東京都新宿区高田馬場1-35-2';
      phonenumber_content.innerHTML = "電話番号：<a href='tel:'>XX-XXXX-XXXX</a>";
      buisinesshour_text.textContent = '営業時間：21:00〜翌7:00';
      url_content.textinnerHTML = "URL：<a href='https://example.com'>https://example.com</a>";
      map_box_content.innerHTML = "<iframe id='map' class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.55488230234!2d139.7012865757481!3d35.71256972825196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d399ddaa763%3A0x954afc3e292c9a7e!2z6auY55Sw6aas5aC06aeF!5e0!3m2!1sja!2spt!4v1687461823196!5m2!1sja!2spt' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>";
    break;
    case "ocyanomizu":
      address_text.textContent = '住所：東京都千代田区神田駿河台2-6';
      phonenumber_content.innerHTML = "電話番号：<a href='tel:'>XX-XXXX-XXXX</a>";
      buisinesshour_text.textContent = '営業時間：21:00〜翌7:00';
      url_content.textinnerHTML = "URL：<a href='https://example.com'>https://example.com</a>";
      map_box_content.innerHTML = "<iframe id='map' class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.2994837541337!2d139.76176708999037!3d35.6997173640845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c19eafeb779%3A0xf69f1e715e53cb1f!2z5b6h6Iy244OO5rC06aeF!5e0!3m2!1sja!2spt!4v1687461951461!5m2!1sja!2spt' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>";
    break;
    case "hongousancyoume":
      address_text.textContent = '住所：東京都文京区本郷2-39-1';
      phonenumber_content.innerHTML = "電話番号：<a href='tel:'>XX-XXXX-XXXX</a>";
      buisinesshour_text.textContent = '営業時間：21:00〜翌7:00';
      url_content.textinnerHTML = "URL：<a href='https://example.com'>https://example.com</a>";
      map_box_content.innerHTML = "<iframe id='map' class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.760497587836!2d139.7578610757479!3d35.707510928530006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c3b810c902f%3A0xdf626fb535ceaf0c!2z5pys6YO35LiJ5LiB55uu6aeF!5e0!3m2!1sja!2spt!4v1687462176715!5m2!1sja!2spt' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>";
    break;
    case "meidaimae":
      address_text.textContent = '住所：東京都世田谷区松原2-45';
      phonenumber_content.innerHTML = "電話番号：<a href='tel:'>XX-XXXX-XXXX</a>";
      buisinesshour_text.textContent = '営業時間：21:00〜翌7:00';
      url_content.textinnerHTML = "URL：<a href='https://example.com'>https://example.com</a>";
      map_box_content.innerHTML = "<iframe id='map' class='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.377401962679!2d139.6479884757464!3d35.667708180716716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f3078a4992df%3A0xc09fbf5d8c170111!2z5piO5aSn5YmN6aeF!5e0!3m2!1sja!2spt!4v1687462254591!5m2!1sja!2spt' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>";
    break;
    default:
      address_text.textContent = '住所：';
      phonenumber_content.innerHTML = "電話番号：";
      buisinesshour_text.textContent = '営業時間：';
      url_content.textinnerHTML = "URL：";
      map_box_content.innerHTML = "　";
  }

};

