// Function to calculate all averages
export const average = (dividend, divisor) => {
    if (dividend === "0.0" || divisor === "0.0") {
        return "0.0";
    }

    return (dividend / divisor * 100).toFixed(1);
}