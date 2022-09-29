import { Navigation, Footer } from "components";
import { Helmet } from "react-helmet";

export default function Generic({ children }) {
  return (
    <>
      <Helmet>
        <title>AAziz &amp; Co. Accounts and Tax Consultants</title>
      </Helmet>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
