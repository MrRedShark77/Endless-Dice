const CARDS = {
    d1: [
        "Side Increaser",
        x=>`Increase ${['your',"enemy's"][x]} maximum number of side by <b class='green'>1</b>`,
        x=>data.round <= 10,
        x=>{
            data[x].max_s += 1
        },
    ],
    d2: [
        "Side Increaser",
        x=>`Increase ${['your',"enemy's"][x]} maximum number of side by <b class='green'>2</b>`,
        x=>true,
        x=>{
            data[x].max_s += 2
        },
    ],
    d3: [
        "Minimum Side Increaser",
        x=>`Increase ${['your',"enemy's"][x]} minimum number of side by <b class='green'>1</b>`,
        x=>data[x].min_s<data[x].max_s && data.round <= 10,
        x=>{
            data[x].min_s += 1
        },
    ],
    d4: [
        "Side Translation",
        x=>`Increase ${['your',"enemy's"][x]} minimum & maximum number of side by <b class='green'>1</b>`,
        x=>true,
        x=>{
            data[x].min_s += 1
            data[x].max_s += 1
        },
    ],
    d5: [
        "Side Re-Increaser",
        x=>`Increase ${['your',"enemy's"][x]} maximum number of side by <b class='green'>4</b>`,
        x=> data.round > 10,
        x=>{
            data[x].max_s += 4
        },
    ],
    d6: [
        "Side Expansion",
        x=>`Increase ${['your',"enemy's"][x]} minimum & maximum number of side by <b class='green'>2</b>`,
        x=>true,
        x=>{
            data[x].min_s += 2
            data[x].max_s += 2
        },
    ],
    d7: [
        "Scrambler",
        x=>`${['Your',"Enemy's"][x]} spawned Dice has 10% chance to transform into <b class='green'>Dice Scrambler</b>`,
        x=>!data[x].cards.includes("d7"),
        x=>{},
    ],

    s1: [
        "Sacrifice for Multiplier",
        x=>`Sacrifice <b class='green'>80%</b> of your health for increasing the multiplier of product by <b class='green'>1</b>`,
        x=>x=="player" && data.round <= 20,
        x=>{
            data[x].health = Math.ceil(data[x].health*0.2)
            data[x].mult += 1
        },
    ],
    s2: [
        "Sacrifice for Multiplier",
        x=>`Sacrifice <b class='green'>95%</b> of your health for increasing the multiplier of product by <b class='green'>3</b>`,
        x=>x=="player" && data.round > 20,
        x=>{
            data[x].health = Math.ceil(data[x].health*0.05)
            data[x].mult += 3
        },
    ],

    e1: [
        "Energy Increaser",
        x=>`Increase ${['your',"enemy's"][x]} maximum energy by <b class='green'>3</b>`,
        x=>data[x].maxEnergy<25,
        x=>{
            data[x].maxEnergy += 3
        },
    ],
    e2: [
        "Energy Increaser",
        x=>`Increase ${['your',"enemy's"][x]} maximum energy by <b class='green'>5</b>`,
        x=>data[x].maxEnergy<25,
        x=>{
            data[x].maxEnergy += 5
        },
    ],
    e3: [
        "Free Energy",
        x=>`Consuming ${['your',"enemy's"][x]} energy has <b class='green'>20%</b> chance to get <b class='green'>2</b> free energy`,
        x=>!data[x].cards.includes("e3"),
        x=>{},
    ],
    
    en1: [
        "Enemy's Oktoberfest",
        x=>`Increase enemy's starting health by <b class='green'>50%</b>`,
        x=>x=="enemy",
        x=>{
            data.enemy.maxHealth = Math.floor(data.enemy.maxHealth*1.5)
        },
    ],
    en2: [
        "Stronger Enemy",
        x=>`Increase enemy's multiplier by <b class='green'>1</b>`,
        x=>x=="enemy" && data.round <= 10,
        x=>{
            data.enemy.mult += 1
        },
    ],
    en3: [
        "Mega Enemy",
        x=>`Increase enemy's multiplier by <b class='green'>2</b>`,
        x=>x=="enemy" && data.round > 10,
        x=>{
            data.enemy.mult += 2
        },
    ],
    en4: [
        "Catastrophic",
        x=>`Increase enemy's multiplier by <b class='green'>4</b>`,
        x=>x=="enemy" && data.round > 20,
        x=>{
            data.enemy.mult += 4
        },
    ],
    en5: [
        "Giant Enemy",
        x=>`Increase enemy's starting health by <b class='green'>100%</b>`,
        x=>x=="enemy" && data.round > 10,
        x=>{
            data.enemy.maxHealth = Math.floor(data.enemy.maxHealth*2)
        },
    ],

    m1: [
        "Multiplier Increaser",
        x=>`Increase ${['your',"enemy's"][x]} multiplier by <b class='green'>0.25</b>`,
        x=>true,
        x=>{
            data[x].mult += 0.25
        },
    ],
    m2: [
        "Multiplier Expansion",
        x=>`Increase ${['your',"enemy's"][x]} multiplier by <b class='green'>0.75</b>`,
        x=>data.round > 10,
        x=>{
            data[x].mult += 0.75
        },
    ],

    o1: [
        "Cleaner",
        x=>`Clear all of your dices`,
        x=>x=="player",
        x=>{
            data.p_grid = {}
        },
    ],
    o2: [
        "Normality",
        x=>`Normal dice can attack <b class='green'>${['25%',"50%"][x]}</b> of ${['your',"enemy's"][x]} product to ${['an enemy',"you"][x]}`,
        x=>!data[x].cards.includes("o2"),
        x=>{},
    ],

    curse1: [
        "Cursed Multiplier",
        x=>`Multiply your number of side by <b class='green'>2</b>, but divide your multiplier by <b class='red'>3</b>`,
        x=>x=="player"&&Math.random()<1/5,
        x=>{
            data[x].min_s *= 2
            data[x].max_s *= 2

            data[x].mult /= 3
        },
    ],
    curse2: [
        "Cursed Heart",
        x=>`If you pass a round, will increase your health by <b class='green'>10%</b>, but increase enemy's multiplier by <b class='red'>5%</b> for passing it`,
        x=>x=="player" && !data[x].cards.includes("curse2") && Math.random()<1/5,
        x=>{},
    ],

    c1: [
        "Critical Chance",
        x=>`Increase ${['your',"enemy's"][x]} critical chance by <b class='green'>5%</b>`,
        x=>data[x].crit<0.5,
        x=>{
            data[x].crit += 0.05
        },
    ],
}