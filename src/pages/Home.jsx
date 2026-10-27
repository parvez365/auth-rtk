import ContainerPz from "../common/layers/ContainerPz";

const Home = () => {
  return (
    <ContainerPz className="bg-gray-300/20">
      <div className="h-dvh flex flex-col justify-center items-center gap-3.5">
        <h2 className="text-5xl font-bold text-blue-300">
          Auth <span className="text-blue-400">& Interceptors</span>
        </h2>
        <p className="text-lg font-normal text-gray-300">
          Authentication and Interceptor Login system.
        </p>
      </div>
    </ContainerPz>
  );
};

export default Home;
