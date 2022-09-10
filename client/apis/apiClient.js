import request from 'superagent'

const rootUrl = '/api/v1/widgets'

// -----------------STEP 3a-----------------------post the sentence through the back end then returns it in a res.body

export function saveWidget(formData) {
  console.log('api', formData)
  const { name, price, inStock } = formData
  return request
    .post(rootUrl)
    .send({ name, price, inStock })
    .then((res) => {
      console.log(res.body)
      return res.body
    })
}
