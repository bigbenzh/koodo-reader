// Fake Google-Analytics component
class GA {
  /**
   * Constructor
   *
   * @param {string} trackingID
   * @param {Object} param1
   */
  constructor(trackingID, {
    userAgent = '',
    debug = false,
    version = 1
  } = {}) {
    this.foo={};
  }

  /**
   * Adds custom parameters to requests
   * if value is null, then parameter will be removed
   *
   * @param  {string} key     Parameter name
   * @param  {string} value   Parameter value
   */
  set(key, value) {
    
  }

  /**
   * Send a "pageview" request
   *
   * @param  {string} url      Url of the page
   * @param  {string} title    Title of the page
   * @param  {string} hostname Document hostname
   * @param  {string} clientID uuidV4
   * @param  {string} sessDuration A string to force start or end a session
   *
   * @return {Promise}
   */
  pageview(hostname, url, title, clientID, sessDuration) {
  }

  /**
   * Send a "event" request
   *
   * @param  {string} evCategory Event category
   * @param  {string} evAction   Event action
   * @param  {string} clientID   uuidV4
   * @param  {string} evLabel    Event label
   * @param  {string} evValue    Event description
   *
   * @return {Promise}
   */
  event(evCategory, evAction, { evLabel, evValue, clientID } = {}) {
  }

  /**
   * Send a "screenview" request
   *
   * @param  {string} appName        App name
   * @param  {string} appVer         App version
   * @param  {string} appID          App Id
   * @param  {string} appInstallerID App Installer Id
   * @param  {string} screenName     Screen name / Content description
   * @param  {string} clientID       uuidV4
   *
   * @return {Promise}
   */
  screen(appName, appVer, appID, appInstallerID, screenName, clientID) {
    
  }

  /**
   * Send a "transaction" request
   *
   * @param  {string} trnID    Transaction ID
   * @param  {string} trnAffil Transaction affiliation
   * @param  {string} trnRev   Transaction Revenue
   * @param  {Number} trnShip  Transaction shipping
   * @param  {Number} trnTax   Transaction tax
   * @param  {string} currCode Currency code
   * @param  {string} clientID uuidV4
   *
   * @return {Promise}
   */
  transaction(trnID, {
    trnAffil, trnRev, trnShip, trnTax, currCode
  } = {}, clientID) {
    
  }

  /**
   * Send a "social" request
   *
   * @param  {string} socialAction  Social Action
   * @param  {string} socialNetwork Social Network
   * @param  {string} socialTarget  Social Target
   * @param  {string} clientID      uuidV4
   *
   * @return {Promise}
   */
  social(socialAction, socialNetwork, socialTarget, clientID) {
    
  }

  /**
   * Send a "exception" request
   *
   * @param  {string} exDesc   Exception description
   * @param  {Number} exFatal  Exception is fatal?
   * @param  {string} clientID uuidV4
   *
   * @return {Promise}
   */
  exception(exDesc, exFatal, clientID) {
    
  }

  /**
   * Send a "refund" request
   *
   * @param {string} trnID          Transaction ID
   * @param {string} evCategory     Event category
   * @param {string} evAction       Event action
   * @param {Number} nonInteraction Non-interaction parameter
   * @param {string} prdID          Product ID
   * @param {Number} prdQty         Product quantity
   * @param {string} clientID       uuidV4
   *
   * @returns {Promise}
   */
  refund(trnID, evCategory = 'Ecommerce', evAction = 'Refund', nonInteraction = 1, { prdID, prdQty } = {}, clientID) {
    
  }

  /**
   * Send a "purchase" request
   * @param  {string} hostname      Document hostname
   * @param  {string} url           Url of the page
   * @param  {string} title         Title of the page
   * @param  {string} transactionID Transaction ID
   * @param  {string} trnAffil      Transaction affiliation
   * @param  {string} trnRev        Transaction Revenue
   * @param  {Number} trnTax        Transaction tax
   * @param  {Number} trnShip       Transaction shipping
   * @param  {string} trnCoupon     Transaction coupon
   * @param  {string} prdID         Product ID
   * @param  {string} prdName       Product name
   * @param  {string} prdCtg        Product category
   * @param  {string} prdBrand      Product brand
   * @param  {string} prdVar        Product variant
   * @param  {string} prdPos        Product position
   * @param  {string} clientID      uuidV4
   * @return {Promise}
   */
  purchase(hostname, url, title, transactionID, {
    trnAffil, trnRev, trnTax, trnShip, trnCoupon,
    prdID, prdName, prdCtg, prdBrand, prdVar, prdPos
  } = {}, clientID) {
    
  }

  /**
   * Send a "checkout" request
   * @param  {string} hostname     Document hostname
   * @param  {string} url          Url of the page
   * @param  {string} title        Title of the page
   * @param  {string} checkoutStep Checkout step
   * @param  {string} checkoutOpt  Checkout step option
   * @param  {string} prdID        Product ID
   * @param  {string} prdName      Product name
   * @param  {string} prdCtg       Product category
   * @param  {string} prdBrand     Product brand
   * @param  {string} prdVar       Product variant
   * @param  {Number} prdPrice     Product price
   * @param  {Number} prdQty       Product category
   * @param  {string} clientID     uuidV4
   * @return {Promise}
   */
  checkout(hostname, url, title, checkoutStep, checkoutOpt, {
    prdID, prdName, prdCtg, prdBrand, prdVar, prdPrice, prdQty
  } = {}, clientID) {
    
  }

  /**
   * Send a "checkout_option" request
   * @param  {string} evCategory   Event category
   * @param  {string} evAction     Event action
   * @param  {string} checkoutStep Checkout step
   * @param  {string} checkoutOpt  Checkout step option
   * @param  {string} clientID     uuidV4
   * @return {Promise}
   */
  checkoutOpt(evCategory, evAction, checkoutStep, checkoutOpt, clientID) {
    
  }

  /**
   *
   * @param {*} hostname
   * @param {*} url
   * @param {*} title
   * @param {*} param3
   * @param {*} clientID
   */
  promoImp(hostname, url, title, {
    promoID, promoName, promoCrt, promoPos
  } = {}, clientID) {
    
  }

  /**
   *
   * @param {*} evCategory
   * @param {*} evAction
   * @param {*} param2
   * @param {*} clientID
   */
  promoCk(evCategory, evAction, {
    evLabel, promoID, promoName, promoCrt, promoPos
  } = {}, clientID) {
    
  }

  /**
   * Send a "item" request
   * @param  {string} trnID         Transaction ID
   * @param  {string} itemName      Item name
   * @param  {Number} itemPrice     Item price
   * @param  {string} itemQty       Item quantity
   * @param  {string} itemSku       Item SKU
   * @param  {string} itemVariation Item variation / category
   * @param  {string} currCode      Currency code
   * @param  {string} clientID      uuidV4
   * @return {Promise}
   */
  item(trnID, itemName, {
    itemPrice, itemQty, itemSku, itemVariation, currCode
  } = {}, clientID) {
    
  }

  /**
   * Send a "timing tracking" request
   * @param  {string} timingCtg     Timing category
   * @param  {string} timingVar     Timing variable
   * @param  {Number} timingTime    Timing time
   * @param  {string} timingLbl     Timing label
   * @param  {Number} dns           DNS load time
   * @param  {Number} pageDownTime  Page download time
   * @param  {Number} redirTime     Redirect time
   * @param  {Number} tcpConnTime   TCP connect time
   * @param  {Number} serverResTime Server response time
   * @param  {string} clientID      uuidV4
   * @return {Promise}
   */
  timingTrk(timingCtg, timingVar, timingTime, {
    timingLbl, dns, pageDownTime, redirTime, tcpConnTime, serverResTime
  } = {}, clientID) {
    
  }

  /**
   * Send a request to google-analytics
   *
   * @param  {string} hitType  Hit type
   * @param  {string} clientID Unique identifier (uuidV4)
   * @param  {Object} params   Options
   *
   * @return {Promise}
   */
  send(hitType, params, clientID) {
    
  }
}

export default GA;
