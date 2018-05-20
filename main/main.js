module.exports = function main(distance, waitingTime) {
    let totalFee = 0;
    const STARTING_FARE = 6;
    const STARTING_DISTANCE = 2;
    const CHANGE_PER_KM = 0.8;
    const RATE_AFTER_8KM = 0.5;
    const MAX_DISTANCE_WITHOUT_EXTRACT_FEE = 8;
    const CHARGE_FOR_WAITING_PER_MINUTE = 0.25
    // 计算起步价
    totalFee += STARTING_FARE;
    // 加上每公里运价
    if(distance > STARTING_DISTANCE) {
        totalFee += (distance - STARTING_DISTANCE) * CHANGE_PER_KM;
    }
    //  加上超过八公里收费
    if(distance > MAX_DISTANCE_WITHOUT_EXTRACT_FEE) {
        totalFee += (distance - MAX_DISTANCE_WITHOUT_EXTRACT_FEE) * CHANGE_PER_KM * RATE_AFTER_8KM;
    }
    // 加上等待时间收费
    totalFee += waitingTime * CHARGE_FOR_WAITING_PER_MINUTE;
    return Math.round(totalFee);
}