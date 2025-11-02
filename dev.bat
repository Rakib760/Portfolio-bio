@echo off
echo ========================================
echo    Starting Portfolio Application
echo ========================================
echo.

echo Starting Backend Server...
cd backend
start "Backend Server" npm run dev
cd ..

echo.
echo Waiting for backend to initialize...
timeout /t 5 /nobreak

echo.
echo Starting Frontend...
cd client
start "Frontend" npm start
cd ..

echo.
echo ========================================
echo    Both servers are starting...
echo    Frontend: http://localhost:3000
echo    Backend:  http://localhost:5000
echo ========================================
echo.
pause