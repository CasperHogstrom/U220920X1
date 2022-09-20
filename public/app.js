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
        ListAttri.innerHTML = (`Name: ${customer.Name} |  Phone Nr: ${customer.PhoneNumber} |  Adress: ${customer.Adress}`);
        CustomerList.appendChild(ListAttri);
    });
    CustomerList.appendChild(ListAttri);
};