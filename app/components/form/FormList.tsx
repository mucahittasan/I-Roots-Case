"use client"

import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../redux/store"
import EmptyState from "../EmptyState";
import Link from "next/link";
import { deleteFormById } from "@/app/redux/form/formSlice";
import useEditFormModal from "@/app/hooks/useEditFormHook";

const FormList = () => {

    const dispatch = useDispatch<AppDispatch>();

    const forms = useSelector((state: RootState) => state.form.forms);
    const editFormModal = useEditFormModal()

    const handleDelete = (index: number) => {
        dispatch(deleteFormById(index));
    }

    const handleModal = (index: number) => {
        editFormModal.formIndex = index;
        editFormModal.onOpen();
    }

    if (forms.length === 0) {
        return (
            <EmptyState title="Hiçbir formunuz bulunmamaktadır." subtitle="Form oluşturmak için anasayfa'ya dönebilirsiniz." />
        )
    }

    return (
        <div>
            <h2 className="main-title">Form Listeleme</h2>
            {forms?.map((form, index) => (
                <div key={index} className="border-b-2 py-3 border-b-gray-400">
                    <div className="flex sm:flex-row flex-col gap-y-2">
                        <div className="bg-primaryColor/90 font-medium text-white flex items-center rounded px-4 py-1">{form.label} : {form.value}</div>
                        <div className="flex gap-x-3 sm:ml-auto">
                            <Link href={`/form-fill/${index}`} className="px-4 py-1 bg-blue-500 transition hover:bg-blue-500/80 text-white rounded">Doldur</Link>
                            <button onClick={() => handleModal(index)} className="px-4 py-1 bg-green-500 transition hover:bg-green-500/80 text-white rounded">Duzenle</button>
                            <button onClick={() => handleDelete(index)} className="px-4 py-1 bg-red-500 transition hover:bg-red-500/80 text-white rounded">Sil</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FormList