import React, { useState } from 'react';

// Sample data to create items
const data = Array.from({ length: 100 }, (_, index) => `Item ${index + 1}`);

const PaginationList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    // Calculate the indices for slicing the data
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    // Get current items to display
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            {currentItems.map((item, index) => (
                <div key={index}>
                    <p>{item}</p>
                </div>
            ))}

            <Pagination
                handlePageChange={handlePageChange}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                totalItems={data.length}
            />
        </div>
    );
};

const Pagination = ({ handlePageChange, itemsPerPage, currentPage, totalItems }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <ul className="pagination">
                {pageNumbers.map((number) => (
                    <li
                    key={number}
                    onClick={() => handlePageChange(number)}
                    className={`page-item ${number === currentPage ? 'active' : ''}`}
                    style={{ cursor: 'pointer' }}
                >
                    {number}
                </li>
                
                ))}
            </ul>
        </div>
    );
};

export default PaginationList;
