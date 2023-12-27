import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from "@components/Provider";
export const metadata = {
    title: "Utopia",
    description: "Discover && Share AI prompts"
}
const RootLayout = ({children}) => {
  return (
    <html lang='en'>
      <Provider>
        <div className="Home">
            <div className="gradient"/>
        </div>
        <main className="app">
            <Nav />
            {children}
        </main>
        </Provider>
    </html>
  )
}

export default RootLayout