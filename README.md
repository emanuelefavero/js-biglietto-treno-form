# JS Biglietto Treno Form

Esercizio JavaScript basato su form, validazione e render dinamico del risultato in pagina.

L'app calcola un preventivo per un biglietto del treno partendo da una tratta selezionata e dall'età del passeggero.

## Demo

- [Apri la demo su GitHub Pages](https://emanuelefavero.github.io/js-biglietto-treno-form/)

## Anteprima

<img src="mockup.png" alt="screenshot dell'app" width="300" />

## Struttura Del Progetto

- `index.html`: markup della pagina, form e area del biglietto.
- `assets/js/data.js`: costanti del calcolo e lista delle tratte disponibili.
- `assets/js/utils.js`: funzioni per validazione, calcolo, sconti e formattazione.
- `assets/js/templates.js`: template HTML per option, skeleton e biglietto finale.
- `assets/js/main.js`: gestione del DOM, submit del form e render del risultato.
- `assets/css/style.css`: stile dell'app, layout responsive e animazione del biglietto.

## Consegna

L'esercizio originale richiede di chiedere all'utente:

- chilometri da percorrere;
- età del passeggero.

Il prezzo viene calcolato con queste regole:

- prezzo base: `0.21 €` al km;
- sconto `20%` per i minorenni;
- sconto `40%` per i passeggeri da 65 anni in su.

In questa versione ho mantenuto le stesse regole di calcolo, ma ho trasformato l'esercizio in un piccolo preventivatore ferroviario. Invece di inserire manualmente i chilometri, l'utente seleziona una tratta: ogni tratta contiene partenza, arrivo e distanza in km.

## Funzionalità

- Le tratte vengono generate dinamicamente a partire dai dati in JavaScript.
- Il form usa `FormData` per leggere i valori inseriti.
- La validazione mostra messaggi personalizzati in pagina.
- Il risultato viene mostrato come un biglietto/preventivo.
- Il biglietto mostra tratta, km, età, tariffa, prezzo base, sconto, prezzo finale e risparmio.
- Se non ci sono sconti, le informazioni su sconto e risparmio vengono nascoste.
- Quando il submit è valido, parte una piccola animazione di stampa del biglietto con effetto sonoro.

## Milestone

1. Calcolo del prezzo con due input, un bottone e output in console.
2. Render del riepilogo e del prezzo finale direttamente nella pagina.
3. Aggiunta di uno stile più curato e responsive.

## Casi Di Test

| Km  | Età | Prezzo atteso |
| --- | --- | ------------- |
| 100 | 10  | `16,80 €`     |
| 100 | 30  | `21,00 €`     |
| 100 | 70  | `12,60 €`     |

## Note Tecniche

- Le tratte sono rappresentate come oggetti con `departure`, `arrival` e `km`.
- Il valore della select corrisponde all'indice della tratta nell'array `ROUTES`.
- `main.js` prepara un oggetto `ticket` e lo passa a `getResultTemplate(ticket)`.
- Le funzioni di calcolo e formattazione sono separate dalla logica DOM.
- Il prezzo è formattato con `toLocaleString` usando la valuta Euro.
- Il biglietto iniziale e di errore è gestito come skeleton.
- La forma del biglietto è disegnata con SVG, mentre il contenuto resta HTML normale.
- Il CSS usa custom properties, nesting e classi semantiche per mantenere il codice organizzato.

&nbsp;

---

&nbsp;

[**Torna su**](#js-biglietto-treno-form)
