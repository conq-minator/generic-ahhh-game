const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

let db = null;
let collection, getDocs, doc, setDoc, getDoc, updateDoc;

// Initialize Firebase with API Keys
try {
    const { initializeApp } = require('firebase/app');
    const firestore = require('firebase/firestore');
    
    // NOTE: Replace these with your actual Firebase Project config!
    // Go to Firebase Console -> Project Settings -> General -> Your apps -> Web app
    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_PROJECT_ID.appspot.com",
      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      appId: "YOUR_APP_ID"
    };
    
    // Only initialize if the user replaced the placeholder
    if (firebaseConfig.apiKey !== "YOUR_API_KEY") {
        const firebaseApp = initializeApp(firebaseConfig);
        db = firestore.getFirestore(firebaseApp);
        
        // Grab firestore functions
        collection = firestore.collection;
        getDocs = firestore.getDocs;
        doc = firestore.doc;
        setDoc = firestore.setDoc;
        getDoc = firestore.getDoc;
        updateDoc = firestore.updateDoc;
        
        console.log("🔥 Connected to Firebase Firestore successfully using API Key!");
    } else {
        throw new Error("API Key not configured");
    }
} catch (error) {
    console.error("\n⚠️ Firebase Setup Required ⚠️");
    if (error.code === 'MODULE_NOT_FOUND') {
        console.error("1. Please run: npm install firebase");
    } else if (error.message === "API Key not configured") {
        console.error("1. Please update the 'firebaseConfig' object in server.js with your actual Firebase API keys.");
    } else {
        console.error("Failed to initialize Firebase:", error.message);
    }
    console.log("-> Falling back to temporary in-memory storage until Firebase is configured.\n");
}

const DEFAULT_GUILDS = [
    { name: 'Dragon Riders', members: 45, donated: '3.2', emoji: '🐉' },
    { name: 'Shadow Legion', members: 38, donated: '2.8', emoji: '🌑' },
    { name: 'Crystal Guard', members: 52, donated: '2.5', emoji: '💎' },
    { name: 'Storm Chasers', members: 29, donated: '1.9', emoji: '⛈️' }
];

// Fallback in-memory storage array
let fallbackGuilds = [...DEFAULT_GUILDS];

// Helper to get guilds
async function getGuilds() {
    if (!db) return fallbackGuilds;
    
    try {
        const guildsCol = collection(db, 'guilds');
        const snapshot = await getDocs(guildsCol);
        if (snapshot.empty) {
            // Seed defaults into Firebase if empty
            for (const guild of DEFAULT_GUILDS) {
                const docRef = doc(db, 'guilds', guild.name);
                await setDoc(docRef, guild);
            }
            return DEFAULT_GUILDS;
        }
        
        let fetchedGuilds = [];
        snapshot.forEach(docSnap => {
            fetchedGuilds.push(docSnap.data());
        });
        
        // Sort by donated amount
        return fetchedGuilds.sort((a, b) => parseFloat(b.donated) - parseFloat(a.donated));
    } catch (e) {
        console.error("Firebase read error:", e);
        return fallbackGuilds;
    }
}

// API Endpoints
app.get('/api/guilds', async (req, res) => {
    const guilds = await getGuilds();
    res.json(guilds);
});

app.post('/api/guilds', async (req, res) => {
    const newGuild = req.body;
    if (!newGuild.name) {
        return res.status(400).json({ error: 'Guild name is required' });
    }

    if (!db) {
        // Fallback behavior
        if (fallbackGuilds.some(g => g.name.toLowerCase() === newGuild.name.toLowerCase())) {
            return res.status(400).json({ error: 'Guild already exists' });
        }
        fallbackGuilds.push(newGuild);
        return res.status(201).json(newGuild);
    }

    try {
        const docRef = doc(db, 'guilds', newGuild.name);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
            return res.status(400).json({ error: 'Guild already exists in Firebase' });
        }
        
        await setDoc(docRef, newGuild);
        res.status(201).json(newGuild);
    } catch (e) {
        console.error("Firebase write error:", e);
        res.status(500).json({ error: 'Failed to create guild in Firebase' });
    }
});

app.post('/api/guilds/join', async (req, res) => {
    const { guildName } = req.body;
    
    if (!db) {
        // Fallback behavior
        const guild = fallbackGuilds.find(g => g.name === guildName);
        if (guild) {
            guild.members += 1;
            return res.json(guild);
        } else {
            return res.status(404).json({ error: 'Guild not found' });
        }
    }

    try {
        const docRef = doc(db, 'guilds', guildName);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
            const guildData = docSnap.data();
            guildData.members = (guildData.members || 0) + 1;
            await updateDoc(docRef, { members: guildData.members });
            res.json(guildData);
        } else {
            res.status(404).json({ error: 'Guild not found in Firebase' });
        }
    } catch (e) {
        console.error("Firebase update error:", e);
        res.status(500).json({ error: 'Failed to join guild in Firebase' });
    }
});

app.listen(PORT, () => {
    console.log(`CreatorVerse Backend running at http://localhost:${PORT}`);
});
