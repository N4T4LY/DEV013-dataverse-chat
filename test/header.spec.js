import { Header } from "../src/components/Header.js"
describe('Header component',()=>{
  
  it("the component header exists",()=>{
    const header=Header();
    expect(header).toBeTruthy();
  })

  it('the header content is not empty',()=>{
    const header=Header();
    const h1=header.querySelector('h1');
    const img=header.querySelector('img');
    expect(h1.textContent).not.toEqual('');
    expect(img.src).not.toEqual('');

  })
  it('the header display the correct content', () => {
    const header = Header();
    expect(header.tagName).toBe('HEADER');
    expect(header.querySelector('h1').textContent).toBe('PkéDex');
    const img = header.querySelector('img');
    expect(img.src).toContain('assets/pokemones/pokebola.png');
  });
})