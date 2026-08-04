# Quick GitHub Pages Steps

Use this folder as the full website source. Do not upload the parent `outputs` folder; upload only the contents of `boardlab-github-pages`.

## Fastest path

1. Go to GitHub and create a new public repository named `boardlab-ux-prototype`.
2. Upload these files to the repository root:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `clarity-config.js`
   - `clarity-tracking.js`
   - `.nojekyll`
   - the full `assets` folder
3. Commit the upload.
4. Go to `Settings` > `Pages`.
5. Set source to `Deploy from a branch`.
6. Set branch to `main` and folder to `/root`.
7. Click `Save`.

GitHub will publish the site at:

```text
https://YOUR-GITHUB-USERNAME.github.io/boardlab-ux-prototype/
```

## Microsoft Clarity

The Clarity tracking snippet is already installed through:

- `clarity-config.js`
- `clarity-tracking.js`

After GitHub Pages publishes, add the final GitHub Pages URL to the Microsoft Clarity project.

