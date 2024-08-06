import React, { useState } from 'react';
import { Folder, ChevronRight, Edit2, Trash2, Check, X } from 'lucide-react';
import StampDropdown from './StampDropdown';

const SetItem = ({ set, onSetSelect, onDeleteClick, onEditSet }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editName, setEditName] = useState(set.name);

    const handleSetClick = () => {
        setIsExpanded(!isExpanded);
        if (onSetSelect) onSetSelect(set.id);
    };

    const handleEditClick = (e) => {
        e.stopPropagation();
        setIsEditing(true);
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        onEditSet(set.id, editName);
        setIsEditing(false);
    };

    const handleDeleteClick = (e) => {
        e.stopPropagation();
        onDeleteClick(set.id, set.name);
    };

    return (
        <li className="mb-1">
            <div
                className={`flex items-center justify-between w-full py-2 px-3 rounded-md text-[#ECF0F1] bg-[#2C3E50] hover:bg-[#34495E] transition-all duration-200 ${isEditing ? '' : 'cursor-pointer'}`}
                onClick={isEditing ? undefined : handleSetClick}
            >
                {isEditing ? (
                    <form onSubmit={handleEditSubmit} className="flex items-center justify-between w-full">
                        <input
                            type="text"
                            value={editName}
                            onChange={(e) => setEditName(e.target.value)}
                            className="bg-[#34495E] text-[#ECF0F1] px-2 py-1 rounded-md mr-2 flex-grow"
                            autoFocus
                        />
                        <div>
                            <button type="submit" className="text-[#2ECC71] hover:text-[#27AE60] mr-2">
                                <Check size={16} />
                            </button>
                            <button type="button" onClick={() => setIsEditing(false)} className="text-[#E74C3C] hover:text-[#C0392B]">
                                <X size={16} />
                            </button>
                        </div>
                    </form>
                ) : (
                    <>
                        <div className="flex items-center space-x-2 flex-grow">
                            <div className={`transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`}>
                                <ChevronRight size={16} className="text-[#3498DB]" />
                            </div>
                            <Folder size={16} className="text-[#3498DB]" />
                            <span className="text-sm font-medium">{set.name}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <button
                                onClick={handleEditClick}
                                className="p-1 text-[#3498DB] hover:text-[#2980B9] transition-colors duration-200"
                                aria-label="Edit set"
                            >
                                <Edit2 size={14} />
                            </button>
                            <button
                                onClick={handleDeleteClick}
                                className="p-1 text-[#E74C3C] hover:text-[#C0392B] transition-colors duration-200"
                                aria-label="Delete set"
                            >
                                <Trash2 size={14} />
                            </button>
                        </div>
                    </>
                )}
            </div>
            {isExpanded && (
                <div className="ml-4 mt-1">
                    {set.Stamps && set.Stamps.length > 0 && (
                        <StampDropdown
                            stamps={set.Stamps}
                            isOpen={true}
                            toggleOpen={() => { }}
                        />
                    )}
                    {set.ChildSets && set.ChildSets.map(childSet => (
                        <SetItem
                            key={childSet.id}
                            set={childSet}
                            onSetSelect={onSetSelect}
                            onDeleteClick={onDeleteClick}
                            onEditSet={onEditSet}
                        />
                    ))}
                </div>
            )}
        </li>
    );
};

export default SetItem;