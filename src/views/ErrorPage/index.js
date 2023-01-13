import { useRouteError, Link } from "react-router-dom";
import Routes from "../../routes";
import "./styles.css";

const defaultTitle = "Oops, error";
const defaultSubtitle = "Sorry, an unexpected error has occurred.";

const ErrorPage = ({ title = "", subtitle = "", children }) => {
  const error = useRouteError();
  return (
    <section className="panel-layout error-page">
      <h1>{title || defaultTitle}</h1>
      <h2>{subtitle || defaultSubtitle}</h2>
      {children || (
        <>
          <p>
            If you're having trouble using the site, please reach out to our
            amazing <a href="mailto:support@littlelemon.com">support team</a>
          </p>
          <p>
            We apologize for the inconvenience and thank you for your patience ♥
          </p>
        </>
      )}
      {error ? (
        <p>
          Error message:{" "}
          <i>
            {error.message} {error.statusText}
          </i>
        </p>
      ) : null}
      <Link to={Routes.Home}>Back to website</Link>
    </section>
  );
};

export default ErrorPage;
