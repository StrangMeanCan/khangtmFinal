var arrsp = new Array;
function themvaogiohang(x){
    var nodeSP = x.parentElement.children;
    var hinh = nodeSP[0].children[0].src;
    var giasp = nodeSP[1].children[0].innerText;
    var tensp = nodeSP[2].innerText;
    var soluong = nodeSP[3].value;
    var id = nodeSP[2].id;
    var sp = [id,hinh, tensp, giasp, soluong];
    arrsp.push(sp);
    sessionStorage.setItem("sp",JSON.stringify(arrsp));
    console.log(arrsp);
    demgiohang();
}


function demgiohang(){
    var a = arrsp.length;
    document.getElementById("countsp").innerText = a;
}
function showcart(){
    var x  =document.getElementById("showcart");
    if(x.style.display == "none"){
        x.style.display = "block";
    }else{
        x.style.display = "none";
    }
    showmycart();
}

function showmycart(){
    var tongtt = 0;
    var ttgh = "";
    for(let i=0; i<arrsp.length;i++){
        var tt = Number(arrsp[i][3]) * Number(arrsp[i][4]);
        tongtt += tt;
        ttgh +=`
        <tr>
            <td>${i+1}</td>
            <td><img src='${arrsp[i][1]}'></td>
            <td>${arrsp[i][2]}</td>
            <td>${arrsp[i][3]}</td>
            <td>${arrsp[i][4]}</td>
            <td>${tt} $</td>
        </tr>
        ` 
    }

    ttgh+=`
    <tr>
            <td colspan="5">TONG DON HANG</td>
            <td>${tongtt} $</td>
        </tr>
        `
    // document.getElementById("mycart").innerHTML = ttgh;
}



