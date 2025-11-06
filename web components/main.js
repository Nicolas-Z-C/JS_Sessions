class CustomElement extends HTMLElement{
    constructor(){
        super();
        this.textContent = "HOLA";
        this.miPropiedad = "valor inicial";
    }
    static get observedAttibutes(){
        return['mi-atributo'];
    }

}

customElements.define('custom-element', CustomElement);

const myElement = document.querySelector('custom-element');