export const initialCaps = (text) => {
    const textArr = text.split(/(?=[A-Z])/);

    if (textArr.length > 1) {
        textArr[0] = `${textArr[0].charAt(0).toUpperCase()}${textArr[0].slice(1)}`;

        textArr.forEach((text, index) => {
            if (text.toLowerCase() === 'thirty') {
                textArr[index] = '30';
            }

            if (text.toLowerCase() === 'fifteen') {
                textArr[index] = '15';
            }
        })
        return textArr.join(' ');
    } else return `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
};