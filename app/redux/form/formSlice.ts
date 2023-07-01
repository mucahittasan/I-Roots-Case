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
        },
        fillCurrentForm: (state, action) => {
            state.forms[action.payload.formId].value = action.payload.value;
        }
    }
})

export const { addToForm, fillCurrentForm } = formSlice.actions
export default formSlice.reducer;