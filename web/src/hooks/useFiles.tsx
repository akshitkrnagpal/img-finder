import useSWR, { Fetcher } from 'swr';

interface Files {
  src: string;
  filename: string;
  directory: string;
}

const fetcher: Fetcher<Files[], string> = (url: string) =>
  fetch(url).then((r) => r.json());

const useFiles = () => {
  return useSWR('/files', fetcher);
};

export default useFiles;
