# Test Report -- Angular 11 Upgrade

**Date:** 2026-07-01
**Command:** `npm run test-headless` (`ng test --watch=false --browsers=ChromeHeadless`)
**Node:** v14.21.3
**Angular:** 11.2.14

## Build

`ng build` completed successfully with Ivy enabled.

```
Initial Chunk Files | Names         |      Size
vendor.js           | vendor        |   8.09 MB
polyfills-es5.js    | polyfills-es5 | 601.60 kB
polyfills.js        | polyfills     | 267.40 kB
styles.css          | styles        | 246.33 kB
main.js             | main          | 126.91 kB
scripts.js          | scripts       |  13.51 kB
runtime.js          | runtime       |   6.15 kB
```

## Test Results

**0 specs found / 0 specs executed.**

No `*.spec.ts` test files exist in the repository. Karma connected to ChromeHeadless successfully but had nothing to run.

### Full Test Output

```
> online-banking-app@0.0.0 test-headless /home/ubuntu/repos/online-banking-app
> ng test --watch=false --browsers=ChromeHeadless

- Generating browser application bundles...
Karma v5.0.9 server started at http://0.0.0.0:9877/
Launching browsers ChromeHeadless with concurrency unlimited
Starting browser ChromeHeadless
Browser application bundle generation complete.
Chrome Headless 133.0.0.0 (Linux x86_64): Connected on socket KMh2G4bXj8gqQspxAAAA with id 73553030
Chrome Headless 133.0.0.0 (Linux x86_64): Executed 0 of 0 SUCCESS (0.001 secs / 0 secs)
TOTAL: 0 SUCCESS
```

Karma exits with code 1 when zero specs are found; this is expected behaviour, not a test failure.

## Coverage Summary

No coverage output was produced (coverage directory `coverage/web-self-service-application` was not created) because there are no spec files to instrument.

## Key Version Bumps

| Package | Before | After |
|---|---|---|
| @angular/core | 9.1.13 | 11.2.14 |
| @angular/cli | 9.1.15 | 11.2.19 |
| @angular/material | 9.2.4 | 11.2.13 |
| @angular/cdk | 9.2.4 | 11.2.13 |
| @angular/flex-layout | 9.0.0-beta.31 | 11.0.0-beta.33 |
| @angular-devkit/build-angular | 0.901.15 | 0.1102.19 |
| TypeScript | 3.8.3 | 4.1.6 |
| zone.js | 0.10.3 | 0.11.8 |
| tslib | 1.x | 2.x |
| angular-google-charts | 0.1.6 | 2.2.1 |
| codelyzer | 5.2.2 | 6.0.2 |

## Configuration Changes

- `tsconfig.json`: `angularCompilerOptions.enableIvy` changed from `false` to `true` (Ivy is required in Angular 11).
- `src/app/app-routing.module.ts`: `relativeLinkResolution: 'legacy'` added by Angular 11 migration schematic.
- `src/main.ts`: HammerJS import removed by Angular 10 Material migration.
