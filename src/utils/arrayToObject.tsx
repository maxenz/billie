const arrayToObject = (array: Array<any>) =>
    array.reduce((obj, item) => {
        (obj as any)[item.id] = item;
        return obj;
    }, {});

export default arrayToObject;
