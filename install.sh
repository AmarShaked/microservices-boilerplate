echo "Install main node modules"
npm i
for d in */ ; do
    echo "Install node_modules on $d"
    ( cd $d && npm i )
done