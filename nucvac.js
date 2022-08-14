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
let expireTimestamp = now + 1000 * 60 * 60 * 8

body = JSON.stringify({
    "params": null,
    "errorMessage": null,
    "obj": {
        "vaccineInfo": {
            "vaccinate": true,
            "idCard": "411101199202026833",
            "vaccinateCount": 3
        },
        "nucleicInfo": {
            "sampleTimestamp": sampleTimestamp,
            "expireTimeStamp": expireTimestamp,
            "samplingTime": new Date(sampleTimestamp).Format("yyyy-MM-dd HH:mm:ss"),
            "acidResult": "阴性",
            "sysTimeStamp": now,
            "timeDesc": "",
            "idCard": "411101199202026833",
            "expireTime": new Date(expireTimestamp).Format("yyyy-MM-dd HH:mm:ss"),
            "source": "0",
            "expireHour": 48
        },
        "idCard": "411101199202026833",

    },
    "success": true,
    "date": null,
    "version": null,
    "business": null,
    "requestId": null,
    "errorCode": null
})
$done({ body });