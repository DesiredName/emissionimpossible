declare type CardChoise = 'A' | 'B';

declare type Company = {
    name: string;
    logo: string;
    ecoscore: number;
    emissions: number;
    web: string;
}

declare type Question = {
    companyA: Company;
    companyB: Company;
    isCorrectChoise: CardChoise;
}

declare type ResultedState = {
    email: string;
    username: string;
    score: number;
}