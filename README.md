# AGX Global Website

A modern, responsive website for AGX Global showcasing advanced agricultural solutions and innovative farming technologies.

🌐 **Live Site**: https://agrowex.github.io/agrowex-website/

## How can I edit this code?

There are several ways of editing your application.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### GitHub Pages (Current Setup)

This project is configured for automatic deployment to GitHub Pages:

1. **Automatic Deployment**: Every push to the `main` branch triggers a GitHub Actions workflow that builds and deploys the site
2. **Live URL**: https://agrowex.github.io/agrowex-website/
3. **Configuration**: The site is configured with the correct base path for GitHub Pages hosting

### Other Hosting Options

You can also deploy this project using:

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag & drop the `dist` folder or connect via Git
- **Any static hosting service**: Build with `npm run build` and upload the `dist` folder

### Manual Build

```sh
# Build for production
npm run build

# Preview the build locally
npm run preview
```