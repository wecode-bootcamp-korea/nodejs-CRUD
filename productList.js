const productList = (req, res) => {
    res.json({

        lists: {
            "data": [{
                "id": 1,
                "koreanName": "나이트로 바닐라크림",
                "englishName": "Nitro Vanilla Cream",
                "category": "콜드 브루"
            }, {
                "id": 2,
                "koreanName": "아이스 카페 아메리카노",
                "englishName": "Ice Cafe Americano",
                "category": "에스프레소"
            }]
        }
    })
}

export { productList };