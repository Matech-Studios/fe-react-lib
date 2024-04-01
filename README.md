# fe-react-lib

Matech's common functionalities for FE TypeScript projects

## Security

Required envs in the destination project:

```typescript
window.__RUNTIME_CONFIG__.FIREBASE_API_KEY
window.__RUNTIME_CONFIG__.FIREBASE_AUTH_DOMAIN
window.__RUNTIME_CONFIG__.FIREBASE_PROJECT_ID
window.__RUNTIME_CONFIG__.FIREBASE_STORAGE_BUCKET
window.__RUNTIME_CONFIG__.FIREBASE_MESSAGING_SENDER_ID
window.__RUNTIME_CONFIG__.FIREBASE_APP_ID
window.__RUNTIME_CONFIG__.FIREBASE_MEASUREMENT_ID
```

## Testing locally

* `cd` to the project where you want to use the lib.
* Either use relative or absolute paths:
    * Relative: `yarn add file:'..\..\@matech\fe-react-lib\'`
    * Run `yarn add file:'D:\src\Matech\@matech\fe-react-lib\'`

## Important notes

* Do not use [path-mapping](https://medium.com/@insomniocode/typescript-path-mapping-22459288d3db), this gives errors when testing locally with `yarn add file:'some project path'`
