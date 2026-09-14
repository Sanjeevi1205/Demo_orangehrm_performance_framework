const BASE_HEADERS = {

    "Accept": "application/json"
};

export function getFormHeaders() {

    return {

        ...BASE_HEADERS,

        "Content-Type":
            "application/x-www-form-urlencoded"
    };
}

export function getJsonHeaders() {

    return {

        ...BASE_HEADERS,

        "Content-Type":
            "application/json"
    };
}

export function getAuthHeaders(cookie) {

    return {

        ...BASE_HEADERS,

        "Content-Type":
            "application/json",

        "Cookie":
            cookie
    };
}