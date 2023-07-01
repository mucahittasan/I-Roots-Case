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
        },
        deleteFormById: (state, action) => {
            const item = state.forms[action.payload];

            const newForms = state.forms.filter((form) => form.label !== item.label);
            state.forms = newForms;
        }
    }
})

export const { addToForm, fillCurrentForm, deleteFormById } = formSlice.actions
export default formSlice.reducer;