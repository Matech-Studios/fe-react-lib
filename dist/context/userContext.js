import { jsx as _jsx } from "react/jsx-runtime";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import * as React from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useLoading } from '../hooks';
import { auth } from '../services/firebase';
import { defaultUserContext } from './config';
export const UserContext = React.createContext(defaultUserContext);
const UserProviderBase = ({ children }) => {
    const [user, setUser] = useState(null);
    const [emailVerified, setEmailVerified] = useState(null);
    const { setIsLoading } = useLoading();
    const reload = useCallback(() => {
        return auth.currentUser?.reload().then(() => {
            setUser(auth.currentUser);
        });
    }, []);
    const logOut = useCallback(() => {
        setUser(null);
        return signOut(auth);
    }, []);
    const providerValues = useMemo(() => ({ logOut, user, emailVerified, reload }), [logOut, user, emailVerified]);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            const emailVerified = currentUser?.emailVerified || null;
            setUser(currentUser);
            setEmailVerified(emailVerified);
            setIsLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);
    return _jsx(UserContext.Provider, { value: providerValues, children: children });
};
export const UserProvider = React.memo(UserProviderBase);
UserProvider.displayName = 'UserProvider';
//# sourceMappingURL=userContext.js.map