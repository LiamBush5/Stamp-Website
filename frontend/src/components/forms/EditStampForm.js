import React, { useState, useEffect } from 'react';
import { stampsApi, setApi } from '../../services/index';

const EditStampForm = ({ stamp, onSuccess, onCancel, refreshStampData }) => {
    const [formData, setFormData] = useState({
        title: '', certification: '', condition: '', provenance: '',
        saleHistory: '', maxPriceSold: '', setId: ''
    });
    const [image, setImage] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [sets, setSets] = useState([]);

    useEffect(() => {
        fetchSets();
        if (stamp) {
            setFormData({
                title: stamp.title || '',
                certification: stamp.certification || '',
                condition: stamp.condition || '',
                provenance: stamp.provenance || '',
                saleHistory: stamp.saleHistory || '',
                maxPriceSold: stamp.maxPriceSold || '',
                setId: stamp.setId || ''
            });
        }
    }, [stamp]);

    const fetchSets = async () => {
        try {
            const response = await setApi.getAllSets();
            setSets(response.data);
        } catch (error) {
            console.error('Error fetching sets:', error);
        }
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            const stampData = new FormData();
            Object.keys(formData).forEach(key => {
                if (formData[key] !== '') {
                    stampData.append(key, formData[key]);
                }
            });
            if (image) {
                stampData.append('image', image);
            }

            await stampsApi.updateStamp(stamp.id, stampData);
            await refreshStampData();
            onSuccess();
        } catch (error) {
            console.error('Error updating stamp:', error);
            setError('Failed to update stamp. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 overflow-y-auto h-full w-full flex items-center justify-center" style={{ zIndex: 1001 }}>
            <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-4xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Edit Stamp</h3>
                {error && <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6" role="alert">{error}</div>}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <InputField label="Name" name="title" value={formData.title} onChange={handleInputChange} required />
                        <InputField label="Certification" name="certification" value={formData.certification} onChange={handleInputChange} />
                        <InputField label="Condition" name="condition" value={formData.condition} onChange={handleInputChange} />
                        <InputField label="Max Price" name="maxPriceSold" value={formData.maxPriceSold} onChange={handleInputChange} type="number" />
                        <HierarchicalSelectField label="Set" name="setId" value={formData.setId} onChange={handleInputChange} options={sets} />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <ExpandableTextAreaField label="Provenance" name="provenance" value={formData.provenance} onChange={handleInputChange} />
                        <ExpandableTextAreaField label="Sale History" name="saleHistory" value={formData.saleHistory} onChange={handleInputChange} />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="image">
                            New Image (optional)
                        </label>
                        <input
                            type="file"
                            name="image"
                            onChange={handleImageChange}
                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />
                    </div>
                    <div className="flex justify-end space-x-4">
                        <button
                            type="button"
                            onClick={onCancel}
                            className="px-6 py-3 text-sm font-medium text-gray-700 bg-white border-2 border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-6 py-3 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                        >
                            {loading ? 'Updating...' : 'Update Stamp'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const InputField = ({ label, name, value, onChange, type = "text", required = false }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <input
            type={type}
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            required={required}
            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
    </div>
);

const ExpandableTextAreaField = ({ label, name, value, onChange }) => {
    const [rows, setRows] = useState(3);

    const handleInput = (e) => {
        const lineHeight = 20;
        const newRows = Math.ceil(e.target.scrollHeight / lineHeight);
        setRows(Math.max(3, Math.min(newRows, 10)));
        onChange(e);
    };

    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <textarea
                name={name}
                id={name}
                value={value}
                onChange={handleInput}
                onInput={handleInput}
                rows={rows}
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md resize-none"
            />
        </div>
    );
};

const HierarchicalSelectField = ({ label, name, value, onChange, options }) => {
    const renderOptions = (sets, level = 0) => {
        return sets.map((set) => (
            <React.Fragment key={set.id}>
                <option
                    value={set.id}
                    style={{
                        paddingLeft: `${level * 20}px`,
                        color: level === 0 ? 'black' : '#555',
                        fontWeight: level === 0 ? 'bold' : 'normal'
                    }}
                >
                    {level > 0 ? `${'\u2514\u2500 '}` : ''}{set.name}
                </option>
                {set.ChildSets && renderOptions(set.ChildSets, level + 1)}
            </React.Fragment>
        ));
    };

    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <select
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
                <option value="">Select a set</option>
                {renderOptions(options)}
            </select>
        </div>
    );
};

export default EditStampForm;