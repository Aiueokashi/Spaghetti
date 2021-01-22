    const SKILL =
        CARD_PREFIX[CARD_POS].skillId > 4 && CARD_PREFIX[CARD_POS].skillId < 11
            ? CARD_PREFIX[CARD_POS].skillId < 8
                ? CARD_SKILL[CARD_PREFIX[CARD_POS].skillId - 1].description
                      .replace("{{" + CARD_PREFIX[CARD_POS].skillId + ";d}}", CARD_SKILL[CARD_PREFIX[CARD_POS].skillId - 1].skillEffects[0].skillEffectDetails[3].activateEffectDuration)
                      .replace("{{" + CARD_PREFIX[CARD_POS].skillId + ";v}}", CARD_SKILL[CARD_PREFIX[CARD_POS].skillId - 1].skillEffects[0].skillEffectDetails[3].activateEffectValue)
                      .replace("{{" + SKILL_DURATION + ";d}}", CARD_SKILL[CARD_PREFIX[CARD_POS].skillId - 1].skillEffects[1].skillEffectDetails[3].activateEffectDuration)
                : CARD_SKILL[CARD_PREFIX[CARD_POS].skillId - 1].description
                      .replace("{{" + RECOVER_SKILL_ID_2 + ";d}}", CARD_SKILL[CARD_PREFIX[CARD_POS].skillId - 1].skillEffects[0].skillEffectDetails[3].activateEffectDuration)
                      .replace("{{" + RECOVER_SKILL_ID + ";v}}", CARD_SKILL[CARD_PREFIX[CARD_POS].skillId - 1].skillEffects[1].skillEffectDetails[3].activateEffectValue)
                      .replace("{{" + RECOVER_SKILL_ID_2 + ";v}}", CARD_SKILL[CARD_PREFIX[CARD_POS].skillId - 1].skillEffects[0].skillEffectDetails[3].activateEffectValue)
            : CARD_PREFIX[CARD_POS].skillId === 11
            ? CARD_SKILL[CARD_PREFIX[CARD_POS].skillId - 1].description
                  .replace("{{" + PERFECT_SKILL_ID + ";d}}", CARD_SKILL[CARD_PREFIX[CARD_POS].skillId - 1].skillEffects[0].skillEffectDetails[3].activateEffectDuration)
                  .replace("{{" + PERFECT_SKILL_ID + ";v}}", CARD_SKILL[CARD_PREFIX[CARD_POS].skillId - 1].skillEffects[0].skillEffectDetails[3].activateEffectValue)
            : CARD_SKILL[CARD_PREFIX[CARD_POS].skillId - 1].description
                  .replace("{{" + CARD_PREFIX[CARD_POS].skillId + ";d}}", CARD_SKILL[CARD_PREFIX[CARD_POS].skillId - 1].skillEffects[0].skillEffectDetails[3].activateEffectDuration)
                  .replace("{{" + CARD_PREFIX[CARD_POS].skillId + ";v}}", CARD_SKILL[CARD_PREFIX[CARD_POS].skillId - 1].skillEffects[0].skillEffectDetails[3].activateEffectValue);
