import { createContext, useState, useContext, Dispatch, SetStateAction } from 'react'
import { useLocalStorage } from './local-storage.hook'

export const PROFILE_KEY = 'profile'

export type Profile = {
    username: string;
    jobTitle: string;
}

type MainContext = {
    profile: Profile;
    updateProfile?: Dispatch<SetStateAction<Profile>>;
}

const defaultContext: MainContext = { profile: null }

const ContextHook = createContext<MainContext>(defaultContext)

export const AppContextProvider = function ({ children }) {
    const [profile, setProfile] = useLocalStorage<Profile>(PROFILE_KEY)
    const [state, setState] = useState({ profile })

    const updateProfile = (p: Profile) => {
        setProfile(p)
        setState({...state, profile: p })
    }

    return (
        <ContextHook.Provider value={{ ...state, updateProfile }}>
            {children}
        </ContextHook.Provider>
    )
}

export const useAppContext = () => useContext(ContextHook)
