/**
 * LootPanel — post-boss loot display and NFT minting trigger
 */
export class LootPanel {
  constructor(onMint, onContinue) {
    this.panel = document.getElementById('loot-panel');
    this.lootIcon = document.getElementById('loot-icon');
    this.lootName = document.getElementById('loot-name');
    this.lootRarity = document.getElementById('loot-rarity');
    this.lootDescription = document.getElementById('loot-description');
    this.mintBtn = document.getElementById('mint-nft-btn');
    this.continueBtn = document.getElementById('continue-btn');

    this.currentGear = null;

    this.mintBtn.addEventListener('click', () => {
      if (this.currentGear && onMint) onMint(this.currentGear);
    });

    this.continueBtn.addEventListener('click', () => {
      this.hide();
      if (onContinue) onContinue();
    });
  }

  show(gearDrop) {
    this.currentGear = gearDrop;
    this.lootIcon.textContent = gearDrop.icon || '🎁';
    this.lootName.textContent = gearDrop.name;
    this.lootRarity.textContent = gearDrop.rarity;
    this.lootDescription.textContent = gearDrop.description;

    // Color rarity
    const rarityColors = {
      'Common': '#aaa',
      'Rare': '#3498db',
      'Epic': '#a855f7',
      'Legendary': '#f7c948'
    };
    this.lootRarity.style.color = rarityColors[gearDrop.rarity] || '#fff';

    // Reset minting button state for the new item
    this.setMintingState('default');

    this.panel.classList.remove('hidden');
  }

  hide() {
    this.panel.classList.add('hidden');
    this.currentGear = null;
  }

  setMintingState(state) {
    if (state === 'minting') {
      this.mintBtn.textContent = '⏳ Minting...';
      this.mintBtn.disabled = true;
    } else if (state === 'success') {
      this.mintBtn.textContent = '✅ Minted & Equipped!';
      this.mintBtn.disabled = true;
    } else if (state === 'error') {
      this.mintBtn.textContent = '❌ Failed — Retry';
      this.mintBtn.disabled = false;
    } else {
      this.mintBtn.textContent = '🔗 Mint as NFT';
      this.mintBtn.disabled = false;
    }
  }
}
