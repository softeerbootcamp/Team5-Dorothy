cd frontend
npm install
CI="" npm run build
mkdir -p dist/src/assets
cp src/assets/* dist/src/assets/
tar -cvf dist.tar dist