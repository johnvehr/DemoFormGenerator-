/**
 * Sequelize initialization module
 */

'use strict';

import path from 'path';
import config from '../config/environment';
import Sequelize from 'sequelize';

var db = {
  Sequelize,
  sequelize: new Sequelize(config.sequelize.uri, config.sequelize.options)
};

// Insert models below
db.Application = db.sequelize.import('../api/application/application.model');
db.Thing = db.sequelize.import('../api/thing/thing.model');

export default db;
