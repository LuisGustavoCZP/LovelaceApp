
/*
function LoadFile(filePath) 
{
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    //if (xmlhttp.status==200) {
    //    result = xmlhttp.responseXML;
    //}
    console.log(result);
    result = xmlhttp.responseXML;
    return result;
}

function ReadXML (filePath)
{
    var doc = LoadFile(filePath);
    var txts = doc.getElementsByTagName("item");
    var log = document.createElement("P");
    log.innerText += " " + txts.length.toString();
    outputs.appendChild(log);
    for(i = 0; i < txts.length; i++)
    {
        var t = txts[i];
        var tr = document.createElement("TR");
        outputs.appendChild(tr);

        var td = document.createElement("TD");
        td.innerText = t.getAttribute("nome");
        tr.appendChild(td);

        for(j = 0; j < t.childElementCount; j++)
        {
            var t2 = t.children[j];
            var td2 = document.createElement("TD");
            td2.innerText = t2.textContent + (j==0?"/":" ") + t2.getAttribute("tipo");
            tr.appendChild(td2);
        }
    }
}

*/