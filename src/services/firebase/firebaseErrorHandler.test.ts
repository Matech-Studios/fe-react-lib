import { firebaseErrors } from 'src/constants';
import { firebaseErrorHandler } from 'src/services/firebase/firebaseErrorHandler';

jest.mock('src/constants');

describe('firebaseErrorHandler', () => {
    beforeEach(() => {
        firebaseErrors.userNotFound = 'User not found';
        firebaseErrors.wrongCredentials = 'Invalid email or password';
        firebaseErrors.emailAlreadyInUse = 'Email already in use';
        firebaseErrors.idTokenExpired = 'ID token expired';
        firebaseErrors.idTokenRevoked = 'ID token revoked';
        firebaseErrors.userDisabledActionCode = 'User account is disabled';
        firebaseErrors.invalidActionCode = 'Invalid or expired action code';
        firebaseErrors.tooManyRequests = 'Too many requests, try again later';
    });

    it('should return correct error message and status code for each firebase error code', () => {
        const testCases = [
            {
                code: 'auth/user-not-found',
                message: 'User not found',
                status: 400
            },
            {
                code: 'auth/wrong-password',
                message: 'Invalid email or password',
                status: 400
            },
            {
                code: 'auth/invalid-email',
                message: 'Invalid email or password',
                status: 400
            },
            {
                code: 'auth/email-already-in-use',
                message: 'Email already in use',
                status: 400
            },
            {
                code: 'auth/id-token-expired',
                message: 'ID token expired',
                status: 401
            },
            {
                code: 'auth/id-token-revoked',
                message: 'ID token revoked',
                status: 401
            },
            {
                code: 'auth/user-disabled',
                message: 'User account is disabled',
                status: 400
            },
            {
                code: 'auth/expired-action-code',
                message: 'Invalid or expired action code',
                status: 400
            },
            {
                code: 'auth/invalid-action-code',
                message: 'Invalid or expired action code',
                status: 400
            },
            {
                code: 'auth/too-many-requests',
                message: 'Too many requests, try again later',
                status: 429
            },
            {
                code: 'unknown-error',
                message: firebaseErrors.default,
                status: 500
            }
        ];

        testCases.forEach(({ code, message, status }) => {
            const error = firebaseErrorHandler(code);
            expect(error.message).toBe(message);
            expect(error.cause).toBe(status);
        });
    });
});
