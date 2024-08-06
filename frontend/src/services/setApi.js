// // import api from './apiConfig';

// // const setApi = {
// //     getAllSets: () => api.get('/sets'),
// //     getSet: (id) => api.get(`/sets/${id}`),
// //     createSet: (setData) => api.post('/sets', setData),
// //     updateSet: (id, setData) => api.put(`/sets/${id}`, setData),
// //     deleteSet: (id) => api.delete(`/sets/${id}`),
// //     addStampToSet: (setId, stampId) => api.post(`/sets/${setId}/stamps/${stampId}`),
// //     getStampsInSet: (setId) => api.get(`/sets/${setId}/stamps`),
// // };

// // export default setApi;

// import api from './apiConfig';

// const setApi = {
//     getAllSets: () => api.get('/sets'),
//     getSet: (id) => api.get(`/sets/${id}`),
//     createSet: (setData) => api.post('/sets', setData),
//     updateSet: (id, setData) => api.put(`/sets/${id}`, setData),
//     deleteSet: (id) => api.delete(`/sets/${id}`),
//     addStampToSet: (setId, stampId) => api.post(`/sets/${setId}/stamps/${stampId}`),
//     getStampsInSet: (setId) => api.get(`/sets/${setId}/stamps`),
//     getUndefinedStamps: () => api.get('/sets/undefined-stamps'), // New method
// };

// export default setApi;

import api from './apiConfig';

const setApi = {
    // Get all top-level sets with their children and stamps
    getAllSets: () => api.get('/sets'),

    getSetHierarchyWithCounts: () => api.get('/sets/hierarchy-with-counts'),

    // Get a specific set by ID with its stamps and child sets
    getSet: (id) => api.get(`/sets/${id}`),

    // Create a new set
    createSet: (setData) => api.post('/sets', setData),

    // Update a set
    updateSet: (id, setData) => api.put(`/sets/${id}`, setData),

    // Delete a set
    deleteSet: (id) => api.delete(`/sets/${id}`),

    // Add a stamp to a set
    addStampToSet: (setId, stampId) => api.post(`/sets/${setId}/stamps/${stampId}`),

    // Get all stamps in a set
    getStampsInSet: (setId) => api.get(`/sets/${setId}/stamps`),

    // Get all stamps not in any set
    getUndefinedStamps: () => api.get('/sets/undefined-stamps'),

    // Get child sets of a set
    getChildSets: (setId) => api.get(`/sets/${setId}/children`),



};

export default setApi;