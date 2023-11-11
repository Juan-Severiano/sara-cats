import CatContainer from "./components/CatContainer"
function App() {
  return (
    <>
      <main className="container cat-container">
        <CatContainer id={1} name="Mr Bigodes" breed="Siames" img="/2.png" />
        <CatContainer name="Mr Bigodes" breed="Siames" img="/2.png" />
        <CatContainer name="Mr Bigodes" breed="Siames" img="/2.png" />
        <CatContainer name="Mr Bigodes" breed="Siames" img="/2.png" />
        <CatContainer name="Mr Bigodes" breed="Siames" img="/2.png" />
        <CatContainer name="Mr Bigodes" breed="Siames" img="/2.png" />
        <CatContainer name="Mr Bigodes" breed="Siames" img="/2.png" />
        <CatContainer name="Mr Bigodes" breed="Siames" img="/2.png" />
      </main>
    </>
  )
}

export default App
