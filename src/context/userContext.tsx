import { User, onAuthStateChanged, signOut } from 'firebase/auth';
import * as React from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useLoading } from '../hooks';
import { auth } from '../services/firebase';
import { UserContextInterface, defaultUserContext } from './config';

export const UserContext = React.createContext<UserContextInterface>(defaultUserContext);

const UserProviderBase = ({ children }: any) => {
    const [user, setUser] = useState<User | null>(null);
    const [emailVerified, setEmailVerified] = useState<boolean | null>(null);
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

    const providerValues = useMemo(
        () => ({ logOut, user, emailVerified, reload }),
        [logOut, user, emailVerified]
    );

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

    return <UserContext.Provider value={providerValues}>{children}</UserContext.Provider>;
};

export const UserProvider = React.memo(UserProviderBase);

UserProvider.displayName = 'UserProvider';
