export interface weapon {
    id: number;
    name: string;
    story: string;
    addedStrength: number;
    addedIntelligence: number;
    addedPower: number;
    addedHealth: number;
    addedShield: number;
    maxUses: number
}

export interface Superhuman {
    id: number;
    name: string;
    dead: boolean;
    strength: number; 
    intelligence: number; 
    power: number; 
    story: string;
    healthMax: number; 
    shieldMax: number; 
    powerType: string; 
    heroType: string;
    currentDamage?: Number;
    weapon?: weapon
}





