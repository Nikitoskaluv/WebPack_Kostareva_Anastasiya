import { printOutput } from './printOutput.js';

export const resultTag = document.getElementById("result");

export const printDatesDiff = ({ years, months, days }) => {
    printOutput(
        `
        ДНИ:${days},
        МЕСЯЦЫ:${months},
        ГОДЫ:${years},
        `, resultTag
    )
};
