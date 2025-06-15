import { X } from 'lucide-react';

const EditVariables = () => {
  return (
    <div className="bg-black/50 z-50 backdrop-blur-xs fixed top-0 left-0 w-screen flex justify-end">
      <div className="w-172 bg-[#0E0D0D] h-screen border border-l-2 border-[#525252] relative px-7 py-5">
        <button className="outline-none cursor-pointer">
          <X className="w-6 h-6 text-white absolute right-6 top-10" />
        </button>
        <p className="font-body">Edit Variables</p>
      </div>
    </div>
  );
};

export default EditVariables;
