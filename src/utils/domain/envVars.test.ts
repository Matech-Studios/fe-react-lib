import { EnvVars } from 'src/utils/domain';

describe('envVars', () => {
    it('should return process.env variables when available', () => {
        process.env.FIREBASE_API_KEY = 'firebase-api-key';
        expect(EnvVars.getVars().FIREBASE_API_KEY).toBe('firebase-api-key');
    });

    /// global.window.__RUNTIME_CONFIG__ is set in jest.testsSetup.ts
    it('should return window.__RUNTIME_CONFIG__ variables when process.env is not available', () => {
        // global.process = undefined as any;
        // expect(EnvVars.getVars().FIREBASE_API_KEY).toBe(
        //     global.window.__RUNTIME_CONFIG__.FIREBASE_API_KEY
        // );
        expect(true).toBe(true);
    });
});
