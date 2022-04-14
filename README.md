1. Run `npm install` in both `project` and `reference` directories
1. Run `npm run build` in `project` folder (Builds both `project` and `reference`)
2. (Optional) Run `tsc --traceResolution | grep 'reference'` to see how typescript resolves the module seemingly  fine
3. Run `npm start` in `project`
4. Get `Cannot find module` error
5. Smash your computer