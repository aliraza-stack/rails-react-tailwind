import React from 'react';

const Table = ({ data }) => {
    const flattenData = (nestedObject) => {
        const flattenedData = {};

        const flatten = (obj, prefix = '') => {
            for (const key in obj) {
                if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
                    flatten(obj[key], `${prefix}${key}.`);
                } else {
                    flattenedData[`${prefix}${key}`] = obj[key];
                }
            }
        };

        flatten(nestedObject);

        return flattenedData;
    };

    const flattenHeaders = (nestedObject) => {
        const headers = [];

        const flatten = (obj, prefix = '') => {
            for (const key in obj) {
                if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
                    flatten(obj[key], `${prefix}${key}.`);
                } else {
                    headers.push(`${prefix}${key}`);
                }
            }
        };

        flatten(nestedObject);

        return [...new Set(headers)];
    };

    const flattenedData = flattenData(data);
    const headers = flattenHeaders(data);

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index} className="py-2 px-4 border-b">
                            {header.charAt(0).toUpperCase() + header.slice(1)}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                <tr>
                    {headers.map((header, index) => (
                        <td key={index} className="py-2 px-4 border-b">
                            {typeof flattenedData[header] === 'object' ? (
                                JSON.stringify(flattenedData[header])
                            ) : (
                                flattenedData[header]
                            )}
                        </td>
                    ))}
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;
