import Header from "./Header";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import PageTransition from "./PageTransition";

const Layout = ({ children }) => {
    return (
        <main className="min-h-screen bg-[#141414] text-white flex flex-col">

            <Header />

            <PageTransition>
                <div className="flex-1">
                    {children}
                </div>
            </PageTransition>

            <BackToTop />
            <Footer />

        </main>
    );
};

export default Layout;