import React from 'react';
import AddIncomeButton from '../AddIncomeButton/AddIncomeButton';

const IncomeTracker = ({ incomeSources, addIncomeSource, removeIncomeSource, updateIncomeSource, totalIncomes }) => {
    return (
        <div className="max-w-md w-64 mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Incomes</h1>
            {incomeSources.map((source) => (
                <AddIncomeButton 
                    key={source.id} 
                    source={source} 
                    onRemove={() => {
                        removeIncomeSource(source.id);
                    }} 
                    onUpdate={(updatedSource) => {
                        updateIncomeSource(updatedSource);
                    }} 
                />
            ))}
            <button 
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                onClick={addIncomeSource}
            >
                Add Income
            </button>
        </div>
    );
};

export default IncomeTracker;



