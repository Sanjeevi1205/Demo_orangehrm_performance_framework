import { check } from "k6";
import { Trend } from "k6/metrics";

import { createEmployee } from "../clients/employee_client.js";

const createEmployeeLatency = new Trend(
    "create_employee_latency"
);

export const options = {
    vus: 50,
    duration: "30s",

    thresholds: {
        http_req_duration: [
            "avg<6000",
            "p(95)<8000"
        ],

        http_req_failed: [
            "rate<0.01"
        ],

        create_employee_latency: [
            "avg<5000"
        ]
    }
};

export default function () {

    const payload = {
        firstName: `Sanjeevi${Date.now()}`,
        middleName: "QA",
        lastName: "Automation",
    };

    const cookie = "orangehrm=sd0lfkcns9cqt0588pjn8skmdi";

    const response = createEmployee(
        payload,
        "orangehrm=sd0lfkcns9cqt0588pjn8skmdi"
    );

    if (!response) {
        console.log("Response is NULL");
        return;
    }

    createEmployeeLatency.add(
        response.timings.duration
    );

    console.log(
        `Status: ${response.status} | Response Time: ${response.timings.duration} ms`
    );
     console.log(response.body);

    check(response, {
        "Employee Created Successfully": (r) =>
            r.status === 200 || r.status === 201
    });

    const body = response.json();

    check(body, {
        "Response Not Empty": (b) =>
            Object.keys(b).length > 0
    });
}