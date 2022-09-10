import request from 'superagent'

const rootUrl = '/api/v1/widgets'

// -----------------STEP 3a-----------------------post the sentence through the back end then returns it in a res.body

export function saveWidget(formData) {
  const { name, price, mfg, inStock } = formData
  return request
    .post(rootUrl)
    .send({ name, price, mfg, inStock })
    .then((res) => {
      console.log(res.body)
      return res.body
    })
}

export function getAllWidgets() {
  return request.get(rootUrl).then((res) => {
    console.log('add', res.body)
    return res.body
  })
}
