/* eslint-disable import/no-anonymous-default-export */
function handleExpectedError(error) {
    const { response } = error;

    if (response) {
        const { status } = response;

        switch (status) {
            case "400":
                console.error("Bad Request");
                break;
            case "404":
                console.error("Page not Found");
                break;
            default:
                break;
        }
    }

    return Promise.reject(error);
}

export default {
    handle: handleExpectedError,
};