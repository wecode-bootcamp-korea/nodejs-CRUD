import productsData from '../data/data';

export const list = (req, res) => {
  res.send(productsData);
};

export const detail = (req, res) => {
  const { id } = req.params;
  const detailData = productsData.data.filter(
    (product) => product.id === Number(id)
  );
  res.send(detailData);
};
