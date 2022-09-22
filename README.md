# U220920X1

Designade en CRM för att ha en lista över kunders namn, telefonnummer och address.
Listan skriver ut vad användaren har skrivit in minus addresen. 
Sök funktionen söker efter en email property som är likadan som den som användaren söker sedan skrivs detta ut separat från den redan synliga listan.
Vid sökning av email så skrivs även kundens address ut vilket den inte gör i den synliga listan.
Problemet löst(Email söknkningen var krånglig då man inte kan skriva ut objekt direkt till en string resultatet blir endast [object Object].
För att lösa detta användes JSON.stringify för att göra det möjligt att skriva ut det som lagrats i arrayen som en string.
Det skrivs dock ut väldigt fult och är något som bör ändras på.)
Detta problem löstes genom att använda find metoden i arrayen istället för indexet och sedan skriva ut det genom användning av backticks.
