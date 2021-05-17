import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IFooPayload {
    foo: string;
}

type FooPayload = {
    foo: string;
}

type InitialState = {
    fooState: IFooPayload,
    barState: FooPayload
}

const defaultFoo: IFooPayload = {
    foo: 'bar'
} 

const defaultBar: FooPayload = {
    foo: 'barbar'
}


const initialState: InitialState = {
    fooState: defaultFoo,
    barState: defaultBar
}

export const fooSlice = createSlice({
    name: 'foo',
    initialState,
    reducers: {
        clean: (state, action: PayloadAction) => {
            state.barState.foo = '';
            state.fooState.foo = '';
        },
        setFoo: (state, action: PayloadAction<IFooPayload>) => {
            state.fooState.foo = action.payload.foo;
        },
        setBar: (state, action: PayloadAction<FooPayload>) => {
            state.barState.foo = action.payload.foo;
        }
    }
})

export const {clean, setFoo, setBar } = fooSlice.actions;

export default fooSlice.reducer;