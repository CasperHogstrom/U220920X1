var Customers = [];
var Person = {
    Name: '',
    PhoneNumber: '',
    Adress: '',
    Email: ''
};

Add = () => {
    FullName = document.getElementById('inputName').value;
    PhoneNr = document.getElementById('inputPhoneNr').value;
    RecAdress = document.getElementById('inputAdr').value;
    CustEmail = document.getElementById('inputEmail').value;


    Person = {Name: FullName, PhoneNumber: PhoneNr, Adress: RecAdress, Email: CustEmail}
    Customers.push(Person);

    var CustomerList = document.getElementById('customerul');
    CustomerList.innerHTML = '';

    Customers.forEach(customer => {
        ListAttri = document.createElement('li');
        ListAttri.innerHTML = (`Customer: - Name: ${customer.Name} | Phone Nr: ${customer.PhoneNumber} | Email: ${customer.Email}`);
        CustomerList.appendChild(ListAttri);
    });
    //CustomerList.appendChild(ListAttri);

    document.getElementById('inputName').value = '';
    document.getElementById('inputPhoneNr').value = '';
    document.getElementById('inputAdr').value = '';
    document.getElementById('inputEmail').value = '';
};

ShowList = () => {
    const CustomerUlDiv = document.getElementById('left');
    var HSBtn =  document.getElementById('HSBtn');
    var UlDiv = document.getElementById('uldiv');
    
    HSBtn.onclick = () => UlDiv.hidden = !UlDiv.hidden;
    CustomerUlDiv.appendChild(UlDiv);
}


Search = () => {
    var InputId = document.getElementById('InputId').value;

    var OutputId = document.getElementById('OutputId');

    findEmail = (person => {
        return person.Email === InputId
    });
    
    OutputId.innerHTML = (`Name: ${Customers.find(findEmail).Name}, Phone Number: ${Customers.find(findEmail).PhoneNumber}, 
    Adress: ${Customers.find(findEmail).Adress}, Email: ${Customers.find(findEmail).Email}`);

    //OutputId.innerHTML = (JSON.stringify(Customers.find(findEmail)));

    //console.log(Customers.find(findEmail);
};