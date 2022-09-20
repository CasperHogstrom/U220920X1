var Customers = [];
var Person = {
    Name: '',
    PhoneNumber: '',
    Adress: ''
};

Add = () => {
    FullName = document.getElementById('inputName').value;
    PhoneNr = document.getElementById('inputPhoneNr').value;
    RecAdress = document.getElementById('inputAdr').value;

    Person = {Name: FullName, PhoneNumber: PhoneNr, Adress: RecAdress}
    Customers.push(Person);

    var CustomerList = document.getElementById('customerul');
    CustomerList.innerHTML = '';

    Customers.forEach(customer => {
        ListAttri = document.createElement('li');
        ListAttri.innerHTML = (`Customer: - Name: ${customer.Name} | Phone Nr: ${customer.PhoneNumber}`);
        CustomerList.appendChild(ListAttri);
    });
    CustomerList.appendChild(ListAttri);
};

Search = () => {
    var InputId = document.getElementById('InputId').value;

    var OutputId = document.getElementById('OutputId');

    InputId -= 1;

    OutputId.innerHTML = Customers[InputId];
    

}