import ErrorPage from "../ErrorPage";

const UnderConstruction = () => {
  return (
    <ErrorPage title="Under construction" subtitle="This page is not available">
      <>
        <p>
          Please, consider to visit this page later. We are preparing something
          great for you here
        </p>
        <p>
          We apologize for the inconvenience and thank you for your patience ♥
        </p>
      </>
    </ErrorPage>
  );
};

export default UnderConstruction;
