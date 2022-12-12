const style = "red";

try {
    style = 'blue';
} catch (error) {
    console.log(error, style);
}