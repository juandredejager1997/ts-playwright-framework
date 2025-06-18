# 🎭 Playwright End-to-End Automation Framework (TypeScript)

A scalable, modular end-to-end test automation framework built with [Playwright](https://playwright.dev/) and TypeScript — perfect for testing modern web applications with clean code and reusability in mind.

---

## 📦 Features

- ✅ Built with **TypeScript**
- ✅ **Custom fixtures** for flexible test setup
- ✅ **Page Object Model (POM)** for maintainability
- ✅ **Environment support** (DEV, UAT, STG, PROD)
- ✅ Supports **headless/headed** runs
- ✅ **Allure reporting** and test tagging ready (optional)

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/juandredejager1997/ts-playwright-framework.git
cd playwright-e2e-framework
```

### 2. Install dependencies

```bash
npm install
npm init playwright@latest
```

### 3. Run your first test

```bash
npx playwright test
```

---

## 🧪 Example Test

```ts
test('Admin can log in', async ({ page, admin }) => {
  await expect(page.locator('h2')).toHaveText('Secure Area');
});
```

---


## 🌍 Multi-Environment Support

Environment-specific credentials and URLs are handled via `customGlobals` in `config/env.ts`.

Switch environment via project name in `playwright.config.ts`:

```bash
npx playwright test --project=UAT
```

---

## 📊 Reporting (Optional)

Install Allure reporter:

```bash
npm i -D allure-playwright
```

Update your config:

```ts
reporter: [['allure-playwright']]
```

Then run:

```bash
npx playwright test && npx allure generate allure-results --clean -o allure-report && npx allure open
```

---

## 💡 Tips

- Use `page.locator('#id')` or `getByRole()` for robust selectors
- Add new fixtures in `/fixtures` and pages in `/pages`
- Tag tests using `test.describe()` or `test.skip()` for grouping or control

---

## 🤝 Contributing

PRs and feedback are welcome. Fork, tweak, and make it yours!

---

## 📄 License

MIT

---

## 🧠 Author

Built with ❤️ by [Juandre](https://github.com/juandredejager1997)
