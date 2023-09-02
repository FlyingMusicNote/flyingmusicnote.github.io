@echo off
setlocal
title Psych Engine 0.7.1h Library Installer

for /f "delims=" %%i in ('haxe --version 2^>^&1') do set "haxe_version=%%i"

if "%haxe_version%"=="4.2.5" (
	echo https://github.com/FlyingMusicNote
	echo ################################# [SYSTEM] Installing Git
	winget install -e --id Git.Git
	echo ################################# [HAXEFLIXEL] Installing libraries
	echo ################################# !!! [COMMAND PROMPT] Respond with "y" to prompts !!!
	haxelib --global update haxelib
	haxelib install lime
	haxelib install openfl
	haxelib install flixel
	haxelib run lime setup flixel
	haxelib run lime setup
	haxelib install flixel-tools
	haxelib update flixel
	haxelib install hxCodec
	echo ################################# [PSYCH ENGINE] Installing libraries
	haxelib install hmm
	haxelib git linc_luajit https://github.com/superpowers04/linc_luajit
	haxelib git discord_rpc https://github.com/Aidan63/linc_discord-rpc.git
	echo ################################# [PSYCH ENGINE] Setting library versions
	echo ################################# !!! [COMMAND PROMPT] Respond with "y" to prompts !!!
	haxelib set flixel-addons 3.0.2
	haxelib set flixel-tools 1.5.1
	haxelib set flixel-ui 2.5.0
	haxelib set flixel 5.2.2
	haxelib set SScript 4.0.1
	haxelib set tjson 1.4.0
	haxelib set lime 8.0.1
	haxelib set openfl 9.2.1
	lime
	echo ################################# [DONE]
	echo ################################# You can now close this window if you didn't recieve any errors.
	echo ################################# To compile source code, cd to the directory and run "lime test windows"
	pause
) else (
    	echo You need Haxe 4.2.5 for this script. You either have a newer version, or Haxe isn't installed.
	echo https://haxe.org/download/version/4.2.5/
   	pause
)

endlocal