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

export const combine = (arrA, arrB) => getUniqueValues(intersect(arrA, arrB));