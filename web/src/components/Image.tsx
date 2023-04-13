const Image = ({
  src,
  filename,
  directory,
}: {
  src: string;
  filename: string;
  directory: string;
}) => {
  return (
    <div className="flex flex-col space-y-1 w-52">
      <div className="flex items-center justify-center w-52 h-52 bg-white border border-gray-200 rounded-lg shadow">
        <img className="w-48 h-48 object-contain" src={src} />
      </div>
      <div className="flex flex-col text-center">
        <span className="text-base w-full truncate text-ellipsis overflow-hidden">
          {filename}
        </span>
        <span className="text-xs w-full truncate text-ellipsis overflow-hidden">
          {directory}
        </span>
      </div>
    </div>
  );
};

export default Image;
