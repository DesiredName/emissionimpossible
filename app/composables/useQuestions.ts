export type Company = {
    name: string;
    logo: string;
    ecoscore: number;
    emissions: number;
    web: string;
}

export type Question = {
    companyA: Company;
    companyB: Company;
    isCorrectChoise: 'A' | 'B';
}

export default function () {
    const { totalQuestions } = useAppConfig()
    const companies: Company[] = [
        { name: 'Shell', logo: 'shell-2020.svg', emissions: 0.16, ecoscore: 75, web: 'https://www.shell.co.uk' },
        { name: 'Patagonia', logo: 'Patagonia_(Unternehmen)_logo.svg', emissions: 1.54, ecoscore: 44, web: 'https://eu.patagonia.com/gb/en/home' },
        { name: 'Coca-Cola', logo: 'coca-cola-logo.svg', emissions: 1.16, ecoscore: 49, web: 'https://www.coca-cola.com/gb/en' },
        { name: 'Tony\'s Chocolonely', logo: 'Tony_s_Chocolonely_Logo_NL.svg', emissions: 1.38, ecoscore: 65, web: 'https://uk.tonyschocolonely.com' },
        { name: 'GrowRoom', logo: 'GrowRoomGR-Logo-Only.svg', emissions: 0.22, ecoscore: 92, web: 'https://growroom.agency' },
        { name: 'Fussy', logo: 'Fussy_Black_Logo.svg', emissions: 1.89, ecoscore: 61, web: 'https://www.getfussy.com' },
        { name: 'Schneider Electric', logo: 'Schneider_Electric_2008.svg', emissions: 2.62, ecoscore: 35, web: 'https://www.se.com/ww/en' },
        { name: 'B-Lab', logo: 'B_Lab_logo.svg', emissions: 0.9, ecoscore: 68, web: 'https://bcorporation.uk' },
        { name: 'UN Climate Change', logo: 'United_Nations_Climate_Change_Conference_logo.svg', emissions: 4.69, ecoscore: 31, web: 'https://unfccc.int' },
        { name: 'BP', logo: 'BP_Helios_logo.svg', emissions: 0.38, ecoscore: 67, web: 'https://www.bp.com' },
    ];

    const questions: Question[] = [];
    const idx = () => Math.floor(Math.random() * companies.length);

    for (let i = 0; i < totalQuestions; i++) {
        const companyA = companies.splice(idx(), 1)[0]!;
        const companyB = companies.splice(idx(), 1)[0]!;

        questions.push({
            companyA,
            companyB,
            isCorrectChoise: companyA.ecoscore > companyB.ecoscore ? 'A' : 'B'
        });
    }

    return questions;
}