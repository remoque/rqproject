// JavaScript Document

$(function AutoSelectReserveStore(){
  let store_name_hash = location.hash;
  let store_name = store_name_hash.slice(1);
  if(store_name != ""){
    let option_name_array = store__select_reserve.options;
    for(i = 0; i < option_name_array.length; i++){
      let check_result = option_name_array[i].value.indexOf(store_name,0);
      if(check_result != -1){
        store__select_reserve.options[i].selected = true;
      }
    }
  }
});

function open_storereservelink(){
  let path = "reserve.html#" + document.getElementById('store__select_reserve').value;
  window.location.href = path;
}

$('#reserve-date').datepicker({
  minDate: new Date(), // 前日以前は選択不可
  maxDate: '+3m',  // 3ヶ月まで選択可
  showButtonPanel:true
});

function ColorChange(element){
  if( element.value == 0 ){
    element.style.color = '#999';
  }else{
    element.style.color = '#ddd';
  }
}
