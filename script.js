const circleProgress = document.querySelector('.circle-progress');
const numberOfBreaths = document.querySelector('.breath-input');
const start = document.querySelector('.start');
const instructions = document.querySelector('.instructions');
const breathsText = document.querySelector('.breaths-text');

let breathsLeft = 3;

// watches for user breath selection

numberOfBreaths.addEventListener('change', () => {
    breathsLeft = numberOfBreaths.value;
    breathsText.innerText = breathsLeft;
});

// grows/shrinks the inner circle

const growCircle = () => {
    circleProgress.classList.add('circle-grow');
    setTimeout(() => {
        circleProgress.classList.remove('circle-grow');
    }, 8000);
};

// breathing instructions 

const breathTextUpdate = () => {
    breathsLeft --;
    breathsText.innerText = breathsLeft;
    instructions.innerText = "Take A Deep Breath";
    setTimeout(() => {
        instructions.innerText = "Hold";
        setTimeout(() => {
            instructions.innerText = "Exhale Slowly";
        }, 4000);
    }, 4000); 
};

// breathihng app function

const breathingApp = () => {
    const breathingAnimation = setInterval(() => {
        if (breathsLeft === 0) {
            clearInterval(breathingAnimation);
            instructions.innerText = "Thanks for taking a moment to breathe with me! Click Begin to start a new session.";
            breathsLeft = numberOfBreaths.value;
            breathsText.innerText = breathsLeft;
            return;
        }
        growCircle();
        breathTextUpdate();
    }, 12000);
};

// start breathing 

start.addEventListener('click', () => {
    instructions.innerText = "Get relaxed.";
    setTimeout(() => {
        instructions.innerText = "Breathing is about to begin...";
        setTimeout(() => {
            breathingApp();
            growCircle();
            breathTextUpdate();
        }, 2000);
    }, 2000);
});


