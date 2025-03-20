import {
    applyActionCode,
    confirmPasswordReset,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    ActionCodeSettings
} from 'firebase/auth';
import { useUser } from '../hooks/useUser';
import { auth } from '../services';

export const useAuth = () => {
    const { logOut } = useUser();

    const firebaseLogIn = async (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const passwordResetEmail = async (email: string, settings?: ActionCodeSettings) => {
        return sendPasswordResetEmail(auth, email, settings);
    };

    const confirmResetPassword = async ({
        oobCode,
        newPassword
    }: {
        oobCode: string;
        newPassword: string;
    }) => {
        logOut();
        if (!oobCode && !newPassword) return;
        return confirmPasswordReset(auth, oobCode, newPassword);
    };
    const applyFirebaseActionCode = async (oobCode: string) => {
        if (!oobCode) return;
        return applyActionCode(auth, oobCode);
    };

    return {
        passwordResetEmail,
        confirmResetPassword,
        firebaseLogIn,
        applyFirebaseActionCode
    };
};
