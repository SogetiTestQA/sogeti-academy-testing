import { Page, Locator } from '@playwright/test';

export class HomePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate(): Promise<void> {
        await this.page.goto("https://staging.academy.sogeti.nl/");
    }

    async navigateToTrainingen(): Promise<void> {
        await this.page.locator('a[href="https://academy.sogeti.nl/trainingen/"]').click();
    }

    async navigateToIncompany(): Promise<void> {
        await this.page.locator('a[href="https://academy.sogeti.nl/incompany/"]').click();
    }

    async navigateToCoaching(): Promise<void> {
        await this.page.locator('a[href="https://academy.sogeti.nl/coaching-job/"]').click();
    }

    async navigateToOnzeTrainers(): Promise<void> {
        await this.page.locator('a[href="https://academy.sogeti.nl/onze-trainers/"]').click();
    }

    async navigateToAgenda(): Promise<void> {
        await this.page.locator('a[href="https://academy.sogeti.nl/agenda/"]').click();
    }

    async navigateToReviews(): Promise<void> {
        await this.page.locator('a[href="https://academy.sogeti.nl/reviews/"]').click();
    }
}