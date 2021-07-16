import sequelize from 'sequelize';
import db from "../config/db.js";

export const travels = db.define('viajes', {
    titulo: {
        type: sequelize.STRING
    },
    precio: {
        type: sequelize.STRING
    },
    fecha_ida: {
        type: sequelize.STRING
    },
    fecha_vuelta: {
        type: sequelize.STRING
    },
    imagen: {
        type: sequelize.STRING
    },
    descripcion: {
        type: sequelize.STRING
    },
    disponibles: {
        type: sequelize.STRING
    },
    slug: {
        type: sequelize.STRING
    }
})

