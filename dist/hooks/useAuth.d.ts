export declare const useAuth: () => {
    passwordResetEmail: (email: string) => Promise<void>;
    confirmResetPassword: ({ oobCode, newPassword }: {
        oobCode: string;
        newPassword: string;
    }) => Promise<void>;
    firebaseLogIn: (email: string, password: string) => Promise<import("@firebase/auth").UserCredential>;
    applyFirebaseActionCode: (oobCode: string) => Promise<void>;
};
