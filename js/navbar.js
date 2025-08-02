// Navbar functionality using jQuery for SlickNav mobile menu
$(document).ready(function() {
    // Wait for SlickNav to initialize
    setTimeout(function() {
        // Close mobile menu when clicking outside
        $(document).click(function(e) {
            if ($(e.target).closest('.slicknav_menu').length == 0 && $(e.target).closest('.mobile_menu').length == 0) {
                console.log("Click ngoai mobile menu");
                // Hide SlickNav mobile menu
                $('.slicknav_nav').removeClass('slicknav_open');
                $('.slicknav_btn').removeClass('slicknav_open');
            } else {
                console.log("Click trong mobile menu");
            }
        });
        
        // Close mobile menu when clicking on links
        $('.slicknav_nav a').click(function() {
            console.log("Click on mobile menu link");
            // Hide mobile menu after clicking link
            setTimeout(function() {
                $('.slicknav_nav').removeClass('slicknav_open');
                $('.slicknav_btn').removeClass('slicknav_open');
            }, 100);
        });
        
        // Close mobile menu when pressing Escape key
        $(document).keydown(function(e) {
            if (e.key === 'Escape') {
                $('.slicknav_nav').removeClass('slicknav_open');
                $('.slicknav_btn').removeClass('slicknav_open');
            }
        });
    }, 500); // Wait 500ms for SlickNav to initialize
}); 