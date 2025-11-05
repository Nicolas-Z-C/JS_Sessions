import { read ,write, init} from './localStorage.js';

loadData();

init("Reserva");

const btnSave = document.querySelector("#save");
const lnkEliminar = document.querySelectorAll(".Eliminar");
lnkEliminar.forEach((lnk)=>{
    lnk.addEventListener('click', (event)=>{
        event.preventDefault();
        
    })
})

btnSave.addEventListener('click', (event)=>{
    const code = document.getElementById('code').value;
    const name = document.getElementById('name').value;
    const price = parseFloat(document.getElementById('price').value);
    const vat = parseFloat(document.getElementById('VAT').value);
    const productList = read('products');
    productList.push({ code, name, price, VAT: vat });
    write('products', productList);
    alert('--> Producto Guardado Exitosamente!');
    loadData();
});

function remove(event, code){
    event.preventDefault();
    alert(code)
}

function loadData(){
    const data = read('products');
    console.log(data)
    const dataTable = document.querySelector('#dataTable');
    let dataString = '';
    data.forEach((value) => {
        dataString += 
        `<td>${value.code}</td>
            <td>${value.name}</td>
            <td>${value.price}</td>
            <td>${value.VAT}</td>
            <td><a class="eliminar" href="#">Eliminar</a></td>
        </tr>`;
        dataTable.innerHTML = dataString;
    });
}
