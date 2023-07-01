"use client"

import { useState } from 'react';
import Modal from '.'
import useEditFormModal from '@/app/hooks/useEditFormHook';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/redux/store';
import { updateFormById } from '@/app/redux/form/formSlice';

const EditForm = () => {

    const [selectedValue, setSelectedValue] = useState("");
    const [type, setType] = useState("");
    const [label, setLabel] = useState("");
    const [options, setOptions] = useState<string[]>([]);

    const editFormModal = useEditFormModal();
    const dispatch = useDispatch<AppDispatch>()

    const forms = useSelector((state: RootState) => state.form.forms);

    const currentForm = editFormModal.formIndex ? forms[editFormModal.formIndex] : null;

    const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(event.target.value);
        setType(event.target.value);
    }

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const splittedOptions = event.target.value.split(",");
        setOptions(splittedOptions);
    };

    const handleSubmit = () => {
        if (type === "" && label === "" && options.length === 0) {
            editFormModal.onClose()
        } else {
            const updateForm = {
                ...currentForm,
                type,
                label,
                options: options.length > 0 ? options : []
            }
            dispatch(updateFormById({ formId: editFormModal.formIndex, form: updateForm }));
            editFormModal.onClose()
        }
    }

    let bodyContent = (
        <div className={`mb-4 grid grid-cols-1 ${selectedValue === "select"
            ? "md:grid-cols-3"
            : "md:grid-cols-2"
            }  items-center gap-x-4 pb-6 `}>

            <label className='flex flex-col mb-2'>
                <span className='text-sm font-medium'>Etiket</span>
                <input
                    type="text"
                    placeholder="Etiket Giriniz"
                    onChange={(event) => setLabel(event.target.value)}
                    className="border-2 placeholder:text-gray-400 border-gray-300 rounded-sm py-1 px-3"
                />
            </label>
            <label className='flex flex-col mb-2'>
                <span className='text-sm font-medium'>Tip</span>
                <select
                    onChange={(event) => handleTypeChange(event)}
                    className="border-2 text-gray-400 placeholder:text-gray-400 border-gray-300 rounded-sm py-1 px-3"
                >
                    <option disabled value="">Giriş Tipi Seçiniz</option>
                    <option className='text-gray-800' value="text">text</option>
                    <option className='text-gray-800' value="number">number</option>
                    <option className='text-gray-800' value="select">select</option>
                </select>
            </label>
            {selectedValue === "select" && (
                <label className='flex flex-col mb-2'>
                    <span className='text-sm font-medium'>Opsiyonlar</span>
                    <input
                        type="text"
                        placeholder='Erkek, Kadin...'
                        onChange={(event) => handleOptionChange(event)}
                        className='placeholder:text-gray-400 border-gray-300 border-2 rounded-sm py-1 px-3'
                    />
                </label>
            )}
        </div>
    )



    return (
        <Modal
            isOpen={editFormModal.isOpen}
            title='Form Düzenleme'
            onClose={editFormModal.onClose}
            onSubmit={handleSubmit}
            body={bodyContent}
        />
    )
}

export default EditForm