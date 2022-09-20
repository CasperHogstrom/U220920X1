# U220920X1

Designade en CRM för att ha en lista över kunders namn, telefonnummer och address.
Listan som skrivs ut är inte kopplad till den array där dessa objekt sparas.
Så listan skriver bara ut vad som användaren har skrivit in. 
Sök funktionen söker efter ett "id"(den position som kunden fått i arrayen) och skriver sedan ut detta separat från listan.
Vid sökning av id så skrivs även addressen ut vilket den inte gör i listan.
Id söknkningen var krånglig då man inte kan skriva ut objekt i form av en string utan att det ändras.
För att lösa detta användes JSON.stringify för att göra det möjligt att skriva ut det som lagrats i arrayen.
