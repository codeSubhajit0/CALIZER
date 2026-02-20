import Loader from "../loader/Loader";

interface LoaderScreenProps {
  additionalNotes?: string;
}

const LoaderScreen: React.FC<LoaderScreenProps> = ({ additionalNotes }) => {
  return (
    <div className="fixed inset-0 z-50 bg-white bg-[radial-gradient(circle,rgba(0,0,0,0.12)_1px,transparent_1.2px)] bg-size-[22px_22px] flex flex-col items-center justify-center px-5">
      <div className="text-4xl mb-5 font-bold">
        CALIZER<span className="text-orange-400">.</span>
      </div>
      <Loader />
      <div className="absolute bottom-20">
        <p className="text-sm text-gray-500">{additionalNotes}</p>
      </div>
    </div>
  );
};

export default LoaderScreen;
