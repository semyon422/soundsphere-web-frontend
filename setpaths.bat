@echo off

set LUA_ROOT=D:\lua

set LUA_PATH=%LUA_PATH%;%CD%\?.lua;%CD%\?\init.lua

set PATH=%PATH%;%LUA_ROOT%\openresty

set PATH=%PATH%;%LUA_ROOT%\luarocks
set LUA_PATH=%LUA_PATH%;%LUA_ROOT%\luarocks\lua\?.lua;%LUA_ROOT%\luarocks\lua\?\init.lua

set PATH=%PATH%;%LUA_ROOT%\tree\bin
set LUA_PATH=%LUA_PATH%;%LUA_ROOT%\tree\share\lua\5.1\?.lua;%LUA_ROOT%\tree\share\lua\5.1\?\init.lua
set LUA_CPATH=%LUA_CPATH%;%LUA_ROOT%\tree\lib\lua\5.1\?.dll


set PATH=%PATH%;%LUA_ROOT%\openssl-1.0.2u-win64

set PATH=%PATH%;D:\msys64\mingw64\bin

set LUA_PATH=%LUA_PATH%;%LUA_ROOT%\openresty\lua\?.lua;%LUA_ROOT%\openresty\lua\?\init.lua;
set LUA_CPATH=%LUA_CPATH%;%LUA_ROOT%\openresty\lualib\?.so;%LUA_ROOT%\openresty\?.dll;%LUA_ROOT%\openresty\loadall.dll

set LUA_PATH=%LUA_PATH%;%LUA_ROOT%\openresty\lualib\?.lua;%LUA_ROOT%\luarocks\lualib\?\init.lua

