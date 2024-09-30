var totalCount = 0;
    var maleCount = 0;
    var femaleCount = 0;

    function countPerson(gender) {
        totalCount++;
        if (gender === 'male') {
            maleCount++;
        } else if (gender === 'female') {
            femaleCount++;
        }
        updateDisplay();
    }

    function updateDisplay() {
        document.getElementById('totalCount').textContent = totalCount;
        document.getElementById('maleCount').textContent = maleCount;
        document.getElementById('femaleCount').textContent = femaleCount;
    }