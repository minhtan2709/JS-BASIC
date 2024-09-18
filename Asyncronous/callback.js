function getData(callback) {
    setTimeout(() => {
        const success = true;
        if (success) {
            callback(null, "Du lieu da duoc tai");
        } else {
            callback("Loi khi tai du lieu", null);
        }
    }, 2000);
}

function handleData(error, data) {
    if (error) {
        console.error(error);
    } else {
        console.log(data); // In ra: Dữ liệu đã được tải
    }
}

getData(handleData);
