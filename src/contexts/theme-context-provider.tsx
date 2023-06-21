import React , { createContext , useReducer  , useEffect } from 'react';
// use prefers color scheme
import { usePrefersColorScheme } from 'use-prefers-color-scheme';
// types
export type InitialState = {
    mode: string;
}

export type Action = {
    type: 'light' | 'dark' | 'os';
}

type PropsType = {
    children: React.ReactNode;
}

type CreateContextType = {
    state: InitialState;
    dispatch: React.Dispatch<Action>;
    colorScheme: string;
}

// create context api
export const ThemeContext = createContext<CreateContextType>({
    state: {
        mode: ''
    },
    dispatch: () => {},
    colorScheme: ''
});

// reducer
const initialState: InitialState = {
    mode: 'os'
}

const reducer = (state: InitialState , action: Action) => {
    const { type } = action;

    if (type === 'light') {
        return { mode: 'light' }
    }
    else if (type === 'dark') {
        return { mode: 'dark' }
    }
    else if (type === 'os') {
        return { mode: 'os' }
    }
    else {
        return state;
    }
}

const ThemeContextProvider = ({children}: PropsType) => {
    const  [ state , dispatch ] = useReducer(reducer , (
        JSON.parse(localStorage.getItem('mode')!) || initialState
    ));

    // color scheme
    const colorScheme = usePrefersColorScheme();

    // useEffect
    useEffect(() => {
        const root = document.documentElement as HTMLHtmlElement;

        localStorage.setItem('mode' , JSON.stringify(state));

        if (state.mode === 'os') {
            root.className = colorScheme;
        }
        else {
            root.className = state.mode;
        }
    } , [state])

    return (
        <ThemeContext.Provider value={{state , dispatch , colorScheme}}>
            <div className={state.mode === 'os' ? colorScheme : state.mode}>
                {children}
            </div>
        </ThemeContext.Provider>    
    )
}

export default ThemeContextProvider;