$(document).ready(function () {
            /////// icons
            $(".social li").find("a").css({ opacity: 0.6 });
            $(".social li a").hover(function () {
                $(this).stop().animate({ opacity: 1 }, 400, 'easeOutExpo');
            }, function () {
                $(this).stop().animate({ opacity: 0.6 }, 400, 'easeOutExpo');
            });

            // camera
            $('#camera_wrap').camera({
                //thumbnails: true
                autoAdvance: false,
                mobileAutoAdvance: false,
                height: '37%',
                hover: false,
                loader: 'none',
                navigation: false,
                navigationHover: false,
                mobileNavHover: false,
                playPause: false,
                pauseOnClick: false,
                pagination: false,
                time: 7000,
                transPeriod: 1000,
                minHeight: '300px'
            });



        }); //
        $(window).load(function () {
            //

        }); 
