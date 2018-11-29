var myFullpage = new fullpage('#fullpage', {
            licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
            anchors: ['firstPage', 'secondPage', 'thirdPage'],
            dragAndMove: true,
            dragAndMoveKey: 'OPEN-SOURCE-GPLV3-LICENSE',
            navigation: true,
            navigationPosition: 'right',



            onLeave: function(origin, destination, direction) {
                var leavingSection = this;

                //после покидания раздела 2
                if (origin.index == 0 && direction == 'down') {


                    let z = document.getElementById("next");
                    z.style.visibility = "hidden";


                }

                if (origin.index == 1 && direction == 'up') {
                    setTimeout(ups, 700);

                    function ups() {
                        let z = document.getElementById("next");
                        z.style.visibility = "visible";
                    }

                }
            }




        });
