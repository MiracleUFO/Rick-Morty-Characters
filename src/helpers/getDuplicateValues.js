export const getDuplicateValues = (arr) => {
    return arr.filter((el, index) => arr.indexOf(el) !== index);
};