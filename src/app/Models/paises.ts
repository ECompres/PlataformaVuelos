export class Paises {
    constructor(
        public alpha3Code: string,
        public altSpellings: any[],
        public area: number,
        public borders: any[],
        public callingCodes: any[],
        public capital: string,
        public cioc: string,
        public currencies: any[],
        public demonym: string,
        public flag: string,
        public gini: number,
        public languages: any[],
        public latlng: number[],
        public name: string,
        public nativeName: string,
        public numericCode: string,
        public population: number,
        public region: string,
        public regionalBlocs: any[],
        public subregion: string,
        public timezones: any[],
        public topLevelDomain: any[],
        public translations: any
    ) {

    }
}