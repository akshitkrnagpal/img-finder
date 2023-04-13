import Image from './components/Image';
import useFiles from './hooks/useFiles';

const App = () => {
  const { data, isLoading, error } = useFiles();
  return (
    <div className="flex flex-wrap gap-8 p-4">
      {error
        ? 'An error has occured'
        : isLoading
        ? 'Loading...'
        : data?.map(({ src, directory, filename }) => (
            <Image
              key={src}
              src={src}
              directory={directory}
              filename={filename}
            />
          ))}
    </div>
  );
};

export default App;
