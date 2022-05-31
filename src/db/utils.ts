import lettersArray from './5-letter.json';
import lettersDefinitions from './5-letter-with-definition.json';

export const getRandomInt = (min: number, max: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    // Максимум не включается, минимум включается
    return Math.floor(Math.random() * (max - min)) + min;
}

export const getRandomWord = (): string => {
    return lettersArray[getRandomInt(0, lettersArray.length + 1)];
}

export const getWordDefinition = (word: keyof typeof lettersDefinitions): string => {
    return lettersDefinitions[word]?.definition;
}

export const isWordExist = (word: string) => {
    // @ts-expect-error
    return Boolean(lettersDefinitions[word]);
}

export enum Positions {
    NO = 0,
    FOUND = 1,
    EXACLY = 2,
}

export const getWordsDifference = (originalWord: string, targetWord: string): Positions[] | false => {
    if (!isWordExist(targetWord) || originalWord.length !== targetWord.length || originalWord.length === 0) {
        return false;
    }

    const originalWordArray = originalWord.split('');
    const tragetWordArray = targetWord.split('');

    const result: Positions[] = tragetWordArray.map((letter, i) => {
        const foundIndex = originalWordArray.indexOf(letter);
        if (foundIndex === i) {
            return Positions.EXACLY;
        }
        if (foundIndex > -1) {
            return Positions.FOUND;
        }
        return Positions.NO;
    });

    return result;
}
