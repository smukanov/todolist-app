export const capitalize = (str) => { // изменить первую букву на заглавную
    return str[0].toUpperCase() + str.slice(1);
}

export const checkStringOnSpace = (str) => { // проверить строку на наличие пробелов спереди и сзади
    return /^\s|\s$/.test(str);
}

export const searchItems = (array, term) => { // ищем строку в массиве без учета регистра
    if (term.length === 0){
        return array;
    }
    return array.filter(item => {
        return item.name.toLowerCase().indexOf(term) > -1;
    });
}