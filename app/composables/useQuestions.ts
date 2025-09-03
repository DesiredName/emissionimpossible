export type Company = {
    name: string;
    logo: string;
    emissions: number;
    isSustainable: boolean;
}

export type Question = {
    companyA: Company;
    companyB: Company;
}

export default function () {
    const companies: Company[] = [
        { name: "Amazon", logo: "🏪", emissions: 3.2, isSustainable: false },
        { name: "Shell", logo: "⛽", emissions: 4.8, isSustainable: false },
        { name: "BP", logo: "🛢️", emissions: 5.1, isSustainable: false },
        { name: "ExxonMobil", logo: "⛽", emissions: 4.9, isSustainable: false },
        { name: "Walmart", logo: "🏬", emissions: 3.8, isSustainable: false },
        { name: "Patagonia", logo: "🏔️", emissions: 0.8, isSustainable: true },
        { name: "Interface", logo: "🌿", emissions: 0.6, isSustainable: true },
        { name: "Unilever", logo: "🌱", emissions: 1.2, isSustainable: true },
        { name: "Ben & Jerry's", logo: "🍦", emissions: 0.9, isSustainable: true },
        { name: "Seventh Generation", logo: "♻️", emissions: 0.7, isSustainable: true }
    ];

    const questions: Question[] = [];
    const sustainableCompanies = companies.filter(c => c.isSustainable);
    const pollutingCompanies = companies.filter(c => !c.isSustainable);

    for (let i = 0; i < 5; i++) {
        const sustainable = sustainableCompanies[Math.floor(Math.random() * sustainableCompanies.length)];
        const polluting = pollutingCompanies[Math.floor(Math.random() * pollutingCompanies.length)];

        questions.push({
            companyA: sustainable!,
            companyB: polluting!
        });
    }

    return questions;
}