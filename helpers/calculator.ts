const calculator = {
    calculateFromATH: async () => {
        const res = await fetch("https://tstapi.cryptorank.io/v0/coins/bitcoin");
        const {data} = await res.json();
        
        const currentBTCPrice = data.price.USD;
        const athPrice = data.athPrice.USD;

        const diff = athPrice - currentBTCPrice;
        const fromATHPercentage = (diff / athPrice * 100).toFixed(2);

        const fromAthMessage = `Bitcoin is down ${fromATHPercentage}% from the all-time high`;

        return fromAthMessage;
    },
    calculateToATH: async () => {
        const res = await fetch("https://tstapi.cryptorank.io/v0/coins/bitcoin");
        const {data} = await res.json();

        const currentBTCPrice = data.price.USD;
        const athPrice = data.athPrice.USD;

        const diff = athPrice - currentBTCPrice;
        const toAthPercentage = (diff / currentBTCPrice * 100).toFixed(2);

        const toAthMessage = `Bitcoin price has to rise by ${toAthPercentage}% in order to reach the all-time high`;

        return toAthMessage;
    }
}

export default calculator;