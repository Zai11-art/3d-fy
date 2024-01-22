import CardList from "../../components/3d-sample-cardlist";
import FileUpload from "../../components/file-upload";
import PageLayout from "../../layout/page-layout";
import useMode from "../../hooks/state";

const Home = () => {
  const lightmode = useMode((state) => state.isDarkMode);

  return (
    <PageLayout>
      <div className="flex px-3 w-full h-[100%] items-center flex-col md:pt-[50px] pt-12 pb-[265px] md:pb-[200px]">
        <h1 className="hero-text font-bold  text-4xl md:text-5xl lg:text-6xl text-center px-3">
          View and inspect your 3D <br /> models here.
        </h1>

        <p
          className={`${
            lightmode ? "text-black font-semibold" : "text-white font-thin"
          }  mt-6 text-sm text-center px-12`}
        >
          Drag and drop your files below and start viewing your model.
        </p>

        <div className=" w-full">
          <FileUpload />
        </div>

        <CardList />
      </div>
    </PageLayout>
  );
};

export default Home;
