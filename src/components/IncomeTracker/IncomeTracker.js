import React from 'react';
import AddIncomeButton from '../AddIncomeButton/AddIncomeButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const IncomeTracker = ({ incomeSources, addIncomeSource, removeIncomeSource, updateIncomeSource, totalIncomes }) => {
    return (
        <div className="max-w-md w-64 mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 border-2 border-gray-500 p-2 rounded-lg text-center">Incomes</h1>
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
                <div className="flex justify-center mt-4 relative group">
                    <FontAwesomeIcon icon={faPlus} onClick={addIncomeSource} className="text-3xl cursor-pointer" />
                    <span className="absolute bottom-full mb-2 px-2 py-1 text-xs text-white bg-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Add an income source
                    </span>
                </div>
        </div>
    );
};

export default IncomeTracker;



