class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Ana Laura Lozada Rojas.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);

