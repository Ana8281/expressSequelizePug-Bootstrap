import { Testimonial } from "../models/Testimonials.js";

const saveTestimonial = async (req, res) => {
    const errores = [];

    //validate form
    const { nombre, correo, mensaje } = req.body;

    if (nombre.trim() === '') {
        errores.push({mensaje: 'name is empty'})
    }

    if ( correo.trim() === '') {
        errores.push({mensaje: 'correo is empty'})
    }

    if (mensaje.trim() === '') {
        errores.push({mensaje: 'message is empty'})
    }

    if (errores.length > 0) {
        // consult existencies of testimonials
        const testimonials = await Testimonial.findAll();

        // show view with errors
        res.render('testimonials', {
            pagina: 'Testimonials',
            errores,
            nombre,
            correo,
            mensaje,
            testimonials
        })
    } else {
        //save values in DB
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });

            res.redirect('/testimonials'); //once fields are saved in db page go back to testimonilas page
        } catch (error) {
            console.log(error)
        }
    }
}


export {
    saveTestimonial
}