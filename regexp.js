const tel = /(\+\s*(\d){1,4})?\s*(\d\s*){10}/gm
//const indirizzo = /\b(Borgo|Contrada|Corso|Frazione|Largo|Località|Piazza|Piazzale|Via|Viale|Vicolo|Vicoletto)\s[A-z]+\b/gm;
const indirizzo = /\b(Borgo|Contrada|Corso|Frazione|Largo|Località|Piazza|Piazzale|Via|Viale|Vicolo|Vicoletto)\s*\w*(\s*\w*)*\d*/gm
module.exports = {tel, indirizzo}