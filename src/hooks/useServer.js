import { BASE_URL } from "@/lib/constants";

const useServer = () => {
  const callFetch = async (endpoint, options = {}) => {
    const res = await fetch(`${BASE_URL}/${endpoint}`, options);

    const data = await res.json();

    if (!data.success) {
      throw new Error(data.message);
    }

    return data;
  };

  return { callFetch };
};

export default useServer;
