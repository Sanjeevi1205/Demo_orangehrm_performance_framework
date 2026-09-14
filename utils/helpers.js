import { sleep } from "k6";

export function generateEmployee() {

    const timestamp = Date.now();

    return {

        employeeId:
            `EMP_${timestamp}`,

        firstName:
            `K6_${timestamp}`,

        middleName:
            "Perf",

        lastName:
            "Employee"
    };
}

export function generateUniqueValue(prefix) {

    return `${prefix}_${Date.now()}`;
}

export function thinkTime(seconds = 1) {

    sleep(seconds);
}