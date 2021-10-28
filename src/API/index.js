export const ExchangeAPI = {
    async converter(from, to) {
        const data = await fetch(`https://api.frankfurter.app/latest?amount=1&from=${from}&to=${to}`);
        return await data.json()
    },
    async currencyRate(from, to) {
        const data = await fetch(`https://api.frankfurter.app/latest?amount=1&from=${from}&to=${to}`);
        return await data.json()
    }
}