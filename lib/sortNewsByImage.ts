export default function sortNewsByImage(news: NewsResponse) {
  const newsWithImage = news?.data.filter((item) => item.image !== null) || [];
  const newsWithoutImage =
    news?.data.filter((item) => item.image === null) || [];

  const sortedNewsResponse = {
    data: [...newsWithImage, ...newsWithoutImage],
    pagination: news?.pagination,
  };
  return sortedNewsResponse;
}
