// import api from './apiConfig';

// const stampsApi = {
//     getAllStamps: () => api.get('/stamps'),
//     getStamp: (id) => api.get(`/stamps/${id}`),
//     createStamp: (stampData) => {
//         const formData = new FormData();
//         Object.keys(stampData).forEach(key => {
//             if (key === 'image' && stampData[key] instanceof File) {
//                 formData.append(key, stampData[key], stampData[key].name);
//             } else {
//                 formData.append(key, stampData[key]);
//             }
//         });
//         return api.post('/stamps', formData, {
//             headers: { 'Content-Type': 'multipart/form-data' }
//         });
//     },
//     updateStamp: (id, stampData) => {
//         const formData = new FormData();
//         Object.keys(stampData).forEach(key => {
//             if (key === 'image' && stampData[key] instanceof File) {
//                 formData.append(key, stampData[key], stampData[key].name);
//             } else {
//                 formData.append(key, stampData[key]);
//             }
//         });
//         return api.put(`/stamps/${id}`, formData, {
//             headers: { 'Content-Type': 'multipart/form-data' }
//         });
//     },
//     deleteStamp: (id) => api.delete(`/stamps/${id}`),
//     getStampsByCollection: (tag) => api.get(`/stamps/collection/${encodeURIComponent(tag)}`),

//     // New method for fetching stamp data for editing
//     getStampForEdit: (id) => api.get(`/stamps/edit/${id}`),
// };

// export default stampsApi;

import api from './apiConfig';

const stampsApi = {
    getAllStamps: () => api.get('/stamps'),
    getStamp: (id) => api.get(`/stamps/${id}`),
    createStamp: (stampData) => {
        // stampData is already FormData in the updated CreateStampForm
        return api.post('/stamps', stampData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
    },
    updateStamp: (id, stampData) => {
        // If stampData is not already FormData, convert it
        const formData = stampData instanceof FormData ? stampData : new FormData();
        if (!(stampData instanceof FormData)) {
            Object.keys(stampData).forEach(key => {
                if (key === 'image' && stampData[key] instanceof File) {
                    formData.append(key, stampData[key], stampData[key].name);
                } else {
                    formData.append(key, stampData[key]);
                }
            });
        }
        return api.put(`/stamps/${id}`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
    },
    deleteStamp: (id) => api.delete(`/stamps/${id}`),
    getStampsByCollection: (tag) => api.get(`/stamps/collection/${encodeURIComponent(tag)}`),
    getStampForEdit: (id) => api.get(`/stamps/edit/${id}`),
    addStampToSet: (setId, stampId) => api.post(`/sets/${setId}/stamps/${stampId}`),
};

export default stampsApi;