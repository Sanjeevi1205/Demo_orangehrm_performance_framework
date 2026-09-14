import { check } from "k6";
import { Trend } from "k6/metrics";

import { login } from "../clients/auth_client.js";

const loginLatency = new Trend("login_latency");

export const options = {
    vus: 10,
    duration: "30s",

    thresholds: {
        http_req_duration: [
            "avg<5000",
            "p(95)<7000"
        ],

        http_req_failed: [
            "rate<0.01"
        ],

        login_latency: [
            "avg<5000"
        ]
    }
};

export default function () {

    const payload = {
        username: "Admin",
        password: "admin123"
    };

    const response = login(payload);

    loginLatency.add(response.timings.duration);

    check(response, {
        "Login Success": (r) =>
            r.status === 200 || r.status === 302
    });

    console.log(
        `Status: ${response.status} | Duration: ${response.timings.duration} ms`
    );
}