export class Produkt {
    nazwa: string;
    cena: number;
    dataUtworzenia: Date;
    czyPromocja: boolean;
    iloscWKoszyku: number = 0;

    constructor(nazwa: string, cena: number, dataUtworzenia: Date, czyPromocja: boolean) {
        this.nazwa = nazwa;
        this.cena = cena;
        this.dataUtworzenia = dataUtworzenia;
        this.czyPromocja = czyPromocja;
        this.iloscWKoszyku = 0;
    }
}