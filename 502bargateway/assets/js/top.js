document.addEventListener('DOMContentLoaded', function() {
	$('#loading_line').LineProgressbar({
		percentage: 100,
		duration: 1000,
		fillBackgroundColor: '#fff',
		backgroundColor: '#333',
		height: '3px',
		radius: '15px',
	});

	const loading_content = document.getElementById('loading_content');

	var webStorage = function () {
		if (sessionStorage.getItem('access')) {
			document.getElementById("header").classList.remove("none");
			document.getElementById("main").classList.remove("none");
			document.getElementById("footer").classList.remove("none");
			$('.slick__pic-box').slick('slickPlay');
		} else {
			sessionStorage.setItem('access', 'true'); // sessionStorageにデータを保存
			document.getElementById('loading_content').classList.remove("none");
			document.getElementById("header").classList.remove("none");
			document.getElementById("main").classList.remove("none");
			document.getElementById("footer").classList.remove("none");
			$('.slick__pic-box').slick('slickPause');
			setTimeout(function () {
				$(loading_content).fadeOut(800);
			}, 1200)
			setTimeout(function () {
				$('.slick__pic-box').slick('slickPlay');
			}, 2000);
		}
	}
	webStorage();
});

// window.onload はあまりおすすめでない。画像まで全部読み込みが必要。また、デスクトップブラウザ用なのでipad/スマホだと思うように動かない可能性があるらしい。（実際挙動が変だった）
