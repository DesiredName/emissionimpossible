export default function () {
    const { totalQuestions, growRoom } = useAppConfig()
    const companies: Company[] = [
        growRoom,
        { name: 'Shell', logo: { src: 'shell-2020', type: 'png' }, emissions: 0.16, ecoscore: 75, web: 'https://www.shell.co.uk' },
        { name: 'Patagonia', logo: { src: 'Patagonia_(Unternehmen)_logo', type: 'png' }, emissions: 1.54, ecoscore: 44, web: 'https://eu.patagonia.com/gb/en/home' },
        { name: 'Coca-Cola', logo: { src: 'coca-cola-logo', type: 'png' }, emissions: 1.16, ecoscore: 49, web: 'https://www.coca-cola.com/gb/en' },
        { name: 'Tony\'s Chocolonely', logo: { src: 'Tony_s_Chocolonely_Logo_NL', type: 'png' }, emissions: 1.38, ecoscore: 65, web: 'https://uk.tonyschocolonely.com' },
        { name: 'Fussy', logo: { src: 'Fussy_Black_Logo', type: 'png' }, emissions: 1.89, ecoscore: 61, web: 'https://www.getfussy.com' },
        { name: 'Schneider Electric', logo: { src: 'Schneider_Electric_2008', type: 'png' }, emissions: 2.62, ecoscore: 35, web: 'https://www.se.com/ww/en' },
        { name: 'BP', logo: { src: 'BP_Helios_logo', type: 'png' }, emissions: 0.38, ecoscore: 67, web: 'https://www.bp.com' },

        { name: 'B-Lab', logo: { src: 'B_Lab_logo', type: 'svg' }, emissions: 0.9, ecoscore: 68, web: 'https://bcorporation.uk' },
        { name: 'UN Climate Change', logo: { src: 'United_Nations_Climate_Change_Conference_logo', type: 'svg' }, emissions: 4.69, ecoscore: 31, web: 'https://unfccc.int' },
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