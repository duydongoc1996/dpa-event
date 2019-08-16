const mysql = require('../store/MySQLService')

module.exports = class Nominate {

  static async getAllNominee() {
    return await mysql.promise.query(`
      SELECT * FROM nominee ORDER BY id DESC
    `,[])
      .then(([rows,fields])=>{
        return (rows.length > 0) ? rows : [];
      })
      .catch(err=>{
        return {
          success: false,
          message: err.message
        }
      })
  }

  static async getNomineeById(id) {
    return await mysql.promise.query(`
      SELECT * FROM nominee WHERE id = ?
    `,[id])
      .then(([rows,fields])=>{
        return (rows.length > 0) ? rows[0] : {
          success: false,
          message: 'Invalid nominee Id'
        };
      })
      .catch(err=>{
        return {
          success: false,
          message: err.message
        }
      })
  }

  static async createNominee(voteInfo) {
    // create vote
    return await mysql.promise.query(`
      INSERT INTO nominee (
        fk_nominator,
        fk_award_category,
        about_speaker,
        links_media,
        links_articles,
        avatar,
        is_know,
        time,
        self,
        prefix,
        first_name,
        last_name,
        company_name,
        company_website,
        job_title,
        phone,
        email,
        nationality,
        other_category
      ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
    `, [
      voteInfo.fk_nominator,
      voteInfo.fk_award_category,
      voteInfo.about_speaker,
      voteInfo.links_media,
      voteInfo.links_articles,
      voteInfo.avatar,
      voteInfo.is_know,
      +new Date(),
      voteInfo.self,
      voteInfo.prefix,
      voteInfo.first_name,
      voteInfo.last_name,
      voteInfo.company_name,
      voteInfo.company_website,
      voteInfo.job_title,
      voteInfo.phone,
      voteInfo.email,
      voteInfo.nationality,
      voteInfo.other_category
    ])
      .then(([rows, fields]) => {
        return {
          success: true,
          message: 'Nominate successful'
        }
      })
      .catch((err) => {
        console.log(err)
        return {
          success: false,
          message: err.message
        }
      })
  }

  /**
   * Create vote info in DB
   * @param {Object} nominatorInfo
   */
  static async createNominator(nominatorInfo) {
    // check existed
    const existed = await this.existNominator(nominatorInfo.phone)
    if (existed.existed) {
      return {
        success: true,
        message: 'Nominator existed',
        nominatorId: existed.nominatorId
      }
    }
    // create
    return await mysql.promise.query(`
      INSERT INTO nominator(
        phone,
        first_name,
        last_name,
        email
      ) VALUES (?,?,?,?)
    `, [
      nominatorInfo.phone,
      nominatorInfo.first_name,
      nominatorInfo.last_name,
      nominatorInfo.email
    ])
      .then(([rows, fields]) => {
        return {
          success: true,
          message: 'Created nominator successful',
          nominatorId: rows.insertId
        }
      })
      .catch((err) => {
        return {
          success: false,
          message: err.message
        }
      })
  }

  /**
   * Create new Award category
   * @param {String} categoryName
   */
  static async createAwardCategory(categoryName,level,parent,description) {
    
    // Sanitize category name
    const sanitizeName = categoryName.replace(/( .)|(\b.)/gi, x => x.toUpperCase())
    return await mysql.promise.query(`
      INSERT INTO award_category(
        name,
        level,
        parent,
        description
      ) VALUES (?,?,?,?)
    `, [sanitizeName,level,parent,description])
      .then(([rows, fields]) => {
        return {
          success: true,
          message: 'Create award category successful',
          categoryId: rows.insertId
        }
      })
      .catch((err) => {
        return {
          success: false,
          message: err.message
        }
      })
  }

  static async getAllAwardCategory() {
    return await mysql.promise.query(`
      SELECT * FROM award_category
    `)
      .then(([rows, fields]) => {
        return rows
      })
      .catch((err) => {
        return {
          success: false,
          message: err.message
        }
      })
  }

  static async getAwardCategory(id) {
    return await mysql.promise.query(`
      SELECT * FROM award_category WHERE id = ?
    `, [parseInt(id)])
      .then(([rows, fields]) => {
        return (rows.length > 0) ? rows[0] : {}
      })
      .catch((err) => {
        return {
          success: false,
          message: err.message
        }
      })
  }

  static async updateAwardCategory(category) {
    return await mysql.promise.query(`
      UPDATE award_category SET
        name = ?,
        description = ?
      WHERE id = ?
    `,[
      category.name,
      category.description,
      parseInt(category.id)
    ])
      .then(([rows, fields]) => {
        return {
          success: true,
          message: 'Updated award category successful'
        }
      })
      .catch((err) => {
        return {
          success: false,
          message: err.message
        }
      })
  }

  static async updateStatusAwardCategory(categoryId, status) {
    return await mysql.promise.query(`
      UPDATE award_category SET
        status = ?
      WHERE id = ?
    `, [status, categoryId])
      .then(([rows, fields]) => {
        return {
          success: true,
          message: 'Updated award category status successful'
        }
      })
      .catch((err) => {
        return {
          success: false,
          message: err.message
        }
      })
  }

  static async deleteAwardCategory(categoryId) {
    return await mysql.promise.query(`
      DELETE FROM award_category
      WHERE id = ?
    `, [categoryId])
      .then(([rows, fields]) => {
        return {
          success: true,
          message: 'Delete award category successful'
        }
      })
      .catch((err) => {
        return {
          success: false,
          message: err.message
        }
      })
  }

  /**
   * Get nominator data by phone number
   * @param {String} phoneNumber
   * @returns {Object} <Nominator info>
   */
  static async getNominatorInfo(phoneNumber) {
    return await mysql.promise.query(`
      SELECT * FROM nominator WHERE phone = ?
    `, [phoneNumber])
      .then(([rows, fields]) => {
        return (rows.length > 0) ? rows[0] : {
          success: false,
          message: 'Can not find this phone number'
        }
      })
      .catch((err) => {
        return {
          success: false,
          message: err.message.message
        }
      })
  }

  static async existNominator(phoneNumber) {
    return await mysql.promise.query(`
      SELECT id FROM nominator WHERE phone = ? LIMIT 1
    `, [phoneNumber])
      .then(([rows, fields]) => {
        return (rows.length > 0) ? {
          existed: true,
          nominatorId: rows[0].id
        } : {
          existed: false
        }
      })
      .catch((err) => {
        return {
          success: false,
          message: err.message
        }
      })
  }

  static async existAwardCategory(categoryName) {
    return await mysql.promise.query(`
      SELECT id FROM award_category WHERE name = ? LIMIT 1
    `, [categoryName])
      .then(([rows, fields]) => {
        return (rows.length > 0) ? {
          existed: true,
          categoryId: rows[0].id
        } : {
          existed: false
        }
      })
      .catch((err) => {
        return {
          success: false,
          message: err.message
        }
      })
  }

  static async updateNominee(nominee) {
    return await mysql.promise.query(`
      UPDATE nominee SET
        about_speaker=?,
        links_media=?,
        avatar=?,
        prefix=?,
        first_name=?,
        last_name=?,
        company_name=?,
        company_website=?,
        job_title=?,
        phone=?,
        email=?,
        nationality=?,
        other_category=?
      WHERE id = ?
    `,[
      nominee.about_speaker,
      nominee.links_media,
      nominee.avatar,
      nominee.prefix,
      nominee.first_name,
      nominee.last_name,
      nominee.company_name,
      nominee.company_website,
      nominee.job_title,
      nominee.phone,
      nominee.email,
      nominee.nationality,
      nominee.other_category,
      nominee.id
    ])
      .then(([rows,fields])=>{
        return {
          success: true,
          message: 'Update success'
        }
      })
      .catch(err=>{
        return {
          success: false,
          message: err.message
        }
      })
  }


  /**
   * Parse links media, links articles to array
   * @param {String} links
   */
  static parseLinks(links) {
    return links.split(',')
  }

  /**
   * Join links media, links articles to a string
   * @param {String[]} arr
   */
  static joinLinks(arr) {
    return arr.join(',')
  }


  static async getAllNominators() {
    return await mysql.promise.query(`
      SELECT * FROM nominator
    `)
      .then(([rows,fields])=>{
        return rows;
      })
      .catch(err=>{
        return {
          success: false,
          message: err.message
        }
      })
  }

  static async countNominators() {
    return await mysql.promise.query(`
      SELECT COUNT(*) as count FROM nominator
    `)
      .then(([rows,fields])=>{
        return rows[0];
      })
      .catch(err=>{
        return {
          success: false,
          message: err.message
        }
      })
  }

  static async updateNominator(data) {
    return await mysql.promise.query(`
      UPDATE nominator SET
        first_name = ?,
        last_name = ?,
        email = ?,
        phone = ?
      WHERE id = ?
    `,[
      data.first_name,
      data.last_name,
      data.email,
      data.phone,
      data.id
    ])
      .then(([rows,fields])=>{
        return {
          success: true,
          message: 'Update nominator success'
        }
      })
      .catch(err=>{
        return {
          success: false,
          message: err.message
        }
      })
  } 

  static async countNominees() {
    return await mysql.promise.query(`
      SELECT COUNT(*) as count FROM nominee
    `)
      .then(([rows,fields])=>{
        return rows[0];
      })
      .catch(err=>{
        return {
          success: false,
          message: err.message
        }
      })
  }

  static async getFullPathAwardCategory(listCategory) {
    return await Promise.all(listCategory.map(async (categoryId)=>{
      let result = [];
      let current = await this.getAwardCategory(categoryId);
      result.push(current.name);
      if (current.level == 3) {
        current = await this.getAwardCategory(current.parent);
        result.push(current.name);
      }
      if (current.level == 2) {
        current = await this.getAwardCategory(current.parent);
        result.push(current.name);
      }
      // console.log(result.reverse())
      return (result.reverse());
    }));
  }
}
