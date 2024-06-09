import React, { useState, useEffect } from 'react';

const AddIncomeButton = ({ source, onRemove, onUpdate }) => {
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
        <div className="addIncomeButtonContainer">
            <input
                className="IncomeTitleInput"
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={handleTitleChange}
            />
            <input
                className="IncomeInput"
                type="number"
                step="0.01"
                placeholder="Enter amount"
                value={amount}
                onChange={handleAmountChange}
            />
            <button className="removeButton" onClick={handleRemove}>
                Remove
            </button>
        </div>
    );
};

export default AddIncomeButton;
