// // // import React, { useState, useEffect } from 'react';
// // // import { useParams } from 'react-router-dom';
// // // import { stampsApi } from '../services/index';
// // // import Header from '../components/Header2';
// // // import { useStampEdit } from '../hooks/useStampEdit';

// // // const StampPage = () => {
// // //     const [stamp, setStamp] = useState(null);
// // //     const [loading, setLoading] = useState(true);
// // //     const [error, setError] = useState('');
// // //     const { id } = useParams();
// // //     const { isEditing, currentStamp, handleEdit, handleEditSuccess, handleEditCancel, refreshStampData } = useStampEdit(stamp, setStamp);

// // //     useEffect(() => {
// // //         const fetchStamp = async () => {
// // //             try {
// // //                 const response = await stampsApi.getStamp(id);
// // //                 setStamp(response.data);
// // //             } catch (error) {
// // //                 console.error('Error fetching stamp:', error);
// // //                 setError('Failed to fetch stamp details. Please try again.');
// // //             } finally {
// // //                 setLoading(false);
// // //             }
// // //         };

// // //         fetchStamp();
// // //     }, [id]);

// // //     if (loading) return <LoadingSpinner />;
// // //     if (error) return <ErrorMessage message={error} />;
// // //     if (!stamp) return <ErrorMessage message="Stamp not found." />;

// // //     return (
// // //         <div className="bg-[#FDF8F3] min-h-screen">
// // //             <Header
// // //                 initialStampData={stamp}
// // //                 onStampUpdate={setStamp}
// // //                 isEditing={isEditing}
// // //                 handleEdit={() => handleEdit(id)}
// // //                 handleEditSuccess={() => handleEditSuccess(id)}
// // //                 handleEditCancel={handleEditCancel}
// // //             />
// // //             <main className="max-w-4xl mx-auto px-4 py-8">
// // //                 <h1 className="text-4xl font-bold text-[#4A4A4A] mb-2 border-b border-[#8B4513] pb-2">{stamp.title}</h1>
// // //                 <p className="text-xl text-[#8B4513] mb-4">{stamp.catalogNumber}</p>

// // //                 <div className="mb-6 text-center">
// // //                     <img
// // //                         src={stamp.imageUrl}
// // //                         alt={stamp.title}
// // //                         className="max-w-full h-auto mx-auto border border-[#8B4513]"
// // //                         onError={(e) => {
// // //                             e.target.onerror = null;
// // //                             e.target.src = 'https://via.placeholder.com/800x600?text=Image+Not+Found';
// // //                         }}
// // //                     />
// // //                     <p className="text-sm text-[#6B5B4F] mt-2 italic">Image of {stamp.title}</p>
// // //                 </div>

// // //                 <div className="space-y-6">
// // //                     <InfoSection title="Description" content={stamp.description} />
// // //                     <InfoSection title="Sales Notes" content={stamp.salesNotes} />
// // //                     <InfoSection title="General Notes" content={stamp.generalNotes} />
// // //                 </div>
// // //             </main>
// // //         </div>
// // //     );
// // // };

// // // const InfoSection = ({ title, content }) => (
// // //     <section>
// // //         <h2 className="text-2xl font-semibold text-[#4A4A4A] mb-2 border-b border-[#D1C4B5]">{title}</h2>
// // //         {Array.isArray(content) ? (
// // //             <ul className="list-disc list-inside text-[#6B5B4F]">
// // //                 {content.map((item, index) => (
// // //                     <li key={index} className="mb-1">{item}</li>
// // //                 ))}
// // //             </ul>
// // //         ) : (
// // //             <p className="text-[#6B5B4F] leading-relaxed">{content}</p>
// // //         )}
// // //     </section>
// // // );

// // // const LoadingSpinner = () => (
// // //     <div className="flex justify-center items-center h-screen bg-[#FDF8F3]">
// // //         <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#8B4513]"></div>
// // //     </div>
// // // );

// // // const ErrorMessage = ({ message }) => (
// // //     <div className="flex justify-center items-center h-screen bg-[#FDF8F3]">
// // //         <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-r-md shadow-md" role="alert">
// // //             <p className="font-bold mb-2">Error</p>
// // //             <p>{message}</p>
// // //         </div>
// // //     </div>
// // // );

// // // export default StampPage;

// // import React, { useState, useEffect } from 'react';
// // import { useParams } from 'react-router-dom';
// // import { stampsApi } from '../services/index';
// // import Header from '../components/Header2';
// // import { useStampEdit } from '../hooks/useStampEdit';

// // const StampPage = () => {
// //     const [stamp, setStamp] = useState(null);
// //     const [loading, setLoading] = useState(true);
// //     const [error, setError] = useState('');
// //     const { id } = useParams();
// //     const { isEditing, currentStamp, handleEdit, handleEditSuccess, handleEditCancel, refreshStampData } = useStampEdit(stamp, setStamp);

// //     useEffect(() => {
// //         const fetchStamp = async () => {
// //             try {
// //                 const response = await stampsApi.getStamp(id);
// //                 setStamp(response.data);
// //             } catch (error) {
// //                 console.error('Error fetching stamp:', error);
// //                 setError('Failed to fetch stamp details. Please try again.');
// //             } finally {
// //                 setLoading(false);
// //             }
// //         };

// //         fetchStamp();
// //     }, [id]);

// //     if (loading) return <LoadingSpinner />;
// //     if (error) return <ErrorMessage message={error} />;
// //     if (!stamp) return <ErrorMessage message="Stamp not found." />;

// //     return (
// //         <div className="bg-[#FDF8F3] min-h-screen">
// //             <Header
// //                 initialStampData={stamp}
// //                 onStampUpdate={setStamp}
// //                 isEditing={isEditing}
// //                 handleEdit={() => handleEdit(id)}
// //                 handleEditSuccess={() => handleEditSuccess(id)}
// //                 handleEditCancel={handleEditCancel}
// //             />
// //             <main className="max-w-4xl mx-auto px-4 py-8">
// //                 <h1 className="text-4xl font-bold text-[#4A4A4A] mb-2 border-b border-[#8B4513] pb-2">{stamp.title}</h1>

// //                 <div className="mb-6 text-center">
// //                     <img
// //                         src={stamp.imageUrl}
// //                         alt={stamp.title}
// //                         className="max-w-full h-auto mx-auto border border-[#8B4513]"
// //                         onError={(e) => {
// //                             e.target.onerror = null;
// //                             e.target.src = 'https://via.placeholder.com/800x600?text=Image+Not+Found';
// //                         }}
// //                     />
// //                     <p className="text-sm text-[#6B5B4F] mt-2 italic">Image of {stamp.title}</p>
// //                 </div>

// //                 <div className="space-y-6">
// //                     <InfoSection title="Certification" content={stamp.certification} />
// //                     <InfoSection title="Condition" content={stamp.condition} />
// //                     <InfoSection title="Provenance" content={stamp.provenance} />
// //                     <InfoSection title="Sale History" content={stamp.saleHistory} />
// //                     <InfoSection title="Max Price" content={`$${stamp.maxPrice}`} />
// //                     <InfoSection title="Copies Known" content={stamp.copiesKnown} />
// //                 </div>
// //             </main>
// //         </div>
// //     );
// // };

// // const InfoSection = ({ title, content }) => (
// //     <section>
// //         <h2 className="text-2xl font-semibold text-[#4A4A4A] mb-2 border-b border-[#D1C4B5]">{title}</h2>
// //         {Array.isArray(content) ? (
// //             <ul className="list-disc list-inside text-[#6B5B4F]">
// //                 {content.map((item, index) => (
// //                     <li key={index} className="mb-1">{item}</li>
// //                 ))}
// //             </ul>
// //         ) : (
// //             <p className="text-[#6B5B4F] leading-relaxed">{content}</p>
// //         )}
// //     </section>
// // );

// // const LoadingSpinner = () => (
// //     <div className="flex justify-center items-center h-screen bg-[#FDF8F3]">
// //         <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#8B4513]"></div>
// //     </div>
// // );

// // const ErrorMessage = ({ message }) => (
// //     <div className="flex justify-center items-center h-screen bg-[#FDF8F3]">
// //         <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-r-md shadow-md" role="alert">
// //             <p className="font-bold mb-2">Error</p>
// //             <p>{message}</p>
// //         </div>
// //     </div>
// // );

// // export default StampPage;

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { stampsApi } from '../services/index';
// import Header from '../components/Header2';
// import { useStampEdit } from '../hooks/useStampEdit';

// const StampPage = () => {
//     const [stamp, setStamp] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');
//     const { id } = useParams();
//     const { isEditing, currentStamp, handleEdit, handleEditSuccess, handleEditCancel, refreshStampData } = useStampEdit(stamp, setStamp);

//     useEffect(() => {
//         const fetchStamp = async () => {
//             try {
//                 const response = await stampsApi.getStamp(id);
//                 setStamp(response.data);
//             } catch (error) {
//                 console.error('Error fetching stamp:', error);
//                 setError('Failed to fetch stamp details. Please try again.');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchStamp();
//     }, [id]);

//     if (loading) return <LoadingSpinner />;
//     if (error) return <ErrorMessage message={error} />;
//     if (!stamp) return <ErrorMessage message="Stamp not found." />;

//     return (
//         <div className="bg-[#FDF8F3] min-h-screen">
//             <Header
//                 initialStampData={stamp}
//                 onStampUpdate={setStamp}
//                 isEditing={isEditing}
//                 handleEdit={() => handleEdit(id)}
//                 handleEditSuccess={() => handleEditSuccess(id)}
//                 handleEditCancel={handleEditCancel}
//             />
//             <main className="max-w-4xl mx-auto px-4 py-8">
//                 <h1 className="text-4xl font-bold text-[#4A4A4A] mb-2 border-b border-[#8B4513] pb-2">{stamp.title}</h1>

//                 <div className="mb-6 text-center">
//                     <img
//                         src={stamp.imageUrl}
//                         alt={stamp.title}
//                         className="max-w-full h-auto mx-auto border border-[#8B4513]"
//                         onError={(e) => {
//                             e.target.onerror = null;
//                             e.target.src = 'https://via.placeholder.com/800x600?text=Image+Not+Found';
//                         }}
//                     />
//                     <p className="text-sm text-[#6B5B4F] mt-2 italic">Image of {stamp.title}</p>
//                 </div>

//                 <div className="space-y-6">
//                     <InfoSection title="Certification" content={stamp.certification} />
//                     <InfoSection title="Condition" content={stamp.condition} />
//                     <InfoSection title="Provenance" content={stamp.provenance} />
//                     <InfoSection title="Sale History" content={stamp.saleHistory} />
//                     <InfoSection title="Max Price" content={stamp.maxPrice ? `$${stamp.maxPrice}` : 'N/A'} />
//                     <InfoSection title="Copies Known" content={stamp.knownCopies || stamp.copiesKnown || 'Unknown'} />
//                 </div>
//             </main>
//         </div>
//     );
// };

// const InfoSection = ({ title, content }) => (
//     <section>
//         <h2 className="text-2xl font-semibold text-[#4A4A4A] mb-2 border-b border-[#D1C4B5]">{title}</h2>
//         {content ? (
//             Array.isArray(content) ? (
//                 <ul className="list-disc list-inside text-[#6B5B4F]">
//                     {content.map((item, index) => (
//                         <li key={index} className="mb-1">{item}</li>
//                     ))}
//                 </ul>
//             ) : (
//                 <p className="text-[#6B5B4F] leading-relaxed">{content}</p>
//             )
//         ) : (
//             <p className="text-[#6B5B4F] leading-relaxed italic">No information available</p>
//         )}
//     </section>
// );

// const LoadingSpinner = () => (
//     <div className="flex justify-center items-center h-screen bg-[#FDF8F3]">
//         <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#8B4513]"></div>
//     </div>
// );

// const ErrorMessage = ({ message }) => (
//     <div className="flex justify-center items-center h-screen bg-[#FDF8F3]">
//         <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-r-md shadow-md" role="alert">
//             <p className="font-bold mb-2">Error</p>
//             <p>{message}</p>
//         </div>
//     </div>
// );

// export default StampPage;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { stampsApi } from '../services/index';
import Header from '../components/Header2';
import { useStampEdit } from '../hooks/useStampEdit';

const StampPage = () => {
    const [stamp, setStamp] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const { id } = useParams();
    const { isEditing, currentStamp, handleEdit, handleEditSuccess, handleEditCancel, refreshStampData } = useStampEdit(stamp, setStamp);

    useEffect(() => {
        const fetchStamp = async () => {
            try {
                const response = await stampsApi.getStamp(id);
                setStamp(response.data);
            } catch (error) {
                console.error('Error fetching stamp:', error);
                setError('Failed to fetch stamp details. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchStamp();
    }, [id]);

    if (loading) return <LoadingSpinner />;
    if (error) return <ErrorMessage message={error} />;
    if (!stamp) return <ErrorMessage message="Stamp not found." />;

    return (
        <div className="bg-[#FDF8F3] min-h-screen">
            <Header
                initialStampData={stamp}
                onStampUpdate={setStamp}
                isEditing={isEditing}
                handleEdit={() => handleEdit(id)}
                handleEditSuccess={() => handleEditSuccess(id)}
                handleEditCancel={handleEditCancel}
            />
            <main className="max-w-4xl mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-[#4A4A4A] mb-2 border-b border-[#8B4513] pb-2">{stamp.title}</h1>

                <div className="mb-6 text-center">
                    <img
                        src={stamp.imageUrl}
                        alt={stamp.title}
                        className="max-w-full h-auto mx-auto border border-[#8B4513]"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://via.placeholder.com/800x600?text=Image+Not+Found';
                        }}
                    />
                    <p className="text-sm text-[#6B5B4F] mt-2 italic">Image of {stamp.title}</p>
                </div>

                <div className="space-y-6">
                    <InfoSection title="Certification" content={stamp.certification} />
                    <InfoSection title="Condition" content={stamp.condition} />
                    <InfoSection title="Provenance" content={stamp.provenance} />
                    <InfoSection title="Sale History" content={stamp.saleHistory} />
                    <InfoSection
                        title="Max Price Sold"
                        content={stamp.maxPriceSold !== undefined && stamp.maxPriceSold !== null
                            ? `$${parseFloat(stamp.maxPriceSold).toFixed(2).toLocaleString()}`
                            : 'N/A'}
                    />
                </div>
            </main>
        </div>
    );
};

const InfoSection = ({ title, content }) => (
    <section>
        <h2 className="text-2xl font-semibold text-[#4A4A4A] mb-2 border-b border-[#D1C4B5]">{title}</h2>
        {content ? (
            Array.isArray(content) ? (
                <ul className="list-disc list-inside text-[#6B5B4F]">
                    {content.map((item, index) => (
                        <li key={index} className="mb-1">{item}</li>
                    ))}
                </ul>
            ) : (
                <p className="text-[#6B5B4F] leading-relaxed">{content}</p>
            )
        ) : (
            <p className="text-[#6B5B4F] leading-relaxed italic">No information available</p>
        )}
    </section>
);

const LoadingSpinner = () => (
    <div className="flex justify-center items-center h-screen bg-[#FDF8F3]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#8B4513]"></div>
    </div>
);

const ErrorMessage = ({ message }) => (
    <div className="flex justify-center items-center h-screen bg-[#FDF8F3]">
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-r-md shadow-md" role="alert">
            <p className="font-bold mb-2">Error</p>
            <p>{message}</p>
        </div>
    </div>
);

export default StampPage;