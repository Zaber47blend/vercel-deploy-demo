import { defineConfig } from 'vite';

// Vercel sets these system variables during the build; bake them into the page
// so anyone can check which commit and environment they're looking at.
const env = process.env;
export default defineConfig({
  define: {
    __COMMIT__: JSON.stringify((env.VERCEL_GIT_COMMIT_SHA || 'local').slice(0, 7)),
    __BRANCH__: JSON.stringify(env.VERCEL_GIT_COMMIT_REF || 'local'),
    __ENV__: JSON.stringify(env.VERCEL_ENV || 'development'),
    __BUILT__: JSON.stringify(new Date().toISOString()),
  },
});
