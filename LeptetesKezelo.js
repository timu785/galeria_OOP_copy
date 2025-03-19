import NagyKep from "./NagyKep.js";

export default class LeptetoKezelo{
    #aktIndex;
    #lista=[]
    constructor(lista, szuloElem){
        /* példányosítjuk a Nagykép osztályt, szeretnénk kezelni a léptetést */
        this.#lista = lista;
        this.#aktIndex = 0;
        this.szuloElem = szuloElem
        this.jobbGombElem = document.getElementsByClassName("jobb")[0]

        const NAGYKEP = new NagyKep(this.#lista[this.#aktIndex].cim, this.#lista[this.#aktIndex].src, this.#lista[this.#aktIndex].leiras, this.szuloElem)
        this.esemenykezelo();
        this.kisKepKezeles();
    }

    kisKepKezeles(){
        window.addEventListener("kivalaszt", (event)=>{
            console.log(event.detail)
            this.#aktIndex = event.detail
            const NAGYKEP = new NagyKep(this.#lista[this.#aktIndex].cim, this.#lista[this.#aktIndex].src, this.#lista[this.#aktIndex].leiras, this.szuloElem)

        })
    }

    esemenykezelo(){
        this.jobbGombElem.addEventListener("click",()=>{
            this.#aktIndex++;
            this.#aktIndex = this.#aktIndex % this.#lista.length
        
            const NAGYKEP = new NagyKep(this.#lista[this.#aktIndex].cim, this.#lista[this.#aktIndex].src, this.#lista[this.#aktIndex].leiras, this.szuloElem)
        })
    }
}
