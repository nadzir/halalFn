const { checkHalalFromBrandList } = require('./module/brandList')
const { checkHalalFromCompanyList } = require('./module/companyList')

exports.isHalal = async (query) => {
  try {
    const results = await checkHalalFromBrandList(query) || await checkHalalFromCompanyList(query)
    return results
  } catch (e) { return e }
}
