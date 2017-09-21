SCHTASKS /Create ^
/tn "Git push daily LM" ^
/tr D:\Development\unsync\RND\learn-mocha\task.bat ^
/sc daily ^
/st 11:25 ^
