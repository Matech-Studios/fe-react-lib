import '@testing-library/jest-dom';

export const userToken = 'token_1234';

jest.mock('firebase/auth', () => ({
    ...jest.requireActual('firebase/auth'),
    signOut: jest.fn(),
    signInWithEmailAndPassword: jest.fn(),
    applyActionCode: jest.fn(),
    sendPasswordResetEmail: jest.fn(),
    confirmPasswordReset: jest.fn(),
    User: jest.fn(),
    sendEmailVerification: jest.fn(),
    getAuth: jest.fn(() => ({
        currentUser: {
            uid: '1234',
            email: 'test@test.com',
            emailVerified: false,
            getIdToken: jest.fn().mockResolvedValue(userToken)
        }
    }))
}));

export const useAuthMock = {
    firebaseSignUp: jest.fn(),
    firebaseLogIn: jest.fn(),
    passwordResetEmail: jest.fn(),
    confirmResetPassword: jest.fn(),
    applyFirebaseActionCode: jest.fn()
};
