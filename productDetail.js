const productDetail = (req, res) => {
    res.json({

        lists: {
            "data": {
                "id": 2,
                "koreanName": "아이스 카페 아메리카노",
                "englishName": "Iced Caffe Americano",
                "description": "진한 에스프레소에 시원한 정수물과 얼음을 더햐여 스타벅스의 깔끔하고 강렬한 에스프레소를 가장 부드럽고 시원하게 즐길 수 있는 커피",
                "imageURL": "https://image.istarbucks.co.kr/upload/store/skuimg/2015/08/[110563]_20150813222100303.jpg"
            }
        }
    })
}

export { productDetail };