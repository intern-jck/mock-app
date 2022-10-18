const updateState = (id, page=1, count=10, sort='relevant') => {
  id = Number(id);
  axios
    .all([
      // All products not needed right now.
      axios.get(`/products/?page=${page}&count=${count}`),
      // Product Information
      axios.get(`/products/${id}`),
      // Product Styles
      axios.get(`/products/${id}/styles`),
      // Questions
      axios.get(`/qa/questions/?product_id=${id}&page=${page}&count=${count}`),
      // Reviews
      axios.get(`/reviews/?product_id=${id}&page=${page}&count=${count}&sort=${sort}`),
      axios.get(`/reviews/meta/?product_id=${id}`),
    ])
    .then(axios.spread((...responses) => {

      const allInfo = {
        products: {},
        productInfo: {},
        productStyles: {},
        questions: {},
        reviews: {},
        reviewsMeta: {}
      };

      allInfo.productInfo = responses[0].data;
      allInfo.productStyles = responses[1].data;
      allInfo.questions = responses[2].data.results;
      allInfo.reviews = responses[3].data;
      allInfo.reviewsMeta = responses[4].data;
      return allInfo;
    }))
    .then((data) => ( setProductAll(data) ))
    .catch((error) => {
      console.log(error);
    });
};