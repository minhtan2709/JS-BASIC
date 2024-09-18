async function fetchData() {
    try {
        const data = await getData();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

// Hàm getData giống ví dụ với Promise
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve("Du lieu da duoc tai");
            } else {
                reject("Loi khi tai du lieu");
            }
        }, 2000);
    });
}

fetchData();
