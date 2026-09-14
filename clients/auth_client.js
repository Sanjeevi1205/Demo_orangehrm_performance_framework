import http from "k6/http";
import { ENV } from "../config/environment.js";

export function login(payload) {
    return http.post(
        `${ENV.baseUrl}/web/index.php/auth/validate`,
        payload
    );
}