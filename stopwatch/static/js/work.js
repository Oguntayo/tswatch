        let hour = 0;
        let minute=0;
        let second=0;
        let stop=true;

        function stopwatchCycle() {
            if (stop == false) {
                    second = parseInt(second);
                    minute = parseInt(minute);
                    hour = parseInt(hour);
                    second = second + 1;

                    if (second == 60) {
                        minute = minute + 1;
                        second = 0;
                    }
                    if (minute == 60) {
                        hour = hour + 1;
                        minute = 0;
                        second = 0;
                    }
                    if (second < 10 || second == 0) {
                        second = '0' + second;
                    }
                    if (minute < 10 || minute == 0) {
                     minute = '0' + minute;
                    }
                    if (hour < 10 || hour == 0) {
                        hour = '0' + hour;
                    }
                      document.querySelector('#mil').value  = hour + ':' + minute + ':' + second;
                    setTimeout("stopwatchCycle()", 1000);
                    document.querySelector('.d').innerHTML  = hour + ':' + minute + ':' + second;
                }
            }


            function start() {
             if (stop == true) {
                stop = false;
                stopwatchCycle();
             }
            }
            function stopw() {
                if (stop == false) {
                    stop = true;
                }
            }
            function reset() {
                mil.value = "00:00:00";
           document.querySelector('.d').innerHTML  ="00:00:00";
                stop = true;
                hour = 0;
                second = 0;
                minute = 0;
            }
            
            document.addEventListener('DOMContentLoaded', function() {
                document.querySelector('.start').onclick = start;
                document.querySelector('.stop').onclick = stopw;
                document.querySelector('.reset').onclick = reset;
            });