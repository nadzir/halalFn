const {connection} = require('../../mysql/config')

exports.checkHalalFromCompanyList = (value) => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM company_listing where name like "%${value}%" and halal_status = "halal" limit 1 `
    connection.query(query, (error, results, fields) => {
      if (error) reject(error)
      else resolve(results[0])
    })
  })
}
