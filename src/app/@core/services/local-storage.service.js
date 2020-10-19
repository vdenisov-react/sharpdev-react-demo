export const LocalStorageService = {
    get: itemName => {
        const item = localStorage.getItem(itemName);
        // eslint-disable-next-line
        const jsonPattern = new RegExp(/[\[\{].*[\}\]]/);
        const numPattern = new RegExp(/^\d+$/);

        if (item) {
            if (jsonPattern.test(item)) return JSON.parse(item);
            if (numPattern.test(item)) return parseFloat(item);
            return item;
        }

        return null;
    },

    set: (itemName, item) => {
        typeof item === 'object'
            ? localStorage.setItem(itemName, JSON.stringify(item))
            : localStorage.setItem(itemName, item);
    },

    del: itemName => {
        localStorage.removeItem(itemName);
    },
};
