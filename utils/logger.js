const LOG_LEVELS = {
    INFO: "INFO",
    WARN: "WARN",
    ERROR: "ERROR",
    DEBUG: "DEBUG"
};

function writeLog(level, message) {
    const timestamp = new Date().toISOString();

    console.log(
        `[${timestamp}] [${level}] ${message}`
    );
}

export function logInfo(message) {
    writeLog(
        LOG_LEVELS.INFO,
        message
    );
}

export function logWarn(message) {
    writeLog(
        LOG_LEVELS.WARN,
        message
    );
}

export function logError(message) {
    writeLog(
        LOG_LEVELS.ERROR,
        message
    );
}

export function logDebug(message) {
    writeLog(
        LOG_LEVELS.DEBUG,
        message
    );
}