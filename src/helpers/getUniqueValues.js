export const getUniqueValues = (arr) => {
    const stringArray = arr.map(item => JSON.stringify(item));
    return [...new Set(stringArray)]
        .map(item => JSON.parse(item));
};

export const intersect = (arrA, arrB) => {
    if (arrA.length === 0) {
        return arrB;
    }

    if (arrB.length === 0) {
        return arrA;
    }

    const intersection = arrA.map(a => {
        return arrB.filter(b => b.id === a.id);
    });
    return Array.from(intersection.flat());
};

export const combine = (arrA, arrB) => {
    return getUniqueValues(intersect(arrA, arrB));
};