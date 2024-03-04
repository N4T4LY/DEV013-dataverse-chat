import {
  modalApi
} from "../src/components/ModalApi.js";

describe('modalApi component', () => {
  it("the modalApi component exists", () => {
    const modal = modalApi()
    expect(modal).toBeTruthy();
  })

  it('the modal Api content is not empty', () => {
    const modal = modalApi()
    const title = modal.querySelector('h3');
    const input = modal.querySelector('div');
    const content = modal.querySelector('a');
    const cancelBtn = modal.querySelector('.buttonContainer .cancel');
    const acceptBtn = modal.querySelector('.buttonContainer .accept');
    console.log(modal, title, input, content, cancelBtn, acceptBtn)
    expect(title.textContent).not.toEqual('');
    expect(input.value).not.toEqual('');
    expect(content.textContent).not.toEqual('');
    expect(cancelBtn).toBeDefined();
    expect(acceptBtn).toBeDefined();

  })
  it('the modal display the correct content', () => {
    const modal = modalApi()
    const title = modal.querySelector('h3');
    const input = modal.querySelector('div');
    const content = modal.querySelector('a');
    const cancelBtn = modal.querySelector('.buttonContainer .cancel');
    const acceptBtn = modal.querySelector('.buttonContainer .accept');

    expect(title.textContent).toBe(`¡Conversa con tu Pokemones favoritos! Ingresa tu APIKEY y descubre la magia del chat Pokemon.`);
    expect(input).toBeDefined();
    expect(content.textContent).toBe('No tienes un APIKEY ¡Genera una!');
    expect(cancelBtn.textContent).toBe('Cancelar');
    expect(acceptBtn.textContent).toBe('Aceptar');
  });

  // it('the accept button opens a view based on localstorage', () => {
  //   const modal = modalApi();
  //   const input = modal.querySelector('.containerInput input');
  //   const acceptBtn = modal.querySelector('.accept');
  //   input.value = 'input lleno';
  //   acceptBtn.click();
  //   if (localStorage.getItem('input lleno')) {
  //     expect(viewOpened).toBe(true)
  //   }
  // })
})