import ReactLottie from 'lottie-react';
import lottieLoading from './lottieLoading.json';

const Loading = () => {
  return (
    <div className="fixed z-[200] bg-black/60 backdrop-blur-sm flex items-center justify-center w-full h-screen">
      <div className="w-[150px]">
        <ReactLottie animationData={lottieLoading} loop autoplay className="w-full" />
      </div>
    </div>
  );
};

export default Loading;
