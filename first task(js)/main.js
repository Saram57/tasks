var proContainer = [];
var proName = document.getElementById("proName");
var proPrice = document.getElementById("proPrice");
var proCategory = document.getElementById("proCategory");
var proDesc = document.getElementById("proDesc");
var proSearch = document.getElementById("proSearch");
var btn = document.getElementById("btn");

var currentIndex; 


if (JSON.parse(localStorage.getItem("allproducts")) != null) {
    proContainer = JSON.parse(localStorage.getItem("allproducts"));
    displaypro();
}


btn.onclick = function () {
    if (btn.innerHTML === "Add Product") {
      
        var pro = {
            name: proName.value,
            price: proPrice.value,
            category: proCategory.value,
            desc: proDesc.value,
        };

        proContainer.push(pro);
    } else {
       
        proContainer[currentIndex].name = proName.value;
        proContainer[currentIndex].price = proPrice.value;
        proContainer[currentIndex].category = proCategory.value;
        proContainer[currentIndex].desc = proDesc.value;

        btn.innerHTML = "Add Product"; 
    }

    localStorage.setItem("allproducts", JSON.stringify(proContainer));


    displaypro();

   
};


function displaypro() {
    var allpro = ``;
    for (let i = 0; i < proContainer.length; i++) {
        allpro += `
        <tr>
            <td>${i + 1}</td>
            <td>${proContainer[i].name}</td>
            <td>${proContainer[i].price}</td>
            <td>${proContainer[i].category}</td>
            <td>${proContainer[i].desc}</td>
            <td>
                <button onclick="delpro(${i})" class="btn delete">Delete</button>
                <button onclick="setUpdate(${i})" class="btn update">Update</button>
            </td>
        </tr>`;
    }
    document.getElementById("tbody").innerHTML = allpro;
}

function delpro(index) {
    proContainer.splice(index, 1);
    localStorage.setItem("allproducts", JSON.stringify(proContainer));
    displaypro();
}






proSearch.onkeyup = function () {
    Search(proSearch.value);
};
function Search(data) {
    var allpro = ``;
    for (let i = 0; i < proContainer.length; i++) {
        if (proContainer[i].name.toLowerCase().includes(data.toLowerCase()))
            allpro += `
        <tr>
            <td>${i + 1}</td>
            <td>${proContainer[i].name}</td>
            <td>${proContainer[i].price}</td>
            <td>${proContainer[i].category}</td>
            <td>${proContainer[i].desc}</td>
            <td>
                <button onclick="delpro(${i})" class="btn delete">Delete</button>
                <button onclick="setUpdate(${i})" class="btn update">Update</button>
            </td>
        </tr>`;
    }
    document.getElementById("tbody").innerHTML = allpro;
}

function setUpdate(index) {
    currentIndex = index;

    proName.value = proContainer[index].name;
    proPrice.value = proContainer[index].price;
    proCategory.value = proContainer[index].category;
    proDesc.value = proContainer[index].desc;

 
    btn.innerHTML = "Update Product";
}