D:
cd D:\Development\unsync\RND\learn-mocha

REM Change user details

git config user.name "Li Shing To"
git config user.email shingto.li@rutledgeservices.com

git pull
git add .
git commit -m "Daily backup by Windows Batch - %DATE%"
git push
