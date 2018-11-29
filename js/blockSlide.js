        fullpage_api.setAllowScrolling(false, 'left , right');
        slider.noUiSlider.on('start', block);

        function block() {

            fullpage_api.setAllowScrolling(false);
        }
