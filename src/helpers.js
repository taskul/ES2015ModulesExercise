function choice (items) {
    const idx = Math.floor(Math.random() * items.length) +1;
    return items[idx]
}

function remove(items, item) {
    items.filter((i, idx) => {
        if (i === item) {
            items.splice(idx, 1)
        } 
    });
    return items;
}

export {choice, remove};