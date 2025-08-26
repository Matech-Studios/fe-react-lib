# fe-react-lib

Matech's common functionalities for FE TypeScript projects

## Installation

- npm: `npm install @matech-studios/fe-react-lib`
- yarn: `yarn add @matech-studios/fe-react-lib`

## Install from GitHub Packages

GitHub Packages requires authentication even for public packages. Configure your project-level `.npmrc` (recommended):

```ini
@matech-studios:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_PACKAGES_TOKEN}
```

- Create a GitHub Personal Access Token with `read:packages` (classic) and set it as `GITHUB_PACKAGES_TOKEN` in your environment or CI.
- Then install as usual:

```bash
npm install @matech-studios/fe-react-lib
# or
yarn add @matech-studios/fe-react-lib
```

## Quick Start

1) Provide Firebase runtime config as early as possible (e.g., in `index.html` or a bootstrap script):

```html
<script>
  window.__RUNTIME_CONFIG__ = {
    FIREBASE_API_KEY: '...your api key...',
    FIREBASE_AUTH_DOMAIN: '...your auth domain...',
    FIREBASE_PROJECT_ID: '...your project id...',
    FIREBASE_STORAGE_BUCKET: '...your storage bucket...',
    FIREBASE_MESSAGING_SENDER_ID: '...your sender id...',
    FIREBASE_APP_ID: '...your app id...',
    FIREBASE_MEASUREMENT_ID: '...your measurement id...'
  };
  // Ensure this runs before your React app mounts
</script>
```

2) Wrap your app with providers:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { LoadingProvider, UserProvider } from '@matech-studios/fe-react-lib';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <LoadingProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </LoadingProvider>
);
```

3) Use hooks and services:

```tsx
import { useAuth, useUser } from '@matech-studios/fe-react-lib';

export function LoginForm() {
  const { firebaseLogIn } = useAuth();
  const { user, logOut } = useUser();

  const onLogin = async () => {
    await firebaseLogIn('user@example.com', 'password123');
  };

  if (user) return <button onClick={logOut}>Log out</button>;
  return <button onClick={onLogin}>Log in</button>;
}
```

4) Social login example (popup):

```ts
import { auth, signInWithPopup, googleLoginProvider } from '@matech-studios/fe-react-lib';

await signInWithPopup(auth, googleLoginProvider);
```

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
