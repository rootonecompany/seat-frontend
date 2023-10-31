import Wrap from "@/components/template/Wrap";
import Header from "@/components/headers/Header";
import Main from "./(main)/Main";
import Footer from "@/components/footer/Footer";

export default function Home() {
    return (
        <Wrap fullWidth={true}>
            <Header />
            <Main />
            <Footer />
        </Wrap>
    );
}
