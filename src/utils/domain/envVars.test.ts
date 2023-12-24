import { EnvVars } from 'src/utils/domain';

describe('envVars', () => {
    beforeEach(() => {
        global.window.__RUNTIME_CONFIG__ = {
            FIREBASE_API_KEY: 'firebase-api-key',
            FIREBASE_AUTH_DOMAIN: 'https://domain.dom',
            FIREBASE_PROJECT_ID: 'project-123',
            FIREBASE_STORAGE_BUCKET: 'firebase_bucket',
            FIREBASE_MESSAGING_SENDER_ID: 'sender-id',
            FIREBASE_APP_ID: 'app-id',
            FIREBASE_MEASUREMENT_ID: 'measurement-id'
        };
    });

    it('should return process.env variables when available', () => {
        process.env.FIREBASE_API_KEY = 'firebase-api-key';
        expect(EnvVars.getVars().FIREBASE_API_KEY).toBe('firebase-api-key');
    });

    it('should return window.__RUNTIME_CONFIG__ variables when process.env is not available', () => {
        global.process = undefined as any;
        expect(EnvVars.getVars().FIREBASE_API_KEY).toBe('firebase-api-key');
    });
});
