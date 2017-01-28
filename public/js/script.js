var slideIndex = 0;

function carousel() {
	var i;
	var x = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("demo");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > x.length) {
		slideIndex = 1
	}

	for (i = 0; i < dots.length; i++) {
		dots[i].text = "◎";
	}

	x[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].text = "◉";

	setTimeout(carousel, 5000);
}

function plusDivs(n) {
	showDivs(slideIndex += n);
}

function currentDiv(n) {
	showDivs(slideIndex = n);
}

function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("demo");
	if (n > x.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = x.length
	}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].text = "◎";
	}
	x[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].text = "◉";
}

function SetHeaderNFooter() {
	$('#HeaderContainer').load('header.html');
	$('#FooterContainer').load('footer.html');
}
