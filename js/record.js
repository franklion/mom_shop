$(function(){

	var st = window.localStorage;

	$('.article ul li a').click(function(){
		var goods_href = $(this).attr('href');
		var img_src = $(this).children('img').attr('src');

		if(st.getItem('goods_records_href') === null && st.getItem('goods_records_img') === null){

			st.setItem('goods_records_href',JSON.stringify([goods_href]));
			st.setItem('goods_records_img',JSON.stringify([img_src]));
			//console.log('111')

		}else{
			var records_href = st.getItem('goods_records_href');
			var records_img = st.getItem('goods_records_img');
			records_href = JSON.parse(records_href);
			records_img = JSON.parse(records_img);


			if(records_href.indexOf(goods_href) == -1){	

				records_href = records_href + ','+ goods_href;
				records_img = records_img + ',' + img_src; 
				var array = [];
				var array_p = [];
				array = records_href.split(',');
				array_p = records_img.split(',');
				if(array.length > 3 && array_p.length > 3){
					array.shift();
					array_p.shift();
				}
				st.setItem('goods_records_href',JSON.stringify(array));
				st.setItem('goods_records_img',JSON.stringify(array_p));
			}

			//console.log('222');
		}
	});


//st.clear();

});