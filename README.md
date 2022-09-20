# U220920X1

Designade en CRM för att ha en lista över kunders namn, telefonnummer och address.
Listan som användaren ser är inte kopplad till den array där objekten sparas.
Så listan skriver bara ut vad som användaren har skrivit in. 
Sök funktionen söker efter ett "id"(den position som kunden fått i arrayen) och skriver sedan ut detta separat från listan den redan synliga listan.
Vid sökning av id så skrivs även kundens address ut vilket den inte gör i den synliga listan.
Id söknkningen var krånglig då man inte kan skriva ut objekt direkt till en string resultatet blir endast [object Object].
För att lösa detta användes JSON.stringify för att göra det möjligt att skriva ut det som lagrats i arrayen som en string.
Det skrivs dock ut väldigt fult och är något som bör ändras på.
