$ErrorActionPreference = 'Stop'
$cwd = "D:\Progik\Programozas\Vegleges etrend\Etrend-main"
Set-Location -Path $cwd

Write-Host "`n========================================"
Write-Host "   SLK DIET APP - Etetés Naplózó"
Write-Host "========================================`n"
Write-Host "Szerver indítása..."
Write-Host ""

Start-Sleep -Seconds 2

Start-Process -FilePath "http://localhost:8081"

npm start
