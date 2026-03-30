class Logger {
    info(message) {
        console.log(`[INFO]: ${message}`);
    }
}
module.exports = new Logger();
