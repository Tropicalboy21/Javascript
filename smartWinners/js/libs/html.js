export const div = function (attribute, parent) {
    return createElement('div', attribute, parent);
}

export const p = function (attribute, parent) {
    return createElement('div', attribute, parent);
}

export const hr = function (attribute, parent) {
    return createElement('hr', attribute, parent);
}

export const img = function (attribute, parent) {
    return createElement('img', attribute, parent);
}


export const a = function (attribute, parent) {
    return createElement('a', attribute, parent);
}

const createElement = function (type, attributes, parent) {
    let element = document.createElement(type);
    parent.appendChild(element);

    for (const attribute in attributes) {
        element[attribute] = attributes[attribute];

    }

    return element
}