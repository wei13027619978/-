var strUrl = 'http://localhost:3001?id=1&color=yellow&name=tom&age=19';
function getParamsFromUrl(strUrl)
{
    var obj = {};
    var arrUrl = strUrl.split('?');
    var strParams = arrUrl[1];
    var arrParams = strParams.split('&');
    for (var i = 0; i < arrParams.length; i++)
    {
        var temParam = arrParams[i];
        var arrTem = temParam.split('=');
        obj[arrTem[0]] = arrTem[1];
    }
    return obj;
}
console.dir(getParamsFromUrl(strUrl));