let durationInput = document.getElementById('durationInput');
        let timerDisplay = document.getElementById('timerDisplay');
        let startButton = document.querySelector('button:nth-of-type(1)');
        let pauseButton = document.querySelector('button:nth-of-type(2)');
        let resumeButton = document.querySelector('button:nth-of-type(3)');
        let resetButton = document.querySelector('button:nth-of-type(4)');
        let timer;
        let duration;
        let timeRemaining;

        function startTimer() {
            duration = parseInt(durationInput.value) * 60;
            timeRemaining = duration;
            updateDisplay();

            timer = setInterval(function () {
                timeRemaining--;
                updateDisplay();

                if (timeRemaining <= 0) {
                    clearInterval(timer);
                    alert('Timer completed!');
                }
            }, 1000);

            toggleButtons(true);
        }

        function pauseTimer() {
            clearInterval(timer);
            toggleButtons(false);
        }

        function resumeTimer() {
            timer = setInterval(function () {
                timeRemaining--;
                updateDisplay();

                if (timeRemaining <= 0) {
                    clearInterval(timer);
                    alert('Timer completed!');
                }
            }, 1000);

            toggleButtons(true);
        }

        function resetTimer() {
            clearInterval(timer);
            durationInput.value = '';
            updateDisplay();
            toggleButtons(false);
        }

        function updateDisplay() {
            let minutes = Math.floor(timeRemaining / 60);
            let seconds = timeRemaining % 60;
            timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }

        function toggleButtons(isTimerRunning) {
            startButton.disabled = isTimerRunning;
            pauseButton.disabled = !isTimerRunning;
            resumeButton.disabled = isTimerRunning;
            resetButton.disabled = isTimerRunning;
        }