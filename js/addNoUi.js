   var slider = document.getElementById('slider');
        noUiSlider.create(slider, {
            connect: [true, false],
            start: 100,
            behaviour: 'tap',
            pips: {
                mode: 'positions',
                values: [0, 50, 100],
                density: 4
            },
            range: {
                min: 0,
                max: 100
            },

        });
        var SlideNumber = 3;

        slider.noUiSlider.on('change', function(values, handle) {

            fullpage_api.setAllowScrolling(true);
            fullpage_api.setAllowScrolling(false, 'left , right');

            if (values[handle] < 50) {
                if (values[handle] < 25) {
                    slider.noUiSlider.set(0);
                    fullpage_api.moveTo(3, 0);
                } else {
                    slider.noUiSlider.set(50);
                    fullpage_api.moveTo(3, 1);
                }
            } else if (values[handle] > 75) {
                slider.noUiSlider.set(100);
                fullpage_api.moveTo(3, 2);
            } else {
                slider.noUiSlider.set(50);
                fullpage_api.moveTo(3, 1);
            }
        });
