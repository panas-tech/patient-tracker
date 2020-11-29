
# patient-tracker

## Local Development Setup

### 1. Install yarn

Follow the [installation instructions](https://classic.yarnpkg.com/en/docs/install/#mac-stable)

### 2. Install `firebase-tools` globally

```bash
yarn global add firebase-tools
# alternatively
npm install -g firebase-tools
```

### 3. Install a JDK

Pick the one that [matches your OS](https://www.oracle.com/java/technologies/javase-jdk15-downloads.html). This is so we can run the Firebase emulators via `firebase emulators:start`.

### 4. All set

We are going to run the Firebase emulators in dev. In order to do so, we'll run `yarn dev` rather than `yarn start`.

The command `yarn dev` will run the Firebase emulators first and the react app second. To visit the emulator UI, visit `https://localhost:4000`.

### Troubleshooting

#### Cloud Function could not start up

If you get an error about the cloud function being in TypeScript, we simply need to build them. To do so, run `npm run build` on the `functions` directory.

Example:

```bash
# change directory to functions directory
cd functions
# run build
npm run build
# change back to the original directory
cd ..
# run dev
yarn dev
```

You only need to do this once.
