module.exports = function main(distance, waitingTime) {
    let totalFee = 0;
    if(distance <= 2 && waitingTime === 0) {
        return 6;
    } else if(distance <= 8) {
        return 6 + (distance - 2) * 0.8;
    }

};