document.addEventListener('DOMContentLoaded', () => {
    
    // --- DOM ELEMENT REFERENCES ---
    const dom = {
        loadingOverlay: document.getElementById('loading-overlay'), gameWorld: document.getElementById('game-world'), scoreDisplay: document.getElementById('score-display'), hintCountDisplay: document.getElementById('hint-count-display'),
        resetBtn: document.getElementById('reset-btn'), levelTrack: document.getElementById('level-track'), gokuCharacter: document.getElementById('goku-character'),
        puzzleModalOverlay: document.getElementById('puzzle-modal-overlay'), puzzleModal: document.getElementById('puzzle-modal'), cinematicOverlay: document.getElementById('cinematic-overlay'),
        cinematicText: document.getElementById('cinematic-text'), cinematicPrompt: document.getElementById('cinematic-prompt'),
        narratorModal: document.getElementById('narrator-modal'), narratorIcon: document.getElementById('narrator-icon'), narratorTitle: document.getElementById('narrator-title'),
        narratorText: document.getElementById('narrator-text'), narratorPrompt: document.getElementById('narrator-prompt'),
        characterIntroModal: document.getElementById('character-intro-modal'), introCharIcon: document.getElementById('intro-char-icon'),
        introCharName: document.getElementById('intro-char-name'), introCharBio: document.getElementById('intro-char-bio'), introPrompt: document.getElementById('intro-prompt'),
        goalMetModal: document.getElementById('goal-met-modal'), satisfactionBar: document.getElementById('satisfaction-bar'),
        characterNameEl: document.getElementById('character-name'), dialogueTextEl: document.getElementById('dialogue-text'),
        puzzleQuestionEl: document.getElementById('puzzle-question'), puzzleOptionsEl: document.getElementById('puzzle-options'),
        feedbackBox: document.getElementById('feedback-box'), hintButton: document.getElementById('hint-button-puzzle'),
        prevButton: document.getElementById('prev-button'), skipButton: document.getElementById('skip-button'), nextButton: document.getElementById('next-button'),
        exitCaseBtn: document.getElementById('exit-case-btn'), moveOnBtn: document.getElementById('move-on-btn'),
        continueForScoreBtn: document.getElementById('continue-for-score-btn'),
        knowledgeBox: document.getElementById('knowledge-box'), knowledgeText: document.getElementById('knowledge-text'), knowledgeRef: document.getElementById('knowledge-ref'),
        completionAnimationOverlay: document.getElementById('completion-animation-overlay'), stampAnimation: document.getElementById('stamp-animation'),
        customAlertModal: document.getElementById('custom-alert-modal'), customAlertTitle: document.getElementById('custom-alert-title'),
        customAlertText: document.getElementById('custom-alert-text'), customAlertButtons: document.getElementById('custom-alert-buttons'),
    };

    // --- GAME STATE VARIABLES ---
    const STORAGE_KEY = 'gstParagonState';
    let gameState = {};
    let currentLevelId = null, currentPuzzleIndex = 0, currentSatisfaction = 0;
    let puzzleStartTime = 0;
    let currentGameState = 'loading';
    let introducedCharactersThisLevel = new Set();
    let answeredPuzzlesThisSession = new Set();

    // --- CHEAT CODE SETUP ---
    const cheatCodes = {
        'boost': () => { 
            gameState.score += 500; 
            gameState.hints += 5; 
            customAlert("Cheat Activated!", "Paragon Boost: Score +500, Hints +5!");
            updateTopBarUI(); // Immediately update the UI to show the new values
            saveProgress();
        },
        'goku': () => { 
            gameData.levels.forEach(l => {
                if (gameState.levelStatus[l.id]) {
                    gameState.levelStatus[l.id].unlocked = true;
                }
            }); 
            customAlert("Cheat Activated", "All levels have been unlocked!");
            renderLevelTrack(); // Immediately re-render the level cards to show their new unlocked state
            saveProgress();
        },
        'resetcase': () => {
            if(currentLevelId) {
                gameState.levelProgress[currentLevelId] = { puzzleIndex: 0, satisfaction: 0 };
                gameState.levelStatus[currentLevelId].goalMet = false;
                gameState.levelStatus[currentLevelId].completed = false;
                customAlert("Case Reset", `Progress for "${gameData.levels.find(l=>l.id===currentLevelId).title}" has been reset.`);
            }
        }
    };

    let userInput = [];

    // --- CORE FUNCTIONS: SAVE/LOAD ---
    function saveProgress() { localStorage.setItem(STORAGE_KEY, JSON.stringify(gameState)); }
    function loadProgress() {
        const savedState = localStorage.getItem(STORAGE_KEY);
        if (savedState) {
            gameState = JSON.parse(savedState);
            if (!gameState.levelProgress) gameState.levelProgress = {};
            if (typeof gameState.hints === 'undefined') gameState.hints = 2;
            if (typeof gameState.score === 'undefined') gameState.score = 0;
            if (!gameState.answeredPuzzles) gameState.answeredPuzzles = {};
        } else { resetGameData(); }
    }
    function resetGameData() {
        gameState = { score: 0, hints: 2, levelStatus: {}, levelProgress: {}, hasSeenIntro: false, answeredPuzzles: {} };
        gameData.levels.forEach((level, index) => {
            gameState.levelStatus[level.id] = { unlocked: index === 0, goalMet: false, completed: false };
        });
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

    function customAlert(title, message) {
        dom.customAlertTitle.textContent = title;
        dom.customAlertText.textContent = message;
        dom.customAlertButtons.innerHTML = `<button class="custom-alert-confirm">OK</button>`;
        dom.customAlertButtons.querySelector('.custom-alert-confirm').onclick = () => dom.customAlertModal.classList.remove('visible');
        dom.customAlertModal.classList.add('visible');
    }

    function customConfirm(title, message, onConfirm) {
        dom.customAlertTitle.textContent = title;
        dom.customAlertText.textContent = message;
        dom.customAlertButtons.innerHTML = `
            <button class="custom-alert-cancel">Cancel</button>
            <button class="custom-alert-confirm">Confirm</button>`;
        dom.customAlertButtons.querySelector('.custom-alert-confirm').onclick = () => {
            dom.customAlertModal.classList.remove('visible');
            onConfirm();
        };
        dom.customAlertButtons.querySelector('.custom-alert-cancel').onclick = () => dom.customAlertModal.classList.remove('visible');
        dom.customAlertModal.classList.add('visible');
    }

    // --- INITIALIZATION ---
    function initGame () {
        loadProgress();
        
        if (!gameState.hasSeenIntro) {
            currentGameState = 'cinematic';
            dom.cinematicOverlay.classList.add('visible');
            const introText = "The corridors of NACIN echoed with ambition...\n\nWhile others memorized provisions, Goku questioned logic.\n\nNow, he stands at the threshold of his first posting... where every decision affects lives... and law.";
            typewriter(dom.cinematicText, introText, () => { dom.cinematicPrompt.style.display = 'block'; });
        } else { showGameWorld(); }
        
        dom.loadingOverlay.classList.remove('visible');

        // --- EVENT LISTENERS ---
        dom.hintButton.addEventListener('click', useHint);
        dom.skipButton.addEventListener('click', skipPuzzle);
        dom.prevButton.addEventListener('click', prevPuzzle);
        dom.nextButton.addEventListener('click', () => advanceGameState('feedback'));
        dom.exitCaseBtn.addEventListener('click', exitCase);
        dom.moveOnBtn.addEventListener('click', exitCase);
        dom.resetBtn.addEventListener('click', () => {
            customConfirm("Reset Game?", "Are you sure you want to reset all game progress? This cannot be undone.", () => {
                resetGameData();
                saveProgress();
                location.reload();
            });
        });
        dom.continueForScoreBtn.addEventListener('click', () => {
            dom.goalMetModal.classList.remove('visible');
            loadPuzzle();
        });
        
        document.addEventListener('keydown', (e) => {
            const key = e.key.toLowerCase();
            userInput.push(key);
            userInput = userInput.slice(-15); // Keep buffer reasonable
            for(const code in cheatCodes) {
                if (userInput.join('').includes(code)) {
                    cheatCodes[code]();
                    userInput = []; // Reset after activation
                    break;
                }
            }
            
            if (e.key === 'Enter' || e.key === ' ') {
                if (['cinematic', 'narrator', 'character_intro', 'feedback', 'goal_prompt'].includes(currentGameState)) {
                    e.preventDefault();
                    if(currentGameState === 'goal_prompt') dom.moveOnBtn.click();
                    else advanceGameState(currentGameState);
                }
            }
            if(currentGameState === 'puzzle' && (e.key >= '1' && e.key <= dom.puzzleOptionsEl.children.length)) {
                if(dom.puzzleOptionsEl.querySelector('.option-btn')) {
                    e.preventDefault();
                    const targetButton = dom.puzzleOptionsEl.children[parseInt(e.key) - 1];
                    if (targetButton && !targetButton.disabled) targetButton.click();
                }
            } else if (currentGameState === 'puzzle' && key === 'h' && !dom.hintButton.disabled) {
                e.preventDefault(); dom.hintButton.click();
            }
        });
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-overlay') || e.target.classList.contains('prompt-text')) {
                if (['cinematic', 'narrator', 'character_intro'].includes(currentGameState)) {
                     advanceGameState(currentGameState);
                }
            }
        });
    };
    
    // --- GAME STATE MACHINE & HELPERS ---
    function advanceGameState(fromState) {
        if (fromState === 'cinematic') {
            gameState.hasSeenIntro = true; saveProgress();
            dom.cinematicOverlay.classList.remove('visible');
            showGameWorld();
        } else if (fromState === 'narrator') {
            dom.narratorModal.classList.remove('visible');
            loadPuzzle();
        } else if(fromState === 'character_intro') {
            dom.characterIntroModal.classList.remove('visible');
            // FIX: This is the crucial step that was missing.
            dom.puzzleModalOverlay.classList.add('visible');
            showActualPuzzle();
        } else if (fromState === 'feedback') {
            currentPuzzleIndex++;
            saveLevelProgress();
            loadPuzzle();
        }
    }

    function getCharacterInfo(charId) {
        if (!charId) return null;

        allCharacters = gameData.characters;
        for (const key in allCharacters) {
            if (key.toUpperCase() === charId.toUpperCase()) {
                return allCharacters[key];
            }
        }
        return { "id": "Unknown", "name": "Anonymous", "icon": "fa-solid fa-user-shield", "bio": "A Secret Character" };
        
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
            } else if (statusInfo.unlocked) {
                statusClass = 'unlocked';
                if (statusInfo.goalMet) {
                     stamp = `<div class="card-stamp" title="Goal Met">😊</div>`;
                }
            }
            
            card.className = `level-card ${statusClass}`; card.id = level.id;

            // Get the level icon and supporting characters
            // if level has no icons then use the first character's icon
    
            // supporting characters for the level, are all the chaaracters except the main one that is placed in the list at 0 index
            const levelSupportingCharacters = level.characters.slice(2).map(id => getCharacterInfo(id));
            const levelIcon = level.icon || (levelSupportingCharacters.length > 0 ? levelSupportingCharacters[0].icon : 'fa-solid fa-question');
            
            // const mainCharacterId = level.characters[1] || level.characters[0];
            // const mainCharacter = getCharacterInfo(mainCharacterId);
            // if (!mainCharacter) { console.error(`Character ID "${mainCharacterId}" not found for level "${level.id}"`); return; }
            
            let buttonText = 'Locked';
            if (statusClass === 'unlocked') buttonText = statusInfo.goalMet ? 'Continue Case' : 'Start Case';
            if (statusClass === 'completed') buttonText = 'Review Case';
            
            card.innerHTML = `${stamp}<div class="character-avatar" style="background-color: var(--${statusClass}-color);"><i class="${levelIcon}"></i></div><h3>${level.title}</h3><p class="prerequisite">${level.prerequisite}</p><button>${buttonText}</button>`;
            
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
                targetCard = document.querySelector('.level-card.unlocked');
                 if (!targetCard) {
                    const allCards = document.querySelectorAll('.level-card');
                    targetCard = allCards.length > 0 ? allCards[allCards.length-1] : null;
                }
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
        
        const statusInfo = gameState.levelStatus[levelId];
        if (statusInfo.completed) {
            gameState.levelProgress[levelId] = { puzzleIndex: 0, satisfaction: 0 };
        }
        
        const progress = gameState.levelProgress[levelId] || { puzzleIndex: 0, satisfaction: 0 };
        currentPuzzleIndex = progress.puzzleIndex;
        currentSatisfaction = progress.satisfaction;
        
        updateSatisfactionUI();
        
        if (currentPuzzleIndex === 0 && !statusInfo.completed) {
            showNarratorScreen('start');
        } else {
            loadPuzzle();
        }
    }

    function showNarratorScreen(type) {
        currentGameState = 'narrator';
        const level = gameData.levels.find(l => l.id === currentLevelId);
        const narrative = level.narrativeGoal[type];
        if(!narrative) { advanceGameState('narrator'); return; }

        dom.narratorTitle.textContent = level.title;
        dom.narratorText.textContent = narrative;
        dom.narratorModal.classList.add('visible');
        dom.narratorPrompt.style.display = 'block';
    }

    function loadPuzzle() {
        const level = gameData.levels.find(l => l.id === currentLevelId);
        if (!level || currentPuzzleIndex >= level.puzzles.length) { 
            completeLevel(level);
            return;
        }

        const puzzle = level.puzzles[currentPuzzleIndex];
        const charId = puzzle.character.toUpperCase();
        
        if (!introducedCharactersThisLevel.has(charId)) {
            showCharacterIntro(charId);
        } else {
            dom.puzzleModalOverlay.classList.add('visible');
            showActualPuzzle();
        }
    }
    
    function showCharacterIntro(charId) {
        const character = getCharacterInfo(charId);
        if(!character){ console.error(`Char ID "${charId}" not in global char list`); return; }

        dom.introCharIcon.className = character.icon;
        dom.introCharName.textContent = character.name;
        dom.introCharBio.textContent = character.bio;
        
        currentGameState = 'character_intro';
        dom.puzzleModalOverlay.classList.remove('visible');
        dom.characterIntroModal.classList.add('visible');
        dom.introPrompt.style.display = 'block';
        introducedCharactersThisLevel.add(charId);
    }

    function showActualPuzzle() {
        currentGameState = 'puzzle';
        dom.puzzleModal.style.display = 'block';
        dom.puzzleOptionsEl.style.display = 'flex';
        dom.knowledgeBox.style.display = 'none';
        dom.feedbackBox.style.display = 'none';
        dom.hintButton.style.display = 'block'; dom.hintButton.disabled = false;
        dom.skipButton.style.display = 'block'; dom.skipButton.disabled = false;
        dom.nextButton.style.display = 'none';
        dom.prevButton.disabled = (currentPuzzleIndex === 0);
        
        const level = gameData.levels.find(l => l.id === currentLevelId);
        const puzzle = level.puzzles[currentPuzzleIndex];
        const character = getCharacterInfo(puzzle.character);
        
        puzzleStartTime = Date.now();
        
        const [charNameInDialogue, dialogueText] = [character.name, puzzle.dialogue];

        dom.characterNameEl.textContent = charNameInDialogue;
        dom.dialogueTextEl.textContent = `'${dialogueText.slice(0, -1)}'`; // Remove trailing quote
        dom.puzzleQuestionEl.textContent = puzzle.question;
        dom.puzzleOptionsEl.innerHTML = '';
        
        if (gameState.answeredPuzzles[puzzle.id]) {
            showAnsweredPuzzle(puzzle);
            return;
        }

        // NEW: Handle different puzzle types
    switch (puzzle.type) {
        case 'calculative':
            dom.puzzleOptionsEl.innerHTML = `<input type="number" id="calculative-input" placeholder="Enter number..."><button id="submit-calc-btn" class="control-btn">Submit</button>`;
            document.getElementById('submit-calc-btn').onclick = () => {
                const val = document.getElementById('calculative-input').value;
                checkAnswer(parseFloat(val) || 0, puzzle);
            };
            break;
        case 'multiple_answers':
            dom.puzzleOptionsEl.innerHTML = puzzle.options.map((opt) => `
                <label class="checkbox-option"><input type="checkbox" value="${opt}"><span>${opt}</span></label>
            `).join('');
            const submitMultiBtn = document.createElement('button');
            submitMultiBtn.textContent = 'Submit';
            submitMultiBtn.className = 'control-btn';
            submitMultiBtn.style.marginTop = '10px';
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
                dom.puzzleOptionsEl.appendChild(button);
                activeOptionButtons.push(button);
            });
            break;
    }
    }
    
    function showAnsweredPuzzle(puzzle) {
        dom.feedbackBox.innerHTML = `<strong>Already Answered Correctly.</strong> Reviewing the case debrief.`;
        dom.feedbackBox.className = 'feedback-box hint';
        dom.feedbackBox.style.display = 'block';
        dom.hintButton.style.display = 'none';
        dom.skipButton.style.display = 'none';
        dom.nextButton.style.display = 'block';
        dom.puzzleOptionsEl.style.display = 'none';
        dom.knowledgeText.textContent = puzzle.knowledge.text;
        dom.knowledgeRef.textContent = `Further Reading: ${puzzle.knowledge.furtherReading}`;
        dom.knowledgeBox.style.display = 'block';
        currentGameState = 'feedback';
    }

    function checkAnswer(selectedAnswer, puzzle) {
    currentGameState = 'feedback';
    dom.puzzleOptionsEl.querySelectorAll('button, input, label').forEach(el => {
        el.style.pointerEvents = 'none';
        if(el.tagName === 'BUTTON' || el.tagName === 'INPUT') el.disabled = true;
    });
    dom.hintButton.style.display = 'none';
    dom.skipButton.style.display = 'none';
    dom.nextButton.style.display = 'block';

    // NEW: Logic to handle different answer types
    let isCorrect = false;
    if (Array.isArray(puzzle.correctAnswer)) { // For 'multiple_answers'
        isCorrect = selectedAnswer.length === puzzle.correctAnswer.length && selectedAnswer.every(val => puzzle.correctAnswer.includes(val));
    } else { // For all other types
        isCorrect = (selectedAnswer == puzzle.correctAnswer);
    }

    if (isCorrect) {
        if (!gameState.answeredPuzzles[puzzle.id]) {
            const timeTaken = Math.max(1, (Date.now() - puzzleStartTime) / 1000); 
            const scoreEarned = Math.round((puzzle.satisfaction * 100) / timeTaken);
            // ... (rest of the scoring logic is the same)
            gameState.score += scoreEarned;
            currentSatisfaction += puzzle.satisfaction;
            dom.feedbackBox.innerHTML = `<strong>Correct!</strong> (+${puzzle.satisfaction} Satisfaction, +${scoreEarned} Score)`;
            gameState.answeredPuzzles[puzzle.id] = true;
        } else {
            dom.feedbackBox.innerHTML = `<strong>Correct!</strong> (Already Answered)`;
        }
        
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
    dom.feedbackBox.style.display = 'block';
}
    
    function prevPuzzle() { if(currentPuzzleIndex > 0) { currentPuzzleIndex--; saveLevelProgress(); loadPuzzle(); } }
    function skipPuzzle(){ currentPuzzleIndex++; saveLevelProgress(); loadPuzzle(); }
    
    function useHint() {
        const cost = 50;
        if (gameState.hints > 0) { gameState.hints--; showHint(); } 
        else if (gameState.score >= cost) { gameState.score -= cost; showHint(` (-${cost} Score)`); } 
        else { alert("Not enough Score or complimentary hints!"); }
        updateTopBarUI(); saveProgress();
    }

    function showHint(costText = ' (Free)') {
        const puzzle = gameData.levels.find(l => l.id === currentLevelId).puzzles[currentPuzzleIndex];
        dom.feedbackBox.innerHTML = `<strong>Hint${costText}:</strong> Consider: '${puzzle.correctAnswer}'.`;
        dom.feedbackBox.className = 'feedback-box hint';
        dom.feedbackBox.style.display = 'block';
        dom.hintButton.disabled = true;
    }
    
    function updateTopBarUI() { dom.scoreDisplay.textContent = gameState.score; dom.hintCountDisplay.textContent = gameState.hints; }
    
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
        setTimeout(() => { dom.completionAnimationOverlay.classList.remove('visible'); if (callback) callback(); }, 2500);
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
            saveProgress();
            
            dom.nextButton.style.display = 'none';
            setTimeout(() => {
                showNarratorScreen('satisfactionReached');
                const nextLevel = gameData.levels[currentIndex + 1];
                if (nextLevel) { setTimeout(() => positionGoku(nextLevel.id), 500); }
            }, 500);
        }
    }
    
    function completeLevel(level) {
        const status = gameState.levelStatus[level.id];
        if(!status.completed) {
             status.completed = true;
             saveProgress();
             triggerCompletionAnimation(level, () => showNarratorScreen('end'));
        } else { exitCase(); }
    }
    
    function exitCase(){
        dom.puzzleModalOverlay.classList.remove('visible');
        dom.goalMetModal.classList.remove('visible');
        dom.narratorModal.classList.remove('visible');
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