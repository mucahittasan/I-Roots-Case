"use client"

import { useDispatch } from 'react-redux'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AppDispatch } from '../../redux/store';
import { FormFields, addToForm } from '../../redux/form/formSlice';

type SelectedValueType = {
    value: string;
    index?: number
}

const FormCreate = () => {

    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>()

    const [formFields, setFormFields] = useState<FormFields[]>([{ label: '', type: '' }]);
    const [selectedValue, setSelectedValue] = useState<SelectedValueType[]>([]);


    const handleLabelChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedFields = [...formFields];
        updatedFields[index].label = event.target.value;
        setFormFields(updatedFields);
    };

    const handleTypeChange = (index: number, event: React.ChangeEvent<HTMLSelectElement>) => {
        const fieldType = event.target.value;
        const updatedFields = [...formFields];
        updatedFields[index] = { ...updatedFields[index], type: fieldType };

        if (fieldType === "select") {
            updatedFields[index].options = [];
            setSelectedValue(prevState => [
                ...prevState.filter(item => item.index !== index),
                { value: fieldType, index: index }
            ]);
        } else {
            updatedFields[index].options = undefined;
            setSelectedValue(prevState => prevState.filter(item => item.index !== index));
        }

        setFormFields(updatedFields);
    };

    const handleOptionChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedFields = [...formFields];
        updatedFields[index].options = event.target.value.split(",");
        setFormFields(updatedFields);
    };

    const handleAddField = () => {
        setFormFields([...formFields, { label: '', type: '' }]);
    };

    const handleSave = () => {
        const isFormValid = formFields.every(field => field.label && field.type);

        if (isFormValid) {
            dispatch(addToForm(formFields));
            router.push('/form-list');
        } else {
            alert('Please fill in all label and type fields');
        }
    };


    return (
        <div className=''>
            <h2 className='main-title'>Form Ekle</h2>
            {formFields.map((field, index) => (
                <div
                    key={index}
                    className={`mb-4 grid ${selectedValue.find(item => item.value === "select" && item.index === index)
                        ? "grid-cols-3"
                        : "grid-cols-2"
                        } items-center gap-x-4 border-b-2 border-gray-300 pb-6`}>

                    <label className='flex flex-col mb-2'>
                        <span className='text-sm font-medium'>Etiket</span>
                        <input
                            type="text"
                            placeholder="Etiket Giriniz"
                            value={field.label}
                            onChange={(event) => handleLabelChange(index, event)}
                            className="border-2 placeholder:text-gray-400 border-gray-300 rounded-sm py-1 px-3"
                        />
                    </label>
                    <label className='flex flex-col mb-2'>
                        <span className='text-sm font-medium'>Tip</span>
                        <select
                            value={field.type}
                            onChange={(event) => handleTypeChange(index, event)}
                            className="border-2 text-gray-400 placeholder:text-gray-400 border-gray-300 rounded-sm py-1 px-3"
                        >
                            <option disabled value="">Giriş Tipi Seçiniz</option>
                            <option value="text">text</option>
                            <option value="number">number</option>
                            <option value="select">select</option>
                        </select>
                    </label>
                    {selectedValue.find(item => item.value === "select" && item.index === index) && (
                        <label className='flex flex-col mb-2'>
                            <span className='text-sm font-medium'>Opsiyonlar</span>
                            <input
                                type="text"
                                placeholder='Erkek, Kadin...'
                                onChange={(event) => handleOptionChange(index, event)}
                                className='placeholder:text-gray-400 border-gray-300 border-2 rounded-sm py-1 px-3'
                            />
                        </label>
                    )}
                </div>
            ))}
            <div className='flex flex-col justify-start items-start w-full'>
                <div className='mb-4 pb-6 border-b-2 border-gray-300 w-full'>
                    <button onClick={handleAddField} className="w-32 py-2.5 border-gray-600 border-2 rounded-[3px] bg-[#3D8AF7] transition hover:bg-[#3D8AF7]/90 text-xs text-white font-medium">ALAN EKLE</button>
                </div>
                <div className='mt-12 pb-8 w-full text-end'>
                    <button onClick={handleSave} className='w-32 py-2.5 text-white text-xs font-medium rounded-[3px] bg-[#29323D] transition hover:bg-[#29323D]/90'>KAYDET</button>
                </div>
            </div>
        </div>
    )
}

export default FormCreate;