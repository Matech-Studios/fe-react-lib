import { applyActionCode, confirmPasswordReset, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { useUser } from '../hooks/useUser';
import { auth } from '../services';
export const useAuth = () => {
    const { logOut } = useUser();
    const firebaseLogIn = async (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    const passwordResetEmail = async (email) => {
        return sendPasswordResetEmail(auth, email);
    };
    const confirmResetPassword = async ({ oobCode, newPassword }) => {
        logOut();
        if (!oobCode && !newPassword)
            return;
        confirmPasswordReset(auth, oobCode, newPassword);
    };
    const applyFirebaseActionCode = async (oobCode) => {
        if (!oobCode)
            return;
        return applyActionCode(auth, oobCode);
    };
    return {
        passwordResetEmail,
        confirmResetPassword,
        firebaseLogIn,
        applyFirebaseActionCode
    };
};
//# sourceMappingURL=useAuth.js.map