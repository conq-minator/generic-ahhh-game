import { Game } from './core/Game.js';

/**
 * Entry point — Boss Hunter RPG
 */
const game = new Game();

// Expose game instance for debugging
window.__game = game;

console.log('%c⚔ Boss Hunter RPG loaded ⚔', 'color: #f7c948; font-size: 16px; font-weight: bold;');
console.log('Click START GAME to begin. WASD to move, Mouse to look, Click to attack, Space to dodge.');
