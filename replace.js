// console.log(`${$request.method}: ${$request.url}`)
// $done({})
// return

let url = ''
url = $request.url

console.log(`[body] url: ${url}, ${url.indexOf('vaccine/find')}, ${url.indexOf('acid/find')}`)

Date.prototype.Format = fmt => {
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
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)))
    return fmt;
}

if (url.indexOf('vaccine/find') !== -1) {
    let body = JSON.stringify({
        "params": null,
        "errorMessage": null,
        "obj": {
            "vaccinate": true,
            "idCard": "411101199202026833",
            "vaccinateCount": 3
        },
        "success": true,
        "date": null,
        "version": null,
        "business": null,
        "requestId": null,
        "errorCode": null
    })

    $done({ body })
    return
} else if (url.indexOf('acid/find') !== -1) {
    console.log('replace body acid find')
    let now = (new Date().getTime())
    let sampleTimestamp = now - 1000 * 60 * 60 * 8
    let body = JSON.stringify({
        "params": null,
        "errorMessage": null,
        "obj": {
            "sampleTimestamp": sampleTimestamp,
            "samplingTime": new Date(sampleTimestamp).Format("yyyy-MM-dd HH:mm:ss"),
            "acidResult": "阴性",
            "idCard": "411101199701026833",
            "sysTimeStamp": now,
            "timeDesc": "48h"
        },
        "success": true,
        "date": null,
        "version": null,
        "business": null,
        "requestId": null,
        "errorCode": null
    })

    $done({ body })
    return
} else if (url.indexOf('/getPersonTag') !== -1) {
    let body = JSON.stringify({
        "errMsg": "SUCCESS",
        "data": ["ym_yjz"],
        "msg": null,
        "totalCount": 0,
        "errCode": 0,
        "totalPage": null
    });

    $done({ body })
    return
} else if (url.includes('nucvac')) {
    let now = (new Date().getTime())
    let sampleTimestamp = now - 1000 * 60 * 60 * 8
    let body = JSON.stringify({
        "params": null,
        "errorMessage": null,
        "obj": {
            "vaccineInfo": {
                "vaccinate": true,
                "idCard": "411101199202026833",
                "vaccinateCount": 3
            },
            "sampleTimestamp": sampleTimestamp,
            "samplingTime": new Date(sampleTimestamp).Format("yyyy-MM-dd HH:mm:ss"),
            "acidResult": "阴性",
            "idCard": "411101199701026833",
            "sysTimeStamp": now,
            "timeDesc": "48h"
        },
        "success": true,
        "date": null,
        "version": null,
        "business": null,
        "requestId": null,
        "errorCode": null
    })

    $done({ body })
    return
}


$done({})