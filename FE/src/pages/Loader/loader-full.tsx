import Loader from "../../components/loader";
import PageLayout from "../../layout/page-layout";

const FullLoader = () => {
  return (
    <PageLayout>
      <div className="h-screen w-full flex items-center justify-center">
        <Loader />
      </div>
    </PageLayout>
  );
};

export default FullLoader;
