'use strict'

/**
 * @class BaseClass is an abstract class for all basic class in Proton
 * @classdesc
 * @author Luis Hernandez
 */
class BaseClass {

  constructor(proton) {
    this.proton = proton
  }

  get name() {
    return this.constructor.name
  }

  expose(object) {
    global[this.name] = object || this
    return global[this.name]
  }

}

module.exports = BaseClass
