class MiComponente extends HTMLElement {
    constructor() {
      super();
      // Creamos el shadow DOM
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          p { color: blue; }
        </style>
        <p>Hola, soy un componente personalizado</p>
      `;
    }
  
    // Se ejecuta cuando el componente se agrega al DOM
    connectedCallback() {
      console.log('MiComponente fue agregado al DOM.');
      // Puedes inicializar datos, eventos, etc.
      this.shadowRoot.querySelector('p').textContent += ' (Ahora estoy conectado)';
    }
  
    // Opcional: Limpia eventos o recursos si se elimina del DOM
    disconnectedCallback() {
      console.log('MiComponente fue eliminado del DOM.');
    }
  }
  
// saludo-personal.js

class SaludoPersonal extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
  
      const nombre = this.getAttribute('nombre') || 'usuario';
  
      const div = document.createElement('div');
      div.textContent = `Hola, alexandra. Bienvenido(a) al sistema.`;
  
      const style = document.createElement('style');
      style.textContent = `
        div {
          font-size: 18px;
          color: white;
          background-color: #007acc;
          padding: 8px 12px;
          border-radius: 6px;
          font-family: sans-serif;
        }
      `;
  
      shadow.append(style, div);
    }
  }
  
  customElements.define('saludo-personal', SaludoPersonal);

  // Definir el elemento personalizado
  customElements.define('mi-com', MiComponente);
  
  // Usar el componente en el DOM
  //document.body.innerHTML = `<mi-componente></mi-componente>`;