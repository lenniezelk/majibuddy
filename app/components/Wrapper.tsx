import Footer from "~/components/Footer";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full max-w-3xl px-3 mx-auto pt-8 min-h-screen flex flex-col">
      <div className="grow">{children}</div>
      <div className="grow-0">
        <Footer />
      </div>
    </div>
  );
};

export default Wrapper;
