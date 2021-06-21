const productsList2 = (req, res) => {
  res.json({
    data: [
      {
        id: 1,
        koreanName: "아이스 카페 아메리카노",
        englishName: "Iced Caffe Americano",
        description:
          "진한 에스프레소에 시원한 정수물과 얼음을 더햐여 스타벅스의 깔끔하고 강렬한 에스프레소를 가장 부드럽고 시원하게 즐길 수 있는 커피",
        imageURL:
          "https://image.istarbucks.co.kr/upload/store/skuimg/2015/08/[110563]_20150813222100303.jpg",
      },
      {
        id: 2,
        koreanName: "제주 비자림 콜드브루",
        englishName: "Jeju Forest Cold Brew",
        description:
          "[제주지역 한정음료] 제주 천년의 숲 비자림을 연상시키는 음료로 제주에서 유기농 말차로 만든 파우더와 Cold Brew를 활용한 음료.",
        imageURL: "https://pbs.twimg.com/media/ETShztdVAAELzaK.jpg",
      },
      {
        id: 3,
        koreanName: "바닐라 크림 콜드 브루",
        englishName: "Vanilla Cream Cold Brew",
        description:
          "콜드 브루에 더해진 바닐라 크림으로 깔끔하면서 달콤한 콜드 브루를 새롭게 즐길 수 있는 음료.",
        imageURL:
          "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000487]_20210430112319040.jpg",
      },
    ],
  });
};

export default productsList2;
