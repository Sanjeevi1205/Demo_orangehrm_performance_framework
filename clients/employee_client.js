import http from "k6/http";
import { ENV } from "../config/environment.js";
import { getAuthHeaders } from "../utils/headers.js";

export function createEmployee(payload, cookie) {

    return http.post(
        `${ENV.baseUrl}/web/index.php/api/v2/pim/employees`,
        JSON.stringify(payload),
        {
            headers: getAuthHeaders(cookie)
        }
    );
}