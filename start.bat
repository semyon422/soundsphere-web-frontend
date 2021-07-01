call setpaths.bat

:start

luvit app.lua

timeout /t 1

goto start
