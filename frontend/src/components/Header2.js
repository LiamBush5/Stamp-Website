import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useStampEdit } from '../hooks/useStampEdit';
import EditStampForm from './forms/EditStampForm';

const Header2 = ({ initialStampData, onStampUpdate }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { isEditing, currentStamp, handleEdit, handleEditSuccess, handleEditCancel, refreshStampData } = useStampEdit(initialStampData, onStampUpdate);

    return (
        <>
            <header className="bg-[#FDF8F3] text-[#4A4A4A] p-6 flex items-center justify-between shadow-md transition-all duration-300 ease-in-out">
                <h1 className="text-3xl font-serif font-bold">Stamp Details</h1>
                <div className="flex space-x-4">
                    <button
                        onClick={() => handleEdit(id)}
                        className="bg-[#8B4513] hover:bg-[#6B3000] text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D1C4B5] focus:ring-opacity-50 transition-colors duration-200"
                    >
                        Edit Stamp
                    </button>
                    <button
                        onClick={() => navigate('/')}
                        className="bg-[#8B4513] hover:bg-[#6B3000] text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D1C4B5] focus:ring-opacity-50 transition-colors duration-200"
                    >
                        Go Back to Collection
                    </button>
                </div>
            </header>
            {isEditing && currentStamp && (
                <EditStampForm
                    stamp={currentStamp}
                    onSuccess={() => handleEditSuccess(id)}
                    onCancel={handleEditCancel}
                    refreshStampData={() => refreshStampData(id)}
                />
            )}
        </>
    );
};

export default Header2;