const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div id="spinner-container" className="space-y-10">
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-blue-500 rounded-full animate-ping"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
