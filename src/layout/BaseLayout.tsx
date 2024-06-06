import Header from "../components/header/Header";

type BaseLayoutProps = {
  children: React.ReactNode;
};

function BaseLayout({ children }: Readonly<BaseLayoutProps>) {
  return (
    <>
      <Header />
      <main className="mt-[100px]">{children}</main>
    </>
  );
}

export default BaseLayout;
