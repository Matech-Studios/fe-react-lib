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
export declare const defaultUserContext: UserContextInterface;
