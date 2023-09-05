// Notification
if (window.location.search === '?success=true') {
	document.querySelector('#notification').style.display = 'block';
	document.querySelector('#video_section').style.display = 'none';
} else {
	document.querySelector('#notification').style.display = 'none';
	document.querySelector('#video_section').style.display = 'block';
}

// Copy right year
let copyrightYear = document.querySelector('#copyrightYear');
copyrightYear.textContent = (new Date()).getFullYear();

/**
 * Slider Key Analytic Desktop
 */
let keySlider = document.querySelector('.key_slider');
let keySliderWidth = keySlider.offsetWidth;

let listKeySlide = document.querySelectorAll('.key_slide');
listKeySlide.forEach(slide => {
	slide.style.width = keySliderWidth + 'px';
});

let keySlideWrapper = document.querySelector('.key_slide_wrapper');
keySlideWrapper.style.width = keySliderWidth * listKeySlide.length + 'px';

let keySlideIndex = 0;
let keyDots = document.querySelectorAll('.key_dot');
keyDots[keySlideIndex].className += ' active';

let autoScrollKeySlide;

function scrollToKeySlide(newKeySlideIndex, manual = true) {
	// reset index when go out of index
	if (newKeySlideIndex >= listKeySlide.length) {
		newKeySlideIndex = 0;
	}

	keyDots.forEach(dot => dot.className = 'key_dot');
	keyDots[newKeySlideIndex].className = 'key_dot active';

	keySlider.scrollBy({
		top: 0,
		left: keySliderWidth * (newKeySlideIndex - keySlideIndex),
		behavior: 'smooth'
	});

	keySlideIndex = newKeySlideIndex;

	if (manual) {
		clearInterval(autoScrollKeySlide);
	}
}

function scrollToNextKeySlide(manual = true) {
	scrollToKeySlide(keySlideIndex + 1, manual);
}

// autoScrollKeySlide = setInterval(() => {
// 	scrollToNextKeySlide(false);
// }, 4000);

/**
 * Slider Key Analytic Mobile
 */
let keySliderMB = document.querySelector('.key_slider_mb');
let keySliderWidthMB = keySliderMB.offsetWidth;

let listKeySlideMB = document.querySelectorAll('.key_slide_mb');
listKeySlideMB.forEach(slide => {
	slide.style.width = keySliderWidthMB + 'px';
});

let keySlideWrapperMB = document.querySelector('.key_slide_wrapper_mb');
keySlideWrapperMB.style.width = keySliderWidthMB * listKeySlideMB.length + 'px';

let keySlideIndexMB = 0;
let keyDotsMB = document.querySelectorAll('.key_dot_mb');
keyDotsMB[keySlideIndexMB].className += ' active';

let autoScrollKeySlideMB;

function scrollToKeySlideMB(newKeySlideIndexMB, manual = true) {
	// reset index when go out of index
	if (newKeySlideIndexMB >= listKeySlideMB.length) {
		newKeySlideIndexMB = 0;
	}

	keyDotsMB.forEach(dot => dot.className = 'key_dot_mb');
	keyDotsMB[newKeySlideIndexMB].className = 'key_dot_mb active';

	keySliderMB.scrollBy({
		top: 0,
		left: keySliderWidthMB * (newKeySlideIndexMB - keySlideIndexMB),
		behavior: 'smooth'
	});

	keySlideIndexMB = newKeySlideIndexMB;

	if (manual) {
		clearInterval(autoScrollKeySlideMB);
	}
}

function scrollToNextKeySlideMB(manual = true) {
	scrollToKeySlideMB(keySlideIndexMB + 1, manual);
}

// autoScrollKeySlideMB = setInterval(() => {
// 	scrollToNextKeySlideMB(false);
// }, 4000);

/**
 * Slider Risk
 */
let riskSlider = document.querySelector('.risk_slider');
let riskSliderWidth = riskSlider.offsetWidth;

let listRiskSlide = document.querySelectorAll('.risk_slide');
listRiskSlide.forEach(slide => {
	slide.style.width = riskSliderWidth + 'px';
});

let riskSlideWrapper = document.querySelector('.risk_slide_wrapper');
riskSlideWrapper.style.width = riskSliderWidth * listRiskSlide.length + 'px';

let riskSlideIndex = 0;
let riskDots = document.querySelectorAll('.risk_dot');
riskDots[riskSlideIndex].className += ' active';

let autoScrollRiskSlide;

function scrollToRiskSlide(newRiskSlideIndex, manual = true) {
	// reset index when go out of index
	if (newRiskSlideIndex >= listRiskSlide.length) {
		newRiskSlideIndex = 0;
	}

	riskDots.forEach(dot => dot.className = 'risk_dot');
	riskDots[newRiskSlideIndex].className = 'risk_dot active';

	riskSlider.scrollBy({
		top: 0,
		left: riskSliderWidth * (newRiskSlideIndex - riskSlideIndex),
		behavior: 'smooth'
	});

	riskSlideIndex = newRiskSlideIndex;

	if (manual) {
		clearInterval(autoScrollRiskSlide);
	}
}

function scrollToNextRiskSlide(manual = true) {
	scrollToRiskSlide(riskSlideIndex + 1, manual);
}

// autoScrollRiskSlide = setInterval(() => {
// 	scrollToNextRiskSlide(false);
// }, 4000);

// FAQ
let indexOfQuestionShow = -1;

let listAnswer = document.querySelectorAll('.answer');
let listArrow = document.querySelectorAll('.arrow_wrapper');

let question0 = document.querySelector('.question0');
let question1 = document.querySelector('.question1');
let question2 = document.querySelector('.question2');
let question3 = document.querySelector('.question3');

question0.addEventListener('click', () => {
	if (indexOfQuestionShow !== 0) {
		indexOfQuestionShow = 0;
	} else {
		indexOfQuestionShow = -1;
	}

	updateFAQ();
});

question1.addEventListener('click', () => {
	if (indexOfQuestionShow !== 1) {
		indexOfQuestionShow = 1;
	} else {
		indexOfQuestionShow = -1;
	}

	updateFAQ();
});

question2.addEventListener('click', () => {
	if (indexOfQuestionShow !== 2) {
		indexOfQuestionShow = 2;
	} else {
		indexOfQuestionShow = -1;
	}

	updateFAQ();
});

question3.addEventListener('click', () => {
	if (indexOfQuestionShow !== 3) {
		indexOfQuestionShow = 3;
	} else {
		indexOfQuestionShow = -1;
	}

	updateFAQ();
});

function updateFAQ() {
	listAnswer.forEach(answer => {
		answer.className = 'answer hide';
	});
	if (indexOfQuestionShow !== -1) {
		listAnswer[indexOfQuestionShow].className = 'answer show';
	}

	listArrow.forEach(arrow => {
		arrow.className = 'arrow_wrapper';
	});
	if (indexOfQuestionShow !== -1) {
		listArrow[indexOfQuestionShow].className = 'arrow_wrapper show';
	}
}

// Scroll to pricing section
let buttonStartTrial = document.querySelector('.button_active_start_trial');
let sectionPricing = document.querySelector('.section_pricing');

buttonStartTrial.addEventListener('click', function() {
	sectionPricing.scrollIntoView({
		behavior: 'smooth'
	});
});
