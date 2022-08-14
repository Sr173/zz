Date.prototype.Format = function(fmt) {
    var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "H+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds()
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

let now = (new Date().getTime())
let sampleTimestamp = now - 1000 * 60 * 60 * 8
let expireTimestamp = sampleTimestamp + 1000 * 60 * 60 * 48

// body = JSON.stringify({
//     "params": null,
//     "errorMessage": null,
//     "obj": {
//         "expireFlag": false,
//         "vaccineInfo": {
//             "vaccinate": true,
//             "idCard": "410482199803155051",
//             "vaccinateCount": 3
//         },
//         "nucleicInfo": {
//             "sampleTimestamp": sampleTimestamp,
//             "expireTimeStamp": expireTimestamp,
//             "samplingTime": new Date(sampleTimestamp).Format("yyyy-MM-dd HH:mm:ss"),
//             "acidResult": "阴性",
//             "sysTimeStamp": now,
//             "timeDesc": "",
//             "idCard": "410482199803155051",
//             "expireTime": new Date(expireTimestamp).Format("yyyy-MM-dd HH:mm:ss"),
//             "source": "0",
//             "expireHour": 48
//         },
//         "idCard": "410482199803155051",

//     },
//     "success": true,
//     "date": null,
//     "version": null,
//     "business": null,
//     "requestId": null,
//     "errorCode": null
// })

body = JSON.stringify({
    "params": null,
    "errorMessage": null,
    "obj": {
        "expireFlag": false,
        "vaccineInfo": {
            "vaccinate": false,
            "vaccinateCount": 0
        },
        "idCard": "410482199803155051",
        "nucleicInfo": {
            "acidResult": "阴性",
            "source": "0",
            "idCard": "410482199803155051",
            "sampleTimestamp": 1659667501000,
            "sysTimeStamp": 1660486190801,
            "expireTimeStamp": 1659883501000,
            "expireHour": 48,
            "samplingTime": "2022-08-05 10:45:01",
            "expireTime": "2022-08-07 22:45:01",
            "timeDesc": ""
        }
    },
    "success": true,
    "date": null,
    "version": null,
    "business": null,
    "requestId": null,
    "errorCode": null
})
$done({ body });