// // // // // // import React, { useState } from 'react';
// // // // // // import { Plus } from 'lucide-react';
// // // // // // import setApi from '../services/setApi';

// // // // // // const CreateSetComponent = ({ onSetCreated, parentSetId = null }) => {
// // // // // //     const [newSetName, setNewSetName] = useState('');

// // // // // //     const handleCreateSet = async (e) => {
// // // // // //         e.preventDefault();
// // // // // //         if (newSetName.trim()) {
// // // // // //             try {
// // // // // //                 await setApi.createSet({ name: newSetName, parentSetId });
// // // // // //                 setNewSetName('');
// // // // // //                 if (onSetCreated) onSetCreated();
// // // // // //             } catch (error) {
// // // // // //                 console.error('Error creating set:', error);
// // // // // //             }
// // // // // //         }
// // // // // //     };

// // // // // //     return (
// // // // // //         <form onSubmit={handleCreateSet} className="mb-4">
// // // // // //             <div className="flex items-center space-x-2">
// // // // // //                 <input
// // // // // //                     type="text"
// // // // // //                     value={newSetName}
// // // // // //                     onChange={(e) => setNewSetName(e.target.value)}
// // // // // //                     placeholder={parentSetId ? "New subset name" : "New set name"}
// // // // // //                     className="flex-grow p-2 text-sm rounded bg-[#2C3E50] text-[#ECF0F1] placeholder-[#7F8C8D] focus:outline-none focus:ring-2 focus:ring-[#3498DB]"
// // // // // //                 />
// // // // // //                 <button
// // // // // //                     type="submit"
// // // // // //                     className="p-2 bg-[#3498DB] text-white rounded hover:bg-[#2980B9] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#2980B9]"
// // // // // //                 >
// // // // // //                     <Plus size={20} />
// // // // // //                 </button>
// // // // // //             </div>
// // // // // //         </form>
// // // // // //     );
// // // // // // };

// // // // // // export default CreateSetComponent;

// // // // // import React, { useState } from 'react';
// // // // // import { Plus } from 'lucide-react';
// // // // // import setApi from '../services/setApi';

// // // // // const CreateSetComponent = ({ onSetCreated, sets }) => {
// // // // //     const [newSetName, setNewSetName] = useState('');
// // // // //     const [parentSetId, setParentSetId] = useState('');

// // // // //     const handleCreateSet = async (e) => {
// // // // //         e.preventDefault();
// // // // //         if (newSetName.trim()) {
// // // // //             try {
// // // // //                 await setApi.createSet({
// // // // //                     name: newSetName,
// // // // //                     parentSetId: parentSetId || null
// // // // //                 });
// // // // //                 setNewSetName('');
// // // // //                 setParentSetId('');
// // // // //                 if (onSetCreated) onSetCreated();
// // // // //             } catch (error) {
// // // // //                 console.error('Error creating set:', error);
// // // // //             }
// // // // //         }
// // // // //     };

// // // // //     const renderSetOptions = (sets, level = 0) => {
// // // // //         return sets.flatMap(set => [
// // // // //             <option key={set.id} value={set.id} style={{ paddingLeft: `${level * 20}px` }}>
// // // // //                 {'\u00A0'.repeat(level * 2)}{set.name}
// // // // //             </option>,
// // // // //             ...(set.ChildSets ? renderSetOptions(set.ChildSets, level + 1) : [])
// // // // //         ]);
// // // // //     };

// // // // //     return (
// // // // //         <form onSubmit={handleCreateSet} className="mb-4">
// // // // //             <div className="flex flex-col space-y-2">
// // // // //                 <input
// // // // //                     type="text"
// // // // //                     value={newSetName}
// // // // //                     onChange={(e) => setNewSetName(e.target.value)}
// // // // //                     placeholder="New set name"
// // // // //                     className="p-2 text-sm rounded bg-[#2C3E50] text-[#ECF0F1] placeholder-[#7F8C8D] focus:outline-none focus:ring-2 focus:ring-[#3498DB]"
// // // // //                 />
// // // // //                 <select
// // // // //                     value={parentSetId}
// // // // //                     onChange={(e) => setParentSetId(e.target.value)}
// // // // //                     className="p-2 text-sm rounded bg-[#2C3E50] text-[#ECF0F1] focus:outline-none focus:ring-2 focus:ring-[#3498DB]"
// // // // //                 >
// // // // //                     <option value="">Top-level set</option>
// // // // //                     {renderSetOptions(sets)}
// // // // //                 </select>
// // // // //                 <button
// // // // //                     type="submit"
// // // // //                     className="p-2 bg-[#3498DB] text-white rounded hover:bg-[#2980B9] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#2980B9] flex items-center justify-center"
// // // // //                 >
// // // // //                     <Plus size={20} className="mr-2" />
// // // // //                     Create Set
// // // // //                 </button>
// // // // //             </div>
// // // // //         </form>
// // // // //     );
// // // // // };

// // // // // export default CreateSetComponent;

// // // // import React, { useState } from 'react';
// // // // import { Plus, Minus } from 'lucide-react';
// // // // import setApi from '../../services/setApi';

// // // // const CreateSetComponent = ({ onSetCreated, sets }) => {
// // // //     const [isExpanded, setIsExpanded] = useState(false);
// // // //     const [newSetName, setNewSetName] = useState('');
// // // //     const [parentSetId, setParentSetId] = useState('');

// // // //     const handleCreateSet = async (e) => {
// // // //         e.preventDefault();
// // // //         if (newSetName.trim()) {
// // // //             try {
// // // //                 await setApi.createSet({
// // // //                     name: newSetName,
// // // //                     parentSetId: parentSetId || null
// // // //                 });
// // // //                 setNewSetName('');
// // // //                 setParentSetId('');
// // // //                 setIsExpanded(false);
// // // //                 if (onSetCreated) onSetCreated();
// // // //             } catch (error) {
// // // //                 console.error('Error creating set:', error);
// // // //             }
// // // //         }
// // // //     };

// // // //     const renderSetOptions = (sets, level = 0) => {
// // // //         return sets.flatMap(set => [
// // // //             <option key={set.id} value={set.id} style={{ paddingLeft: `${level * 20}px` }}>
// // // //                 {'\u00A0'.repeat(level * 2)}{set.name}
// // // //             </option>,
// // // //             ...(set.ChildSets ? renderSetOptions(set.ChildSets, level + 1) : [])
// // // //         ]);
// // // //     };

// // // //     return (
// // // //         <div className="mb-4 bg-[#2C3E50] rounded-md overflow-hidden">
// // // //             <button
// // // //                 onClick={() => setIsExpanded(!isExpanded)}
// // // //                 className="w-full p-2 text-left text-sm font-medium text-[#ECF0F1] hover:bg-[#34495E] transition-colors duration-200 flex items-center"
// // // //             >
// // // //                 {isExpanded ? <Minus size={16} className="mr-2" /> : <Plus size={16} className="mr-2" />}
// // // //                 {isExpanded ? 'Cancel' : 'Create New Set'}
// // // //             </button>
// // // //             {isExpanded && (
// // // //                 <form onSubmit={handleCreateSet} className="p-2">
// // // //                     <div className="flex flex-col space-y-2">
// // // //                         <input
// // // //                             type="text"
// // // //                             value={newSetName}
// // // //                             onChange={(e) => setNewSetName(e.target.value)}
// // // //                             placeholder="New set name"
// // // //                             className="p-2 text-sm rounded bg-[#34495E] text-[#ECF0F1] placeholder-[#7F8C8D] focus:outline-none focus:ring-2 focus:ring-[#3498DB]"
// // // //                         />
// // // //                         <select
// // // //                             value={parentSetId}
// // // //                             onChange={(e) => setParentSetId(e.target.value)}
// // // //                             className="p-2 text-sm rounded bg-[#34495E] text-[#ECF0F1] focus:outline-none focus:ring-2 focus:ring-[#3498DB]"
// // // //                         >
// // // //                             <option value="">Top-level set</option>
// // // //                             {renderSetOptions(sets)}
// // // //                         </select>
// // // //                         <button
// // // //                             type="submit"
// // // //                             className="p-2 bg-[#3498DB] text-white rounded hover:bg-[#2980B9] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#2980B9] flex items-center justify-center"
// // // //                         >
// // // //                             <Plus size={16} className="mr-2" />
// // // //                             Create Set
// // // //                         </button>
// // // //                     </div>
// // // //                 </form>
// // // //             )}
// // // //         </div>
// // // //     );
// // // // };

// // // // export default CreateSetComponent;

// // // import React, { useState } from 'react';
// // // import { Plus, Minus } from 'lucide-react';
// // // import setApi from '../../services/setApi';

// // // const CreateSetComponent = ({ onSetCreated, sets }) => {
// // //     const [isExpanded, setIsExpanded] = useState(false);
// // //     const [newSetName, setNewSetName] = useState('');
// // //     const [parentSetId, setParentSetId] = useState('');

// // //     const handleCreateSet = async (e) => {
// // //         e.preventDefault();
// // //         if (newSetName.trim()) {
// // //             try {
// // //                 await setApi.createSet({
// // //                     name: newSetName,
// // //                     parentSetId: parentSetId || null
// // //                 });
// // //                 setNewSetName('');
// // //                 setParentSetId('');
// // //                 setIsExpanded(false);
// // //                 if (onSetCreated) onSetCreated();
// // //             } catch (error) {
// // //                 console.error('Error creating set:', error);
// // //             }
// // //         }
// // //     };

// // //     const renderSetOptions = (sets, prefix = '') => {
// // //         return sets.flatMap((set, index, array) => {
// // //             const isLast = index === array.length - 1;
// // //             const newPrefix = prefix + (isLast ? '    ' : '│   ');

// // //             return [
// // //                 <option key={set.id} value={set.id}>
// // //                     {prefix + (isLast ? '└── ' : '├── ') + set.name}
// // //                 </option>,
// // //                 ...(set.ChildSets ? renderSetOptions(set.ChildSets, newPrefix) : [])
// // //             ];
// // //         });
// // //     };

// // //     return (
// // //         <div className="mb-4 bg-[#2C3E50] rounded-md overflow-hidden">
// // //             <button
// // //                 onClick={() => setIsExpanded(!isExpanded)}
// // //                 className="w-full p-2 text-left text-sm font-medium text-[#ECF0F1] hover:bg-[#34495E] transition-colors duration-200 flex items-center"
// // //             >
// // //                 {isExpanded ? <Minus size={16} className="mr-2" /> : <Plus size={16} className="mr-2" />}
// // //                 {isExpanded ? 'Cancel' : 'Create New Set'}
// // //             </button>
// // //             {isExpanded && (
// // //                 <form onSubmit={handleCreateSet} className="p-2">
// // //                     <div className="flex flex-col space-y-2">
// // //                         <input
// // //                             type="text"
// // //                             value={newSetName}
// // //                             onChange={(e) => setNewSetName(e.target.value)}
// // //                             placeholder="New set name"
// // //                             className="p-2 text-sm rounded bg-[#34495E] text-[#ECF0F1] placeholder-[#7F8C8D] focus:outline-none focus:ring-2 focus:ring-[#3498DB]"
// // //                         />
// // //                         <select
// // //                             value={parentSetId}
// // //                             onChange={(e) => setParentSetId(e.target.value)}
// // //                             className="p-2 text-sm rounded bg-[#34495E] text-[#ECF0F1] focus:outline-none focus:ring-2 focus:ring-[#3498DB]"
// // //                         >
// // //                             <option value="">Top-level set</option>
// // //                             {renderSetOptions(sets)}
// // //                         </select>
// // //                         <button
// // //                             type="submit"
// // //                             className="p-2 bg-[#3498DB] text-white rounded hover:bg-[#2980B9] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#2980B9] flex items-center justify-center"
// // //                         >
// // //                             <Plus size={16} className="mr-2" />
// // //                             Create Set
// // //                         </button>
// // //                     </div>
// // //                 </form>
// // //             )}
// // //         </div>
// // //     );
// // // };

// // // export default CreateSetComponent;

// // import React, { useState } from 'react';
// // import { Plus, Minus } from 'lucide-react';
// // import setApi from '../../services/setApi';

// // const CreateSetComponent = ({ onSetCreated, sets }) => {
// //     const [isExpanded, setIsExpanded] = useState(false);
// //     const [newSetName, setNewSetName] = useState('');
// //     const [parentSetId, setParentSetId] = useState('');

// //     const handleCreateSet = async (e) => {
// //         e.preventDefault();
// //         if (newSetName.trim()) {
// //             try {
// //                 await setApi.createSet({
// //                     name: newSetName,
// //                     parentSetId: parentSetId || null
// //                 });
// //                 setNewSetName('');
// //                 setParentSetId('');
// //                 setIsExpanded(false);
// //                 if (onSetCreated) onSetCreated();
// //             } catch (error) {
// //                 console.error('Error creating set:', error);
// //             }
// //         }
// //     };

// //     const renderSetOptions = (sets, level = 0) => {
// //         return sets.flatMap(set => [
// //             <option key={set.id} value={set.id}>
// //                 {level > 0 ? `${'    '.repeat(level - 1)}└ ` : ''}{set.name}
// //             </option>,
// //             ...(set.ChildSets ? renderSetOptions(set.ChildSets, level + 1) : [])
// //         ]);
// //     };

// //     return (
// //         <div className="mb-4 bg-[#2C3E50] rounded-md overflow-hidden">
// //             <button
// //                 onClick={() => setIsExpanded(!isExpanded)}
// //                 className="w-full p-2 text-left text-sm font-medium text-[#ECF0F1] hover:bg-[#34495E] transition-colors duration-200 flex items-center"
// //             >
// //                 {isExpanded ? <Minus size={16} className="mr-2" /> : <Plus size={16} className="mr-2" />}
// //                 {isExpanded ? 'Cancel' : 'Create New Set'}
// //             </button>
// //             {isExpanded && (
// //                 <form onSubmit={handleCreateSet} className="p-2">
// //                     <div className="flex flex-col space-y-2">
// //                         <input
// //                             type="text"
// //                             value={newSetName}
// //                             onChange={(e) => setNewSetName(e.target.value)}
// //                             placeholder="New set name"
// //                             className="p-2 text-sm rounded bg-[#34495E] text-[#ECF0F1] placeholder-[#7F8C8D] focus:outline-none focus:ring-2 focus:ring-[#3498DB]"
// //                         />
// //                         <select
// //                             value={parentSetId}
// //                             onChange={(e) => setParentSetId(e.target.value)}
// //                             className="p-2 text-sm rounded bg-[#34495E] text-[#ECF0F1] focus:outline-none focus:ring-2 focus:ring-[#3498DB]"
// //                         >
// //                             <option value="">Top-level set</option>
// //                             {renderSetOptions(sets)}
// //                         </select>
// //                         <button
// //                             type="submit"
// //                             className="p-2 bg-[#3498DB] text-white rounded hover:bg-[#2980B9] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#2980B9] flex items-center justify-center"
// //                         >
// //                             <Plus size={16} className="mr-2" />
// //                             Create Set
// //                         </button>
// //                     </div>
// //                 </form>
// //             )}
// //         </div>
// //     );
// // };

// // export default CreateSetComponent;

// import React, { useState } from 'react';
// import { Plus, Minus } from 'lucide-react';
// import setApi from '../../services/setApi';

// const CreateSetComponent = ({ onSetCreated, sets }) => {
//     const [isExpanded, setIsExpanded] = useState(false);
//     const [newSetName, setNewSetName] = useState('');
//     const [parentSetId, setParentSetId] = useState('');

//     const handleCreateSet = async (e) => {
//         e.preventDefault();
//         if (newSetName.trim()) {
//             try {
//                 await setApi.createSet({
//                     name: newSetName,
//                     parentSetId: parentSetId || null
//                 });
//                 setNewSetName('');
//                 setParentSetId('');
//                 setIsExpanded(false);
//                 if (onSetCreated) onSetCreated();
//             } catch (error) {
//                 console.error('Error creating set:', error);
//             }
//         }
//     };

//     const renderSetOptions = (sets, level = 0) => {
//         return sets.flatMap(set => [
//             <option key={set.id} value={set.id}>
//                 {'    '.repeat(level)}{level > 0 ? '└ ' : ''}{set.name}
//             </option>,
//             ...(set.ChildSets && set.ChildSets.length > 0
//                 ? renderSetOptions(set.ChildSets, level + 1)
//                 : [])
//         ]);
//     };

//     return (
//         <div className="mb-4 bg-[#2C3E50] rounded-md overflow-hidden">
//             <button
//                 onClick={() => setIsExpanded(!isExpanded)}
//                 className="w-full p-2 text-left text-sm font-medium text-[#ECF0F1] hover:bg-[#34495E] transition-colors duration-200 flex items-center"
//             >
//                 {isExpanded ? <Minus size={16} className="mr-2" /> : <Plus size={16} className="mr-2" />}
//                 {isExpanded ? 'Cancel' : 'Create New Set'}
//             </button>
//             {isExpanded && (
//                 <form onSubmit={handleCreateSet} className="p-2">
//                     <div className="flex flex-col space-y-2">
//                         <input
//                             type="text"
//                             value={newSetName}
//                             onChange={(e) => setNewSetName(e.target.value)}
//                             placeholder="New set name"
//                             className="p-2 text-sm rounded bg-[#34495E] text-[#ECF0F1] placeholder-[#7F8C8D] focus:outline-none focus:ring-2 focus:ring-[#3498DB]"
//                         />
//                         <select
//                             value={parentSetId}
//                             onChange={(e) => setParentSetId(e.target.value)}
//                             className="p-2 text-sm rounded bg-[#34495E] text-[#ECF0F1] focus:outline-none focus:ring-2 focus:ring-[#3498DB]"
//                         >
//                             <option value="">Top-level set</option>
//                             {renderSetOptions(sets)}
//                         </select>
//                         <button
//                             type="submit"
//                             className="p-2 bg-[#3498DB] text-white rounded hover:bg-[#2980B9] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#2980B9] flex items-center justify-center"
//                         >
//                             <Plus size={16} className="mr-2" />
//                             Create Set
//                         </button>
//                     </div>
//                 </form>
//             )}
//         </div>
//     );
// };

// export default CreateSetComponent;

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import setApi from '../../services/setApi';

const CreateSetComponent = ({ onSetCreated, sets }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [newSetName, setNewSetName] = useState('');
    const [parentSetId, setParentSetId] = useState('');

    const handleCreateSet = async (e) => {
        e.preventDefault();
        if (newSetName.trim()) {
            try {
                await setApi.createSet({
                    name: newSetName,
                    parentSetId: parentSetId || null
                });
                setNewSetName('');
                setParentSetId('');
                setIsExpanded(false);
                if (onSetCreated) onSetCreated();
            } catch (error) {
                console.error('Error creating set:', error);
            }
        }
    };

    const renderSetOptions = (sets, level = 0) => {
        return sets.flatMap(set => [
            <option key={set.id} value={set.id} disabled={level !== 0}>
                {'    '.repeat(level)}{level > 0 ? '└ ' : ''}{set.name}
            </option>,
            ...(set.ChildSets && set.ChildSets.length > 0
                ? renderSetOptions(set.ChildSets, level + 1)
                : [])
        ]);
    };

    return (
        <div className="mb-4 bg-[#2C3E50] rounded-md overflow-hidden">
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full p-2 text-left text-sm font-medium text-[#ECF0F1] hover:bg-[#34495E] transition-colors duration-200 flex items-center"
            >
                {isExpanded ? <Minus size={16} className="mr-2" /> : <Plus size={16} className="mr-2" />}
                {isExpanded ? 'Cancel' : 'Create New Folder'}
            </button>
            {isExpanded && (
                <form onSubmit={handleCreateSet} className="p-2">
                    <div className="flex flex-col space-y-2">
                        <input
                            type="text"
                            value={newSetName}
                            onChange={(e) => setNewSetName(e.target.value)}
                            placeholder="New set name"
                            className="p-2 text-sm rounded bg-[#34495E] text-[#ECF0F1] placeholder-[#7F8C8D] focus:outline-none focus:ring-2 focus:ring-[#3498DB]"
                        />
                        <select
                            value={parentSetId}
                            onChange={(e) => setParentSetId(e.target.value)}
                            className="p-2 text-sm rounded bg-[#34495E] text-[#ECF0F1] focus:outline-none focus:ring-2 focus:ring-[#3498DB]"
                        >
                            <option value="">Top-level folder</option>
                            {renderSetOptions(sets)}
                        </select>
                        <button
                            type="submit"
                            className="p-2 bg-[#3498DB] text-white rounded hover:bg-[#2980B9] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#2980B9] flex items-center justify-center"
                        >
                            <Plus size={16} className="mr-2" />
                            Create Set
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default CreateSetComponent;