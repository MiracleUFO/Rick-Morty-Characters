export const getUniqueValues = (arr) => {
    const stringArray = arr.map(item => JSON.stringify(item));
    return [...new Set(stringArray)]
        .map(item => JSON.parse(item));
};