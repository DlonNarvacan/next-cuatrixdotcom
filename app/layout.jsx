import "@globals.css";
import Header from "@components/Header";
import Footer from "@components/Footer";

export const metadata = {
  title: "Cuatrix Consulting",
  description: "Complex Problems, Simple Solutions",
  icons: "/assets/global/LogoIcon.svg",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main"></div>
        <main className="app">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
