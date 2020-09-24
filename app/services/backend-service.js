// The following is a sample implementation of a backend service using Progress Kinvey (https://www.progress.com/kinvey).
// Feel free to swap in your own service / APIs / etc here for your own apps.

import * as http from "http";

export default class BackendService {


    login(user) {
        return http.request({
            url: "http://www.petstacy.com/api/member/loginprocess",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({
                Username: user.username,
                Password: user.password,
                PublicKey: '616c5311cfea79dd9f9990a10fc603c64facbcf8e6ff36b868a6f7ea7a889460'
            })
        });
    }


}