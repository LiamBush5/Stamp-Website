import api from './apiConfig';

const s3Api = {
    uploadFile: (file) => {
        const formData = new FormData();
        formData.append('file', file);
        return api.post('/s3/upload', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
    },
    getSignedUrl: (key) => api.get(`/s3/file/${encodeURIComponent(key)}`),
    deleteFile: (key) => api.delete(`/s3/file/${encodeURIComponent(key)}`),
};

export default s3Api;