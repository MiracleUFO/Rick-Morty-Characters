export const isAllEmpty = (obj) => {
    const isEmpty = Object.values(obj).every(x => (x === false || x === ''));
    return isEmpty;
};

export const isAllNestedEmpty = (objectOfObjects) => {
    let truthy;
    for (const v of Object.values(objectOfObjects)) {
        truthy = truthy || !isAllEmpty(v);
    }
    return !truthy;
}