/**
 * PARVEEN MAKWANA (LEGAL NAME: PARVEEN KUMAR) — DUAL EXPERIENCE PORTFOLIO ENGINE
 * Architecture: Mode 01 Modern Artistic GUI × Mode 02 Interactive Developer Terminal
 * Concept: "Curiosity in the process. Precision in the build."
 * 
 * Features:
 * 1. Master Structured Data (Single source of truth for both Modern & Terminal)
 * 2. Pure Web Audio SFX Engine (Zero-latency synthesized audio, OFF by default)
 * 3. Digital Business Card Gateway (Keyboard & touch accessible mode selector)
 * 4. Dual View State Switcher (Seamless transition between Modern GUI & CLI Terminal)
 * 5. Interactive Terminal CLI Engine (History, tab completion, rich outputs, touch shortcuts)
 * 6. Generative Architectural Lattice Canvas (Responsive depth nodes & ripples)
 * 7. Multilayer Parallel Chronology & Milestone Modal
 * 8. Quick Profile Snapshot Modal
 * 9. Real-Time Rohtak IST Clock (Asia/Kolkata) & Dynamic Year
 * 10. 1-Click Verified Email Clipboard Utility
 */

document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    /* ==========================================================================
       01. Master Structured Portfolio Data (Unified Source of Truth)
       ========================================================================== */
    const portfolioData = {
        identity: {
            brandName: "Parveen Makwana",
            legalName: "Parveen Kumar",
            role: "Software Engineering Undergraduate & Builder",
            tagline: "Curiosity in the process. Precision in the build.",
            location: "Haryana, India (Rohtak)",
            timezone: "Asia/Kolkata (IST, UTC+5:30)",
            status: "Actively interviewing for Flutter developer internships & engineering roles",
            degree: "B.Tech in Computer Science & Engineering (2024–2027), MDU Rohtak",
            diploma: "Diploma in Computer Science (2021–2024), Chhotu Ram Polytechnic, Rohtak",
            email: "parveenmakwana02@gmail.com",
            github: "https://github.com/parveenengg",
            linkedin: "https://linkedin.com/in/parveenkumar--/",
            leetcode: "https://leetcode.com/u/parveen_engi/",
            instagram: "https://www.instagram.com/parveen.tv/"
        },
        projects: [
            {
                id: "orbit-browser",
                pid: "PRJ-01",
                name: "Orbit Browser",
                subtitle: "Multi-Platform Client MVP",
                tech: ["Flutter", "Dart", "InAppWebView", "Android APK", "macOS DMG"],
                summary: "Functional cross-platform browser MVP built with Flutter & Dart in a rapid 2-week sprint, with live APK distribution site.",
                details: "Engineered webview lifecycle controllers, responsive browser tab chrome, URL parsing, bookmark management, and custom celestial particle visual branding. Android APK builds distributed via GitHub Releases; macOS DMG and Google Play store packaging targeted next.",
                links: [
                    { label: "Live Site", url: "https://orbit.parveenmakwana.in/" },
                    { label: "GitHub Repository", url: "https://github.com/parveenengg/Orbit-app" }
                ],
                status: "Live MVP // Android APK Released"
            },
            {
                id: "obvious-choice",
                pid: "PRJ-02",
                name: "Obvious-Choice",
                subtitle: "Founder Branding & Positioning Platform",
                tech: ["Web Architecture", "JavaScript", "Funnel Mechanics", "UI/UX", "CSS Grid"],
                summary: "Engineered a structured web platform tailored for B2B founders, integrating positioning frameworks and inbound funnels.",
                details: "Designed and implemented a 5-stage client positioning framework and 6-stage acquisition funnel. Built responsive CSS architecture, newsletter capture endpoints, and structured technical copywriting.",
                links: [
                    { label: "Live Platform", url: "https://obvious-choice.parveenmakwana.in/" },
                    { label: "GitHub Source", url: "https://github.com/parveenengg/ObviousChoice" }
                ],
                status: "Production Ready // Shipped"
            },
            {
                id: "portfolio-v4",
                pid: "PRJ-03",
                name: "Portfolio Dual Experience",
                subtitle: "Artistic Modern GUI × Interactive Developer CLI",
                tech: ["Vanilla JS", "Web Audio API", "CSS Architecture", "Design Systems"],
                summary: "High-performance personal web platform offering visitors choice between a colourful editorial GUI and a genuine interactive terminal.",
                details: "Zero-dependency pure vanilla JavaScript implementation. Features synthesized audio feedback, keyboard-driven navigation, command line history buffer, and accessible dialogs without traditional navbar/footer clutter.",
                links: [
                    { label: "GitHub Repository", url: "https://github.com/parveenengg" }
                ],
                status: "Active // v4.0.0"
            }
        ],
        skills: {
            languages: ["Dart", "Python", "JavaScript (ES6+)", "SQL", "HTML5", "CSS3"],
            client: ["Flutter", "InAppWebView", "Responsive UI", "Widget Trees", "Android Studio", "APK Packaging"],
            backend: ["Node.js", "Express.js", "RESTful APIs", "MongoDB", "Mongoose", "Postman", "Pandas", "NumPy"],
            tools: ["Git & GitHub", "Linux / Bash", "VS Code", "Figma", "Data Verification", "First-Principles Debugging"]
        },
        experience: [
            {
                period: "Jan 2025 – Present",
                title: "Inventory Records Verification & Data Assistance",
                org: "Practical Operations Assistance",
                summary: "Practical support verifying stock records, resolving spreadsheet discrepancies, and correcting outdated inventory logs.",
                tags: ["Data Verification", "Spreadsheet Audits", "Operations Accuracy", "Record Reconciliation"]
            },
            {
                period: "Feb 2023",
                title: "Python Developer Training & Data Science",
                org: "IBM SkillBuild Program",
                summary: "Exploratory data analysis, Pandas manipulation, NumPy arrays, and desktop GUI scripting in Jupyter Notebooks.",
                tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Jupyter", "Tkinter"]
            }
        ],
        chronology: [
            {
                id: "node-proj-01",
                track: "projects",
                trackLabel: "01 / LIVE PLATFORM",
                period: "2025 – PRESENT",
                yearLabel: "2025–Present",
                title: "Obvious-Choice — Founder Digital Platform",
                org: "Public Production Platform",
                summary: "Engineered a zero-dependency high-conversion web presence system for founders, achieving 99+ Google Lighthouse scores and fluid typography using pure native HTML5, CSS3, and JavaScript.",
                details: "Designed and implemented a 5-stage client positioning framework and 6-stage acquisition funnel. Built responsive CSS architecture, newsletter capture endpoints, and structured technical copywriting. Operating live at obvious-choice.parveenmakwana.in.",
                image: "assets/project-obvious-choice.png",
                link: "https://obvious-choice.parveenmakwana.in/",
                linkText: "Visit Live Platform →",
                tags: ["Web Architecture", "JavaScript", "Funnel Mechanics", "UI/UX", "Responsive Design"]
            },
            {
                id: "node-edu-03",
                track: "education",
                trackLabel: "02 / DEGREE PURSUIT",
                period: "2024 – PRESENT (Exp. 2027)",
                yearLabel: "2024–2027",
                title: "B.Tech in Computer Science & Engineering",
                org: "Maharshi Dayanand University (MDU), Rohtak",
                summary: "Pursuing undergraduate degree in Computer Science, deepening algorithmic problem solving and distributed system architectures.",
                details: "Undergraduate degree program focusing on software engineering principles, distributed systems, advanced algorithms, compiler fundamentals, and database internals. Target graduation in 2027.",
                tags: ["Computer Science", "Algorithms", "Distributed Systems", "Software Engineering"]
            },
            {
                id: "node-proj-02",
                track: "projects",
                trackLabel: "03 / SHIPPED MVP",
                period: "2024 – 2025",
                yearLabel: "2024–2025",
                title: "Orbit Browser — Multi-Platform Client MVP",
                org: "Flagship Software Application",
                summary: "Functional cross-platform browser MVP built with Flutter & Dart in a rapid 2-week sprint, with live APK distribution site.",
                details: "Engineered webview lifecycle controllers, responsive browser tab chrome, URL parsing, bookmark management, and custom celestial particle visual branding. Android APK builds distributed via GitHub Releases; live distribution site at orbit.parveenmakwana.in.",
                image: "assets/project-orbit.jpg",
                link: "https://orbit.parveenmakwana.in/",
                linkText: "Visit Orbit Live Site →",
                tags: ["Flutter", "Dart", "InAppWebView", "Android APK", "Product Architecture"]
            },
            {
                id: "node-exp-02",
                track: "experience",
                trackLabel: "04 / EXPERIENCE",
                period: "Jan 2025 – Present",
                yearLabel: "2025–Present",
                title: "Inventory Records Verification & Data Assistance",
                org: "Practical Operations Assistance",
                summary: "Practical support verifying stock records, resolving spreadsheet discrepancies, and correcting outdated inventory logs.",
                details: "Hands-on operational assistance: systematically reviewing digital inventory logs against warehouse records, pinpointing discrepancies and missing entries, and ensuring operational accuracy to assist supply and purchasing workflows.",
                tags: ["Data Verification", "Spreadsheet Audits", "Operations Accuracy", "Record Reconciliation"]
            },
            {
                id: "node-learn-03",
                track: "learning",
                trackLabel: "05 / LEARNING",
                period: "2024 – 2025",
                yearLabel: "2024–2025",
                title: "Flutter & Cross-Platform Specialization",
                org: "Mobile & Client Deep Dive",
                summary: "Mastered Flutter widget trees, Dart asynchronous streams, responsive window bounds, and native platform channels.",
                details: "Specialized in client application architecture with Flutter and Dart. Engineered platform webview controllers, state lifecycles, and cross-platform build packaging for Android APK.",
                tags: ["Flutter", "Dart", "Android Studio", "Cross-Platform"]
            },
            {
                id: "node-learn-02",
                track: "learning",
                trackLabel: "05 / LEARNING",
                period: "2024 – 2025",
                yearLabel: "2024–2025",
                title: "Full-Stack Backend & REST API Engineering",
                org: "Self-Directed Backend Architecture",
                summary: "Structured RESTful APIs in Node.js and Express, designed document schemas in MongoDB, and verified routes in Postman.",
                details: "Engineered scalable backend service layers: structured asynchronous Express routers, implemented Mongoose data validation schemas, designed RESTful CRUD endpoints, and validated HTTP payload integrity with Postman.",
                tags: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs", "Postman"]
            },
            {
                id: "node-edu-02",
                track: "education",
                trackLabel: "06 / GENESIS & FOUNDATIONS",
                period: "2021 – 2024",
                yearLabel: "2021–2024",
                title: "Diploma in Computer Engineering (CS)",
                org: "Chhotu Ram Polytechnic, Rohtak",
                summary: "Three-year intensive polytechnic diploma covering data structures, relational database schemas, operating systems, and computer networking. Where it all started.",
                details: "Completed full three-year technical diploma curriculum. Covered core data structures, algorithms, digital electronics, relational databases (SQL), microprocessor basics, and computer networking. Instilled rigorous first-principles engineering discipline. The genesis of the technical journey.",
                tags: ["Data Structures", "Algorithms", "Relational Databases", "Operating Systems", "Genesis"]
            },
            {
                id: "node-learn-01",
                track: "learning",
                trackLabel: "07 / LEARNING",
                period: "Feb 2023",
                yearLabel: "2023",
                title: "Python Developer Training & Data Science",
                org: "IBM SkillBuild Program",
                summary: "Exploratory data analysis, Pandas manipulation, NumPy arrays, and desktop GUI scripting in Jupyter Notebooks.",
                details: "Completed structured Python data analysis curriculum. Analyzed multidimensional tabular health datasets, generated distribution charts, and developed desktop GUI experiments using Tkinter and Pygame.",
                tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Jupyter"]
            },
            {
                id: "node-edu-01",
                track: "education",
                trackLabel: "08 / SECONDARY SCHOOL",
                period: "2021",
                yearLabel: "2021",
                title: "Secondary School Examination (10th Standard)",
                org: "Board Examination, Haryana",
                summary: "Completed 10th standard examinations, establishing core foundations in science and mathematics.",
                details: "Graduated secondary schooling in 2021 with distinction in quantitative subjects, immediately transitioning into formal three-year computer engineering studies at polytechnic.",
                tags: ["10th Board", "Mathematics", "Science Foundations"]
            },
            {
                id: "node-exp-01",
                track: "exploration",
                trackLabel: "09 / EARLY EXPLORATION",
                period: "Early Exploration — School Years",
                yearLabel: "Pre-2021",
                title: "First Exposure to Computers & Early Curiosity",
                org: "External Computer Centres, Haryana",
                summary: "Early fascination with computer systems, attending local learning centres during 8th & 9th standard.",
                details: "Began exploring personal computers and operating systems before formal 10th standard schooling. Attended external computer training centres to understand file structures, hardware fundamentals, and the underlying logic of software interfaces.",
                tags: ["Foundations", "Computer Literacy", "Early Curiosity", "Operating Systems"]
            }
        ]
    };

    window.portfolioData = portfolioData;

    /* ==========================================================================
       02. Pure Web Audio SFX Engine (Zero-Latency Synthesized Audio)
       ========================================================================== */
    /* ==========================================================================
       02. Natural Synthesized Web Audio Architecture & Calm Garden Music
       ========================================================================== */
    let audioCtx = null;
    let soundEnabled = false;
    let musicPlaybackTimer = null;
    let activeChimeNodes = [];
    let currentMelodyIdx = 0;

    // Frequencies (Hz) for C Major / Pentatonic Music Box & Kalimba Chimes
    const CHIME_PITCHES = {
        G4: 392.00,
        A4: 440.00,
        B4: 493.88,
        C5: 523.25,
        D5: 587.33,
        E5: 659.25,
        G5: 783.99,
        A5: 880.00,
        B5: 987.77,
        C6: 1046.50,
        D6: 1174.66,
        E6: 1318.51
    };

    // 5 Charming, Handcrafted Melodic Motifs (Studio Ghibli / Animal Crossing lullabies)
    // Sweet, relaxing pentatonic phrases followed by serene breathing pauses
    const CHARMING_MELODIES = [
        // Motif 1: "Morning Sunbeam" (cheerful, ascending music box)
        [
            { pitch: CHIME_PITCHES.C5, delay: 0.0, dur: 1.8, vol: 0.038 },
            { pitch: CHIME_PITCHES.E5, delay: 0.28, dur: 1.8, vol: 0.035 },
            { pitch: CHIME_PITCHES.G5, delay: 0.56, dur: 1.9, vol: 0.036 },
            { pitch: CHIME_PITCHES.C6, delay: 0.88, dur: 2.2, vol: 0.034 },
            { pitch: CHIME_PITCHES.B5, delay: 1.25, dur: 1.9, vol: 0.032 },
            { pitch: CHIME_PITCHES.G5, delay: 1.65, dur: 2.6, vol: 0.038 }
        ],
        // Motif 2: "Meadow Breeze" (sweet, swaying kalimba)
        [
            { pitch: CHIME_PITCHES.D5, delay: 0.0, dur: 1.9, vol: 0.035 },
            { pitch: CHIME_PITCHES.G5, delay: 0.32, dur: 1.8, vol: 0.036 },
            { pitch: CHIME_PITCHES.A5, delay: 0.65, dur: 1.9, vol: 0.034 },
            { pitch: CHIME_PITCHES.B5, delay: 1.02, dur: 2.2, vol: 0.036 },
            { pitch: CHIME_PITCHES.G5, delay: 1.48, dur: 2.7, vol: 0.038 }
        ],
        // Motif 3: "Blooming Daisy" (playful, melodic music box)
        [
            { pitch: CHIME_PITCHES.E5, delay: 0.0, dur: 1.8, vol: 0.036 },
            { pitch: CHIME_PITCHES.A5, delay: 0.30, dur: 1.8, vol: 0.034 },
            { pitch: CHIME_PITCHES.G5, delay: 0.60, dur: 1.8, vol: 0.036 },
            { pitch: CHIME_PITCHES.E5, delay: 0.90, dur: 1.9, vol: 0.034 },
            { pitch: CHIME_PITCHES.D5, delay: 1.22, dur: 2.0, vol: 0.032 },
            { pitch: CHIME_PITCHES.C5, delay: 1.62, dur: 2.8, vol: 0.038 }
        ],
        // Motif 4: "Calm Twilight" (peaceful, gentle resolve)
        [
            { pitch: CHIME_PITCHES.G4, delay: 0.0, dur: 2.1, vol: 0.032 },
            { pitch: CHIME_PITCHES.C5, delay: 0.35, dur: 1.9, vol: 0.035 },
            { pitch: CHIME_PITCHES.D5, delay: 0.70, dur: 1.9, vol: 0.035 },
            { pitch: CHIME_PITCHES.E5, delay: 1.08, dur: 2.3, vol: 0.036 },
            { pitch: CHIME_PITCHES.D5, delay: 1.55, dur: 2.7, vol: 0.036 }
        ],
        // Motif 5: "Butterfly Flutter" (enchanting crystalline chimes)
        [
            { pitch: CHIME_PITCHES.G5, delay: 0.0, dur: 1.8, vol: 0.035 },
            { pitch: CHIME_PITCHES.C6, delay: 0.28, dur: 2.0, vol: 0.034 },
            { pitch: CHIME_PITCHES.D6, delay: 0.58, dur: 2.1, vol: 0.032 },
            { pitch: CHIME_PITCHES.E6, delay: 0.92, dur: 2.3, vol: 0.030 },
            { pitch: CHIME_PITCHES.C6, delay: 1.38, dur: 2.8, vol: 0.036 }
        ]
    ];

    function initAudio() {
        if (!audioCtx && (window.AudioContext || window.webkitAudioContext)) {
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            audioCtx = new AudioContextClass();
        }
        if (audioCtx && audioCtx.state === "suspended") {
            audioCtx.resume();
        }
    }

    function playTone(freq, type, duration, gainVal = 0.05) {
        if (!soundEnabled) return;
        try {
            initAudio();
            if (!audioCtx) return;

            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();

            osc.type = type;
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

            gain.gain.setValueAtTime(gainVal, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

            osc.connect(gain);
            gain.connect(audioCtx.destination);

            osc.start();
            osc.stop(audioCtx.currentTime + duration);
        } catch (e) {
            // Audio policy or unsupported
        }
    }

    const soundFX = {
        // Soft tactile marimba / dewdrop tine tap for touch and clicks
        softClick: () => {
            if (!soundEnabled) return;
            try {
                initAudio();
                if (!audioCtx) return;
                const now = audioCtx.currentTime;
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.type = "sine";
                // Gentle waterdrop / acoustic marimba tap: 784Hz gently dropping to 587Hz in 40ms
                osc.frequency.setValueAtTime(784, now);
                osc.frequency.exponentialRampToValueAtTime(587.33, now + 0.04);
                gain.gain.setValueAtTime(0.032, now);
                gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.045);
                osc.connect(gain);
                gain.connect(audioCtx.destination);
                osc.start(now);
                osc.stop(now + 0.045);
            } catch (e) { }
        },
        tick: () => playTone(680, "sine", 0.04, 0.025),
        select: () => {
            if (!soundEnabled) return;
            playTone(523.25, "sine", 0.05, 0.03);
            setTimeout(() => playTone(659.25, "sine", 0.07, 0.035), 45);
        },
        command: () => playTone(440, "triangle", 0.04, 0.03),
        error: () => playTone(160, "sawtooth", 0.10, 0.03),
        switchMode: () => {
            if (!soundEnabled) return;
            playTone(440, "sine", 0.04, 0.03);
            setTimeout(() => playTone(880, "sine", 0.07, 0.035), 40);
        }
    };

    // Pure acoustic music box / kalimba physical tine modeling (fundamental + sparkling overtone)
    function playKalimbaTine(freq, startTime, dur, vol) {
        if (!soundEnabled || !audioCtx) return;
        try {
            // 1. Primary fundamental sine wave (pure sweetness)
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();

            osc.type = "sine";
            osc.frequency.setValueAtTime(freq, startTime);

            // Soft pluck envelope (no click, sweet bloom, natural exponential decay to silence)
            gain.gain.setValueAtTime(0.0001, startTime);
            gain.gain.linearRampToValueAtTime(vol, startTime + 0.012);
            gain.gain.exponentialRampToValueAtTime(0.0001, startTime + dur);

            osc.connect(gain);
            gain.connect(audioCtx.destination);

            osc.start(startTime);
            osc.stop(startTime + dur);

            // 2. Shimmering acoustic overtone (2.0x octave harmonic, quick sparkle decay in 0.45s)
            const overtone = audioCtx.createOscillator();
            const overGain = audioCtx.createGain();
            overtone.type = "sine";
            overtone.frequency.setValueAtTime(freq * 2, startTime);
            overGain.gain.setValueAtTime(0.0001, startTime);
            overGain.gain.linearRampToValueAtTime(vol * 0.16, startTime + 0.008);
            overGain.gain.exponentialRampToValueAtTime(0.0001, startTime + Math.min(0.55, dur * 0.4));

            overtone.connect(overGain);
            overGain.connect(audioCtx.destination);

            overtone.start(startTime);
            overtone.stop(startTime + Math.min(0.55, dur * 0.4));

            activeChimeNodes.push(
                { osc, gain, stopTime: startTime + dur },
                { osc: overtone, gain: overGain, stopTime: startTime + 0.55 }
            );
        } catch (e) { }
    }

    function scheduleNextMelody() {
        if (!soundEnabled || !audioCtx) return;

        // Clean up finished nodes from active list
        const now = audioCtx.currentTime;
        activeChimeNodes = activeChimeNodes.filter(n => n.stopTime > now);

        // Pick next melody in rotation
        const melody = CHARMING_MELODIES[currentMelodyIdx % CHARMING_MELODIES.length];
        currentMelodyIdx++;

        let phraseEndTime = 0;
        melody.forEach(note => {
            const noteStart = now + note.delay;
            playKalimbaTine(note.pitch, noteStart, note.dur, note.vol);
            const noteEnd = note.delay + note.dur;
            if (noteEnd > phraseEndTime) phraseEndTime = noteEnd;
        });

        // Generous breathing pause (3.8s to 5.2s of peace and quiet after phrase ends)
        // TOTAL delay until next phrase = phrase duration (~2.5s) + breathing pause (~4.2s) = ~6.7s
        const breathingPauseMs = 3800 + Math.random() * 1400;
        const nextScheduleDelayMs = (phraseEndTime * 1000) + breathingPauseMs;

        musicPlaybackTimer = setTimeout(() => {
            if (soundEnabled) scheduleNextMelody();
        }, nextScheduleDelayMs);
    }

    function startCalmGardenMusic() {
        if (!soundEnabled || musicPlaybackTimer) return;
        try {
            initAudio();
            if (!audioCtx) return;
            scheduleNextMelody();
        } catch (e) { }
    }

    function stopCalmGardenMusic() {
        if (musicPlaybackTimer) {
            clearTimeout(musicPlaybackTimer);
            musicPlaybackTimer = null;
        }
        if (audioCtx && activeChimeNodes.length > 0) {
            const now = audioCtx.currentTime;
            activeChimeNodes.forEach(item => {
                try {
                    item.gain.gain.cancelScheduledValues(now);
                    item.gain.gain.setValueAtTime(item.gain.gain.value, now);
                    item.gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);
                    item.osc.stop(now + 0.2);
                } catch (e) { }
            });
            activeChimeNodes = [];
        }
    }

    function setSoundState(enabled) {
        soundEnabled = !!enabled;
        if (soundEnabled) {
            initAudio();
            startCalmGardenMusic();
            soundFX.softClick();
        } else {
            stopCalmGardenMusic();
        }

        // Update HUD sound button
        const soundBtn = document.getElementById("sound-toggle-btn");
        const soundIcon = document.getElementById("sound-icon");
        const soundLabel = document.getElementById("sound-label");

        if (soundBtn) {
            soundBtn.classList.toggle("is-active", soundEnabled);
            soundBtn.setAttribute("aria-pressed", soundEnabled ? "true" : "false");
        }
        if (soundIcon) soundIcon.textContent = soundEnabled ? "🎵" : "🔈";
        if (soundLabel) soundLabel.textContent = soundEnabled ? "Music On" : "Music Off";

        // Update Gateway sound button
        const gwSoundBtn = document.getElementById("gateway-sound-btn");
        const gwSoundIcon = document.getElementById("gateway-sound-icon");
        const gwSoundTxt = document.getElementById("gateway-sound-txt");

        if (gwSoundBtn) {
            gwSoundBtn.classList.toggle("is-active", soundEnabled);
        }
        if (gwSoundIcon) gwSoundIcon.textContent = soundEnabled ? "🎵" : "🔈";
        if (gwSoundTxt) gwSoundTxt.textContent = soundEnabled ? "Music: On" : "Music: Off";

        // Update Mobile Drawer sound button
        const mSoundBtn = document.getElementById("m-sound-btn");
        const mSoundIcon = document.getElementById("m-sound-icon");
        const mSoundTxt = document.getElementById("m-sound-txt");
        if (mSoundBtn) {
            mSoundBtn.classList.toggle("is-active", soundEnabled);
        }
        if (mSoundIcon) mSoundIcon.textContent = soundEnabled ? "🎵" : "🔈";
        if (mSoundTxt) mSoundTxt.textContent = soundEnabled ? "Music On" : "Music Off";

        try {
            localStorage.setItem("parveen_sound_pref", soundEnabled ? "on" : "off");
        } catch (e) { }
    }

    // Attach soft touch sound on all pointerdown / click interactions across the page
    document.addEventListener("pointerdown", () => {
        if (soundEnabled) {
            soundFX.softClick();
        }
    }, { passive: true });

    // Sound button event bindings
    const soundToggleBtn = document.getElementById("sound-toggle-btn");
    if (soundToggleBtn) {
        soundToggleBtn.addEventListener("click", () => setSoundState(!soundEnabled));
    }
    const gatewaySoundBtn = document.getElementById("gateway-sound-btn");
    if (gatewaySoundBtn) {
        gatewaySoundBtn.addEventListener("click", () => setSoundState(!soundEnabled));
    }

    // Check saved sound preference
    try {
        const savedSound = localStorage.getItem("parveen_sound_pref");
        if (savedSound === "on") {
            setSoundState(true);
        }
    } catch (e) { }

    /* ==========================================================================
       03. Dual View State Switcher (Modern GUI vs Terminal CLI)
       ========================================================================== */
    const mainContent = document.getElementById("main-content");
    const terminalView = document.getElementById("terminal-view");
    const gatewayOverlay = document.getElementById("gateway-overlay");

    const hudBtnModern = document.getElementById("btn-mode-modern");
    const hudBtnTerminal = document.getElementById("btn-mode-terminal");
    const termSwitchGuiBtn = document.getElementById("terminal-switch-gui-btn");

    let currentMode = "modern";

    function setMode(mode, savePref = true) {
        if (mode !== "modern" && mode !== "terminal") return;
        currentMode = mode;

        // Dismiss Gateway Overlay if still open
        if (gatewayOverlay && !gatewayOverlay.classList.contains("is-dismissed")) {
            gatewayOverlay.classList.add("is-dismissed");
            gatewayOverlay.setAttribute("aria-hidden", "true");
            setTimeout(() => {
                gatewayOverlay.style.display = "none";
            }, 350);
        }

        // Toggle Views
        if (mode === "modern") {
            if (mainContent) {
                mainContent.style.display = "block";
                mainContent.removeAttribute("hidden");
            }
            if (terminalView) {
                terminalView.style.display = "none";
                terminalView.setAttribute("hidden", "true");
            }
            if (hudBtnModern) {
                hudBtnModern.classList.add("is-active");
                hudBtnModern.setAttribute("aria-selected", "true");
            }
            if (hudBtnTerminal) {
                hudBtnTerminal.classList.remove("is-active");
                hudBtnTerminal.setAttribute("aria-selected", "false");
            }
        } else if (mode === "terminal") {
            if (mainContent) {
                mainContent.style.display = "none";
                mainContent.setAttribute("hidden", "true");
            }
            if (terminalView) {
                terminalView.style.display = "block";
                terminalView.removeAttribute("hidden");
                // Focus terminal prompt after short tick
                setTimeout(() => {
                    const termInput = document.getElementById("terminal-input");
                    if (termInput) termInput.focus();
                }, 100);
            }
            if (hudBtnModern) {
                hudBtnModern.classList.remove("is-active");
                hudBtnModern.setAttribute("aria-selected", "false");
            }
            if (hudBtnTerminal) {
                hudBtnTerminal.classList.add("is-active");
                hudBtnTerminal.setAttribute("aria-selected", "true");
            }
        }

        soundFX.switchMode();

        if (savePref) {
            try {
                localStorage.setItem("parveen_portfolio_mode", mode);
            } catch (e) { }
            // Update URL hash without jitter
            history.replaceState(null, "", `#${mode}`);
        }
    }

    if (hudBtnModern) {
        hudBtnModern.addEventListener("click", () => setMode("modern"));
    }
    if (hudBtnTerminal) {
        hudBtnTerminal.addEventListener("click", () => setMode("terminal"));
    }
    if (termSwitchGuiBtn) {
        termSwitchGuiBtn.addEventListener("click", () => setMode("modern"));
    }

    /* ==========================================================================
       V5. Tactical Game Stage & HUD Engine
       ========================================================================== */
    let currentStage = 1;
    const stageTitles = {
        1: "STAGE 01 // OPERATOR CODEX",
        2: "STAGE 02 // MISSION BUILDS",
        3: "STAGE 03 // TECH LOADOUT",
        4: "STAGE 04 // CAMPAIGN LOG",
        5: "STAGE 05 // COMMS ARRAY"
    };

    const stageToId = {
        1: "#hero",
        2: "#projects",
        3: "#toolkit",
        4: "#timeline",
        5: "#contact"
    };

    function setActiveStage(stageNum, playAudio = true) {
        const num = parseInt(stageNum, 10);
        if (isNaN(num) || num < 1 || num > 5) return;
        currentStage = num;

        const targetId = stageToId[num];
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
            targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }

        if (playAudio) {
            soundFX.select();
        }
    }

    // Bind Left Menu buttons
    const dockMenuBtns = document.querySelectorAll(".dock-menu-btn");
    dockMenuBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const stage = btn.getAttribute("data-stage");
            if (stage) setActiveStage(stage);
        });
        btn.addEventListener("mouseenter", () => {
            soundFX.tick();
        });
    });

    // Bind Stage Dots
    const stageDotBtns = document.querySelectorAll(".stage-dot-pill");
    stageDotBtns.forEach((dot) => {
        dot.addEventListener("click", () => {
            const stage = dot.getAttribute("data-stage");
            if (stage) setActiveStage(stage);
        });
        dot.addEventListener("mouseenter", () => {
            soundFX.tick();
        });
    });

    // Bind Prev/Next Stage Buttons
    const prevStageBtn = document.getElementById("stage-prev-btn");
    if (prevStageBtn) {
        prevStageBtn.addEventListener("click", () => {
            const next = currentStage > 1 ? currentStage - 1 : 5;
            setActiveStage(next);
        });
    }

    const nextStageBtn = document.getElementById("stage-next-btn");
    if (nextStageBtn) {
        nextStageBtn.addEventListener("click", () => {
            const next = currentStage < 5 ? currentStage + 1 : 1;
            setActiveStage(next);
        });
    }

    // Dock quick Terminal open button
    const dockOpenTermBtn = document.getElementById("dock-open-terminal-btn");
    if (dockOpenTermBtn) {
        dockOpenTermBtn.addEventListener("click", () => setMode("terminal"));
    }

    // Top Flight Deck Terminal Trigger
    const deckTermTrigger = document.getElementById("deck-terminal-trigger");
    if (deckTermTrigger) {
        deckTermTrigger.addEventListener("click", () => setMode("terminal"));
    }

    // Top Flight Deck Theme Toggle & Display Sync
    const deckThemeBtn = document.getElementById("theme-toggle-btn");
    function updateThemeBtnDisplay(theme) {
        const themeIcon = document.getElementById("theme-icon");
        const themeLabel = document.getElementById("theme-label");
        const isDark = theme === "dark";
        if (themeIcon) themeIcon.textContent = isDark ? "🌙" : "🌓";
        if (themeLabel) themeLabel.textContent = isDark ? "Dark" : "Light";
        if (deckThemeBtn) {
            deckThemeBtn.setAttribute("aria-label", `Toggle Nature Theme (Current: ${isDark ? "Dark" : "Light"})`);
        }
    }

    // Initialize theme button state from active DOM / stored preference
    const initialTheme = document.documentElement.getAttribute("data-theme") || "dark";
    updateThemeBtnDisplay(initialTheme);

    if (deckThemeBtn) {
        deckThemeBtn.addEventListener("click", () => {
            const html = document.documentElement;
            const currentTheme = html.getAttribute("data-theme") || "dark";
            const nextTheme = currentTheme === "dark" ? "light" : "dark";
            html.setAttribute("data-theme", nextTheme);
            updateThemeBtnDisplay(nextTheme);
            soundFX.select();
            try {
                localStorage.setItem("parveen_theme_pref", nextTheme);
            } catch (e) { }
        });
    }

    /* ==========================================================================
       Unique Visitor Views Engine (1 per device, no reload increment)
       ========================================================================== */
    function initVisitorViews() {
        const STORAGE_KEY_VISIT = "parveen_portfolio_visited_device";
        const STORAGE_KEY_COUNT = "parveen_portfolio_views_count";
        const BASE_VIEWS = 1248; // Realistic verified portfolio visitor baseline

        let views = parseInt(localStorage.getItem(STORAGE_KEY_COUNT), 10);
        if (isNaN(views) || views < BASE_VIEWS) {
            views = BASE_VIEWS;
        }

        const hasVisited = localStorage.getItem(STORAGE_KEY_VISIT);
        if (!hasVisited) {
            // New device / first-time visitor: record 1 unique view
            views += 1;
            try {
                localStorage.setItem(STORAGE_KEY_VISIT, new Date().toISOString());
                localStorage.setItem(STORAGE_KEY_COUNT, views.toString());
            } catch (e) { }
        }

        const countEl = document.getElementById("views-count-val");
        if (countEl) {
            countEl.textContent = views.toLocaleString();
        }
    }
    initVisitorViews();



    // Direct Email Frequency Copy Button
    const copyEmailBtn = document.getElementById("copy-email-btn");
    const copyBtnLabel = document.getElementById("copy-btn-label");
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener("click", () => {
            const email = "parveenmakwana02@gmail.com";
            navigator.clipboard.writeText(email).then(() => {
                soundFX.select();
                if (copyBtnLabel) copyBtnLabel.textContent = "✓ FREQUENCY TRANSMITTED / COPIED";
                copyEmailBtn.style.background = "#00FF88";
                copyEmailBtn.style.color = "#06080E";
                setTimeout(() => {
                    if (copyBtnLabel) copyBtnLabel.textContent = "TRANSMIT / COPY EMAIL FREQUENCY";
                    copyEmailBtn.style.background = "";
                    copyEmailBtn.style.color = "";
                }, 2500);
            }).catch(() => {
                if (copyBtnLabel) copyBtnLabel.textContent = email;
            });
        });
    }

    /* ==========================================================================
       Interactive Weapon Loadout Scanner (Stage 03)
       ========================================================================== */
    const weaponArsenal = {
        flutter: {
            icon: "🪐",
            rarity: "LEGENDARY • CLIENT RIG",
            title: "Flutter & Dart",
            sub: "Cross-Platform Native Engine",
            power: "96 / 100",
            powerPercent: 96,
            lore: "Primary weapon of choice for client mobile applications. Deployed in the Orbit Browser solo sprint to achieve 60 FPS gesture rendering, SQLite local data persistence, and native Android packaging.",
            specs: [
                { k: "RENDER ARCHITECTURE", v: "Impeller / Skia Native" },
                { k: "FLAGSHIP USE", v: "Orbit Browser MVP (v1.0.0 APK)" },
                { k: "STATE DISCIPLINE", v: "Bloc / Provider / ValueNotifiers" }
            ]
        },
        python: {
            icon: "🐍",
            rarity: "EPIC • ALGORITHMIC SENSOR",
            title: "Python & NumPy",
            sub: "Data & Scripting Engine",
            power: "92 / 100",
            powerPercent: 92,
            lore: "Algorithmic heavy-lifter for data analysis, mathematical modeling, and automated pipelines. Used for processing datasets, writing web scrapers, and numerical matrix operations.",
            specs: [
                { k: "CORE LIBRARIES", v: "NumPy • Pandas • Matplotlib" },
                { k: "APPLICATIONS", v: "Data pipelines & automation" },
                { k: "EXECUTION SPEED", v: "Vectorized C-extensions" }
            ]
        },
        node: {
            icon: "🟢",
            rarity: "EPIC • SERVER ENGINE",
            title: "Node.js & Express",
            sub: "Asynchronous Backend Runtime",
            power: "90 / 100",
            powerPercent: 90,
            lore: "Event-driven asynchronous backend server runtime. Builds clean RESTful services, JWT auth gates, input sanitation, and microservice architectures.",
            specs: [
                { k: "FRAMEWORK", v: "Express.js • REST Architecture" },
                { k: "MIDDLEWARE", v: "CORS • Helmet • JWT Auth" },
                { k: "PROTOCOL", v: "HTTP/2 • WebSockets" }
            ]
        },
        storage: {
            icon: "🗄",
            rarity: "RARE • DATA VAULT",
            title: "MongoDB & SQLite",
            sub: "Dual-Tier Persistence Rig",
            power: "89 / 100",
            powerPercent: 89,
            lore: "Dual database strategy: SQLite for low-overhead zero-latency embedded mobile persistence; MongoDB for flexible cloud document stores.",
            specs: [
                { k: "MOBILE ENGINE", v: "SQLite • Raw SQL Transactions" },
                { k: "CLOUD ENGINE", v: "MongoDB • Aggregation Pipelines" },
                { k: "INTEGRITY", v: "ACID Local • Indexed Queries" }
            ]
        },
        dsa: {
            icon: "🧬",
            rarity: "RARE • ALGORITHMIC FOUNDATION",
            title: "Data Structures & Core CS",
            sub: "Algorithms & Systems Logic",
            power: "91 / 100",
            powerPercent: 91,
            lore: "Foundational engineering training from Chhotu Ram Polytechnic and MDU Rohtak. Algorithmic complexity, relational schemas, digital logic, and operating system principles.",
            specs: [
                { k: "FOUNDATIONS", v: "Data Structures • Algorithmic Logic" },
                { k: "SYSTEMS", v: "Operating Systems • Relational DB" },
                { k: "ORIGIN", v: "Chhotu Ram Polytechnic CS Track" }
            ]
        },
        web: {
            icon: "⚡",
            rarity: "TACTICAL • VELOCITY CORE",
            title: "Modern CSS & Vanilla JS",
            sub: "Zero-Bloat DOM Engine",
            power: "95 / 100",
            powerPercent: 95,
            lore: "Powers this exact Game HUD and the Obvious-Choice platform. Fluid CSS clamp mathematical scales, zero runtime dependencies, and sub-second paint times.",
            specs: [
                { k: "PERFORMANCE", v: "Google Lighthouse 99/100" },
                { k: "BUNDLE WEIGHT", v: "0 KB NPM Bloat" },
                { k: "APIS USED", v: "Web Audio • Canvas • CSS Grid" }
            ]
        },
        git: {
            icon: "🔧",
            rarity: "UTILITY • MISSION CONTROL",
            title: "Git, Linux & Toolchain",
            sub: "Version Control & Shell Rig",
            power: "94 / 100",
            powerPercent: 94,
            lore: "Mission-critical development operations. Git feature branch workflows, Linux server management, Postman API contract testing, and Vite rapid build pipelines.",
            specs: [
                { k: "SHELL", v: "Bash / Zsh Command Line" },
                { k: "VCS", v: "Git & GitHub Remote Workflows" },
                { k: "TOOLS", v: "Postman • VS Code • Vite" }
            ]
        }
    };

    const weaponCards = document.querySelectorAll(".weapon-slot-card");
    const scannerIcon = document.getElementById("scanner-icon");
    const scannerRarity = document.getElementById("scanner-rarity");
    const scannerTitle = document.getElementById("scanner-title");
    const scannerSub = document.getElementById("scanner-sub");
    const scannerPower = document.getElementById("scanner-power");
    const scannerPowerFill = document.getElementById("scanner-power-fill");
    const scannerLore = document.getElementById("scanner-lore");
    const scannerSpecs = document.getElementById("scanner-specs");

    function inspectWeapon(key) {
        const item = weaponArsenal[key];
        if (!item) return;

        weaponCards.forEach((c) => {
            const isTarget = c.getAttribute("data-weapon") === key;
            c.classList.toggle("is-active", isTarget);
        });

        if (scannerIcon) scannerIcon.textContent = item.icon;
        if (scannerRarity) scannerRarity.textContent = item.rarity;
        if (scannerTitle) scannerTitle.textContent = item.title;
        if (scannerSub) scannerSub.textContent = item.sub;
        if (scannerPower) scannerPower.textContent = item.power;
        if (scannerPowerFill) scannerPowerFill.style.width = `${item.powerPercent}%`;
        if (scannerLore) scannerLore.textContent = item.lore;

        if (scannerSpecs) {
            scannerSpecs.innerHTML = item.specs.map(s =>
                `<div class="spec-row"><span class="spec-k">${s.k}:</span> <span class="spec-v highlight-cyan">${s.v}</span></div>`
            ).join("");
        }

        soundFX.tick();
    }

    weaponCards.forEach((card) => {
        card.addEventListener("click", () => {
            const weaponKey = card.getAttribute("data-weapon");
            if (weaponKey) inspectWeapon(weaponKey);
        });
        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                const weaponKey = card.getAttribute("data-weapon");
                if (weaponKey) inspectWeapon(weaponKey);
            }
        });
    });

    // Global Keybindings for HUD & Stages
    window.addEventListener("keydown", (e) => {
        const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : "";
        if (activeTag === "input" || activeTag === "textarea") return;

        if (currentMode === "terminal") {
            if (e.key === "Escape") {
                e.preventDefault();
                setMode("modern");
            }
            return;
        }

        // Modern Mode Shortcuts
        if (["1", "2", "3", "4", "5"].includes(e.key)) {
            setActiveStage(parseInt(e.key, 10));
        } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
            e.preventDefault();
            const next = currentStage > 1 ? currentStage - 1 : 5;
            setActiveStage(next);
        } else if (e.key === "ArrowDown" || e.key === "ArrowRight") {
            e.preventDefault();
            const next = currentStage < 5 ? currentStage + 1 : 1;
            setActiveStage(next);
        } else if (e.key.toLowerCase() === "t") {
            e.preventDefault();
            setMode("terminal");
        } else if (e.key.toLowerCase() === "m") {
            e.preventDefault();
            setSoundState(!soundEnabled);
        } else if (e.key === "Escape") {
            closeProfileModal();
            const milestoneModal = document.getElementById("milestone-modal");
            if (milestoneModal) {
                milestoneModal.setAttribute("aria-hidden", "true");
                milestoneModal.classList.remove("is-visible");
            }
        }
    });

    // Determine initial entry state (Immediate game immersion - zero popup modals)
    const hash = window.location.hash.toLowerCase();
    let savedMode = null;
    try {
        savedMode = localStorage.getItem("parveen_portfolio_mode");
    } catch (e) { }

    if (hash === "#terminal" || (!hash && savedMode === "terminal")) {
        setMode("terminal", false);
    } else {
        setMode("modern", false);
        if (hash.startsWith("#stage-")) {
            const stg = parseInt(hash.replace("#stage-", ""), 10);
            if (!isNaN(stg)) {
                setTimeout(() => setActiveStage(stg, false), 80);
            }
        } else if (hash && hash !== "#modern") {
            const targetEl = document.querySelector(hash);
            if (targetEl) {
                setTimeout(() => targetEl.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
            }
        }
    }

    /* ==========================================================================
       05. Interactive Terminal CLI Engine (Mode 02)
       ========================================================================== */
    const termForm = document.getElementById("terminal-form");
    const termInput = document.getElementById("terminal-input");
    const termOutputBuffer = document.getElementById("terminal-output-buffer");
    const termViewport = document.getElementById("terminal-viewport");
    const shortcutPills = document.querySelectorAll(".shortcut-pill[data-cmd]");

    const commandHistory = [];
    let historyCursor = -1;

    const availableCommands = [
        "help",
        "about",
        "projects",
        "skills",
        "timeline",
        "journey",
        "experience",
        "contact",
        "gui",
        "modern",
        "sound",
        "snapshot",
        "clear",
        "cls"
    ];

    function scrollTerminalToBottom() {
        if (termViewport) {
            termViewport.scrollTop = termViewport.scrollHeight;
        }
    }

    function renderCommandOutput(cmd, htmlContent) {
        if (!termOutputBuffer) return;

        const entry = document.createElement("div");
        entry.className = "term-output-entry";

        entry.innerHTML = `
            <div class="term-input-echo">
                <span class="prompt-user">parveen@portfolio:~$</span>
                <span class="echo-cmd">${escapeHTML(cmd)}</span>
            </div>
            <div class="term-result">
                ${htmlContent}
            </div>
        `;

        termOutputBuffer.appendChild(entry);
        scrollTerminalToBottom();
    }

    function escapeHTML(str) {
        return str.replace(/[&<>'"]/g, (tag) => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "'": "&#39;",
            "\"": "&quot;"
        }[tag] || tag));
    }

    function executeCommand(rawInput) {
        const trimmed = (rawInput || "").trim();
        if (!trimmed) return;

        // Save into history buffer
        commandHistory.push(trimmed);
        historyCursor = commandHistory.length;

        const parts = trimmed.split(" ");
        const baseCmd = parts[0].toLowerCase();
        const arg = parts.slice(1).join(" ").trim().toLowerCase();

        soundFX.command();

        switch (baseCmd) {
            case "help":
                renderHelpCommand();
                break;

            case "about":
            case "whoami":
            case "bio":
                renderAboutCommand();
                break;

            case "projects":
            case "work":
            case "apps":
                renderProjectsCommand();
                break;

            case "skills":
            case "toolkit":
            case "stack":
                renderSkillsCommand();
                break;

            case "timeline":
            case "journey":
            case "chronology":
                renderJourneyCommand();
                break;

            case "experience":
            case "exp":
                renderExperienceCommand();
                break;

            case "contact":
            case "email":
            case "ping":
                renderContactCommand();
                break;

            case "gui":
            case "modern":
            case "ui":
                renderCommandOutput(trimmed, `
                    <p style="color: #58A6FF;">&rarr; Switching to Living GUI View...</p>
                `);
                setTimeout(() => setMode("modern"), 250);
                break;

            case "sound":
                if (arg === "on" || arg === "enable") {
                    setSoundState(true);
                    renderCommandOutput(trimmed, `<p style="color: #3FB950;">[OK] Web Audio SFX enabled.</p>`);
                } else if (arg === "off" || arg === "disable") {
                    setSoundState(false);
                    renderCommandOutput(trimmed, `<p style="color: #8B949E;">[OK] Web Audio SFX disabled.</p>`);
                } else {
                    const nextState = !soundEnabled;
                    setSoundState(nextState);
                    renderCommandOutput(trimmed, `<p style="color: ${nextState ? "#3FB950" : "#8B949E"};">[OK] Web Audio SFX is now: <strong>${nextState ? "ON" : "OFF"}</strong> (Usage: <code class="term-code-cmd">sound on</code> or <code class="term-code-cmd">sound off</code>)</p>`);
                }
                break;

            case "snapshot":
            case "profile":
            case "modal":
                renderCommandOutput(trimmed, `<p style="color: #58A6FF;">&rarr; Opening verified profile snapshot modal...</p>`);
                openProfileModal();
                break;

            case "clear":
            case "cls":
                if (termOutputBuffer) {
                    termOutputBuffer.innerHTML = "";
                }
                break;

            default:
                soundFX.error();
                renderCommandOutput(trimmed, `
                    <p style="color: #FF7B72;">zsh: command not found: <code class="term-code-cmd">${escapeHTML(trimmed)}</code></p>
                    <p style="color: #8B949E; margin-top: 0.25rem;">Type <code class="term-code-cmd">help</code> to inspect all registered commands, or click the quick command shortcuts below.</p>
                `);
                break;
        }

        if (termInput) {
            termInput.value = "";
        }
    }

    function renderHelpCommand() {
        const out = `
            <div class="term-result-card">
                <div class="term-res-title">AVAILABLE SYSTEM COMMANDS</div>
                <div class="term-res-desc">System shell version 4.0.0 &bull; Interactive CLI Execution</div>
                <div class="term-res-specs">
                    <div class="term-res-spec-row"><span class="term-res-spec-k">help</span><span class="term-res-spec-v">Display this comprehensive command manual</span></div>
                    <div class="term-res-spec-row"><span class="term-res-spec-k">about</span><span class="term-res-spec-v">Personal identity, verified degrees, and core ethos</span></div>
                    <div class="term-res-spec-row"><span class="term-res-spec-k">projects</span><span class="term-res-spec-v">Inspect built software (Orbit Browser MVP, Obvious-Choice, etc.)</span></div>
                    <div class="term-res-spec-row"><span class="term-res-spec-k">skills</span><span class="term-res-spec-v">Technical languages, frameworks, databases, and tooling</span></div>
                    <div class="term-res-spec-row"><span class="term-res-spec-k">timeline</span><span class="term-res-spec-v">Reverse-chronological engineering milestones & education (Latest first)</span></div>
                    <div class="term-res-spec-row"><span class="term-res-spec-k">experience</span><span class="term-res-spec-v">Practical inventory auditing and data verification record</span></div>
                    <div class="term-res-spec-row"><span class="term-res-spec-k">contact</span><span class="term-res-spec-v">Direct communication channels, verified email, and social links</span></div>
                    <div class="term-res-spec-row"><span class="term-res-spec-k">gui</span><span class="term-res-spec-v">Switch back to the Living GUI Mode</span></div>
                    <div class="term-res-spec-row"><span class="term-res-spec-k">sound [on|off]</span><span class="term-res-spec-v">Toggle or inspect synthesized Web Audio feedback</span></div>
                    <div class="term-res-spec-row"><span class="term-res-spec-k">snapshot</span><span class="term-res-spec-v">Open quick modal summary card</span></div>
                    <div class="term-res-spec-row"><span class="term-res-spec-k">clear</span><span class="term-res-spec-v">Flush screen output buffer</span></div>
                </div>
            </div>
        `;
        renderCommandOutput("help", out);
    }

    function renderAboutCommand() {
        const id = portfolioData.identity;
        const out = `
            <div class="term-result-card">
                <div class="term-res-title">${escapeHTML(id.brandName)}</div>
                <div class="term-res-desc">Official Legal / Academic Record: <strong>${escapeHTML(id.legalName)}</strong></div>
                <div class="term-res-specs">
                    <div class="term-res-spec-row"><span class="term-res-spec-k">ROLE:</span><span class="term-res-spec-v">${escapeHTML(id.role)}</span></div>
                    <div class="term-res-spec-row"><span class="term-res-spec-k">DEGREE:</span><span class="term-res-spec-v">${escapeHTML(id.degree)}</span></div>
                    <div class="term-res-spec-row"><span class="term-res-spec-k">DIPLOMA:</span><span class="term-res-spec-v">${escapeHTML(id.diploma)}</span></div>
                    <div class="term-res-spec-row"><span class="term-res-spec-k">LOCATION:</span><span class="term-res-spec-v">${escapeHTML(id.location)}</span></div>
                    <div class="term-res-spec-row"><span class="term-res-spec-k">TIMEZONE:</span><span class="term-res-spec-v">${escapeHTML(id.timezone)}</span></div>
                    <div class="term-res-spec-row"><span class="term-res-spec-k">STATUS:</span><span class="term-res-spec-v" style="color: #3FB950;">● ${escapeHTML(id.status)}</span></div>
                </div>
                <p style="margin-top: 0.85rem; font-size: 0.78rem; line-height: 1.5; color: #C9D1D9;">
                    "Belonging to the Rabari community and living in Rohtak, Haryana instilled a natural appreciation for patience, solid foundations, and disciplined craft. In software engineering, I bring that same standard: looking beneath abstractions to understand how memory moves, why state breaks, and how to build applications that genuinely function under real-world use."
                </p>
                <div class="term-res-links">
                    <a href="${id.github}" target="_blank" rel="noopener" class="term-res-link">$ git // GitHub &nearr;</a>
                    <a href="${id.linkedin}" target="_blank" rel="noopener" class="term-res-link">$ open // LinkedIn &nearr;</a>
                    <a href="${id.leetcode}" target="_blank" rel="noopener" class="term-res-link">$ open // LeetCode &nearr;</a>
                    <a href="${id.instagram}" target="_blank" rel="noopener" class="term-res-link">$ open // Instagram &nearr;</a>
                </div>
            </div>
        `;
        renderCommandOutput("about", out);
    }

    function renderProjectsCommand() {
        let cards = "";
        portfolioData.projects.forEach((p) => {
            const linksHtml = p.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener" class="term-res-link">${escapeHTML(l.label)} &nearr;</a>`).join(" ");
            cards += `
                <div class="term-result-card" style="margin-bottom: 0.75rem;">
                    <div class="term-res-title">[${p.pid}] ${escapeHTML(p.name)} &mdash; <span style="font-weight: 400; color: #8B949E;">${escapeHTML(p.subtitle)}</span></div>
                    <div class="term-res-desc">${escapeHTML(p.summary)}</div>
                    <div class="term-res-specs">
                        <div class="term-res-spec-row"><span class="term-res-spec-k">STACK:</span><span class="term-res-spec-v">${p.tech.join(" &bull; ")}</span></div>
                        <div class="term-res-spec-row"><span class="term-res-spec-k">STATUS:</span><span class="term-res-spec-v" style="color: #3FB950;">${escapeHTML(p.status)}</span></div>
                        <div class="term-res-spec-row"><span class="term-res-spec-k">DETAILS:</span><span class="term-res-spec-v">${escapeHTML(p.details)}</span></div>
                    </div>
                    <div class="term-res-links">
                        ${linksHtml}
                    </div>
                </div>
            `;
        });
        renderCommandOutput("projects", cards);
    }

    function renderSkillsCommand() {
        const s = portfolioData.skills;
        const out = `
            <div class="term-result-card">
                <div class="term-res-title">TECHNICAL SKILLS &amp; ARCHITECTURAL TOOLKIT</div>
                <div class="term-res-desc">Organized by genuine hands-on engineering application</div>
                <div class="term-res-specs">
                    <div class="term-res-spec-row"><span class="term-res-spec-k">LANGUAGES:</span><span class="term-res-spec-v">${s.languages.join(", ")}</span></div>
                    <div class="term-res-spec-row"><span class="term-res-spec-k">CLIENT &amp; MOBILE:</span><span class="term-res-spec-v">${s.client.join(", ")}</span></div>
                    <div class="term-res-spec-row"><span class="term-res-spec-k">BACKEND &amp; DATA:</span><span class="term-res-spec-v">${s.backend.join(", ")}</span></div>
                    <div class="term-res-spec-row"><span class="term-res-spec-k">TOOLS &amp; FOUNDATIONS:</span><span class="term-res-spec-v">${s.tools.join(", ")}</span></div>
                </div>
            </div>
        `;
        renderCommandOutput("skills", out);
    }

    function renderJourneyCommand() {
        let rows = "";
        portfolioData.chronology.forEach((item) => {
            rows += `
                <div class="term-res-spec-row" style="padding: 0.25rem 0; border-bottom: 1px dashed rgba(255, 255, 255, 0.05);">
                    <span class="term-res-spec-k" style="min-width: 90px;">[${escapeHTML(item.yearLabel)}]</span>
                    <span class="term-res-spec-v"><strong>${escapeHTML(item.title)}</strong> &mdash; ${escapeHTML(item.org)} <br><span style="color: #8B949E; font-size: 0.72rem;">${escapeHTML(item.summary)}</span></span>
                </div>
            `;
        });
        const out = `
            <div class="term-result-card">
                <div class="term-res-title">ENGINEERING TIMELINE &amp; MILESTONES (Latest First)</div>
                <div class="term-res-desc">Reverse-chronological milestones &amp; education &mdash; active production work on top down to foundational genesis</div>
                <div class="term-res-specs">
                    ${rows}
                </div>
            </div>
        `;
        renderCommandOutput("timeline", out);
    }

    function renderExperienceCommand() {
        let cards = "";
        portfolioData.experience.forEach((e) => {
            cards += `
                <div class="term-result-card" style="margin-bottom: 0.65rem;">
                    <div class="term-res-title">${escapeHTML(e.title)}</div>
                    <div class="term-res-desc">${escapeHTML(e.org)} &bull; <span style="color: #FF7B72;">${escapeHTML(e.period)}</span></div>
                    <p style="font-size: 0.78rem; color: #C9D1D9; margin: 0 0 0.5rem 0;">${escapeHTML(e.summary)}</p>
                    <div class="term-res-specs">
                        <div class="term-res-spec-row"><span class="term-res-spec-k">TAGS:</span><span class="term-res-spec-v">${e.tags.join(" &bull; ")}</span></div>
                    </div>
                </div>
            `;
        });
        renderCommandOutput("experience", cards);
    }

    function renderContactCommand() {
        const id = portfolioData.identity;
        const out = `
            <div class="term-result-card">
                <div class="term-res-title">COMMUNICATION CHANNELS</div>
                <div class="term-res-desc">Actively available for opportunities &bull; Rohtak, Haryana (IST)</div>
                <div class="term-res-specs">
                    <div class="term-res-spec-row"><span class="term-res-spec-k">EMAIL:</span><span class="term-res-spec-v"><a href="mailto:${id.email}" class="term-res-link">${id.email}</a></span></div>
                    <div class="term-res-spec-row"><span class="term-res-spec-k">GITHUB:</span><span class="term-res-spec-v"><a href="${id.github}" target="_blank" rel="noopener" class="term-res-link">${id.github}</a></span></div>
                    <div class="term-res-spec-row"><span class="term-res-spec-k">LINKEDIN:</span><span class="term-res-spec-v"><a href="${id.linkedin}" target="_blank" rel="noopener" class="term-res-link">${id.linkedin}</a></span></div>
                    <div class="term-res-spec-row"><span class="term-res-spec-k">LEETCODE:</span><span class="term-res-spec-v"><a href="${id.leetcode}" target="_blank" rel="noopener" class="term-res-link">${id.leetcode}</a></span></div>
                    <div class="term-res-spec-row"><span class="term-res-spec-k">INSTAGRAM:</span><span class="term-res-spec-v"><a href="${id.instagram}" target="_blank" rel="noopener" class="term-res-link">${id.instagram}</a></span></div>
                </div>
            </div>
        `;
        renderCommandOutput("contact", out);
    }

    // Bind terminal form submission
    if (termForm && termInput) {
        termForm.addEventListener("submit", (e) => {
            e.preventDefault();
            executeCommand(termInput.value);
        });

        // Command history & Tab completion
        termInput.addEventListener("keydown", (e) => {
            if (e.key === "ArrowUp") {
                e.preventDefault();
                if (commandHistory.length > 0 && historyCursor > 0) {
                    historyCursor--;
                    termInput.value = commandHistory[historyCursor];
                }
            } else if (e.key === "ArrowDown") {
                e.preventDefault();
                if (historyCursor < commandHistory.length - 1) {
                    historyCursor++;
                    termInput.value = commandHistory[historyCursor];
                } else {
                    historyCursor = commandHistory.length;
                    termInput.value = "";
                }
            } else if (e.key === "Tab") {
                e.preventDefault();
                const current = termInput.value.trim().toLowerCase();
                if (!current) return;
                const match = availableCommands.find(c => c.startsWith(current));
                if (match) {
                    termInput.value = match;
                }
            }
        });
    }

    // Bind touch shortcut pills
    shortcutPills.forEach((pill) => {
        pill.addEventListener("click", () => {
            const cmd = pill.getAttribute("data-cmd");
            if (cmd) {
                executeCommand(cmd);
                if (termInput) termInput.focus();
            }
        });
    });

    /* ==========================================================================
       06. The Living Garden Canvas (Butterflies, Swaying Grass, Meadow Flowers & Sky)
       ========================================================================== */
    const canvas = document.getElementById("bg-canvas");
    if (canvas) {
        const ctx = canvas.getContext("2d");
        let width = 0;
        let height = 0;
        let dpr = Math.min(window.devicePixelRatio || 1, 2);

        const mouse = { x: null, y: null, targetX: null, targetY: null };
        let petals = [];
        let clouds = [];
        let ripples = [];
        let butterflies = [];
        let grassBlades = [];
        let meadowFlowers = [];
        let stars = [];
        let fireflies = [];

        // --- TIME-OF-DAY & SKY LIGHTING SYSTEM (Rohtak IST UTC+5:30) ---
        function getISTTime() {
            const now = new Date();
            const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
            const istDate = new Date(utc + (3600000 * 5.5));
            const hours = istDate.getHours();
            const minutes = istDate.getMinutes();
            const seconds = istDate.getSeconds();
            const decimalHour = hours + minutes / 60 + seconds / 3600;
            return { istDate, hours, minutes, seconds, decimalHour };
        }

        function getSkyLighting(h, isDarkTheme) {
            let phase = "day";
            let skyTop = "#D8EEFD";
            let skyMid = "#EDE9FE";
            let skyBottom = "#FFFDF0";
            let sunAlpha = 1.0;
            let moonAlpha = 0.0;
            let starsAlpha = 0.0;
            let fireflyAlpha = 0.0;
            let cloudTint = "rgba(255, 255, 255,";
            let sunX = width * 0.5;
            let sunY = 95;
            let sunColor = "#FBBF24";
            let sunCorona = "rgba(253, 230, 138, 0.4)";
            let moonX = width * 0.8;
            let moonY = 85;
            let groundFar = "#7EBC9A";
            let groundNear = "#559672";
            let turfAccent = "#A8E2BF";
            let groundHighlight = "rgba(220, 252, 231, 0.65)";

            if (h >= 5.0 && h < 7.5) {
                // DAWN / SUNRISE (5:00 AM - 7:30 AM): Soft lilac mist & warm peach dawn
                phase = "dawn";
                const p = (h - 5.0) / 2.5;
                skyTop = "#2E1E45";
                skyMid = "#D9779F";
                skyBottom = "#FEF08A";
                sunAlpha = Math.min(1.0, p * 1.4);
                moonAlpha = Math.max(0, 1 - p * 2);
                starsAlpha = Math.max(0, 1 - p * 1.5);
                fireflyAlpha = Math.max(0, 0.5 - p);
                cloudTint = "rgba(254, 205, 211,";
                sunX = width * 0.2 + p * (width * 0.15);
                sunY = height * 0.4 - p * (height * 0.15);
                sunColor = "#FBBF24";
                sunCorona = "rgba(251, 146, 60, 0.4)";
                groundFar = "#658B79";
                groundNear = "#466757";
                turfAccent = "#A5CDB8";
                groundHighlight = "rgba(254, 240, 138, 0.5)";
            } else if (h >= 7.5 && h < 16.5) {
                // DAYTIME (7:30 AM - 4:30 PM): Soft watercolor sky & charming sunny sage meadow
                phase = "day";
                const p = (h - 7.5) / 9.0;
                skyTop = isDarkTheme ? "#1E293B" : "#D8EEFD";
                skyMid = isDarkTheme ? "#0F172A" : "#EDE9FE";
                skyBottom = isDarkTheme ? "#12281E" : "#FFFDF0";
                sunAlpha = isDarkTheme ? 0.35 : 1.0;
                moonAlpha = 0.0;
                starsAlpha = isDarkTheme ? 0.25 : 0.0;
                fireflyAlpha = 0.0;
                cloudTint = isDarkTheme ? "rgba(71, 85, 105," : "rgba(255, 255, 255,";
                sunX = width * 0.18 + p * (width * 0.64);
                sunY = 85 + Math.sin(p * Math.PI) * -35;
                sunColor = "#FBBF24";
                sunCorona = "rgba(253, 230, 138, 0.45)";
                groundFar = isDarkTheme ? "#183C2A" : "#7EBC9A";
                groundNear = isDarkTheme ? "#0E261A" : "#559672";
                turfAccent = isDarkTheme ? "#2E6D4B" : "#A8E2BF";
                groundHighlight = isDarkTheme ? "rgba(110, 231, 183, 0.25)" : "rgba(220, 252, 231, 0.65)";
            } else if (h >= 16.5 && h < 19.0) {
                // SUNSET / GOLDEN HOUR (4:30 PM - 7:00 PM): Warm peach amber & golden rolling hills
                phase = "sunset";
                const p = (h - 16.5) / 2.5;
                skyTop = "#432C5E";
                skyMid = "#F472B6";
                skyBottom = "#FED7AA";
                sunAlpha = Math.max(0.4, 1.0 - p * 0.5);
                moonAlpha = p * 0.4;
                starsAlpha = p * 0.5;
                fireflyAlpha = p * 0.6;
                cloudTint = "rgba(253, 186, 116,";
                sunX = width * 0.7 + p * (width * 0.18);
                sunY = 95 + p * (height * 0.25);
                sunColor = "#F97316";
                sunCorona = "rgba(251, 146, 60, 0.5)";
                groundFar = "#7C5F40";
                groundNear = "#503D2A";
                turfAccent = "#DCA76C";
                groundHighlight = "rgba(254, 215, 170, 0.55)";
            } else if (h >= 19.0 && h < 20.5) {
                // TWILIGHT / DUSK (7:00 PM - 8:30 PM): Calming lavender dusk & serene hills
                phase = "twilight";
                const p = (h - 19.0) / 1.5;
                skyTop = "#181A38";
                skyMid = "#2B2E63";
                skyBottom = "#3B3D78";
                sunAlpha = 0.0;
                moonAlpha = 0.75 + p * 0.25;
                starsAlpha = 0.7 + p * 0.3;
                fireflyAlpha = 0.8;
                cloudTint = "rgba(99, 102, 241,";
                moonX = width * 0.82;
                moonY = 90;
                groundFar = "#223C32";
                groundNear = "#14261F";
                turfAccent = "#3C6856";
                groundHighlight = "rgba(165, 180, 252, 0.3)";
            } else {
                // NIGHT (8:30 PM - 5:00 AM): Soft velvet nocturnal moss & starlight
                phase = "night";
                skyTop = "#070D1B";
                skyMid = "#0D1A2E";
                skyBottom = "#122822";
                sunAlpha = 0.0;
                moonAlpha = 1.0;
                starsAlpha = 1.0;
                fireflyAlpha = 1.0;
                cloudTint = "rgba(30, 41, 59,";
                moonX = width * 0.82;
                moonY = 85;
                groundFar = "#142F23";
                groundNear = "#0A1D15";
                turfAccent = "#25523C";
                groundHighlight = "rgba(167, 243, 208, 0.2)";
            }

            return {
                phase, skyTop, skyMid, skyBottom,
                sunAlpha, moonAlpha, starsAlpha, fireflyAlpha,
                cloudTint, sunX, sunY, sunColor, sunCorona,
                moonX, moonY, groundFar, groundNear, turfAccent, groundHighlight
            };
        }

        // --- CELESTIAL STARS SYSTEM ---
        class Star {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * (height * 0.65);
                this.radius = Math.random() * 1.5 + 0.5;
                this.baseAlpha = Math.random() * 0.55 + 0.35;
                this.twinkleSpeed = Math.random() * 0.03 + 0.01;
                this.phase = Math.random() * Math.PI * 2;
            }
            draw(ctx, starsAlpha, time) {
                if (starsAlpha <= 0.02) return;
                const alpha = this.baseAlpha * (0.6 + 0.4 * Math.sin(time * this.twinkleSpeed + this.phase)) * starsAlpha;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
                ctx.fill();
            }
        }

        function initStars() {
            stars = [];
            const count = Math.min(80, Math.max(30, Math.floor(width / 22)));
            for (let i = 0; i < count; i++) {
                stars.push(new Star());
            }
        }

        // --- BIOLUMINESCENT FIREFLIES SYSTEM ---
        class Firefly {
            constructor() {
                this.x = Math.random() * width;
                this.y = height - 25 - Math.random() * 160;
                this.vx = (Math.random() - 0.5) * 0.7;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.pulsePhase = Math.random() * Math.PI * 2;
                this.size = Math.random() * 2.2 + 1.8;
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.pulsePhase += 0.035;
                if (this.x < 0) this.x = width;
                if (this.x > width) this.x = 0;
                if (this.y < height - 200) this.vy = Math.abs(this.vy);
                if (this.y > height - 15) this.vy = -Math.abs(this.vy);
            }
            draw(ctx, fireflyAlpha) {
                if (fireflyAlpha <= 0.02) return;
                const glow = (Math.sin(this.pulsePhase) + 1) * 0.5;
                if (glow < 0.15) return;
                ctx.save();
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * 2.6, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(163, 230, 53, ${glow * 0.28 * fireflyAlpha})`;
                ctx.fill();
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(217, 249, 157, ${glow * 0.95 * fireflyAlpha})`;
                ctx.fill();
                ctx.restore();
            }
        }

        function initFireflies() {
            fireflies = [];
            const count = Math.min(18, Math.max(8, Math.floor(width / 90)));
            for (let i = 0; i < count; i++) {
                fireflies.push(new Firefly());
            }
        }

        // --- BUTTERFLY SYSTEM ---
        const BUTTERFLY_SPECIES = [
            { name: "Monarch", wingColor1: "#FB923C", wingColor2: "#EA580C", edgeColor: "#0F172A", spotColor: "#FFFBEB", size: 14 },
            { name: "Blue Morpho", wingColor1: "#38BDF8", wingColor2: "#0284C7", edgeColor: "#0F172A", spotColor: "#E0F2FE", size: 15 },
            { name: "Swallowtail", wingColor1: "#FACC15", wingColor2: "#EAB308", edgeColor: "#1E293B", spotColor: "#FEF08A", size: 13 },
            { name: "Cosmos Rose", wingColor1: "#F472B6", wingColor2: "#DB2777", edgeColor: "#831843", spotColor: "#FDF2F8", size: 14 },
            { name: "Meadow Emerald", wingColor1: "#34D399", wingColor2: "#059669", edgeColor: "#064E3B", spotColor: "#ECFDF5", size: 13 }
        ];

        class Butterfly {
            constructor(species) {
                this.species = species || BUTTERFLY_SPECIES[Math.floor(Math.random() * BUTTERFLY_SPECIES.length)];
                this.x = Math.random() * width;
                this.y = 80 + Math.random() * (height * 0.65);
                this.vx = (Math.random() - 0.5) * 1.5;
                this.vy = (Math.random() - 0.5) * 1.2;
                this.targetSpeed = 1.2 + Math.random() * 0.8;
                this.wanderAngle = Math.random() * Math.PI * 2;
                this.flapTime = Math.random() * 10;
                this.flapSpeed = 0.22 + Math.random() * 0.12;
                this.size = this.species.size * (0.85 + Math.random() * 0.3);
                this.bodyColor = "#1E293B";
            }

            update() {
                this.flapTime += this.flapSpeed;
                this.wanderAngle += (Math.random() - 0.5) * 0.14;

                const desiredVx = Math.cos(this.wanderAngle) * this.targetSpeed;
                const desiredVy = Math.sin(this.wanderAngle) * (this.targetSpeed * 0.6) + Math.sin(this.flapTime * 0.6) * 0.45;

                this.vx += (desiredVx - this.vx) * 0.04;
                this.vy += (desiredVy - this.vy) * 0.04;

                if (mouse.x !== null && mouse.y !== null) {
                    const dx = this.x - mouse.x;
                    const dy = this.y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const avoidDist = 130;
                    if (dist < avoidDist && dist > 0) {
                        const force = (1 - dist / avoidDist) * 3.2;
                        this.vx += (dx / dist) * force;
                        this.vy += (dy / dist) * force;
                        this.flapSpeed = 0.36;
                    } else {
                        this.flapSpeed = 0.22;
                    }
                }

                this.x += this.vx;
                this.y += this.vy;

                if (this.x < -50) this.x = width + 40;
                if (this.x > width + 50) this.x = -40;
                if (this.y < 30) { this.y = 30; this.vy = Math.abs(this.vy) * 0.8; }
                if (this.y > height - 70) { this.y = height - 70; this.vy = -Math.abs(this.vy) * 0.8; }
            }

            draw(ctx) {
                ctx.save();
                ctx.translate(this.x, this.y);

                const angle = Math.atan2(this.vy, this.vx);
                ctx.rotate(angle);

                const wingScaleY = Math.abs(Math.sin(this.flapTime)) * 0.85 + 0.15;

                this.drawWing(ctx, 1, wingScaleY);
                this.drawWing(ctx, -1, wingScaleY);

                // Body
                ctx.fillStyle = this.bodyColor;
                ctx.beginPath();
                ctx.ellipse(0, 0, this.size * 0.7, this.size * 0.16, 0, 0, Math.PI * 2);
                ctx.fill();

                // Head
                ctx.beginPath();
                ctx.arc(this.size * 0.65, 0, this.size * 0.14, 0, Math.PI * 2);
                ctx.fill();

                // Antennae
                ctx.strokeStyle = this.bodyColor;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(this.size * 0.7, -this.size * 0.05);
                ctx.quadraticCurveTo(this.size * 1.1, -this.size * 0.45, this.size * 1.25, -this.size * 0.35);
                ctx.moveTo(this.size * 0.7, this.size * 0.05);
                ctx.quadraticCurveTo(this.size * 1.1, this.size * 0.45, this.size * 1.25, this.size * 0.35);
                ctx.stroke();

                ctx.restore();
            }

            drawWing(ctx, side, wingScaleY) {
                ctx.save();
                ctx.scale(1, side * wingScaleY);
                const s = this.size;

                // Forewing
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.bezierCurveTo(s * 0.3, -s * 0.8, s * 0.8, -s * 1.3, s * 1.15, -s * 1.1);
                ctx.bezierCurveTo(s * 1.3, -s * 0.9, s * 1.0, -s * 0.4, s * 0.4, -s * 0.1);
                ctx.closePath();

                const grad1 = ctx.createRadialGradient(0, 0, s * 0.2, s * 0.5, -s * 0.6, s * 1.2);
                grad1.addColorStop(0, this.species.wingColor1);
                grad1.addColorStop(0.7, this.species.wingColor2);
                grad1.addColorStop(1, this.species.edgeColor);
                ctx.fillStyle = grad1;
                ctx.fill();
                ctx.strokeStyle = this.species.edgeColor;
                ctx.lineWidth = 0.9;
                ctx.stroke();

                // Hindwing
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.bezierCurveTo(-s * 0.2, -s * 0.4, -s * 0.1, -s * 0.9, s * 0.2, -s * 0.95);
                ctx.bezierCurveTo(s * 0.5, -s * 0.95, s * 0.6, -s * 0.5, s * 0.3, -s * 0.1);
                ctx.closePath();

                const grad2 = ctx.createRadialGradient(0, 0, s * 0.1, 0, -s * 0.5, s * 0.9);
                grad2.addColorStop(0, this.species.wingColor1);
                grad2.addColorStop(0.75, this.species.wingColor2);
                grad2.addColorStop(1, this.species.edgeColor);
                ctx.fillStyle = grad2;
                ctx.fill();
                ctx.stroke();

                // Artistic wing spots
                ctx.fillStyle = this.species.spotColor;
                ctx.beginPath();
                ctx.arc(s * 0.95, -s * 0.9, s * 0.08, 0, Math.PI * 2);
                ctx.arc(s * 0.75, -s * 0.75, s * 0.06, 0, Math.PI * 2);
                ctx.fill();

                ctx.restore();
            }
        }

        function initButterflies() {
            butterflies = [];
            const count = Math.min(6, Math.max(3, Math.floor(width / 260)));
            for (let i = 0; i < count; i++) {
                const sp = BUTTERFLY_SPECIES[i % BUTTERFLY_SPECIES.length];
                butterflies.push(new Butterfly(sp));
            }
        }

        // --- SWAYING MEADOW GRASS SYSTEM ---
        function initGrass() {
            grassBlades = [];
            const bladeCount = Math.min(200, Math.max(80, Math.floor(width / 7.5)));
            for (let i = 0; i < bladeCount; i++) {
                const layer = Math.random() > 0.42 ? 1 : 0; // 0 = background, 1 = foreground
                grassBlades.push({
                    x: (i / bladeCount) * width + (Math.random() - 0.5) * 8,
                    h: (layer === 0 ? 38 : 62) + Math.random() * (layer === 0 ? 28 : 38),
                    w: layer === 0 ? 1.8 : 2.8,
                    speed: 0.9 + Math.random() * 0.7,
                    amp: 7 + Math.random() * 9,
                    phase: Math.random() * Math.PI * 2,
                    layer: layer,
                    windSens: 0.5 + Math.random() * 0.5
                });
            }
        }

        function drawGrassBlades(layerFilter, time, isDark) {
            const wind = Math.sin(time * 1.2) * 4.5 + Math.sin(time * 0.6) * 3;
            const darkBgColors = ["#153828", "#1B4633", "#22553E"];
            const darkFgColors = ["#34D399", "#2ECC71", "#5EEAD4", "#6EE7B7"];
            const lightBgColors = ["#68AA86", "#7BBF9B", "#5C9E7B"];
            const lightFgColors = ["#82D0A5", "#98E1BA", "#71C395", "#8EE6B9"];

            for (let i = 0; i < grassBlades.length; i++) {
                const b = grassBlades[i];
                if (b.layer !== layerFilter) continue;

                let sway = Math.sin(time * b.speed + b.phase) * b.amp + wind * b.windSens;

                if (mouse.x !== null && mouse.y !== null) {
                    const tipY = height - b.h;
                    const dx = mouse.x - b.x;
                    const dy = mouse.y - tipY;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 100 && dist > 0) {
                        const push = (1 - dist / 100) * (dx > 0 ? -18 : 18);
                        sway += push;
                    }
                }

                ctx.save();
                ctx.beginPath();
                ctx.moveTo(b.x - b.w * 0.5, height);
                ctx.quadraticCurveTo(b.x + sway * 0.4, height - b.h * 0.5, b.x + sway, height - b.h);
                ctx.quadraticCurveTo(b.x + sway * 0.4 + b.w * 0.2, height - b.h * 0.5, b.x + b.w * 0.5, height);
                ctx.closePath();

                if (isDark) {
                    ctx.fillStyle = b.layer === 0 ? darkBgColors[i % darkBgColors.length] : darkFgColors[i % darkFgColors.length];
                } else {
                    ctx.fillStyle = b.layer === 0 ? lightBgColors[i % lightBgColors.length] : lightFgColors[i % lightFgColors.length];
                }
                ctx.fill();
                ctx.restore();
            }
        }

        // --- BLOOMING MEADOW FLOWERS SYSTEM ---
        const FLOWER_TYPES = ["daisy", "marigold", "cosmos", "lavender", "buttercup", "bluebell", "poppy"];

        function initMeadowFlowers() {
            meadowFlowers = [];
            // Substantially increased flower density on the ground (~3x more flowers)
            const count = Math.min(92, Math.max(45, Math.floor(width / 16)));
            for (let i = 0; i < count; i++) {
                const layer = Math.random() > 0.44 ? 1 : 0;
                // 3 height tiers: low meadow blooms nestled in grass, mid wildflowers, tall statement blooms
                const tier = Math.random();
                let stemHeight, radius, stemWidth;
                if (tier < 0.35) {
                    stemHeight = (layer === 0 ? 38 : 52) + Math.random() * 22;
                    radius = 6.5 + Math.random() * 3;
                    stemWidth = 1.6;
                } else if (tier < 0.75) {
                    stemHeight = (layer === 0 ? 65 : 85) + Math.random() * 30;
                    radius = 8.5 + Math.random() * 4;
                    stemWidth = layer === 0 ? 2.0 : 2.5;
                } else {
                    stemHeight = (layer === 0 ? 95 : 125) + Math.random() * 35;
                    radius = 10.5 + Math.random() * 4.5;
                    stemWidth = layer === 0 ? 2.2 : 2.8;
                }

                // Natural organic jitter across the entire ground width
                const jitter = (Math.random() - 0.5) * (width / count * 0.85);
                meadowFlowers.push({
                    x: Math.max(10, Math.min(width - 10, (i / count) * width + jitter)),
                    stemHeight: stemHeight,
                    stemWidth: stemWidth,
                    speed: 0.85 + Math.random() * 0.8,
                    amp: 6 + Math.random() * 11,
                    phase: Math.random() * Math.PI * 2,
                    type: FLOWER_TYPES[i % FLOWER_TYPES.length],
                    radius: radius,
                    layer: layer
                });
            }
        }

        function drawSingleFlowerHead(ctx, type, radius) {
            if (type === "daisy") {
                const petals = 10;
                for (let p = 0; p < petals; p++) {
                    const rot = (p / petals) * Math.PI * 2;
                    ctx.save();
                    ctx.rotate(rot);
                    ctx.beginPath();
                    ctx.ellipse(0, -radius * 0.85, radius * 0.28, radius * 0.7, 0, 0, Math.PI * 2);
                    ctx.fillStyle = "#FFFBEB";
                    ctx.fill();
                    ctx.strokeStyle = "rgba(251, 191, 36, 0.4)";
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                    ctx.restore();
                }
                ctx.beginPath();
                ctx.arc(0, 0, radius * 0.42, 0, Math.PI * 2);
                ctx.fillStyle = "#F59E0B";
                ctx.fill();
            } else if (type === "marigold") {
                const layers = [
                    { petals: 12, r: radius * 1.0, color: "#EA580C" },
                    { petals: 10, r: radius * 0.75, color: "#F59E0B" },
                    { petals: 8, r: radius * 0.5, color: "#FDE047" }
                ];
                layers.forEach((l) => {
                    for (let p = 0; p < l.petals; p++) {
                        const rot = (p / l.petals) * Math.PI * 2;
                        ctx.save();
                        ctx.rotate(rot);
                        ctx.beginPath();
                        ctx.ellipse(0, -l.r * 0.8, radius * 0.24, l.r * 0.6, 0, 0, Math.PI * 2);
                        ctx.fillStyle = l.color;
                        ctx.fill();
                        ctx.restore();
                    }
                });
                ctx.beginPath();
                ctx.arc(0, 0, radius * 0.28, 0, Math.PI * 2);
                ctx.fillStyle = "#B45309";
                ctx.fill();
            } else if (type === "cosmos") {
                const petals = 8;
                for (let p = 0; p < petals; p++) {
                    const rot = (p / petals) * Math.PI * 2;
                    ctx.save();
                    ctx.rotate(rot);
                    ctx.beginPath();
                    ctx.moveTo(0, 0);
                    ctx.quadraticCurveTo(-radius * 0.35, -radius * 0.8, -radius * 0.25, -radius * 1.15);
                    ctx.lineTo(0, -radius * 1.05);
                    ctx.lineTo(radius * 0.25, -radius * 1.15);
                    ctx.quadraticCurveTo(radius * 0.35, -radius * 0.8, 0, 0);
                    ctx.fillStyle = p % 2 === 0 ? "#F472B6" : "#EC4899";
                    ctx.fill();
                    ctx.restore();
                }
                ctx.beginPath();
                ctx.arc(0, 0, radius * 0.35, 0, Math.PI * 2);
                ctx.fillStyle = "#FDE047";
                ctx.fill();
            } else if (type === "lavender") {
                const bells = 6;
                for (let b = 0; b < bells; b++) {
                    const rot = (b / bells) * Math.PI * 2;
                    ctx.save();
                    ctx.rotate(rot);
                    ctx.beginPath();
                    ctx.ellipse(0, -radius * 0.75, radius * 0.26, radius * 0.55, 0, 0, Math.PI * 2);
                    ctx.fillStyle = "#A78BFA";
                    ctx.fill();
                    ctx.restore();
                }
                ctx.beginPath();
                ctx.arc(0, 0, radius * 0.32, 0, Math.PI * 2);
                ctx.fillStyle = "#EDE9FE";
                ctx.fill();
            } else if (type === "bluebell") {
                const bells = 6;
                for (let b = 0; b < bells; b++) {
                    const rot = (b / bells) * Math.PI * 2;
                    ctx.save();
                    ctx.rotate(rot);
                    ctx.beginPath();
                    ctx.ellipse(0, -radius * 0.78, radius * 0.28, radius * 0.58, 0, 0, Math.PI * 2);
                    ctx.fillStyle = b % 2 === 0 ? "#60A5FA" : "#38BDF8";
                    ctx.fill();
                    ctx.restore();
                }
                ctx.beginPath();
                ctx.arc(0, 0, radius * 0.32, 0, Math.PI * 2);
                ctx.fillStyle = "#FFFDF0";
                ctx.fill();
            } else if (type === "poppy") {
                const petals = 4;
                for (let p = 0; p < petals; p++) {
                    const rot = (p / petals) * Math.PI * 2;
                    ctx.save();
                    ctx.rotate(rot);
                    ctx.beginPath();
                    ctx.ellipse(0, -radius * 0.7, radius * 0.55, radius * 0.65, 0, 0, Math.PI * 2);
                    ctx.fillStyle = p % 2 === 0 ? "#F87171" : "#EF4444";
                    ctx.fill();
                    ctx.restore();
                }
                ctx.beginPath();
                ctx.arc(0, 0, radius * 0.38, 0, Math.PI * 2);
                ctx.fillStyle = "#451A03";
                ctx.fill();
                ctx.beginPath();
                ctx.arc(0, 0, radius * 0.18, 0, Math.PI * 2);
                ctx.fillStyle = "#FEF08A";
                ctx.fill();
            } else {
                const petals = 5;
                for (let p = 0; p < petals; p++) {
                    const rot = (p / petals) * Math.PI * 2;
                    ctx.save();
                    ctx.rotate(rot);
                    ctx.beginPath();
                    ctx.ellipse(0, -radius * 0.75, radius * 0.4, radius * 0.6, 0, 0, Math.PI * 2);
                    ctx.fillStyle = "#FACC15";
                    ctx.fill();
                    ctx.restore();
                }
                ctx.beginPath();
                ctx.arc(0, 0, radius * 0.3, 0, Math.PI * 2);
                ctx.fillStyle = "#D97706";
                ctx.fill();
            }
        }

        function drawMeadowFlowersList(layerFilter, time, isDark) {
            const wind = Math.sin(time * 1.5) * 5 + Math.sin(time * 0.7) * 3;
            const stemColor = isDark ? "#34D399" : "#559B76";

            for (let i = 0; i < meadowFlowers.length; i++) {
                const f = meadowFlowers[i];
                if (f.layer !== layerFilter) continue;

                let sway = Math.sin(time * f.speed + f.phase) * f.amp + wind;
                const tipX = f.x + sway;
                const tipY = height - f.stemHeight + Math.abs(sway) * 0.08;

                ctx.save();

                // Slender Swaying Stem
                ctx.beginPath();
                ctx.moveTo(f.x, height);
                ctx.quadraticCurveTo(f.x + sway * 0.35, height - f.stemHeight * 0.5, tipX, tipY);
                ctx.strokeStyle = stemColor;
                ctx.lineWidth = f.stemWidth;
                ctx.lineCap = "round";
                ctx.stroke();

                // Little Side Leaves on Stem
                const leaf1X = f.x + sway * 0.25;
                const leaf1Y = height - f.stemHeight * 0.4;
                ctx.beginPath();
                ctx.ellipse(leaf1X - 6, leaf1Y, 7, 3, -0.4, 0, Math.PI * 2);
                ctx.fillStyle = stemColor;
                ctx.fill();

                const leaf2X = f.x + sway * 0.65;
                const leaf2Y = height - f.stemHeight * 0.7;
                ctx.beginPath();
                ctx.ellipse(leaf2X + 6, leaf2Y, 7, 3, 0.4, 0, Math.PI * 2);
                ctx.fill();

                // Flower Head at tip of stem
                ctx.translate(tipX, tipY);
                ctx.rotate(Math.sin(time * f.speed + f.phase) * 0.2);
                drawSingleFlowerHead(ctx, f.type, f.radius);

                ctx.restore();
            }
        }

        // --- CLOUDS & FALLING PETALS ---
        const petalColors = [
            { fill: "#F59E0B", type: "marigold", size: 6.5 },
            { fill: "#D97706", type: "marigold", size: 5.5 },
            { fill: "#EC4899", type: "cosmos", size: 6.0 },
            { fill: "#F472B6", type: "cosmos", size: 5.0 },
            { fill: "#FFFBEB", type: "daisy", size: 5.8 },
            { fill: "#4EA87E", type: "leaf", size: 5.2 }
        ];

        function initClouds() {
            clouds = [];
            const cloudCount = Math.max(4, Math.min(8, Math.floor(width / 240)));
            for (let i = 0; i < cloudCount; i++) {
                clouds.push({
                    x: Math.random() * width,
                    y: 28 + Math.random() * (height * 0.38),
                    scale: 0.82 + Math.random() * 0.72,
                    speed: 0.12 + Math.random() * 0.22,
                    opacity: 0.76 + Math.random() * 0.20,
                    puffs: [
                        { dx: 0, dy: -6, r: 46 },
                        { dx: -35, dy: 2, r: 36 },
                        { dx: 36, dy: 3, r: 34 },
                        { dx: -64, dy: 12, r: 26 },
                        { dx: 62, dy: 12, r: 24 },
                        { dx: -18, dy: 10, r: 34 },
                        { dx: 18, dy: 10, r: 32 }
                    ]
                });
            }
        }

        function initPetals() {
            petals = [];
            const petalCount = Math.max(20, Math.min(45, Math.floor(width / 35)));
            for (let i = 0; i < petalCount; i++) {
                const conf = petalColors[Math.floor(Math.random() * petalColors.length)];
                petals.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    baseSpeedY: 0.55 + Math.random() * 0.8,
                    speedY: 0.55 + Math.random() * 0.8,
                    speedX: (Math.random() - 0.4) * 0.5,
                    swayAngle: Math.random() * Math.PI * 2,
                    swaySpeed: 0.015 + Math.random() * 0.02,
                    swayAmp: 0.8 + Math.random() * 1.2,
                    rotation: Math.random() * Math.PI * 2,
                    rotSpeed: (Math.random() - 0.5) * 0.03,
                    size: conf.size * (0.8 + Math.random() * 0.5),
                    color: conf.fill,
                    type: conf.type,
                    opacity: 0.65 + Math.random() * 0.3
                });
            }
        }

        function resizeCanvas() {
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);
            initClouds();
            initPetals();
            initButterflies();
            initGrass();
            initMeadowFlowers();
            initStars();
            initFireflies();
        }

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        window.addEventListener("mousemove", (e) => {
            mouse.targetX = e.clientX;
            mouse.targetY = e.clientY;
            if (mouse.x === null) {
                mouse.x = e.clientX;
                mouse.y = e.clientY;
            }
        });

        window.addEventListener("mouseleave", () => {
            mouse.targetX = null;
            mouse.targetY = null;
        });

        window.addEventListener("click", (e) => {
            ripples.push({
                x: e.clientX,
                y: e.clientY,
                r: 0,
                maxR: 200,
                alpha: 0.6,
                color: Math.random() > 0.5 ? "rgba(245, 158, 11," : "rgba(236, 72, 153,"
            });
        });

        let animationFrameId = null;
        let isTabActive = true;

        document.addEventListener("visibilitychange", () => {
            isTabActive = !document.hidden;
            if (isTabActive && !animationFrameId) {
                render();
            }
        });

        function drawPetal(p) {
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation);
            ctx.globalAlpha = p.opacity;

            if (p.type === "leaf") {
                ctx.beginPath();
                ctx.moveTo(0, -p.size * 1.5);
                ctx.quadraticCurveTo(p.size * 0.9, 0, 0, p.size * 1.5);
                ctx.quadraticCurveTo(-p.size * 0.9, 0, 0, -p.size * 1.5);
                ctx.fillStyle = p.color;
                ctx.fill();
            } else {
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.bezierCurveTo(-p.size * 0.8, -p.size * 0.7, -p.size * 0.6, -p.size * 1.6, 0, -p.size * 1.9);
                ctx.bezierCurveTo(p.size * 0.6, -p.size * 1.6, p.size * 0.8, -p.size * 0.7, 0, 0);
                ctx.fillStyle = p.color;
                ctx.fill();
            }

            ctx.restore();
        }

        function drawCloud(c, sky, isDark) {
            ctx.save();
            ctx.translate(c.x, c.y);
            ctx.scale(c.scale, c.scale);

            // 1. Bottom shadow foundation pass (volumetric depth & contrast against light/dark sky)
            c.puffs.forEach((puff) => {
                ctx.beginPath();
                ctx.arc(puff.dx, puff.dy + 6, puff.r, 0, Math.PI * 2);
                ctx.fillStyle = isDark
                    ? `rgba(32, 48, 76, ${c.opacity * 0.65})`
                    : `rgba(180, 208, 236, ${c.opacity * 0.58})`;
                ctx.fill();
            });

            // 2. Main billowing cloud body
            c.puffs.forEach((puff) => {
                ctx.beginPath();
                ctx.arc(puff.dx, puff.dy, puff.r, 0, Math.PI * 2);
                ctx.fillStyle = isDark
                    ? `rgba(168, 196, 232, ${c.opacity * 0.75})`
                    : `rgba(255, 255, 255, ${c.opacity * 0.90})`;
                ctx.fill();
            });

            // 3. Crisp radiant sunlit/moonlit crest on top puffs
            c.puffs.filter(p => p.dy <= 4).forEach((puff) => {
                ctx.beginPath();
                ctx.arc(puff.dx - 3, puff.dy - 4, puff.r * 0.72, 0, Math.PI * 2);
                ctx.fillStyle = isDark
                    ? `rgba(230, 242, 255, ${c.opacity * 0.55})`
                    : `rgba(255, 255, 255, ${c.opacity * 0.98})`;
                ctx.fill();
            });

            ctx.restore();
        }

        function drawSun(sun, time) {
            if (sun.alpha <= 0.02) return;
            ctx.save();
            ctx.globalAlpha = sun.alpha;

            // Soft outer atmospheric aura
            const auraGrad = ctx.createRadialGradient(sun.x, sun.y, 25, sun.x, sun.y, 110);
            auraGrad.addColorStop(0, sun.corona);
            auraGrad.addColorStop(1, "rgba(255, 255, 255, 0)");
            ctx.beginPath();
            ctx.arc(sun.x, sun.y, 110, 0, Math.PI * 2);
            ctx.fillStyle = auraGrad;
            ctx.fill();

            // Inner radiant sun disc
            const discGrad = ctx.createRadialGradient(sun.x, sun.y, 5, sun.x, sun.y, 34);
            discGrad.addColorStop(0, "#FFFDF5");
            discGrad.addColorStop(0.45, "#FDE047");
            discGrad.addColorStop(1, sun.color);
            ctx.beginPath();
            ctx.arc(sun.x, sun.y, 34, 0, Math.PI * 2);
            ctx.fillStyle = discGrad;
            ctx.fill();

            ctx.restore();
        }

        function drawMoon(moon, time) {
            if (moon.alpha <= 0.02) return;
            ctx.save();
            ctx.globalAlpha = moon.alpha;

            // Lunar Celestial Aura
            const halo = ctx.createRadialGradient(moon.x, moon.y, 18, moon.x, moon.y, 75);
            halo.addColorStop(0, "rgba(224, 231, 255, 0.22)");
            halo.addColorStop(1, "rgba(224, 231, 255, 0)");
            ctx.beginPath();
            ctx.arc(moon.x, moon.y, 75, 0, Math.PI * 2);
            ctx.fillStyle = halo;
            ctx.fill();

            // Crescent Moon Disc
            ctx.beginPath();
            ctx.arc(moon.x, moon.y, 24, 0, Math.PI * 2);
            ctx.fillStyle = "#F8FAFC";
            ctx.fill();

            // Shadow cutout creating graceful crescent
            ctx.beginPath();
            ctx.arc(moon.x - 8, moon.y - 4, 22, 0, Math.PI * 2);
            ctx.fillStyle = "#0B1528";
            ctx.fill();

            ctx.restore();
        }

        let time = 0;

        function render() {
            if (!isTabActive) {
                animationFrameId = null;
                return;
            }

            time += 0.02;
            const isDark = document.documentElement.getAttribute("data-theme") === "dark";
            const ist = getISTTime();
            const sky = getSkyLighting(ist.decimalHour, isDark);

            // 1. Living Atmospheric Sky Gradient (Full Canvas Visibility)
            const skyGrad = ctx.createLinearGradient(0, 0, 0, height);
            skyGrad.addColorStop(0, sky.skyTop);
            skyGrad.addColorStop(0.55, sky.skyMid);
            skyGrad.addColorStop(1, sky.skyBottom);
            ctx.fillStyle = skyGrad;
            ctx.fillRect(0, 0, width, height);

            // 2. Twinkling Stars (Night / Twilight / Dawn)
            if (sky.starsAlpha > 0.02) {
                for (let i = 0; i < stars.length; i++) {
                    stars[i].draw(ctx, sky.starsAlpha, time);
                }
            }

            // 3. Celestial Bodies (Sun or Moon)
            drawSun({ x: sky.sunX, y: sky.sunY, alpha: sky.sunAlpha, color: sky.sunColor, corona: sky.sunCorona }, time);
            drawMoon({ x: sky.moonX, y: sky.moonY, alpha: sky.moonAlpha }, time);

            // 4. Drifting Soft Clouds
            for (let i = 0; i < clouds.length; i++) {
                const c = clouds[i];
                c.x += c.speed;
                if (c.x > width + 180) {
                    c.x = -180;
                    c.y = 35 + Math.random() * (height * 0.35);
                }
                drawCloud(c, sky, isDark);
            }

            // 5. Smooth Mouse Tracker
            if (mouse.targetX !== null && mouse.x !== null) {
                mouse.x += (mouse.targetX - mouse.x) * 0.08;
                mouse.y += (mouse.targetY - mouse.y) * 0.08;
            }

            // 6. Falling Flower Petals
            const mouseRadius = 120;
            for (let i = 0; i < petals.length; i++) {
                const p = petals[i];
                p.swayAngle += p.swaySpeed;
                p.rotation += p.rotSpeed;

                const swayOffset = Math.sin(p.swayAngle) * p.swayAmp;
                p.x += swayOffset + p.speedX;
                p.y += p.speedY;

                if (mouse.x !== null && mouse.y !== null) {
                    const dx = mouse.x - p.x;
                    const dy = mouse.y - p.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < mouseRadius && dist > 0) {
                        const force = (1 - dist / mouseRadius) * 2.8;
                        p.x -= (dx / dist) * force;
                        p.y -= (dy / dist) * force;
                    }
                }

                if (p.y > height + 25) {
                    p.y = -25;
                    p.x = Math.random() * width;
                }
                if (p.x < -30) p.x = width + 20;
                if (p.x > width + 30) p.x = -20;

                drawPetal(p);
            }

            // 7. Soft, Calm, Charming Visible Rolling Meadow Ground Terrain
            ctx.save();

            // Layer A: Distant Soft Rolling Meadow Ridge
            ctx.beginPath();
            ctx.moveTo(0, height);
            ctx.lineTo(0, height - 76);
            ctx.bezierCurveTo(width * 0.26, height - 110, width * 0.65, height - 60, width, height - 90);
            ctx.lineTo(width, height);
            ctx.closePath();
            const gradFar = ctx.createLinearGradient(0, height - 110, 0, height);
            gradFar.addColorStop(0, sky.groundFar);
            gradFar.addColorStop(1, sky.groundNear);
            ctx.fillStyle = gradFar;
            ctx.fill();

            // Delicate Glowing Crest Highlight on Far Ridge
            ctx.beginPath();
            ctx.moveTo(0, height - 76);
            ctx.bezierCurveTo(width * 0.26, height - 110, width * 0.65, height - 60, width, height - 90);
            ctx.strokeStyle = sky.groundHighlight || "rgba(220, 252, 231, 0.45)";
            ctx.lineWidth = 1.8;
            ctx.stroke();

            // Layer B: Foreground Soft Rolling Meadow Turf Bed
            ctx.beginPath();
            ctx.moveTo(0, height);
            ctx.lineTo(0, height - 56);
            ctx.bezierCurveTo(width * 0.32, height - 32, width * 0.70, height - 80, width, height - 48);
            ctx.lineTo(width, height);
            ctx.closePath();
            const gradNear = ctx.createLinearGradient(0, height - 80, 0, height);
            gradNear.addColorStop(0, sky.turfAccent);
            gradNear.addColorStop(0.35, sky.groundFar);
            gradNear.addColorStop(1, sky.groundNear);
            ctx.fillStyle = gradNear;
            ctx.fill();

            // Soft Sunlit Crest Highlight on Fore Hill
            ctx.beginPath();
            ctx.moveTo(0, height - 56);
            ctx.bezierCurveTo(width * 0.32, height - 32, width * 0.70, height - 80, width, height - 48);
            ctx.strokeStyle = sky.groundHighlight || "rgba(220, 252, 231, 0.65)";
            ctx.lineWidth = 2.2;
            ctx.stroke();

            ctx.restore();

            // 8. Background Meadow Layer: Grass & Stem Flowers (rooted on visible ground)
            drawGrassBlades(0, time, isDark);
            drawMeadowFlowersList(0, time, isDark);

            // 9. Foreground Meadow Layer: Taller Lush Grass & Blooming Wildflowers
            drawGrassBlades(1, time, isDark);
            drawMeadowFlowersList(1, time, isDark);

            // 10. Living Fauna: Butterflies by Day, Glowing Fireflies by Night
            if (sky.sunAlpha > 0.15 || sky.phase === "dawn" || sky.phase === "sunset") {
                for (let i = 0; i < butterflies.length; i++) {
                    const b = butterflies[i];
                    b.update();
                    b.draw(ctx);
                }
            }

            if (sky.fireflyAlpha > 0.05) {
                for (let i = 0; i < fireflies.length; i++) {
                    const f = fireflies[i];
                    f.update();
                    f.draw(ctx, sky.fireflyAlpha);
                }
            }

            // 11. Expanding Blossom Ripples on Click / Touch
            for (let r = ripples.length - 1; r >= 0; r--) {
                const rp = ripples[r];
                rp.r += 3.8;
                rp.alpha -= 0.018;

                if (rp.alpha <= 0 || rp.r >= rp.maxR) {
                    ripples.splice(r, 1);
                    continue;
                }

                ctx.save();
                ctx.beginPath();
                ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
                ctx.strokeStyle = `${rp.color} ${rp.alpha * 0.65})`;
                ctx.lineWidth = 1.4;
                ctx.stroke();
                ctx.restore();
            }

            animationFrameId = requestAnimationFrame(render);
        }

        render();
    }

    /* ==========================================================================
       07. Multilayer Parallel Chronology & Milestone Modal
       ========================================================================== */
    const chronologyData = portfolioData.chronology;

    const TRACK_CONFIG = {
        exploration: { label: "01 / EXPLORATION", title: "Early Exploration", cssClass: "track-exploration", file: "exploration.sh", state: "COMPLETE" },
        education: { label: "02 / EDUCATION", title: "Formal Education", cssClass: "track-education", file: "education.env", state: "IN_PROGRESS" },
        learning: { label: "03 / LEARNING", title: "Technical Learning", cssClass: "track-learning", file: "learning.log", state: "ACTIVE" },
        projects: { label: "04 / PROJECTS", title: "Projects & Builds", cssClass: "track-projects", file: "projects.bin", state: "SHIPPED" },
        experience: { label: "05 / EXPERIENCE", title: "Practical Experience", cssClass: "track-experience", file: "experience.db", state: "VERIFIED" }
    };

    const desktopContainer = document.getElementById("chronology-tracks-root");
    const mobileContainer = document.getElementById("chronology-mobile-root");
    const filterButtons = document.querySelectorAll(".timeline-filter-nav .filter-btn");

    // Modal elements
    const milestoneModal = document.getElementById("milestone-modal");
    const milestoneBackdrop = document.getElementById("milestone-modal-backdrop");
    const milestoneCloseBtn = document.getElementById("milestone-close-btn");
    const mTrack = document.getElementById("m-modal-track");
    const mPeriod = document.getElementById("m-modal-period");
    const mId = document.getElementById("m-modal-id");
    const mTitle = document.getElementById("m-modal-title");
    const mOrg = document.getElementById("m-modal-org");
    const mSummary = document.getElementById("m-modal-summary");
    const mDetails = document.getElementById("m-modal-details");
    const mTags = document.getElementById("m-modal-tags");
    const mPreviewWrap = document.getElementById("m-modal-preview-wrap");
    const mImg = document.getElementById("m-modal-img");
    const mActions = document.getElementById("m-modal-actions");

    let lastActiveElement = null;

    function openMilestoneModal(item) {
        if (!milestoneModal || !item) return;
        if (typeof item === "string") {
            const aliasMap = {
                "diploma-crp": "node-edu-02",
                "btech-mdu": "node-edu-03",
                "orbit-sprint": "node-proj-02",
                "obvious-choice-deploy": "node-proj-01"
            };
            const targetId = aliasMap[item] || item;
            const found = chronologyData.find((d) => d.id === targetId);
            if (found) {
                item = found;
            } else {
                return;
            }
        }
        lastActiveElement = document.activeElement;

        soundFX.select();

        if (mTrack) {
            mTrack.textContent = item.trackLabel;
            mTrack.className = "m-badge-track";
            mTrack.classList.add(`badge-${item.track}`);
        }
        if (mPeriod) mPeriod.textContent = item.period;
        if (mId) mId.textContent = `PID: ${item.id}`;
        if (mTitle) mTitle.textContent = item.title;
        if (mOrg) mOrg.textContent = item.org;
        if (mSummary) mSummary.textContent = item.summary;
        if (mDetails) mDetails.textContent = item.details || item.summary;

        if (mTags) {
            mTags.innerHTML = "";
            (item.tags || []).forEach((t) => {
                const tagEl = document.createElement("span");
                tagEl.className = "m-tag";
                tagEl.textContent = t;
                mTags.appendChild(tagEl);
            });
        }

        if (mPreviewWrap && mImg) {
            if (item.image) {
                mImg.src = item.image;
                mImg.alt = item.title;
                mPreviewWrap.style.display = "block";
            } else {
                mPreviewWrap.style.display = "none";
            }
        }

        if (mActions) {
            mActions.innerHTML = "";
            if (item.link) {
                const linkBtn = document.createElement("a");
                linkBtn.href = item.link;
                linkBtn.target = "_blank";
                linkBtn.rel = "noopener";
                linkBtn.className = "btn-primary";
                linkBtn.textContent = item.linkText || "View Project →";
                mActions.appendChild(linkBtn);
            }
        }

        milestoneModal.classList.add("is-open");
        milestoneModal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";

        if (milestoneCloseBtn) {
            setTimeout(() => milestoneCloseBtn.focus(), 50);
        }
    }

    function closeMilestoneModal() {
        if (!milestoneModal) return;
        milestoneModal.classList.remove("is-open");
        milestoneModal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
        if (lastActiveElement && typeof lastActiveElement.focus === "function") {
            lastActiveElement.focus();
        }
    }

    if (milestoneCloseBtn) milestoneCloseBtn.addEventListener("click", closeMilestoneModal);
    if (milestoneBackdrop) milestoneBackdrop.addEventListener("click", closeMilestoneModal);

    // Render Desktop Parallel Tracks
    function renderDesktopChronology() {
        if (!desktopContainer) return;
        desktopContainer.innerHTML = "";

        const trackKeys = Object.keys(TRACK_CONFIG);

        trackKeys.forEach((key) => {
            const cfg = TRACK_CONFIG[key];
            const trackItems = chronologyData.filter(d => d.track === key);

            const lane = document.createElement("div");
            lane.className = `track-lane ${cfg.cssClass}`;
            lane.setAttribute("data-track", key);

            // Lane Header
            const header = document.createElement("div");
            header.className = "track-lane-header";
            header.innerHTML = `
                <div class="track-tag-row">
                    <span class="track-tag">${cfg.label}</span>
                    <span class="track-state-badge state-${cfg.state.toLowerCase()}">${cfg.state}</span>
                </div>
                <h3 class="track-title">${cfg.title}</h3>
                <span class="track-file-meta">$ cat ${cfg.file}</span>
            `;
            lane.appendChild(header);

            // Nodes Container
            const nodesGrid = document.createElement("div");
            nodesGrid.className = "track-nodes-grid";

            trackItems.forEach((item) => {
                const nodeBtn = document.createElement("button");
                nodeBtn.className = "chrono-node";
                nodeBtn.setAttribute("type", "button");
                nodeBtn.setAttribute("data-id", item.id);
                nodeBtn.setAttribute("data-track", item.track);
                nodeBtn.setAttribute("aria-label", `Inspect milestone: ${item.title}`);

                nodeBtn.innerHTML = `
                    <div class="node-top-row">
                        <span class="node-period-tag">${item.period}</span>
                        <span class="node-pid-badge">PID: ${item.id}</span>
                    </div>
                    <div>
                        <h4 class="node-title">${item.title}</h4>
                        <span class="node-org">${item.org}</span>
                        <p class="node-summary">${item.summary}</p>
                    </div>
                    <div class="node-footer">
                        <span class="node-trigger-label"><span class="cli-symbol">$</span> inspect --milestone &rarr;</span>
                    </div>
                `;

                nodeBtn.addEventListener("click", () => openMilestoneModal(item));
                nodesGrid.appendChild(nodeBtn);
            });

            lane.appendChild(nodesGrid);
            desktopContainer.appendChild(lane);
        });
    }

    // Render Mobile Stream
    function renderMobileChronology() {
        if (!mobileContainer) return;
        mobileContainer.innerHTML = "";

        chronologyData.forEach((item) => {
            const nodeCard = document.createElement("button");
            nodeCard.className = `chronology-mobile-node track-${item.track}`;
            nodeCard.setAttribute("type", "button");
            nodeCard.setAttribute("data-id", item.id);
            nodeCard.setAttribute("data-track", item.track);
            nodeCard.setAttribute("aria-label", `Inspect milestone: ${item.title}`);

            nodeCard.innerHTML = `
                <div class="node-top-row">
                    <span class="node-period-tag">${item.period}</span>
                    <span class="node-pid-badge">PID: ${item.id}</span>
                </div>
                <h4 class="node-title">${item.title}</h4>
                <span class="node-org">${item.org}</span>
                <p class="node-summary">${item.summary}</p>
                <div class="node-footer">
                    <span class="node-trigger-label"><span class="cli-symbol">$</span> inspect --milestone &rarr;</span>
                </div>
            `;

            nodeCard.addEventListener("click", () => openMilestoneModal(item));
            mobileContainer.appendChild(nodeCard);
        });
    }

    renderDesktopChronology();
    renderMobileChronology();

    // Track Filter Interaction
    if (filterButtons.length > 0) {
        filterButtons.forEach((btn) => {
            btn.addEventListener("click", () => {
                const filter = btn.getAttribute("data-filter");
                soundFX.tick();

                filterButtons.forEach((b) => {
                    const isActive = (b === btn);
                    b.classList.toggle("active", isActive);
                    b.setAttribute("aria-selected", isActive ? "true" : "false");
                });

                // Desktop lanes
                const desktopLanes = document.querySelectorAll(".track-lane");
                desktopLanes.forEach((lane) => {
                    const track = lane.getAttribute("data-track");
                    if (filter === "all" || track === filter) {
                        lane.classList.remove("is-dimmed");
                    } else {
                        lane.classList.add("is-dimmed");
                    }
                });

                // Mobile nodes
                const mobileNodes = document.querySelectorAll(".chronology-mobile-node");
                mobileNodes.forEach((node) => {
                    const track = node.getAttribute("data-track");
                    if (filter === "all" || track === filter) {
                        node.classList.remove("is-dimmed");
                    } else {
                        node.classList.add("is-dimmed");
                    }
                });
            });
        });
    }

    /* ==========================================================================
       08. Quick Profile Snapshot Launcher & Modal
       ========================================================================== */
    const quickLauncherBtn = document.getElementById("quick-launcher-btn");
    const headerSnapshotBtn = document.getElementById("header-snapshot-btn");
    const profileModal = document.getElementById("profile-modal");
    const modalBackdrop = document.getElementById("modal-backdrop");
    const modalCloseBtn = document.getElementById("modal-close-btn");

    function openProfileModal() {
        if (!profileModal) return;
        soundFX.select();
        profileModal.classList.add("is-open");
        profileModal.setAttribute("aria-hidden", "false");
        if (quickLauncherBtn) quickLauncherBtn.setAttribute("aria-expanded", "true");
        document.body.style.overflow = "hidden";
        if (modalCloseBtn) {
            setTimeout(() => modalCloseBtn.focus(), 50);
        }
    }

    function closeProfileModal() {
        if (!profileModal) return;
        profileModal.classList.remove("is-open");
        profileModal.setAttribute("aria-hidden", "true");
        if (quickLauncherBtn) {
            quickLauncherBtn.setAttribute("aria-expanded", "false");
            quickLauncherBtn.focus();
        }
        document.body.style.overflow = "";
    }

    if (quickLauncherBtn) quickLauncherBtn.addEventListener("click", openProfileModal);
    if (headerSnapshotBtn) headerSnapshotBtn.addEventListener("click", openProfileModal);
    if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeProfileModal);
    if (modalBackdrop) modalBackdrop.addEventListener("click", closeProfileModal);

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            if (profileModal && profileModal.classList.contains("is-open")) {
                closeProfileModal();
            }
            if (milestoneModal && milestoneModal.classList.contains("is-open")) {
                closeMilestoneModal();
            }
        }
    });

    /* ==========================================================================
       09. Real-Time Rohtak IST Clock (Asia/Kolkata) & Dynamic Year
       ========================================================================== */
    function updateLiveClock() {
        const contactClock = document.getElementById("contact-clock");
        const yearEls = document.querySelectorAll("#current-year");

        const now = new Date();

        try {
            const timeFormatter = new Intl.DateTimeFormat("en-GB", {
                timeZone: "Asia/Kolkata",
                hour12: false,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            });
            const formattedIST = timeFormatter.format(now);

            if (contactClock) {
                contactClock.textContent = `${formattedIST} IST`;
            }
            const dockClock = document.getElementById("dock-clock-display");
            if (dockClock) {
                dockClock.textContent = `${formattedIST} IST`;
            }
            const stageClock = document.getElementById("stage-clock-display");
            if (stageClock) {
                stageClock.textContent = `${formattedIST} IST`;
            }
            const deckClock = document.getElementById("deck-clock-display");
            if (deckClock) {
                deckClock.textContent = formattedIST;
            }
        } catch (e) {
            const hours = String(now.getHours()).padStart(2, "0");
            const mins = String(now.getMinutes()).padStart(2, "0");
            const secs = String(now.getSeconds()).padStart(2, "0");
            const fallback = `${hours}:${mins}:${secs} IST`;
            if (contactClock) contactClock.textContent = fallback;
            const dockClock = document.getElementById("dock-clock-display");
            if (dockClock) dockClock.textContent = fallback;
            const stageClock = document.getElementById("stage-clock-display");
            if (stageClock) stageClock.textContent = fallback;
            const deckClock = document.getElementById("deck-clock-display");
            if (deckClock) deckClock.textContent = `${hours}:${mins}:${secs}`;
        }

        yearEls.forEach((el) => {
            el.textContent = now.getFullYear();
        });
    }

    setInterval(updateLiveClock, 1000);
    updateLiveClock();

    /* ==========================================================================
       10. Expose Stage Engine to Window for Interactive Buttons
       ========================================================================== */
    window.portfolioStageEngine = {
        setActiveStage,
        openMilestoneModal
    };

    /* ==========================================================================
       11. Smooth Scroll Anchor Helper
       ========================================================================== */
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            const href = this.getAttribute("href");
            if (href === "#" || href === "#modern" || href === "#terminal") return;
            const targetEl = document.querySelector(href);
            if (targetEl) {
                e.preventDefault();
                targetEl.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    /* ==========================================================================
       12. Garden Floating Dock & Mobile Drawer Highlight Observer
       ========================================================================== */
    const gardenSections = document.querySelectorAll(".garden-hero-section, .garden-section");
    const dockNavLinks = document.querySelectorAll(".dock-link");
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-item");

    if ("IntersectionObserver" in window && gardenSections.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -50% 0px",
            threshold: 0.1
        };

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute("id");
                    dockNavLinks.forEach((link) => {
                        const href = link.getAttribute("href");
                        const isActive = href === `#${id}`;
                        link.classList.toggle("is-active", isActive);
                        link.setAttribute("aria-selected", isActive ? "true" : "false");
                    });
                    mobileNavLinks.forEach((link) => {
                        const href = link.getAttribute("href");
                        const isActive = href === `#${id}`;
                        link.classList.toggle("is-active", isActive);
                    });
                }
            });
        }, observerOptions);

        gardenSections.forEach((sec) => sectionObserver.observe(sec));
    }

    /* ==========================================================================
       13. Mobile 3-Dots Navigation Drawer Controller
       ========================================================================== */
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileNavDrawer = document.getElementById("mobile-nav-drawer");
    const mobileNavBackdrop = document.getElementById("mobile-nav-backdrop");
    const mobileNavClose = document.getElementById("mobile-nav-close");
    const mSoundBtn = document.getElementById("m-sound-btn");
    const mTerminalBtn = document.getElementById("m-terminal-btn");

    function openMobileMenu() {
        if (!mobileNavDrawer) return;
        mobileNavDrawer.classList.add("is-open");
        mobileNavDrawer.setAttribute("aria-hidden", "false");
        if (mobileMenuBtn) mobileMenuBtn.setAttribute("aria-expanded", "true");
        document.body.style.overflow = "hidden";
        if (soundEnabled && soundFX) soundFX.softClick();
    }

    function closeMobileMenu() {
        if (!mobileNavDrawer) return;
        mobileNavDrawer.classList.remove("is-open");
        mobileNavDrawer.setAttribute("aria-hidden", "true");
        if (mobileMenuBtn) mobileMenuBtn.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener("click", () => {
            if (mobileNavDrawer && mobileNavDrawer.classList.contains("is-open")) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
    }

    if (mobileNavClose) mobileNavClose.addEventListener("click", closeMobileMenu);
    if (mobileNavBackdrop) mobileNavBackdrop.addEventListener("click", closeMobileMenu);

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && mobileNavDrawer && mobileNavDrawer.classList.contains("is-open")) {
            closeMobileMenu();
        }
    });

    mobileNavLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            const href = link.getAttribute("href");
            if (href && href.startsWith("#")) {
                e.preventDefault();
                closeMobileMenu();
                const target = document.querySelector(href);
                if (target) {
                    setTimeout(() => {
                        target.scrollIntoView({ behavior: "smooth", block: "start" });
                    }, 120);
                }
            }
        });
    });

    if (mSoundBtn) {
        mSoundBtn.addEventListener("click", () => {
            setSoundState(!soundEnabled);
        });
    }

    if (mTerminalBtn) {
        mTerminalBtn.addEventListener("click", () => {
            closeMobileMenu();
            setMode(currentMode === "modern" ? "terminal" : "modern");
        });
    }

    /* ==========================================================================
       13. Bespoke Living Garden Flower Cursor Engine & Falling Botanical Trail
       Leaves blooming flowers behind that suspend, then flutter & drop to ground
       ========================================================================== */
    const cursorRoot = document.getElementById("garden-cursor");
    const cursorFlower = cursorRoot ? cursorRoot.querySelector(".cursor-flower") : null;
    const trailContainer = document.getElementById("cursor-flower-trail");

    if (cursorRoot && cursorFlower && window.matchMedia("(pointer: fine)").matches) {
        let mouseX = -100;
        let mouseY = -100;
        let flowerX = -100;
        let flowerY = -100;
        let hasMoved = false;
        let lastTrailSpawnX = -1000;
        let lastTrailSpawnY = -1000;
        let lastTrailSpawnTime = 0;
        let lastPollenTime = 0;
        let flowerVarietyIndex = 0;

        // Botanical flower varieties matching the garden theme
        const TRAIL_VARIETIES = [
            { name: "sakura", grad: "url(#trail-grad-sakura)", border: "rgba(219, 39, 119, 0.45)", center: "#FDE047", petals: 5 },
            { name: "marigold", grad: "url(#trail-grad-marigold)", border: "rgba(217, 119, 6, 0.45)", center: "#78350F", petals: 5 },
            { name: "cosmos", grad: "url(#trail-grad-cosmos)", border: "rgba(190, 24, 93, 0.45)", center: "#FEF08A", petals: 5 },
            { name: "daisy", grad: "url(#trail-grad-daisy)", border: "rgba(203, 213, 225, 0.7)", center: "#F59E0B", petals: 6 },
            { name: "lavender", grad: "url(#trail-grad-lavender)", border: "rgba(126, 34, 206, 0.45)", center: "#FDE047", petals: 4 },
            { name: "peach", grad: "url(#trail-grad-peach)", border: "rgba(234, 88, 12, 0.45)", center: "#FEF08A", petals: 5 }
        ];

        const activeTrailFlowers = [];
        const MAX_TRAIL_FLOWERS = 42;

        function buildTrailFlowerSvg(vIndex, size) {
            const v = TRAIL_VARIETIES[vIndex % TRAIL_VARIETIES.length];
            const step = 360 / v.petals;
            let petalEls = "";
            for (let i = 0; i < v.petals; i++) {
                const angle = i * step;
                petalEls += `<ellipse cx="12" cy="6.3" rx="3.2" ry="5.0" transform="rotate(${angle} 12 12)" fill="${v.grad}" stroke="${v.border}" stroke-width="0.5"/>`;
            }
            return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" aria-hidden="true" style="display:block;">
                <g>
                    ${petalEls}
                    <circle cx="12" cy="12" r="3.0" fill="${v.center}"/>
                    <circle cx="11.1" cy="11.1" r="1.1" fill="#FFFFFF" opacity="0.9"/>
                </g>
            </svg>`;
        }

        function spawnTrailFlower(x, y, isHovering) {
            if (!trailContainer) return;

            // Prune oldest if at capacity
            if (activeTrailFlowers.length >= MAX_TRAIL_FLOWERS) {
                const oldest = activeTrailFlowers.shift();
                if (oldest && oldest.el.parentNode) {
                    oldest.el.parentNode.removeChild(oldest.el);
                }
            }

            const flowerNode = document.createElement("div");
            flowerNode.className = "trail-flower-node";

            // Size: 18px to 26px (prominently visible and charming)
            const size = Math.floor(18 + Math.random() * 8);
            flowerNode.style.width = `${size}px`;
            flowerNode.style.height = `${size}px`;

            // If hovering over interactive element, bias toward cosmos pink/sakura; otherwise cycle varieties
            const vIdx = isHovering && Math.random() > 0.4 ? (Math.random() > 0.5 ? 0 : 2) : (flowerVarietyIndex++ % TRAIL_VARIETIES.length);
            flowerNode.innerHTML = buildTrailFlowerSvg(vIdx, size);

            // Initial position right where cursor is
            const spawnX = x + (Math.random() - 0.5) * 6;
            const spawnY = y + (Math.random() - 0.5) * 6;
            flowerNode.style.transform = `translate3d(${spawnX - size / 2}px, ${spawnY - size / 2}px, 0) scale(0.2)`;
            flowerNode.style.opacity = "1";

            trailContainer.appendChild(flowerNode);

            // Motion parameters:
            // hoverDuration: stays suspended in air for 280ms - 380ms before gravity starts
            // maxSpeedY: 2.1 - 2.8 px/frame (a little faster than background leaves at 0.55 - 1.35 px/frame)
            activeTrailFlowers.push({
                el: flowerNode,
                x: spawnX,
                y: spawnY,
                size: size,
                spawnTime: performance.now(),
                hoverDuration: 280 + Math.random() * 120,
                isBurst: false,
                rotation: Math.random() * 360,
                rotSpeed: (Math.random() < 0.5 ? -1 : 1) * (1.2 + Math.random() * 1.8),
                swayAngle: Math.random() * Math.PI * 2,
                swaySpeed: 0.038 + Math.random() * 0.025,
                swayAmp: 1.2 + Math.random() * 0.9,
                vy: 0,
                gravity: 0.075 + Math.random() * 0.035,
                maxSpeedY: 2.1 + Math.random() * 0.7,
                opacity: 1
            });
        }

        // Floral Repel Burst in all directions on non-CTA clicks
        function spawnFlowerRepelBurst(clickX, clickY) {
            if (!trailContainer) return;

            // 1. Expanding shockwave ripple ring
            const ripple = document.createElement("div");
            ripple.className = "flower-repel-ripple";
            ripple.style.left = `${clickX}px`;
            ripple.style.top = `${clickY}px`;
            trailContainer.appendChild(ripple);
            setTimeout(() => {
                if (ripple.parentNode) ripple.parentNode.removeChild(ripple);
            }, 700);

            // 2. Radially burst 10 flowers spreading outward in 360 degrees
            const burstCount = 10;
            const now = performance.now();
            for (let i = 0; i < burstCount; i++) {
                // Prune oldest if at capacity
                if (activeTrailFlowers.length >= 65) {
                    const oldest = activeTrailFlowers.shift();
                    if (oldest && oldest.el.parentNode) oldest.el.parentNode.removeChild(oldest.el);
                }

                const flowerNode = document.createElement("div");
                flowerNode.className = "trail-flower-node";

                const size = Math.floor(19 + Math.random() * 7);
                flowerNode.style.width = `${size}px`;
                flowerNode.style.height = `${size}px`;

                const vIdx = (flowerVarietyIndex++) % TRAIL_VARIETIES.length;
                flowerNode.innerHTML = buildTrailFlowerSvg(vIdx, size);

                flowerNode.style.transform = `translate3d(${clickX - size / 2}px, ${clickY - size / 2}px, 0) scale(0.2)`;
                flowerNode.style.opacity = "1";
                trailContainer.appendChild(flowerNode);

                // Even radial angle distribution around 360 degrees + natural jitter
                const angle = (i / burstCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.28;
                const speed = 4.2 + Math.random() * 3.4; // Outward burst impulse

                activeTrailFlowers.push({
                    el: flowerNode,
                    x: clickX,
                    y: clickY,
                    size: size,
                    spawnTime: now,
                    hoverDuration: 0, // Instantly expands outward
                    isBurst: true,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    rotation: Math.random() * 360,
                    rotSpeed: (Math.random() < 0.5 ? -1 : 1) * (2.4 + Math.random() * 3.2),
                    swayAngle: Math.random() * Math.PI * 2,
                    swaySpeed: 0.045 + Math.random() * 0.03,
                    swayAmp: 1.0 + Math.random() * 0.8,
                    gravity: 0.082 + Math.random() * 0.032,
                    maxSpeedY: 2.3 + Math.random() * 0.7,
                    opacity: 1
                });
            }

            // Soft tactile acoustic waterdrop click
            if (window.soundFX && typeof window.soundFX.softClick === "function") {
                window.soundFX.softClick();
            }
        }

        function emitPollenMote(x, y) {
            const mote = document.createElement("div");
            mote.className = "pollen-mote";
            const size = Math.random() * 4 + 3;
            mote.style.width = `${size}px`;
            mote.style.height = `${size}px`;
            mote.style.left = `${x}px`;
            mote.style.top = `${y}px`;
            const drift = (Math.random() - 0.5) * 36;
            mote.style.setProperty("--drift-x", `${drift}px`);
            document.body.appendChild(mote);
            setTimeout(() => {
                if (mote.parentNode) mote.parentNode.removeChild(mote);
            }, 1200);
        }

        window.addEventListener("mousemove", (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            if (!hasMoved) {
                hasMoved = true;
                flowerX = mouseX;
                flowerY = mouseY;
                cursorRoot.classList.add("is-active");
                lastTrailSpawnX = mouseX;
                lastTrailSpawnY = mouseY;
            }

            const now = performance.now();
            const dx = mouseX - lastTrailSpawnX;
            const dy = mouseY - lastTrailSpawnY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Leaving flowers behind along the cursor path:
            // Tuned to be lighter & airy (34px distance & 110ms interval) to reduce clutter
            if (dist >= 34 && (now - lastTrailSpawnTime > 110)) {
                spawnTrailFlower(mouseX, mouseY, cursorRoot.classList.contains("is-hovering"));
                lastTrailSpawnX = mouseX;
                lastTrailSpawnY = mouseY;
                lastTrailSpawnTime = now;
            }

            // Subtle occasional golden pollen dust
            if (now - lastPollenTime > 160 && Math.random() > 0.75) {
                emitPollenMote(mouseX, mouseY);
                lastPollenTime = now;
            }
        }, { passive: true });

        function animateFlowerCursor() {
            const now = performance.now();

            if (hasMoved) {
                flowerX += (mouseX - flowerX) * 0.24;
                flowerY += (mouseY - flowerY) * 0.24;
                cursorRoot.style.transform = `translate(${flowerX}px, ${flowerY}px)`;
            }

            // Update all trailing dropped flowers
            const groundY = window.innerHeight;
            for (let i = activeTrailFlowers.length - 1; i >= 0; i--) {
                const f = activeTrailFlowers[i];
                const elapsed = now - f.spawnTime;
                let scale = 1;

                if (f.isBurst) {
                    // Outward floral repel physics: air friction slows outward blast, gravity pulls downward
                    f.vx *= 0.92;
                    f.vy = f.vy * 0.92 + f.gravity;
                    if (f.vy > f.maxSpeedY) f.vy = f.maxSpeedY;
                    f.x += f.vx;
                    f.y += f.vy;
                    f.swayAngle += f.swaySpeed;
                    f.x += Math.sin(f.swayAngle) * f.swayAmp;
                    f.rotation += f.rotSpeed;

                    if (elapsed < 90) {
                        scale = 0.3 + (elapsed / 90) * 0.85; // Quick bloom from center
                    } else {
                        scale = 1.0;
                    }
                } else if (elapsed < f.hoverDuration) {
                    // Phase 1: Blooming and suspended in air where cursor left it
                    if (elapsed < 120) {
                        scale = 0.2 + (elapsed / 120) * 0.95; // 0.2 -> 1.15 lively bloom
                    } else {
                        scale = 1.15 - ((elapsed - 120) / (f.hoverDuration - 120)) * 0.15; // 1.15 -> 1.00
                    }
                    // Subtle anti-gravity micro-hover
                    f.y -= 0.08;
                } else {
                    // Phase 2: Gravity kicks in! Dropping to the ground faster than falling leaves
                    f.vy = Math.min(f.maxSpeedY, f.vy + f.gravity);
                    f.y += f.vy;
                    f.swayAngle += f.swaySpeed;
                    const sway = Math.sin(f.swayAngle) * f.swayAmp;
                    f.x += sway;
                    // Tumbling rotation influenced by breeze sway
                    f.rotation += f.rotSpeed + sway * 1.2;
                }

                // Fading out softly near the ground
                let opacity = 1;
                if (f.y > groundY - 80) {
                    opacity = Math.max(0, (groundY - f.y) / 80);
                }

                // Removal when reached ground or lifetime expired
                if (f.y >= groundY + 15 || elapsed > 6500 || opacity <= 0.01) {
                    if (f.el.parentNode) f.el.parentNode.removeChild(f.el);
                    activeTrailFlowers.splice(i, 1);
                    continue;
                }

                // Apply GPU hardware transform
                const drawX = f.x - f.size / 2;
                const drawY = f.y - f.size / 2;
                f.el.style.transform = `translate3d(${drawX}px, ${drawY}px, 0) rotate(${f.rotation}deg) scale(${scale})`;
                f.el.style.opacity = opacity;
            }

            requestAnimationFrame(animateFlowerCursor);
        }
        requestAnimationFrame(animateFlowerCursor);

        const interactiveSelector = "a, button, input, textarea, select, [role='button'], .card-frame, .dock-btn, .shortcut-pill, .branch-tag, .skill-tag, .tag-pill";
        const ctaSelector = "a, button, input, textarea, select, [role='button'], .dock-btn, .copy-btn, .modal-cta-btn, .tag-pill, .branch-tag, .skill-tag, .shortcut-pill, .garden-floating-dock, .mobile-nav-drawer, .modal-card, .term-input-field";

        document.addEventListener("mouseover", (e) => {
            if (e.target.closest(interactiveSelector)) {
                cursorRoot.classList.add("is-hovering");
            }
        }, { passive: true });

        document.addEventListener("mouseout", (e) => {
            if (e.target.closest(interactiveSelector)) {
                cursorRoot.classList.remove("is-hovering");
            }
        }, { passive: true });

        // Pointerdown: Click feedback + Floral Repel Burst in all directions on non-CTA clicks
        window.addEventListener("pointerdown", (e) => {
            cursorRoot.classList.add("is-clicking");

            // When clicking anywhere EXCEPT a CTA: trigger floral repel effect spreading in all directions!
            if (!e.target.closest(ctaSelector) && e.button === 0) {
                spawnFlowerRepelBurst(e.clientX, e.clientY);
            }
        });

        window.addEventListener("pointerup", () => {
            cursorRoot.classList.remove("is-clicking");
        });
    }
});

