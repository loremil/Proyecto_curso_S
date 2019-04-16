        (function() {
            /**
             * Video element
             * @type
             */
            var video = document.getElementById("my-video");

            /**
             * Check if video can play, and play it
             */
            video.addEventListener("canplay", function() {
                video.play();
            });
        })();
