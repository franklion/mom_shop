$(function(){

	var st = window.localStorage;
	var html ="";
	if(st.getItem('goods_records_href') !== null && st.getItem('goods_records_img') !== null){
		var records_href = st.getItem('goods_records_href');
		var records_img = st.getItem('goods_records_img');
		records_href = JSON.parse(records_href);
		records_img = JSON.parse(records_img);
		// console.log(records_href.length);
		// console.log(records_href);

		if(records_href.length == records_img.length){
				var length = records_href.length;
				for(var i = (length-1) ; i >= 0  ; i--){
					html += '<div><a href=' + records_href[i] + '><img src=' + records_img[i] +'></a></div>';
				}
				$('#area').append(html);
		}

	}
	
	$('#clear').click(function(){
		st.clear();
		$('#area').html("");
	});
});


