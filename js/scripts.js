/* Description: Custom JS file */

// game
const button = document.getElementById('random-button');
const buttonArea = document.getElementById('button-area');
const surpriseMessage = document.getElementById('surprise-message');
const popupMessage = document.getElementById('popup-message');
const portfolioButton = document.getElementById('portfolio-button');
const gameArea = document.getElementById('game-area'); // Add reference to game-area

let clickCount = 0;
let moveCount = 0;

const colors = ['#ff4500', '#ff6347', '#32cd32', '#1e90ff', '#ff1493', '#ff69b4'];

button.addEventListener('mouseover', () => {
    if (moveCount < 8) {
        moveButtonRandomly();
    } else if (moveCount === 8) {
        button.style.visibility = 'hidden'; // Hide the button after 8 movements
        showPopupMessage();
    }
});

button.addEventListener('click', () => {
    clickCount++;
    if (clickCount >= 6) {
        showSurpriseMessage();
    }
});

function moveButtonRandomly() {
    const buttonAreaWidth = buttonArea.clientWidth;
    const buttonAreaHeight = buttonArea.clientHeight;
    const buttonWidth = button.clientWidth;
    const buttonHeight = button.clientHeight;

    const randomX = Math.floor(Math.random() * (buttonAreaWidth - buttonWidth));
    const randomY = Math.floor(Math.random() * (buttonAreaHeight - buttonHeight));
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
    button.style.backgroundColor = randomColor;

    moveCount++;
}

function showSurpriseMessage() {
    surpriseMessage.classList.remove('hidden');
    setTimeout(() => {
        gameArea.remove(); // Remove game-area element from the DOM
    }, 6);
}

function showPopupMessage() {
    alert("You know why you can't catch me? Gausul Wara always hits a six hahaha. coz he is a Cricketer too");
    portfolioButton.classList.remove('hidden');
}

function visitPortfolio() {
    href = '#header'; // Replace with your actual portfolio URL
    gameArea.remove(); // Remove game-area element from the DOM
}

// end-game


(function($) {
    "use strict"; 
	
    /* Navbar Scripts */
    // jQuery to collapse the navbar on scroll
    $(window).on('scroll load', function() {
		if ($(".navbar").offset().top > 60) {
			$(".fixed-top").addClass("top-nav-collapse");
		} else {
			$(".fixed-top").removeClass("top-nav-collapse");
		}
    });
    
	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$(document).on('click', 'a.page-scroll', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 600, 'easeInOutExpo');
			event.preventDefault();
		});
    });

    // offcanvas script from Bootstrap + added element to close menu on click in small viewport
    $('[data-toggle="offcanvas"], .navbar-nav li a:not(.dropdown-toggle').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    })

    // hover in desktop mode
    function toggleDropdown (e) {
        const _d = $(e.target).closest('.dropdown'),
            _m = $('.dropdown-menu', _d);
        setTimeout(function(){
            const shouldOpen = e.type !== 'click' && _d.is(':hover');
            _m.toggleClass('show', shouldOpen);
            _d.toggleClass('show', shouldOpen);
            $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
        }, e.type === 'mouseleave' ? 300 : 0);
    }
    $('body')
    .on('mouseenter mouseleave','.dropdown',toggleDropdown)
    .on('click', '.dropdown-menu a', toggleDropdown);


    /* Move Form Fields Label When User Types */
    // for input and textarea fields
    $("input, textarea").keyup(function(){
		if ($(this).val() != '') {
			$(this).addClass('notEmpty');
		} else {
			$(this).removeClass('notEmpty');
		}
	});
	

    /* Back To Top Button */
    // create the back to top button
    $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
    var amountScrolled = 700;
    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('500');
        } else {
            $('a.back-to-top').fadeOut('500');
        }
    });


	/* Removes Long Focus On Buttons */
	$(".button, a, button").mouseup(function() {
		$(this).blur();
	});

})(jQuery);