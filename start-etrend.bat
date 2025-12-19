@echo off
title SLK Diet App - Etetés Naplózó
echo.
echo ========================================
echo    SLK DIET APP - Etetés Naplózó
echo ========================================
echo.
echo Szerver indítása...
echo.

cd /d "D:\Progik\Programozas\Vegleges etrend\Etrend-main"

timeout /t 2 /nobreak >nul

start http://localhost:8081

npm start

pause
