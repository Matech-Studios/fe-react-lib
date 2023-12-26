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
    FIREBASE_API_KEY: 'firebase-api-key', 
    FIREBASE_AUTH_DOMAIN: 'firebase-auth-domain', 
    FIREBASE_PROJECT_ID: 'firebase-project-id', 
    FIREBASE_STORAGE_BUCKET: 'firebase-storage-bucket', 
    FIREBASE_MESSAGING_SENDER_ID: 'firebase-messaging-sender-id', 
    FIREBASE_APP_ID: 'firebase-app-id', 
    FIREBASE_MEASUREMENT_ID: 'firebase-measurement-id' 
}; 
 
Object.defineProperty(window, '__RUNTIME_CONFIG__', { value: envVars }); 
