"use client"

import { fillCurrentForm } from "@/app/redux/form/formSlice";
import { AppDispatch, RootState } from "@/app/redux/store";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyState from "../EmptyState";

const FormFill = () => {

    const [value, setValue] = useState("");

    const { formId } = useParams();
    const router = useRouter()
    const dispatch = useDispatch<AppDispatch>()


    const forms = useSelector((state: RootState) => state.form.forms);
    const currentForm = forms[Number(formId)]

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (value === "") {
            alert("Formu doldurmadan kaydedemezsiniz!")
        } else {
            dispatch(fillCurrentForm({ value: value, formId: formId }))
            router.push("/form-list");
        }
    }

    if (forms.length === 0 || forms[Number(formId)] === undefined) {
        return (
            <EmptyState title="Geçerli form bulunamadı!" subtitle="Geçerli bir form öğesi bulmak için geri gidebilirsiniz veya anasayfa'ya dönebilirsiniz." />
        )
    }

    return (
        <form className="flex gap-x-6 md:items-center md:flex-row flex-col gap-y-4">
            <div className="flex gap-x-2 items-center">
                <div className="font-medium text-xl text-primaryColor">{currentForm.label}:</div>
                {currentForm.type === "select" ? (
                    <select className="border-2 placeholder:text-gray-400 border-gray-300 rounded-sm py-1 px-3" onChange={(e) => setValue(e.target.value)}>
                        {currentForm.options?.map((option, index) => (
                            <option key={index}>{option}</option>
                        ))}
                    </select>
                ) : (
                    <input className="border-2 placeholder:text-gray-400 border-gray-300 rounded-sm py-1 px-3" type={currentForm.type} placeholder={currentForm.label} onChange={(e) => setValue(e.target.value)} />
                )}
            </div>
            <div className="sm:ml-auto flex gap-x-4">
                <button onClick={(e) => handleClick(e)} className="px-4 py-1 bg-gray-800 transition hover:bg-gray-800/80 text-white rounded">Kaydet</button>
                <Link href="/form-list" className="border-[1px] px-4 py-1 bg-white transition hover:bg-white/80 text-black rounded">Geri</Link>
            </div>
        </form>
    )
}

export default FormFill