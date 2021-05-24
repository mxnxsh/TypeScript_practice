var userInput;
var userName;
userInput = 5;
userInput = 'Manish';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, code: code };
}
generateError('An error occurred', 500);
