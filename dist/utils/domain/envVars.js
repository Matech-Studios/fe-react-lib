const EnvVars = {
    getVars: () => {
        console.log(`process.env: ${process.env}`);
        try {
            if (process.env) {
                return {
                    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
                    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
                    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
                    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
                    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
                    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
                    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID
                };
            }
            else {
                return runtimeConfig();
            }
        }
        catch (error) {
            return runtimeConfig();
        }
    }
};
const runtimeConfig = () => {
    return {
        FIREBASE_API_KEY: window.__RUNTIME_CONFIG__.FIREBASE_API_KEY,
        FIREBASE_AUTH_DOMAIN: window.__RUNTIME_CONFIG__.FIREBASE_AUTH_DOMAIN,
        FIREBASE_PROJECT_ID: window.__RUNTIME_CONFIG__.FIREBASE_PROJECT_ID,
        FIREBASE_STORAGE_BUCKET: window.__RUNTIME_CONFIG__.FIREBASE_STORAGE_BUCKET,
        FIREBASE_MESSAGING_SENDER_ID: window.__RUNTIME_CONFIG__.FIREBASE_MESSAGING_SENDER_ID,
        FIREBASE_APP_ID: window.__RUNTIME_CONFIG__.FIREBASE_APP_ID,
        FIREBASE_MEASUREMENT_ID: window.__RUNTIME_CONFIG__.FIREBASE_MEASUREMENT_ID
    };
};
const { FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN, FIREBASE_PROJECT_ID, FIREBASE_STORAGE_BUCKET, FIREBASE_MESSAGING_SENDER_ID, FIREBASE_APP_ID, FIREBASE_MEASUREMENT_ID } = EnvVars.getVars();
export { FIREBASE_API_KEY, FIREBASE_APP_ID, FIREBASE_AUTH_DOMAIN, FIREBASE_MEASUREMENT_ID, FIREBASE_MESSAGING_SENDER_ID, FIREBASE_PROJECT_ID, FIREBASE_STORAGE_BUCKET };
//# sourceMappingURL=envVars.js.map