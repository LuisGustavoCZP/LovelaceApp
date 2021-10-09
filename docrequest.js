function processElement (element, parent)
{
    var newTag = document.createElement(element.tagName);
    newTag.innerText = element.innerText;
    parent.appendChild(newTag);

    for(j = 0; j < element.childElementCount; j++)
    {
        processElement (element.children[j], newTag);
    }
}

function processDocData(doc) 
{
    var elements = doc.body;
    console.log(elements.childElementCount.toString());

    for(i = 0; i < elements.childElementCount; i++)
    {
        parent.appendChild(elements.children[i]);
        //processElement (elements[i], informacoes);
    }
}

function readHandler(evt) 
{
    if(this.status == 200 && this.response != null) 
    {
        // success!
        processDocData(evt.response);
        
    } 
    else
    {
        
    }
}

function readDoc (filePath)
{
    var client = new XMLHttpRequest();
    client.onload = readHandler;
    client.open("GET", filePath);
    client.send();
}