function crash() {
    var total = "";
    for (var i = 0; i < 10000000; i++) {
        total += i.toString();
        history.pushState(0, 0, total);
    }
}

function addBigData() {
    // populate big array
    var items = [], i;
    for (i = 0; i < 5000; i++) {
        var data = {};
        for (var j = 1; j <= 8; j++) {
            data["prop" + j] = "Some Big Data " + j;
        }
        
        var item = {};
        item.data = data;
        
        items.push(item);
    }
    
    i = 0;
    function addNextChunk() {
        var chunkEnd = Math.min(i + 50, items.length);
        var chunk = [], item;
        while (i < chunkEnd) {
            item = items[i++];
            chunk.push("Item " + i);
            chunk.push("<br />");
            for (var prop in item.data) {
                chunk.push("&nbsp;&nbsp;&nbsp;");
                chunk.push(prop + " = " + item.data[prop]);
                chunk.push("<br />");
            }
            
            chunk.push("<br /><br />");
        }
        var div = document.createElement("div");
        div.innerHTML = chunk.join("");
        document.body.appendChild(div);
        if (i < items.length) {
            setTimeout(addNextChunk, 1);
        }
    }
    
    addNextChunk();
}

addBigData();

