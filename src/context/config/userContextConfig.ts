import { User } from 'firebase/auth';

export interface FirebaseUserProps {
    accessToken: string;
}

export interface UserContextInterface {
    logOut: () => void;
    reload: () => void;
    user: User | null;
    emailVerified: boolean | null;
}

export const defaultUserContext: UserContextInterface = {
    reload: () => null,
    logOut: () => null,
    user: null,
    emailVerified: false
};
