import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import stampsApi from '../services/stampsApi';

export const useStampEdit = (initialStampData, onStampUpdate) => {
    const [isEditing, setIsEditing] = useState(false);
    const [currentStamp, setCurrentStamp] = useState(initialStampData);
    const navigate = useNavigate();

    const handleEdit = useCallback(async (id) => {
        try {
            const response = await stampsApi.getStampForEdit(id);
            setCurrentStamp(response.data);
            setIsEditing(true);
        } catch (error) {
            console.error('Error fetching stamp for edit:', error);
        }
    }, []);

    const refreshStampData = useCallback(async (id) => {
        try {
            const response = await stampsApi.getStamp(id);
            setCurrentStamp(response.data);
            if (onStampUpdate) {
                onStampUpdate(response.data);
            }
        } catch (error) {
            console.error('Error refreshing stamp data:', error);
        }
    }, [onStampUpdate]);

    const handleEditSuccess = useCallback(async (id) => {
        setIsEditing(false);
        await refreshStampData(id);
    }, [refreshStampData]);

    const handleEditCancel = useCallback(() => {
        setIsEditing(false);
    }, []);

    return { isEditing, currentStamp, handleEdit, handleEditSuccess, handleEditCancel, refreshStampData };
};