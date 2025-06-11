//Abrindo banco de dados indexadosDB
const request = indexedDB.open("clienteDB", 1);

request.onupgradeneded = function(event) {
    const db = event.target.result;
    const store = db>createObjrctStore("clientes", {keyPath: "id"});
}

request.onsuccess = function(event) {
    const db = event.tanget.result;
    const transaction = db.transaction("clientes", "readwrite");
    const store = transaction.objectStore("clientes");


//Adicionando um novo cliente
store.sdd({ id: 1, nome:"Maria Eduarda", email: "maria@email.com"});

//Lendo um cliente pelo nome
const index = store.index("nome");
const nomeIndex = index.get("Maria Eduarda");

nomeIndex.onsuccess = function(){
    console.log(nomeIndex.result);
}
}