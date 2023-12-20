import { HttpStatusCode } from 'axios';
import { firebaseErrors } from '../../constants';

export const firebaseErrorHandler = (code: string) => {
    let status: HttpStatusCode;
    let message: string;
    switch (code) {
        case 'auth/user-not-found':
            status = HttpStatusCode.BadRequest;
            message = firebaseErrors.userNotFound;
            break;
        case 'auth/wrong-password':
        case 'auth/invalid-email':
            status = HttpStatusCode.BadRequest;
            message = firebaseErrors.wrongCredentials;
            break;
        case 'auth/email-already-in-use':
            status = HttpStatusCode.BadRequest;
            message = firebaseErrors.emailAlreadyInUse;
            break;
        case 'auth/id-token-expired':
            status = HttpStatusCode.Unauthorized;
            message = firebaseErrors.idTokenExpired;
            break;
        case 'auth/id-token-revoked':
            status = HttpStatusCode.Unauthorized;
            message = firebaseErrors.idTokenRevoked;
            break;
        case 'auth/user-disabled':
            status = HttpStatusCode.BadRequest;
            message = firebaseErrors.userDisabledActionCode;
            break;
        case 'auth/expired-action-code':
        case 'auth/invalid-action-code':
            status = HttpStatusCode.BadRequest;
            message = firebaseErrors.invalidActionCode;
            break;
        case 'auth/too-many-requests':
            status = HttpStatusCode.TooManyRequests;
            message = firebaseErrors.tooManyRequests;
            break;
        default:
            status = HttpStatusCode.InternalServerError;
            message = firebaseErrors.default;
            break;
    }
    return new Error(message, { cause: status });
};
