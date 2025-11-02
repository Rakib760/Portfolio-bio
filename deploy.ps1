# deploy.ps1 - Windows PowerShell Deployment Script

Write-Host "Starting deployment..." -ForegroundColor Green

# Build the client
Write-Host "Building React client..." -ForegroundColor Yellow
Set-Location client
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed!" -ForegroundColor Red
    exit 1
}
Set-Location ..

# Add all changes
Write-Host "Adding files to git..." -ForegroundColor Yellow
git add .

# Commit changes
Write-Host "Committing changes..." -ForegroundColor Yellow
git commit -m "Deploy to GitHub Pages"

# Push to main branch
Write-Host "Pushing to main branch..." -ForegroundColor Yellow
git push origin main

# Deploy to gh-pages
Write-Host "Deploying to GitHub Pages..." -ForegroundColor Yellow
Set-Location client
npm run deploy

Write-Host "Deployment completed successfully!" -ForegroundColor Green