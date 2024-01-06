import Footer from "~/components/Footer";
import NavBar from "~/components/NavBar";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full max-w-3xl px-3 mx-auto pt-8 min-h-screen flex flex-col">
      <div className="grow">
        <NavBar />
        {children}
      </div>
      <div className="grow-0">
        <Footer />
      </div>
    </div>
  );
};

export default Wrapper;
