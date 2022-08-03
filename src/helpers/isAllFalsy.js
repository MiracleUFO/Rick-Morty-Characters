export const isAllFalsy = (obj) => {
    const isEmpty = Object.values(obj).every(x => (x === false || x === ''));
    return isEmpty;
};

export const isAllNestedFalsy = (objectOfObjects) => {
    let truthy;
    for (const v of Object.values(objectOfObjects)) {
        truthy = truthy || !isAllFalsy(v);
    }
    return !truthy;
};