import { getWordsDifference, getRandomWord, getRandomInt, getWordDefinition,  isWordExist} from "./utils";

it('Get random number', () => {
    const min = 0;
    const max = 1000;
    const result = getRandomInt(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
})

it('Get random word', () => {
    expect(getRandomWord().length).toBe(5);
})

it('Check exist word', () => {
    expect(isWordExist('арбуз')).toBe(true);
    expect(isWordExist('арзон')).toBe(false);
    expect(isWordExist('ааааа')).toBe(false);
})

it('Get word definition', () => {
    expect(getWordDefinition('арбуз')).toBe('м. 1) Стелющееся растение семейства тыквенных с крупными, круглыми, сладкими и сочными плодами. 2) Плод такого растения.');
    // @ts-expect-error
    expect(getWordDefinition('aaaaa')).toBe(undefined);
})

it('Check words арбуз -> арзон', () => {
    expect(getWordsDifference('арбуз', 'арзон')).toEqual(false);
    expect(getWordsDifference('арбуз', 'арена')).toEqual([2, 2, 0, 0, 1]);
    expect(getWordsDifference('арбуз', 'арбуз')).toEqual([2, 2, 2, 2, 2]);
})
