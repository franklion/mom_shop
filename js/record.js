$(function() {

  var storage = window.localStorage;
  /* 最大遊覽紀錄數量 */
  var maxRecordsAmount = 3;

  $('.article-goods-link').click(function() {

    var checkResult;
    /* 目前點擊連結的 超連結 圖片路徑*/
    var data = {
      'goodsHref': $(this).attr('href'),
      'imgSrc'   : $(this).children('img').attr('src')
    };

    if (storage.getItem('goodsRecords') === null) {
  
      storage.setItem('goodsRecords', JSON.stringify([data]));

    } else {

      var records = JSON.parse(storage.getItem('goodsRecords'));

      checkResult = checkRepeatData(records, data); 
  
      if (checkResult === 1) { 
        /* do nothing */
      } else {
        /* ready to push */     
        if (records.length >= maxRecordsAmount) { // 3 
            records.shift();
        } 
          records.push({'goodsHref':data.goodsHref, 'imgSrc':data.imgSrc});   
          storage.setItem('goodsRecords', JSON.stringify(records));
      }
    }
  });

  function checkRepeatData(records, data) {
    var checkResult;
    
    for (var i = 0 ; i < records.length ; i++) {
      if (records[i].goodsHref === data.goodsHref) {
        checkResult = 1;
        break;
      } else {
        checkResult = 0;
      }
    }      
      return checkResult;
  }
  
});