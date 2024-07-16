import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const AddExpenseButton = ({ source, onRemove, onUpdate }) => {
    const [title, setTitle] = useState(source.title || '');
    const [amount, setAmount] = useState(source.amount || '');

    useEffect(() => {
        setTitle(source.title || '');
        setAmount(source.amount || '');
    }, [source]);

    const handleTitleChange = (event) => {
        const newTitle = event.target.value;
        setTitle(newTitle);
        onUpdate({ ...source, title: newTitle });
    };

    const handleAmountChange = (event) => {
        const newAmount = event.target.value;
        setAmount(newAmount);
        onUpdate({ ...source, amount: newAmount });
    };

    const handleRemove = () => {
        onRemove();
    };

    return (
        <div className="flex items-center border border-gray-300 p-2 mb-2 rounded bg-gray-100">
            <div className='flex-grow flex items-center space-x-2'>
                <input
                    className="border border-gray-300 p-1 rounded outline-none text-sm w-20"
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={handleTitleChange}
                />
                <input
                    className="p-1 rounded outline-none text-sm border border-gray-300 w-20"
                    type="number"
                    step="0.01"
                    placeholder="Amount"
                    value={amount}
                    onChange={handleAmountChange}
                />
                <button className="ml-2 text-red-600" onClick={handleRemove}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    );
};

export default AddExpenseButton;
