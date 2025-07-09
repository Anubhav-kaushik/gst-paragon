
document.addEventListener('DOMContentLoaded', () => {

    // --- DOM ELEMENT REFERENCES ---
    const dom = {
        gameWorld: document.getElementById('game-world'), scoreDisplay: document.getElementById('score-display'), hintCountDisplay: document.getElementById('hint-count-display'),
        resetBtn: document.getElementById('reset-btn'), levelTrack: document.getElementById('level-track'), gokuCharacter: document.getElementById('goku-character'),
        puzzleModalOverlay: document.getElementById('puzzle-modal-overlay'), puzzleModal: document.getElementById('puzzle-modal'),
        cinematicOverlay: document.getElementById('cinematic-overlay'),
        cinematicText: document.getElementById('cinematic-text'), cinematicPrompt: document.getElementById('cinematic-prompt'),
        characterIntroModal: document.getElementById('character-intro-modal'), introCharIcon: document.getElementById('intro-char-icon'),
        introCharName: document.getElementById('intro-char-name'), introCharBio: document.getElementById('intro-char-bio'), introPrompt: document.getElementById('intro-prompt'),
        goalMetModal: document.getElementById('goal-met-modal'), satisfactionBar: document.getElementById('satisfaction-bar'),
        characterNameEl: document.getElementById('character-name'), dialogueTextEl: document.getElementById('dialogue-text'),
        puzzleQuestionEl: document.getElementById('puzzle-question'), puzzleOptionsEl: document.getElementById('puzzle-options'),
        feedbackBox: document.getElementById('feedback-box'), hintButton: document.getElementById('hint-button-puzzle'),
        skipButton: document.getElementById('skip-button'), nextButton: document.getElementById('next-button'),
        exitCaseBtn: document.getElementById('exit-case-btn'), moveOnBtn: document.getElementById('move-on-btn'),
        continueForScoreBtn: document.getElementById('continue-for-score-btn'),
        knowledgeBox: document.getElementById('knowledge-box'), knowledgeText: document.getElementById('knowledge-text'), knowledgeRef: document.getElementById('knowledge-ref'),
        completionAnimationOverlay: document.getElementById('completion-animation-overlay'),
        stampAnimation: document.getElementById('stamp-animation'),
    };

    // --- CHEAT CODE FUNCTIONALITY ---
    const cheatCode = ['g', 'o', 'k', 'u'];
    let userInputSequence = [];

    function unlockAllLevels() {
        gameData.levels.forEach(level => {
            if (gameState.levelStatus[level.id]) {
                gameState.levelStatus[level.id].unlocked = true;
                gameState.levelStatus[level.id].goalMet = true; // Mark goal as met to show happy emoji
            }
        });
        saveProgress();
        renderLevelTrack();
        alert("Paragon Mode Activated: All levels unlocked!");
        // Move Goku to the final level as a visual confirmation
        positionGoku(gameData.levels[gameData.levels.length - 1].id);
    }

    // This listener is separate and listens for the cheat code sequence globally.
    document.addEventListener('keydown', (e) => {
        // We only care about single character keys for the cheat code
        if (e.key.length === 1 && e.key.match(/[a-z]/i)) {
            userInputSequence.push(e.key.toLowerCase());
            // Keep the user sequence only as long as the cheat code
            userInputSequence = userInputSequence.slice(-cheatCode.length);

            if (JSON.stringify(userInputSequence) === JSON.stringify(cheatCode)) {
                console.log("Cheat code activated!");
                unlockAllLevels();
            }
        }
    });

    // --- GAME STATE VARIABLES ---
    const STORAGE_KEY = 'gstParagonState';
    let gameState = {};
    let currentLevelId = null, currentPuzzleIndex = 0, currentSatisfaction = 0;
    let puzzleStartTime = 0;
    let currentGameState = 'loading';
    let introducedCharactersThisLevel = new Set();

    // --- CORE FUNCTIONS: SAVE/LOAD ---
    function saveProgress() { localStorage.setItem(STORAGE_KEY, JSON.stringify(gameState)); }
    function loadProgress() {
        const savedState = localStorage.getItem(STORAGE_KEY);
        if (savedState) {
            gameState = JSON.parse(savedState);
            if (!gameState.levelProgress) gameState.levelProgress = {};
            if (typeof gameState.hints === 'undefined') gameState.hints = 2;
            if (typeof gameState.score === 'undefined') gameState.score = 0;
        } else {
            gameState = { score: 0, hints: 2, levelStatus: {}, levelProgress: {}, hasSeenIntro: false };
            gameData.levels.forEach((level, index) => {
                gameState.levelStatus[level.id] = { unlocked: index === 0, goalMet: false, completed: false };
            });
        }
    }

    // --- UI/ANIMATION FUNCTIONS ---
    function typewriter(element, text, onComplete) {
        let i = 0;
        element.innerHTML = "";
        const cursor = '<span class="cursor"></span>';
        function type() {
            if (i < text.length) {
                element.innerHTML = text.substring(0, i + 1) + cursor; i++; setTimeout(type, 30);
            } else {
                element.querySelector('.cursor').style.animation = 'blink 1s step-end infinite'; if (onComplete) onComplete();
            }
        }
        type();
    }

    // --- INITIALIZATION ---
    function initGame() {
        loadProgress();

        if (!gameState.hasSeenIntro) {
            currentGameState = 'cinematic';
            dom.cinematicOverlay.classList.add('visible');
            const introText = "The corridors of NACIN echoed with ambition...\n\nWhile others memorized provisions, Goku questioned logic.\n\nNow, he stands at the threshold of his first posting... where every decision affects lives... and law.";
            typewriter(dom.cinematicText, introText, () => { dom.cinematicPrompt.style.display = 'block'; });
        } else {
            showGameWorld();
        }

        // --- EVENT LISTENERS ---
        dom.hintButton.addEventListener('click', useHint);
        dom.skipButton.addEventListener('click', skipPuzzle);
        dom.nextButton.addEventListener('click', () => advanceGameState('feedback'));
        dom.exitCaseBtn.addEventListener('click', exitCase);
        dom.moveOnBtn.addEventListener('click', exitCase);
        dom.resetBtn.addEventListener('click', () => {
            if (confirm("Are you sure you want to reset all game progress? This cannot be undone.")) {
                localStorage.removeItem(STORAGE_KEY);
                location.reload();
            }
        });
        dom.continueForScoreBtn.addEventListener('click', () => {
            dom.goalMetModal.classList.remove('visible');
            loadPuzzle();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                if (['cinematic', 'character_intro', 'feedback', 'goal_prompt'].includes(currentGameState)) {
                    e.preventDefault(); advanceGameState(currentGameState);
                }
            }
            if (currentGameState === 'puzzle' && (e.key >= '1' && e.key <= dom.puzzleOptionsEl.children.length)) {
                if (dom.puzzleOptionsEl.querySelector('.option-btn')) { // only for mcq style
                    e.preventDefault();
                    const targetButton = dom.puzzleOptionsEl.children[parseInt(e.key) - 1];
                    if (targetButton && !targetButton.disabled) targetButton.click();
                }
            } else if (currentGameState === 'puzzle' && e.key.toLowerCase() === 'h' && !dom.hintButton.disabled) {
                e.preventDefault(); dom.hintButton.click();
            }
        });
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-overlay') || e.target.classList.contains('prompt-text')) {
                if (['cinematic', 'character_intro'].includes(currentGameState)) {
                    advanceGameState(currentGameState);
                }
            }
        });
    }

    // --- GAME STATE MACHINE ---
    function advanceGameState(fromState) {
        if (fromState === 'cinematic') {
            gameState.hasSeenIntro = true; saveProgress();
            dom.cinematicOverlay.classList.remove('visible');
            showGameWorld();
        } else if (fromState === 'character_intro') {
            dom.characterIntroModal.classList.remove('visible');
            dom.puzzleModalOverlay.classList.add('visible');
            showActualPuzzle();
        } else if (fromState === 'feedback') {
            currentPuzzleIndex++;
            saveLevelProgress();
            loadPuzzle();
        }
    }

    // --- WORLD UI FUNCTIONS ---
    function showGameWorld() {
        currentGameState = 'world';
        dom.gameWorld.style.opacity = '1';
        updateTopBarUI(); renderLevelTrack(); positionGoku();
    }

    function renderLevelTrack() {
        dom.levelTrack.querySelectorAll('.level-card').forEach(card => card.remove());
        gameData.levels.forEach(level => {
            const card = document.createElement('div');
            const statusInfo = gameState.levelStatus[level.id] || { unlocked: false, goalMet: false, completed: false };
            let statusClass = 'locked';
            let stamp = '';

            if (statusInfo.completed) {
                statusClass = 'completed';
                const stampText = level.levelType === 'case_file' ? '⚖️' : '✅';
                const stampTitle = level.levelType === 'case_file' ? 'Case Solved' : 'Case Closed';
                stamp = `<div class="card-stamp" title="${stampTitle}">${stampText}</div>`;
            } else if (statusInfo.goalMet) {
                statusClass = 'completed';
                stamp = `<div class="card-stamp" title="Goal Met">😊</div>`;
            } else if (statusInfo.unlocked) {
                statusClass = 'unlocked';
            }

            card.className = `level-card ${statusClass}`; card.id = level.id;

            // FIX: Correctly look up the character for the card avatar from the level's character list
            const mainCharacterInfo = gameData.characters[level.characters[1]];
            if (!mainCharacterInfo) { console.error(`No characters defined for level "${level.id}"`); return; }

            let buttonText = 'Locked';
            if (statusClass === 'unlocked') buttonText = 'Start Case';
            if (statusClass === 'completed') buttonText = 'Review Case';

            card.innerHTML = `${stamp}<div class="character-avatar"><i class="${mainCharacterInfo.icon}"></i></div><h3>${level.title}</h3><p class="prerequisite">${level.prerequisite}</p><button>${buttonText}</button>`;

            if (statusClass !== 'locked') {
                card.querySelector('button').addEventListener('click', () => startLevel(level.id));
            }
            dom.levelTrack.appendChild(card);
        });
    }

    function positionGoku(targetLevelId = null) {
        let targetCard;
        if (targetLevelId) { targetCard = document.getElementById(targetLevelId); }
        else {
            targetCard = document.querySelector('.level-card.unlocked:not(.completed)');
            if (!targetCard) {
                const allCards = document.querySelectorAll('.level-card');
                targetCard = allCards.length > 0 ? allCards[allCards.length - 1] : null;
            }
        }
        if (targetCard) {
            const cardCenter = targetCard.offsetLeft + (targetCard.offsetWidth / 2);
            const gokuHalfWidth = dom.gokuCharacter.offsetWidth / 2;
            dom.gokuCharacter.style.left = `${cardCenter - gokuHalfWidth}px`;
            targetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    }

    // --- LEVEL & PUZZLE LOGIC ---
    function startLevel(levelId) {
        positionGoku(levelId); currentLevelId = levelId;
        introducedCharactersThisLevel.clear();

        if (gameState.levelStatus[levelId].completed) {
            gameState.levelProgress[levelId] = { puzzleIndex: 0, satisfaction: 0 };
        }

        const progress = gameState.levelProgress[levelId] || { puzzleIndex: 0, satisfaction: 0 };
        currentPuzzleIndex = progress.puzzleIndex;
        currentSatisfaction = progress.satisfaction;

        updateSatisfactionUI();
        loadPuzzle();
    }

    function loadPuzzle() {
        const level = gameData.levels.find(l => l.id === currentLevelId);
        if (!level || currentPuzzleIndex >= level.puzzles.length) {
            completeLevel(level);
            return;
        }

        const puzzle = level.puzzles[currentPuzzleIndex];
        const charId = puzzle.character;

        if (!introducedCharactersThisLevel.has(charId)) {
            showCharacterIntro(charId);
        } else {
            dom.puzzleModalOverlay.classList.add('visible');
            showActualPuzzle();
        }
    }

    function showCharacterIntro(charId) {
        const level = gameData.levels.find(l => l.id === currentLevelId);
        const allCharacters = [];
        for (const key in gameData.characters) {
            if (Object.hasOwnProperty.call(gameData.characters, key)) { // Important check
                allCharacters.push(gameData.characters[key]);
            }
        }

        const character = allCharacters.find(c => c.id === charId);

        if (!character) { console.error(`Character ID "${charId}" not found in level "${level.id}"`); return; }

        dom.introCharIcon.className = character.icon;
        dom.introCharName.textContent = character.name;
        dom.introCharBio.textContent = character.bio;

        currentGameState = 'character_intro';
        dom.puzzleModalOverlay.classList.remove('visible'); // Hide puzzle modal
        dom.characterIntroModal.classList.add('visible'); // Show char intro
        dom.introPrompt.style.display = 'block';
        introducedCharactersThisLevel.add(charId);
    }

    function showActualPuzzle() {
        currentGameState = 'puzzle';
        // Reset UI from previous puzzle
        dom.puzzleModal.style.display = 'block';
        dom.puzzleOptionsEl.style.display = 'flex';
        dom.knowledgeBox.style.display = 'none';
        dom.feedbackBox.style.display = 'none';
        dom.hintButton.style.display = 'block'; dom.hintButton.disabled = false;
        dom.skipButton.style.display = 'block'; dom.skipButton.disabled = false;
        dom.nextButton.style.display = 'none';

        const level = gameData.levels.find(l => l.id === currentLevelId);
        const puzzle = level.puzzles[currentPuzzleIndex];

        const allCharacters = [];
        for (const key in gameData.characters) {
            if (Object.hasOwnProperty.call(gameData.characters, key)) { // Important check
                allCharacters.push(gameData.characters[key]);
            }
        }

        const character = allCharacters.find(c => c.id === puzzle.character);

        puzzleStartTime = Date.now();

        // Parse dialogue
        const [charNameInDialogue, dialogueText] = [puzzle.character, puzzle.dialogue];
        dom.characterNameEl.textContent = charNameInDialogue;
        dom.dialogueTextEl.textContent = `'${dialogueText}`;

        dom.puzzleQuestionEl.textContent = puzzle.question;
        dom.puzzleOptionsEl.innerHTML = '';

        switch (puzzle.type) {
            case 'calculative':
                dom.puzzleOptionsEl.innerHTML = `<input type="number" id="calculative-input" placeholder="Enter number..."><button id="submit-calc-btn" class="control-btn">Submit</button>`;
                document.getElementById('submit-calc-btn').onclick = () => {
                    const val = document.getElementById('calculative-input').value;
                    checkAnswer(parseFloat(val) || 0, puzzle);
                };
                break;
            case 'multiple_answers':
                dom.puzzleOptionsEl.innerHTML = puzzle.options.map((opt, i) => `
                    <label class="checkbox-option"><input type="checkbox" value="${opt}"><span>${opt}</span></label>
                `).join('');
                const submitMultiBtn = document.createElement('button');
                submitMultiBtn.textContent = 'Submit'; submitMultiBtn.className = 'control-btn';
                submitMultiBtn.onclick = () => {
                    const selected = Array.from(dom.puzzleOptionsEl.querySelectorAll('input:checked')).map(el => el.value);
                    checkAnswer(selected, puzzle);
                };
                dom.puzzleOptionsEl.appendChild(submitMultiBtn);
                break;
            default: // mcq, error_detection, dilemma, section_match
                activeOptionButtons = [];
                puzzle.options.forEach((optionText, index) => {
                    const button = document.createElement('button');
                    button.className = 'option-btn';
                    button.innerHTML = `<span class="option-key">${index + 1}</span> ${optionText}`;
                    button.onclick = () => checkAnswer(optionText, puzzle);
                    dom.puzzleOptionsEl.appendChild(button); activeOptionButtons.push(button);
                });
                break;
        }
    }

    function checkAnswer(selectedAnswer, puzzle) {
        currentGameState = 'feedback';
        const timeTaken = Math.max(1, (Date.now() - puzzleStartTime) / 1000);

        dom.puzzleOptionsEl.querySelectorAll('button, input').forEach(el => el.disabled = true);
        dom.hintButton.style.display = 'none';
        dom.skipButton.style.display = 'none';
        dom.nextButton.style.display = 'block';

        let isCorrect = false;
        if (puzzle.type === 'multiple_answers') {
            isCorrect = selectedAnswer.length === puzzle.correctAnswer.length && selectedAnswer.every(val => puzzle.correctAnswer.includes(val));
        } else {
            isCorrect = (selectedAnswer == puzzle.correctAnswer);
        }

        if (isCorrect) {
            const scoreEarned = Math.round((puzzle.satisfaction * 100) / timeTaken);
            const isCaseFile = gameData.levels.find(l => l.id === currentLevelId).levelType === 'case_file';

            if (isCaseFile) gameState.score += puzzle.satisfaction;
            gameState.score += scoreEarned;
            currentSatisfaction += puzzle.satisfaction;

            dom.feedbackBox.innerHTML = `<strong>Correct!</strong> (+${puzzle.satisfaction} Satisfaction, +${scoreEarned} Score)`;
            dom.feedbackBox.className = 'feedback-box correct';

            dom.puzzleOptionsEl.style.display = 'none';
            dom.knowledgeText.textContent = puzzle.knowledge.text;
            dom.knowledgeRef.textContent = `Further Reading: ${puzzle.knowledge.furtherReading}`;
            dom.knowledgeBox.style.display = 'block';

            checkLevelCompletion();
        } else {
            dom.feedbackBox.innerHTML = `<strong>Incorrect.</strong> <div id="kk-sprite">KK</div> KK appears: "A costly mistake, Goku. Review the basics."`;
            dom.feedbackBox.className = 'feedback-box incorrect';
        }

        updateSatisfactionUI();
        updateTopBarUI();
        saveLevelProgress();
        dom.feedbackBox.style.display = 'block';
    }

    function skipPuzzle() {
        currentPuzzleIndex++;
        saveLevelProgress();
        loadPuzzle();
    }

    function useHint() {
        const cost = 50;
        if (gameState.hints > 0) {
            gameState.hints--;
            showHint();
        } else if (gameState.score >= cost) {
            gameState.score -= cost;
            showHint(` (-${cost} Score)`);
        } else {
            alert("Not enough Score or complimentary hints!");
        }
        updateTopBarUI();
        saveProgress();
    }

    function showHint(costText = ' (Free)') {
        const puzzle = gameData.levels.find(l => l.id === currentLevelId).puzzles[currentPuzzleIndex];
        dom.feedbackBox.innerHTML = `<strong>Hint${costText}:</strong> Consider the option: '${puzzle.correctAnswer}'.`;
        dom.feedbackBox.className = 'feedback-box hint';
        dom.feedbackBox.style.display = 'block';
        dom.hintButton.disabled = true;
    }

    function updateTopBarUI() {
        dom.scoreDisplay.textContent = gameState.score;
        dom.hintCountDisplay.textContent = gameState.hints;
    }

    function updateSatisfactionUI() {
        const level = gameData.levels.find(l => l.id === currentLevelId);
        if (!level) return;
        const percentage = level.satisfactionGoal > 0 ? (currentSatisfaction / level.satisfactionGoal) * 100 : 0;
        dom.satisfactionBar.style.width = `${Math.min(100, percentage)}%`;
    }

    function triggerCompletionAnimation(level, callback) {
        const isCase = level.levelType === 'case_file';
        const stampText = isCase ? "CASE SOLVED" : "CASE CLOSED";
        const stampColor = isCase ? "var(--danger-color)" : "var(--success-color)";

        const svgStamp = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="none" stroke="${encodeURIComponent(stampColor)}" stroke-width="4"/><text x="50" y="55" font-family="Teko, sans-serif" font-size="24" fill="${encodeURIComponent(stampColor)}" text-anchor="middle">${stampText}</text></svg>`;
        dom.stampAnimation.style.backgroundImage = `url('data:image/svg+xml;utf8,${svgStamp}')`;

        dom.completionAnimationOverlay.classList.add('visible');
        confetti({ particleCount: 150, spread: 90, origin: { y: 0.6 } });

        setTimeout(() => {
            dom.completionAnimationOverlay.classList.remove('visible');
            if (callback) callback();
        }, 2500);
    }

    function checkLevelCompletion() {
        const level = gameData.levels.find(l => l.id === currentLevelId);
        const status = gameState.levelStatus[level.id];

        if (!status.goalMet && currentSatisfaction >= level.satisfactionGoal) {
            status.goalMet = true;
            const currentIndex = gameData.levels.findIndex(l => l.id === level.id);
            if (currentIndex + 1 < gameData.levels.length) {
                const nextLevelId = gameData.levels[currentIndex + 1].id;
                gameState.levelStatus[nextLevelId].unlocked = true;
            }
            saveProgress(); renderLevelTrack();

            dom.nextButton.style.display = 'none';
            setTimeout(() => {
                currentGameState = 'goal_prompt';
                dom.goalMetModal.classList.add('visible');
                const nextLevel = gameData.levels[currentIndex + 1];
                if (nextLevel) {
                    setTimeout(() => positionGoku(nextLevel.id), 500);
                }
            }, 500);
        }
    }

    function completeLevel(level) {
        const status = gameState.levelStatus[level.id];
        if (!status.completed) { // Only trigger animation if it's the first time completing
            status.completed = true;
            saveProgress();
            triggerCompletionAnimation(level, exitCase);
        } else {
            exitCase();
        }
    }

    function exitCase() {
        dom.puzzleModalOverlay.classList.remove('visible');
        dom.goalMetModal.classList.remove('visible');
        currentGameState = 'world';
        renderLevelTrack();
        const nextActiveLevel = gameData.levels.find(l => gameState.levelStatus[l.id]?.unlocked && !gameState.levelStatus[l.id]?.goalMet);
        positionGoku(nextActiveLevel ? nextActiveLevel.id : currentLevelId);
    }

    function saveLevelProgress() {
        gameState.levelProgress[currentLevelId] = {
            puzzleIndex: currentPuzzleIndex,
            satisfaction: currentSatisfaction,
        };
        saveProgress();
    }

    initGame();

});
