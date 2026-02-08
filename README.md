# PD-strona

## Deployment to Hostinger

This repository is configured for automatic deployment to Hostinger. The build output is located in `PD-fotografia/dist`.

### How it works

1. When you push to the `main` branch, GitHub Actions automatically:
   - Installs dependencies
   - Builds the project from `PD-fotografia` directory
   - Copies the `dist` folder contents to a `deploy` branch

2. Connect your Hostinger to the `deploy` branch of this repository

### Hostinger Setup Instructions

1. Log in to your Hostinger control panel
2. Go to "Git" or "Version Control" section
3. Connect your GitHub repository
4. Set the branch to: `deploy`
5. Set the deployment path to your public_html or desired directory
6. The dist folder contents will be automatically deployed

### Important Notes

- The source code is in the `PD-fotografia` directory
- The build output (`dist`) is automatically generated and deployed
- Never manually edit files in the `deploy` branch - they are auto-generated

### Local Development

```bash
cd PD-fotografia
npm install
npm run dev
```

### Manual Build

```bash
cd PD-fotografia
npm run build
```

The build output will be in `PD-fotografia/dist`.