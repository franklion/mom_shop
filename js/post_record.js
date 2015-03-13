$(function() {

  var storage = window.localStorage;
  var html    = '';

  if (storage.getItem('goodsRecords') !== null) {

    var records = JSON.parse(storage.getItem('goodsRecords'));
    var length  = records.length;

    for (var i = (length-1) ; i >= 0  ; i--) {
      html += '<div><a href=' + records[i].goodsHref + '><img src=' + records[i].imgSrc +'></a></div>';
    }
      $('#history-area').append(html);
  }


  $('#history-clear').click(function() {
    storage.clear();
    $('#history-area').html('');
  });


});


