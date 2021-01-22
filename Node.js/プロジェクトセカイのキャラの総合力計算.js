   //const RARITY = CARD_PREFIX[CARD_POS].cardParameters[RARITY_POWER[CARD_PREFIX[CARD_POS].rarity]　とかって書いとけばよかった...
   const pow1 =
        CARD_PREFIX[CARD_POS].rarity > 2
            ? CARD_PREFIX[CARD_POS].rarity === 4
                ? CARD_PREFIX[CARD_POS].cardParameters[RARITY_POWER[CARD_PREFIX[CARD_POS].rarity][0]].power + 400
                : CARD_PREFIX[CARD_POS].cardParameters[RARITY_POWER[CARD_PREFIX[CARD_POS].rarity][0]].power + 300
            : CARD_PREFIX[CARD_POS].cardParameters[RARITY_POWER[CARD_PREFIX[CARD_POS].rarity][0]].power;
    const pow2 =
        CARD_PREFIX[CARD_POS].rarity > 2
            ? CARD_PREFIX[CARD_POS].rarity === 4
                ? CARD_PREFIX[CARD_POS].cardParameters[RARITY_POWER[CARD_PREFIX[CARD_POS].rarity][1]].power + 400
                : CARD_PREFIX[CARD_POS].cardParameters[RARITY_POWER[CARD_PREFIX[CARD_POS].rarity][1]].power + 300
            : CARD_PREFIX[CARD_POS].cardParameters[RARITY_POWER[CARD_PREFIX[CARD_POS].rarity][1]].power;
    const pow3 =
        CARD_PREFIX[CARD_POS].rarity > 2
            ? CARD_PREFIX[CARD_POS].rarity === 4
                ? CARD_PREFIX[CARD_POS].cardParameters[RARITY_POWER[CARD_PREFIX[CARD_POS].rarity][2]].power + 400
                : CARD_PREFIX[CARD_POS].cardParameters[RARITY_POWER[CARD_PREFIX[CARD_POS].rarity][2]].power + 300
            : CARD_PREFIX[CARD_POS].cardParameters[RARITY_POWER[CARD_PREFIX[CARD_POS].rarity][2]].power;
    const TOTAL_POWER = pow1 + pow2 + pow3;
