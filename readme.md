
# Python Code

## generate python code from protoc

```
python -m grpc_tools.protoc -I . --python_out=. --grpc_python_out=. --pyi_out=. ticker.proto
```

# React Code

## generate ts code from protoc

```
protoc --plugin="./node_modules/.bin/protoc-gen-ts" --ts_out=. --ts_opt=runtime_package=npm:google-protobuf --ts_opt=grpc_web_package=npm:grpc-web" src/yahoo/finance/pricing-data.proto
```

## Run App

```
npm run start
```