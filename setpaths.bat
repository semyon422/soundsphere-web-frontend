@echo off

set PATH=%PATH%;D:\code\github\soundsphere-web-api
set PATH=%PATH%;D:\lapis\luarocks
set PATH=%PATH%;D:\lapis\openresty
set PATH=%PATH%;D:\lapis\openresty\systree\bin
set PATH=%PATH%;D:\lapis\openssl-1.0.2u-win64
set PATH=%PATH%;D:\msys64\mingw64\bin


set LUA_PATH=%LUA_PATH%;%CD%\?.lua;%CD%\?\init.lua
set LUA_PATH=%LUA_PATH%;%CD%\deps\?.lua;%CD%\deps\?\init.lua

set LUA_PATH=%LUA_PATH%;D:\lapis\luarocks\lua\?.lua;D:\lapis\luarocks\lua\?\init.lua;D:\lapis\openresty\systree\share\lua\5.1\?.lua;D:\lapis\openresty\systree\share\lua\5.1\?\init.lua
set LUA_CPATH=%LUA_CPATH%;D:\lapis\openresty\systree\lib\lua\5.1\?.dll

set LUA_PATH=%LUA_PATH%;D:\lapis\openresty\lualib\?.lua;D:\lapis\luarocks\lualib\?\init.lua
