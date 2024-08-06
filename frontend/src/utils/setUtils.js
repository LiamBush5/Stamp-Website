// utils/setUtils.js
export const findSetById = (setHierarchy, setId) => {
    const findSet = (sets, id) => {
        for (let set of sets) {
            if (set.id.toString() === id.toString()) {
                return set;
            }
            if (set.childSets.length > 0) {
                const foundInChild = findSet(set.childSets, id);
                if (foundInChild) return foundInChild;
            }
        }
        return null;
    };

    return findSet(setHierarchy, setId);
};

export const getSetNameById = (setHierarchy, setId) => {
    const set = findSetById(setHierarchy, setId);
    return set ? set.name : 'All Stamps';
};