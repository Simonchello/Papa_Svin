const gameContainer = document.createElement('div');
gameContainer.style.position = 'absolute';
gameContainer.style.width = '1910px';
gameContainer.style.height = '1070px';
gameContainer.style.overflow = 'hidden';
gameContainer.style.backgroundColor = '#3f1f3c';
gameContainer.style.border = '4px solid #fff';
gameContainer.style.borderRadius = '24px';
gameContainer.style.boxShadow = '0 0 32px 8px #000a, 0 0 0 8px #fff2 inset';
document.getElementById('game-wrapper').appendChild(gameContainer);

const sprite = document.createElement('img');
sprite.src = 'src/person1.png';
sprite.style.position = 'absolute';
sprite.style.width = '96px';
sprite.style.height = '96px';
sprite.style.left = '50%';
sprite.style.top = '50%';
sprite.style.display = 'none';
gameContainer.appendChild(sprite);

const redSquare = document.createElement('img');
redSquare.src = './src/berry.png';
redSquare.style.position = 'absolute';
redSquare.style.width = '38px';
redSquare.style.height = '38px';
redSquare.style.display = 'none';
gameContainer.appendChild(redSquare);

const speedDisplay = document.createElement('div');
speedDisplay.style.position = 'absolute';
speedDisplay.style.top = '10px';
speedDisplay.style.left = '10px';
speedDisplay.style.color = 'black';
speedDisplay.style.fontFamily = 'Arial, sans-serif';
speedDisplay.style.fontSize = '20px';
speedDisplay.style.display = 'none';
speedDisplay.style.background = '#fff8';
speedDisplay.style.padding = '6px 16px';
speedDisplay.style.borderRadius = '8px';
speedDisplay.style.boxShadow = '0 2px 8px #0002';
speedDisplay.style.fontWeight = 'bold';
gameContainer.appendChild(speedDisplay);

const counterDisplay = document.createElement('div');
counterDisplay.style.position = 'absolute';
counterDisplay.style.top = '10px';
counterDisplay.style.left = '960px';
counterDisplay.style.transform = 'translateX(-50%)';
counterDisplay.style.color = 'black';
counterDisplay.style.fontFamily = 'Arial, sans-serif';
counterDisplay.style.fontSize = '24px';
counterDisplay.style.display = 'none';
counterDisplay.style.background = '#fff8';
counterDisplay.style.padding = '6px 16px';
counterDisplay.style.borderRadius = '8px';
counterDisplay.style.boxShadow = '0 2px 8px #0002';
counterDisplay.style.fontWeight = 'bold';
gameContainer.appendChild(counterDisplay);

const timerDisplay = document.createElement('div');
timerDisplay.style.position = 'absolute';
timerDisplay.style.top = '10px';
timerDisplay.style.right = '10px';
timerDisplay.style.color = 'black';
timerDisplay.style.fontFamily = 'Arial, sans-serif';
timerDisplay.style.fontSize = '20px';
timerDisplay.style.zIndex = '1000';
timerDisplay.style.display = 'none';
timerDisplay.style.background = '#fff8';
timerDisplay.style.padding = '6px 16px';
timerDisplay.style.borderRadius = '8px';
timerDisplay.style.boxShadow = '0 2px 8px #0002';
timerDisplay.style.fontWeight = 'bold';
gameContainer.appendChild(timerDisplay);

const gameOverImage = document.createElement('img');
gameOverImage.src = 'src/game_over.png';
gameOverImage.style.position = 'fixed';
gameOverImage.style.top = '0';
gameOverImage.style.left = '0';
gameOverImage.style.width = '100vw';
gameOverImage.style.height = '100vh';
gameOverImage.style.zIndex = '1001';
gameOverImage.style.display = 'none';
document.body.appendChild(gameOverImage);

const startButton = document.createElement('button');
startButton.textContent = 'START';
startButton.style.position = 'fixed';
startButton.style.top = '50%';
startButton.style.left = '50%';
startButton.style.transform = 'translate(-50%, -50%)';
startButton.style.padding = '15px 30px';
startButton.style.fontSize = '24px';
startButton.style.zIndex = '1002';
startButton.style.display = 'block';
document.body.appendChild(startButton);

const startText = document.createElement('div');
startText.innerHTML = 'Press Ctrl + "-" till you see game border<br>Collect 10 berries as fast as you can!'; // Use <br> for line break
startText.style.position = 'fixed';
startText.style.top = '56%';
startText.style.left = '50%';
startText.style.transform = 'translate(-50%, -50%)';
startText.style.color = '#ffffff';
startText.style.fontFamily = 'Arial, sans-serif';
startText.style.fontSize = '20px';
startText.style.textAlign = 'center';
startText.style.zIndex = '1002';
document.body.appendChild(startText);

const gameTitle = document.createElement('div');
gameTitle.textContent = 'Simple Game';
gameTitle.style.position = 'fixed';
gameTitle.style.top = '40%';
gameTitle.style.left = '50%';
gameTitle.style.transform = 'translate(-50%, -50%)';
gameTitle.style.color = '#ffffff';
gameTitle.style.fontWeight = 'bold';
gameTitle.style.fontFamily = 'Arial, sans-serif';
gameTitle.style.fontSize = '3rem';
gameTitle.style.zIndex = '1002';
gameTitle.style.textAlign = 'center';
document.body.appendChild(gameTitle);

const finalTimeDisplay = document.createElement('div');
finalTimeDisplay.style.position = 'fixed';
finalTimeDisplay.style.top = '40%';
finalTimeDisplay.style.left = '50%';
finalTimeDisplay.style.transform = 'translate(-50%, -50%)';
finalTimeDisplay.style.color = '#313051';
finalTimeDisplay.style.fontWeight = 'bold';
finalTimeDisplay.style.fontFamily = 'Arial, sans-serif';
finalTimeDisplay.style.fontSize = '2rem';
finalTimeDisplay.style.zIndex = '1003';
finalTimeDisplay.style.display = 'none';
finalTimeDisplay.style.background = '#f8f8f850';
finalTimeDisplay.style.padding = '1rem 2rem';
finalTimeDisplay.style.borderRadius = '0.5rem';
finalTimeDisplay.style.backdropFilter = 'blur(16px)';
document.body.appendChild(finalTimeDisplay);

const timeCounterDisplay = document.createElement('div');
timeCounterDisplay.style.position = 'absolute';
timeCounterDisplay.style.top = '10px';
timeCounterDisplay.style.right = '10px';
timeCounterDisplay.style.color = '#ffffff';
timeCounterDisplay.style.fontSize = '2rem';
timeCounterDisplay.style.zIndex = '1001';
timeCounterDisplay.style.display = 'none';
gameContainer.appendChild(timeCounterDisplay);

const backgroundElement = document.createElement('div');
backgroundElement.style.position = 'fixed';
backgroundElement.style.top = '0';
backgroundElement.style.left = '0';
backgroundElement.style.width = '100vw';
backgroundElement.style.height = '100vh';
backgroundElement.style.backgroundColor = 'black';
backgroundElement.style.zIndex = '-1';
document.body.appendChild(backgroundElement);

let gameStarted = false;

function resetGame() {
    redSquareCount = 0;
    startTime = Date.now();
    isMoving = false;
    distanceWalked = 0;
    keys.w = false;
    keys.a = false;
    keys.s = false;
    keys.d = false;
    keys.shift = false;
    keys.space = false;

    updateCounter();
    gameOverImage.style.display = 'none';
    startButton.style.display = 'none';
    startText.style.display = 'none';
    gameTitle.style.display = 'none';
    finalTimeDisplay.style.display = 'none';

    timeCounterDisplay.style.display = 'block';
    timerDisplay.style.display = 'block';

    speedDisplay.style.display = 'block';
    counterDisplay.style.display = 'block';
    timerDisplay.style.display = 'block';

    const centerX = gameContainer.clientWidth / 2;
    const centerY = gameContainer.clientHeight / 2;

    sprite.style.left = `${centerX}px`;
    sprite.style.top = `${centerY}px`;
    sprite.style.transform = 'translate(-50%, -50%)';

    sprite.style.display = 'block';

    redSquare.style.display = 'block';

    spawnBerry();

    gameStarted = true;

    if (!gameLoopRunning) {
        gameLoopRunning = true;
        lastTime = performance.now();
        requestAnimationFrame(gameLoop);
    }
}
let gameLoopRunning = true;

startButton.addEventListener('click', resetGame);

const baseSpeed = 120;
let speed = baseSpeed;
const frameTime = 1000 / 60; // 60 FPS

const keys = {
    w: false,
    a: false,
    s: false,
    d: false,
    shift: false,
    space: false
};

document.addEventListener('keydown', (event) => {
    if (!gameStarted) return;

    const key = event.key.toLowerCase();
    if (key === 'shift') {
        keys.shift = true;
    } else if (key === ' ') {
        keys.space = true;
    } else if (Object.hasOwn(keys, key)) {
        keys[key] = true;
    }

    if (keys.shift && keys.space) {
        speed = baseSpeed * 5;
    } else if (keys.shift) {
        speed = baseSpeed * 2;
    } else {
        speed = baseSpeed;
    }
});

document.addEventListener('keyup', (event) => {
    if (!gameStarted) return;

    const key = event.key.toLowerCase();
    if (key === 'shift') {
        keys.shift = false;
    } else if (key === ' ') {
        keys.space = false;
    } else if (Object.hasOwn(keys, key)) {
        keys[key] = false;
    }

    if (keys.shift && keys.space) {
        speed = baseSpeed * 3;
    } else if (keys.shift) {
        speed = baseSpeed * 2;
    } else {
        speed = baseSpeed;
    }
});

let lastTime = performance.now();

// Sprite animation
const spriteFrames = [
    'src/person1.png',
    'src/person2.png',
    'src/person3.png',
    'src/person4.png'
];
const spriteImages = spriteFrames.map(src => {
    const img = new Image();
    img.src = src;
    return img;
});
let currentFrame = 0;

let distanceWalked = 0;
let isMoving = false;

let redSquareCount = 0;

let startTime = Date.now();

function animateSprite() {
    if (isMoving) {
        currentFrame = (currentFrame + 1) % spriteImages.length;
        sprite.src = spriteImages[currentFrame].src;
    }
}

function spawnBerry() {
    const maxX = gameContainer.clientWidth - 38; 
    const maxY = gameContainer.clientHeight - 38; 
    redSquare.style.left = `${Math.floor(Math.random() * maxX)}px`;
    redSquare.style.top = `${Math.floor(Math.random() * maxY)}px`;
}

// innit spawn
spawnBerry();

async function saveRecord(name, time) {
  const response = await fetch("/save-record", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, time }),
  });
  return response.json();
}

async function fetchLeaderboard() {
  const response = await fetch("/leaderboard");
  return response.json();
}

function gameOver() {
  const finalTime = ((Date.now() - startTime) / 1000).toFixed(3);
  gameOverImage.style.display = 'block';
  startButton.style.display = 'block';
  finalTimeDisplay.textContent = `Final Time: ${finalTime}s`;
  finalTimeDisplay.style.display = 'block';
  gameLoopRunning = false; // stop

  const name = prompt("Game Over! Enter your name to save your record:");
  if (name) {
    saveRecord(name, finalTime).then(() => {

      fetchLeaderboard().then((leaderboard) => {
        alert("Leaderboard:\n" + leaderboard.map(record => 
          `${record.place}. ${record.name} - ${record.time}s`
        ).join("\n"));
      });
    });
  }
}

function updateCounter() {
  counterDisplay.textContent = `Berries collected: ${redSquareCount}`;
  if (redSquareCount >= 10) {
    gameOver();
  }
}

updateCounter();

function updateTimer() {
    const elapsedTime = (Date.now() - startTime) / 1000;
    timerDisplay.textContent = `Time: ${elapsedTime.toFixed(3)}s`;
}

function gameLoop(currentTime) {
    if (!gameLoopRunning) return;
    const deltaTime = currentTime - lastTime;
    
    if (deltaTime >= frameTime) {
        const currentLeft = parseFloat(sprite.style.left);
        const currentTop = parseFloat(sprite.style.top);
        
        let moveX = 0;
        let moveY = 0;
        
        if (keys.w) moveY -= speed * (deltaTime / 1000);
        if (keys.a) moveX -= speed * (deltaTime / 1000);
        if (keys.s) moveY += speed * (deltaTime / 1000);
        if (keys.d) moveX += speed * (deltaTime / 1000);
        
        // Normalize diagonal movement
        if (moveX !== 0 && moveY !== 0) {
            moveX *= Math.SQRT1_2;
            moveY *= Math.SQRT1_2;
        }
        
        // Borders
        const newLeft = Math.max(gameContainer.clientWidth * 0.025, Math.min(gameContainer.clientWidth - 50, currentLeft + moveX));
        const newTop = Math.max(gameContainer.clientHeight * 0.04, Math.min(gameContainer.clientHeight - 50, currentTop + moveY));
        
        sprite.style.left = newLeft + 'px';
        sprite.style.top = newTop + 'px';
        
        // Speed display
        const actualSpeed = Math.sqrt(moveX * moveX + moveY * moveY) / (deltaTime / 1000);
        speedDisplay.textContent = `Speed: ${actualSpeed.toFixed(2)} px/s`;
        
        // animation
        isMoving = moveX !== 0 || moveY !== 0;
        if (isMoving) {
            distanceWalked += Math.sqrt(moveX * moveX + moveY * moveY);
            if (distanceWalked >= 100) {
                animateSprite();
                distanceWalked = 0;
            }
        } else {
            sprite.src = spriteImages[0].src;
            distanceWalked = 0;
        }
        
        // Check for collision with the berry
        const spriteRect = sprite.getBoundingClientRect();
        const redSquareRect = redSquare.getBoundingClientRect();

        if (
            spriteRect.left < redSquareRect.right &&
            spriteRect.right > redSquareRect.left &&
            spriteRect.top < redSquareRect.bottom &&
            spriteRect.bottom > redSquareRect.top
        ) {
            redSquareCount++;
            updateCounter();
            spawnBerry();
        }
        
        updateTimer();
        
        lastTime = currentTime;
    }
    
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

