export const getUniqueValues = (arr) => {
    const stringArray = arr.map(item => JSON.stringify(item));
    return [...new Set(stringArray)]
        .map(item => JSON.parse(item));
};

const intersect = (arrA, arrB) => {
    if (arrA.length === 0) {
        return arrA;
    }

    if (arrB.length === 0) {
        return arrB;
    }

    const intersection = arrA.map(a => {
        return arrB.filter(b => b.id === a.id);
    });
    return Array.from(intersection.flat());
};

export const combine = (arrA, arrB) => {
    return getUniqueValues(intersect(arrA, arrB));
};

const intersectFilters = (sameFilterResults, differentFilterResults) => {
    if (sameFilterResults.length === 0 || differentFilterResults.length === 0) {
        return sameFilterResults;
    }

    const intersection = sameFilterResults.map(a => {
        return differentFilterResults.filter(b => b.id === a.id);
    });
    return Array.from(intersection.flat());
}

export const combineFilters = (sameFilterResults, differentFilterResults) => {
    return getUniqueValues(intersectFilters(sameFilterResults, differentFilterResults));
}