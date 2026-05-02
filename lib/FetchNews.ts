const FetchNews = async (category?: string) => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.NEWS_API_KEY}`,
    { next: { revalidate: 60 } }
  );

  const data = await res.json();
  return data;
};

export default FetchNews;