import React, { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';
import useStampCount from '../../hooks/useStampCount';
import setApi from '../../services/setApi';
import CreateSetComponent from './CreateSetComponent';
import SetItem from './SetItem';

const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm, setName }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-[#2C3E50] p-6 rounded-lg shadow-xl max-w-sm w-full">
                <h3 className="text-xl font-bold text-[#ECF0F1] mb-4">Confirm Deletion</h3>
                <p className="text-[#ECF0F1] mb-6">
                    Are you sure you want to delete the set "{setName}"? This action cannot be undone.
                </p>
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-[#7F8C8D] text-white rounded hover:bg-[#95A5A6] transition-colors duration-200"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 bg-[#E74C3C] text-white rounded hover:bg-[#C0392B] transition-colors duration-200"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

const Sidebar = ({ isOpen, onSetSelect }) => {
    const { stampCount, loading, error } = useStampCount(isOpen);
    const [sets, setSets] = useState([]);
    const [deleteConfirmation, setDeleteConfirmation] = useState({ isOpen: false, setId: null, setName: '' });

    useEffect(() => {
        if (isOpen) {
            fetchSets();
        }
    }, [isOpen]);

    const fetchSets = async () => {
        try {
            const response = await setApi.getAllSets();
            setSets(response.data);
        } catch (error) {
            console.error('Error fetching sets:', error);
        }
    };

    const handleDeleteClick = (setId, setName) => {
        setDeleteConfirmation({ isOpen: true, setId, setName });
    };

    const handleDeleteConfirm = async () => {
        const { setId } = deleteConfirmation;
        try {
            await setApi.deleteSet(setId);
            fetchSets();
            setDeleteConfirmation({ isOpen: false, setId: null, setName: '' });
        } catch (error) {
            console.error('Error deleting set:', error);
        }
    };

    const handleEditSet = async (setId, newName) => {
        try {
            await setApi.updateSet(setId, { name: newName });
            fetchSets();
        } catch (error) {
            console.error('Error updating set:', error);
        }
    };

    return (
        <>
            <div
                className={`fixed top-0 left-0 h-full bg-[#1E2A38] text-white w-72 overflow-y-auto transition-all duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
                style={{ zIndex: 1000 }}
            >
                <div className="p-5">
                    {/* <h2 className="text-2xl font-serif font-bold text-[#ECF0F1] mb-6">Collection</h2> */}

                    <div className="bg-[#2C3E50] rounded-lg p-4 mb-6 shadow-inner">
                        <h3 className="text-base font-medium text-[#3498DB] mb-2">Stamp Count</h3>
                        {loading ? (
                            <p className="text-[#ECF0F1] text-sm">Loading...</p>
                        ) : error ? (
                            <p className="text-red-500 text-sm">Error loading stamp count</p>
                        ) : (
                            <div className="flex items-center space-x-2">
                                <Mail size={24} className="text-[#3498DB]" />
                                <p className="text-3xl font-bold text-[#ECF0F1]">{stampCount}</p>
                            </div>
                        )}
                    </div>

                    <div className="mt-6">
                        {/* <h3 className="text-lg font-medium text-[#3498DB] mb-3">My Sets</h3> */}
                        <CreateSetComponent onSetCreated={fetchSets} sets={sets} />
                        <ul className="space-y-1 mt-2">
                            {sets.map((set) => (
                                <SetItem
                                    key={set.id}
                                    set={set}
                                    onSetSelect={onSetSelect}
                                    onDeleteClick={handleDeleteClick}
                                    onEditSet={handleEditSet}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <DeleteConfirmationModal
                isOpen={deleteConfirmation.isOpen}
                onClose={() => setDeleteConfirmation({ isOpen: false, setId: null, setName: '' })}
                onConfirm={handleDeleteConfirm}
                setName={deleteConfirmation.setName}
            />
        </>
    );
};

export default Sidebar;