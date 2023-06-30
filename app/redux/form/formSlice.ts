import { createSlice } from "@reduxjs/toolkit";

export interface FormFields {
    label: string,
    type: string,
    options?: string[],
    value?: string
}

interface IFormSlice {
    forms: FormFields[];
}

const initialState: IFormSlice = {
    forms: []
}


export const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        addToForm: (state, action) => {
            state.forms.push(...action.payload);
        }
    }
})

export const { addToForm } = formSlice.actions
export default formSlice.reducer;