document.addEventListener("DOMContentLoaded",function(){
	// var menubutton = document.querySelector('.menu-button');
	// var menudixuong = document.querySelector('.menudixuong');
	// var menuclose = document.querySelectorAll('.menu-button span img');
	// var textMenu = document.querySelector('.menu-button p');
	// var trangthaimenu = 1;
	// menubutton.onclick = function()
	// {
		
	// 	if (trangthaimenu == 1) 
	// 	{
	// 		menudixuong.classList.remove('khongchuyendonggihet');
	// 		menudixuong.classList.add('chieuso1'); //css them important de thang uu tien voi id
	// 		menuclose[0].classList.add('menuquay1');
	// 		menuclose[1].classList.add('menuquay2');
	// 		menuclose[2].classList.add('menuquay3');
	// 		trangthaimenu = 2;
	// 		textMenu.innerText = "CLOSE";
	// 	}
	// 	else if (trangthaimenu == 2) 
	// 	{	
	// 		menuclose[0].classList.remove('menuquay1');
	// 		menuclose[1].classList.remove('menuquay2');
	// 		menuclose[2].classList.remove('menuquay3');
	// 		menudixuong.classList.remove('chieuso1'); // remove di thi auto nhan id
	// 		trangthaimenu = 1;
	// 		textMenu.innerHTML = "MENU";
	// 	}
	// }

var nutphai = document.querySelector('.slidewrapper .nutphai'),
	nuttrai = document.querySelector('.slidewrapper .nuttrai'),
	slides = document.querySelectorAll('.cacslide ul li'),
	soluongslide = slides.length,
	chisohientai = 0;
	

	var chuyenslidechonutphai = function(){
		var phantuhientai = slides[chisohientai];

		if (chisohientai < soluongslide -1) {
			chisohientai++;
		}
		else{
			chisohientai = 0;
		}
		var phantutieptheo = slides[chisohientai];
		phantuhientai.classList.remove('active');
		phantutieptheo.classList.add('active');
	};




	nutphai.addEventListener('click', chuyenslidechonutphai )

},false)