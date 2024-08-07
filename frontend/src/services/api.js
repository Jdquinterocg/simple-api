export const fetchArticles = async () => {
    const url = import.meta.env.VITE_API_URL;
    const token = import.meta.env.VITE_API_TOKEN;

    console.log({url, token})

    const response = await fetch(url, {
      headers: {
        authentication: token
      }
    });
    if (!response.ok) {
      throw new Error('Failed to fetch articles');
    }
    return response.json();
  };
  