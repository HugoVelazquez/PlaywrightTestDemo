# Playwright Test Demo

```
choco Install nodejs (choco upgrade nodejs)
Set-ExecutionPolicy RemoteSigned (Optional  if npm command is not working)
npm install -g npm@latest
npm install -D @playwright/test
npx playwright codegen --browser=chromium --channel=chrome http://localhost:5086/swagger/index.html
npx playwright test MyFirstTest
```

**Note: To run this endpoint you need to follow run this solution [ImageAnalyzer](https://github.com/HugoVelazquez/ImageAnalyzer)**
