import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    // Directory to output test artifacts
    outputDir: 'test-results/',
    globalSetup: "./globalSetup.ts",
    
    // Projects are defined in this array
    projects: [
        // {
        //     name: 'firefox',
        //     use: { ...devices['Desktop Firefox'] },
        // },
        // {
        //     name: 'webkit',
        //     use: { ...devices['Desktop Safari'] },
        // },
        // {
        //     name: 'Google Chrome',
        //     use: { ...devices['Desktop Chrome'] },
        // },
        {
            name: 'Microsoft Edge',
            use: { ...devices['Desktop Edge']}
        }
    ],

    // Global test settings
    use: {
        headless: true, // Run tests in headless mode
        trace: 'on-first-retry', // Enable tracing on the first retry
        video: 'retain-on-failure', // Retain video on failure
    },

    // Test directory and patterns
    testDir: 'tests', // Directory where tests are located
    testMatch: '**/*.spec.ts', // Pattern to match test files
});