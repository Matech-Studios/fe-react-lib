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
const envVars = {
    API_BASE_URL: '',
    ATTENDEE_BASE_URL: '',
    FIREBASE_API_KEY: '',
    FIREBASE_AUTH_DOMAIN: '',
    FIREBASE_PROJECT_ID: '',
    FIREBASE_STORAGE_BUCKET: '',
    FIREBASE_MESSAGING_SENDER_ID: '',
    FIREBASE_APP_ID: '',
    FIREBASE_MEASUREMENT_ID: ''
};

Object.defineProperty(window, '__RUNTIME_CONFIG__', { value: envVars });
